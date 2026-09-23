import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { supabase } from '../lib/supabase'

const COLUMNS = [
  { id: 'applied', title: 'Applied' },
  { id: 'shortlisted', title: 'Shortlisted' },
  { id: 'audition', title: 'Audition Requested' },
  { id: 'hired', title: 'Hired' }
]

export default function ProjectKanban() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjectAndApps()
  }, [id])

  const fetchProjectAndApps = async () => {
    // Fetch Project
    const { data: projectData } = await supabase
      .from('casting_calls')
      .select('*')
      .eq('id', id)
      .single()

    if (projectData) setProject(projectData)

    // Fetch Applications
    const { data: appsData } = await supabase
      .from('applications')
      .select('*, candidate:candidate_id(*)') 
      .eq('casting_call_id', id)

    if (appsData) {
      const formattedApps = appsData.map(app => ({
        ...app,
        status: app.status === 'underReview' ? 'applied' : (app.status || 'applied')
      }))
      setApplications(formattedApps)
    }
    
    setLoading(false)
  }

  const handleDragStart = (e, appId) => {
    e.dataTransfer.setData('appId', appId)
  }

  const handleDrop = async (e, columnId) => {
    e.preventDefault()
    const appId = e.dataTransfer.getData('appId')
    if (!appId) return

    // Optimistic UI update
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        return { ...app, status: columnId }
      }
      return app
    }))

    // Save to DB
    const { error } = await supabase
      .from('applications')
      .update({ status: columnId })
      .eq('id', appId)

    if (error) {
      console.error('Error updating status:', error)
      fetchProjectAndApps()
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  if (loading) return <div className="p-10 text-center">Loading board...</div>
  if (!project) return <div className="p-10 text-center">Project not found.</div>

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-[var(--color-bg)]">
      
      {/* Header */}
      <header className="shrink-0 p-6 border-b border-[var(--color-border)] flex items-center justify-between">
        <div>
          <Link to="/casting-team/dashboard" className="meta text-[var(--color-violet-light)] hover:underline flex items-center gap-1 mb-2">
            <ChevronLeft size={16} /> Back to Dashboard
          </Link>
          <h1 className="h3-card text-[var(--color-text-primary)]">{project.project_name}</h1>
          <p className="body-sm text-[var(--color-text-secondary)]">Manage applications pipeline</p>
        </div>
      </header>

      {/* Board */}
      <main className="flex-1 overflow-x-auto p-6 flex gap-6 snap-x snap-mandatory scroll-x">
        {COLUMNS.map(column => {
          const columnApps = applications.filter(app => app.status === column.id)
          
          return (
            <div 
              key={column.id} 
              className="shrink-0 w-[320px] snap-center flex flex-col bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
              onDrop={(e) => handleDrop(e, column.id)}
              onDragOver={handleDragOver}
            >
              {/* Column Header */}
              <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-surface-2)] flex items-center justify-between">
                <h3 className="body-sm font-bold text-[var(--color-text-primary)]">{column.title}</h3>
                <span className="meta px-2 py-0.5 rounded-full bg-[var(--color-surface-3)]">{columnApps.length}</span>
              </div>
              
              {/* Cards Container */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {columnApps.map(app => (
                  <div 
                    key={app.id} 
                    draggable
                    onDragStart={(e) => handleDragStart(e, app.id)}
                    className="glass-panel p-4 rounded-xl cursor-grab active:cursor-grabbing border border-[var(--color-border)] hover:border-[var(--color-violet-border)] transition-colors"
                  >
                    <p className="body-sm font-bold text-[var(--color-text-primary)] mb-1">
                      {app.candidate_name || 'Unknown Candidate'}
                    </p>
                    <p className="meta text-[var(--color-text-secondary)] mb-2">Role: {app.role_name}</p>
                    <Link to={`/talent/${app.candidate_id}`} className="meta text-[var(--color-violet-light)] hover:underline">
                      View Profile
                    </Link>
                  </div>
                ))}
                
                {columnApps.length === 0 && (
                  <div className="text-center p-4 border-2 border-dashed border-[var(--color-border)] rounded-xl text-[var(--color-text-muted)] meta">
                    Drop candidates here
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </main>

    </div>
  )
}
