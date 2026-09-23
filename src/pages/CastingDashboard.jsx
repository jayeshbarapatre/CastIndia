import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, Users, Plus, AlertCircle } from 'lucide-react'
import EmptyState from '../components/EmptyState'
import { supabase } from '../lib/supabase'

export default function CastingDashboard() {
  const navigate = useNavigate()
  const [activeProjects, setActiveProjects] = useState([])
  const [pendingApplications, setPendingApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    // Fetch projects
    const { data: projectsData, error: projectsError } = await supabase
      .from('casting_calls')
      .select('*, applications(id)')
      .order('created_at', { ascending: false })
      
    if (projectsError) {
      console.error('Error fetching projects:', projectsError)
    } else {
      const formatted = projectsData.map(project => ({
        id: project.id,
        title: project.project_name,
        type: project.project_type,
        roles: project.roles ? project.roles.length : 0,
        applicants: project.applications ? project.applications.length : 0,
        newApplicants: 0
      }))
      setActiveProjects(formatted)
    }

    // Fetch pending applications
    const { data: pendingData } = await supabase
      .from('applications')
      .select('id, candidate_name, role_name, casting_calls(project_name)')
      .eq('status', 'underReview')
      .order('created_at', { ascending: false })
    
    if (pendingData) {
      setPendingApplications(pendingData)
    }

    setLoading(false)
  }

  const handleShortlist = async (appId) => {
    const { error } = await supabase
      .from('applications')
      .update({ status: 'shortlisted' })
      .eq('id', appId)
      
    if (!error) {
      setPendingApplications(prev => prev.filter(app => app.id !== appId))
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto w-full px-4 py-8 md:py-12">
      
      {/* Welcome & Priority Actions */}
      <div className="flex flex-col md:flex-row gap-6 items-start justify-between mb-10">
        <div>
          <h1 className="h2-section text-[var(--color-text-primary)] mb-2">Casting Dashboard</h1>
          <p className="body-large text-[var(--color-text-secondary)]">Manage your active projects and talent.</p>
        </div>
        
        <Link to="/casting-team/new" className="btn-primary flex items-center gap-2 !bg-[var(--color-violet)] hover:!bg-[var(--color-violet-light)] hover:!text-white !border-transparent !text-white hover:!shadow-[0_4px_20px_rgba(108,99,255,0.25)] shrink-0">
          <Plus size={18} />
          Post New Casting
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Column - Projects */}
        <div className="lg:col-span-2 space-y-6">
          
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="h3-card text-[var(--color-text-primary)]">Active Projects</h2>
              <Link to="/casting-team/projects" className="meta text-[var(--color-violet-light)] hover:underline font-semibold">View All</Link>
            </div>

            {activeProjects.length > 0 ? (
              <div className="space-y-4">
                {activeProjects.map(project => (
                  <div key={project.id} className="glass-panel p-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-violet-border)] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="body-large font-bold text-[var(--color-text-primary)] mb-1">{project.title}</p>
                      <p className="body-sm text-[var(--color-text-secondary)]">{project.type} • {project.roles} Roles</p>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-2 shrink-0">
                      <div className="flex items-center gap-3">
                        <span className="body-sm font-semibold text-[var(--color-text-primary)]">{project.applicants} Applicants</span>
                        {project.newApplicants > 0 && (
                          <span className="meta bg-[var(--color-violet-muted)] text-[var(--color-violet-light)] py-0.5 px-2 rounded-full">
                            {project.newApplicants} New
                          </span>
                        )}
                      </div>
                      <Link to={`/casting-team/projects/${project.id}`} className="meta text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] flex items-center gap-1 transition-colors">
                        Manage <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState 
                title="No active projects"
                description="You haven't posted any casting calls yet."
                actionText="Post Casting"
                onAction={() => navigate('/casting-team/new')}
              />
            )}
          </section>

          {/* Actionable Alerts */}
          <section className="bg-[rgba(251,146,60,0.05)] border border-[#FBD38D]/20 rounded-[24px] p-6">
            <h2 className="h3-card text-[#FBD38D] mb-4 flex items-center gap-2">
              <AlertCircle size={20} />
              Review Pending
            </h2>
            
            <div className="space-y-4">
              {pendingApplications.length > 0 ? pendingApplications.map(app => (
                <div key={app.id} className="bg-[var(--color-bg)] rounded-xl p-4 border border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="body-sm font-bold text-[var(--color-text-primary)] mb-1">{app.candidate_name}</p>
                    <p className="meta text-[var(--color-text-secondary)]">{app.role_name} ({app.casting_calls?.project_name})</p>
                  </div>
                  <button 
                    onClick={() => handleShortlist(app.id)}
                    className="btn-primary !bg-[var(--color-surface-2)] !border-[var(--color-border)] !text-[var(--color-text-primary)] hover:!border-[var(--color-violet-border)] hover:!text-[var(--color-violet-light)] !py-2 !px-4 !h-auto !text-sm whitespace-nowrap"
                  >
                    Shortlist
                  </button>
                </div>
              )) : (
                <p className="body-sm text-[var(--color-text-secondary)] p-2">No pending applications to review.</p>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          <section className="glass-panel card-pad-lg rounded-[24px]">
            <h2 className="h3-card text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <Users size={20} className="text-[var(--color-violet-light)]" />
              Talent Shortlists
            </h2>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-[var(--color-border)]">
                <div className="flex justify-between items-start mb-1">
                  <p className="body-sm font-bold text-[var(--color-text-primary)]">Lead Male (Andhera)</p>
                  <span className="meta text-[var(--color-text-muted)]">5 profiles</span>
                </div>
                <Link to="/casting-team/shortlists/1" className="meta text-[var(--color-violet-light)] hover:underline flex items-center gap-1">
                  View List <ChevronRight size={12} />
                </Link>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="body-sm font-bold text-[var(--color-text-primary)]">Supporting Actors</p>
                  <span className="meta text-[var(--color-text-muted)]">12 profiles</span>
                </div>
                <Link to="/casting-team/shortlists/2" className="meta text-[var(--color-violet-light)] hover:underline flex items-center gap-1">
                  View List <ChevronRight size={12} />
                </Link>
              </div>
            </div>
            
            <Link to="/talent" className="btn-secondary w-full mt-6 flex justify-center !py-2 !h-auto">
              Find More Talent
            </Link>
          </section>

        </div>
      </div>
    </div>
  )
}
