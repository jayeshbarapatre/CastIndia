import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, Bookmark, AlertCircle } from 'lucide-react'
import StatusBadge from '../components/StatusBadge'
import EmptyState from '../components/EmptyState'
import { supabase } from '../lib/supabase'

export default function TalentDashboard() {
  const navigate = useNavigate()
  const [profileCompleteness, setProfileCompleteness] = useState(0)
  const [recentApplications, setRecentApplications] = useState([])
  const [savedCastings, setSavedCastings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    // 1. Fetch Profile Completeness
    const { data: profile } = await supabase
      .from('talent_profiles')
      .select('*')
      .eq('user_id', 'user_123')
      .single()
    
    if (profile) {
      let score = 20 // base
      if (profile.full_name) score += 20
      if (profile.bio) score += 20
      if (profile.skills && profile.skills.length > 0) score += 20
      if (profile.location) score += 20
      setProfileCompleteness(score)
    }

    // 2. Fetch Applications
    const { data: apps } = await supabase
      .from('applications')
      .select('id, role_name, created_at, status, casting_calls(project_name)')
      .eq('candidate_id', 'user_123')
      .order('created_at', { ascending: false })
      
    if (apps) {
      setRecentApplications(apps.map(app => ({
        id: app.id,
        role: app.role_name,
        project: app.casting_calls?.project_name || 'Unknown',
        date: new Date(app.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: app.status || 'underReview'
      })))
    }

    // 3. Fetch Saved Castings
    const { data: saved } = await supabase
      .from('saved_castings')
      .select('id, casting_calls(id, project_name, roles)')
      .eq('user_id', 'user_123')
      .order('created_at', { ascending: false })
      .limit(3)
      
    if (saved) {
      setSavedCastings(saved.map(s => {
        const primaryRole = (s.casting_calls?.roles && s.casting_calls.roles.length > 0) ? s.casting_calls.roles[0].roleName : 'Role'
        return {
          id: s.id,
          casting_id: s.casting_calls?.id,
          project: s.casting_calls?.project_name || 'Unknown',
          role: primaryRole
        }
      }))
    }
    
    setLoading(false)
  }

  return (
    <div className="max-w-[1200px] mx-auto w-full px-4 py-8 md:py-12">
      
      {/* Welcome & Priority Actions */}
      <div className="flex flex-col md:flex-row gap-6 items-start justify-between mb-10">
        <div>
          <h1 className="h2-section text-[var(--color-text-primary)] mb-2">Welcome back, Rahul</h1>
          <p className="body-large text-[var(--color-text-secondary)]">Here's what needs your attention today.</p>
        </div>
        
        {/* Profile Completion Nudge */}
        {profileCompleteness < 100 && (
          <div className="bg-[rgba(227,167,47,0.05)] border border-[var(--color-gold-border)] rounded-2xl p-5 flex items-center gap-5 md:min-w-[320px]">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="24" cy="24" r="20" fill="transparent" stroke="var(--color-surface-2)" strokeWidth="4" />
                <circle cx="24" cy="24" r="20" fill="transparent" stroke="var(--color-gold)" strokeWidth="4" strokeDasharray={`${(profileCompleteness / 100) * 125} 125`} />
              </svg>
              <span className="absolute meta font-bold text-[var(--color-gold)]">{profileCompleteness}%</span>
            </div>
            <div>
              <p className="body-sm font-semibold text-[var(--color-text-primary)] mb-1">Complete your profile</p>
              <p className="meta text-[var(--color-text-secondary)] mb-2">Add a showreel to boost visibility.</p>
              <Link to="/talent/profile" className="meta text-[var(--color-gold)] hover:underline font-semibold">Update Profile</Link>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Column - Applications */}
        <div className="lg:col-span-2 space-y-6">
          
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="h3-card text-[var(--color-text-primary)]">Recent Applications</h2>
              <Link to="/talent/applications" className="meta text-[var(--color-gold)] hover:underline font-semibold">View All</Link>
            </div>

            {recentApplications.length > 0 ? (
              <div className="space-y-4">
                {recentApplications.map(app => (
                  <div key={app.id} className="glass-panel p-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-gold-border)] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="body-large font-bold text-[var(--color-text-primary)] mb-1">{app.role}</p>
                      <p className="body-sm text-[var(--color-text-secondary)]">{app.project}</p>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-2 shrink-0">
                      <StatusBadge status={app.status} />
                      <p className="meta text-[var(--color-text-muted)]">Applied: {app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState 
                title="No applications yet"
                description="Start browsing casting calls and land your first role."
                actionText="Find Casting"
                onAction={() => navigate('/casting')}
              />
            )}
          </section>

          {/* Actionable Alerts */}
          <section className="bg-[rgba(56,189,248,0.05)] border border-[#7DD3FC]/20 rounded-[24px] p-6">
            <h2 className="h3-card text-[#7DD3FC] mb-4 flex items-center gap-2">
              <AlertCircle size={20} />
              Action Required
            </h2>
            <div className="bg-[var(--color-bg)] rounded-xl p-4 border border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="body-sm font-bold text-[var(--color-text-primary)] mb-1">Audition Request: Brand Ambassador</p>
                <p className="meta text-[var(--color-text-secondary)]">The casting team for Chai & Co. wants a self-tape by Oct 12.</p>
              </div>
              <button className="btn-primary !py-2 !px-4 !h-auto !text-sm whitespace-nowrap">
                Submit Audition
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          <section className="glass-panel card-pad-lg rounded-[24px]">
            <h2 className="h3-card text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <Bookmark size={20} className="text-[var(--color-gold)]" />
              Saved Casting
            </h2>
            
            <div className="space-y-4">
              {savedCastings.length > 0 ? savedCastings.map(saved => (
                <div key={saved.id} className="pb-4 border-b border-[var(--color-border)] last:border-0 last:pb-0">
                  <p className="body-sm font-bold text-[var(--color-text-primary)] mb-1">{saved.role}</p>
                  <p className="meta text-[var(--color-text-secondary)] mb-2">{saved.project}</p>
                  <Link to={`/casting/${saved.casting_id}`} className="meta text-[var(--color-gold)] hover:underline flex items-center gap-1">
                    View Details <ChevronRight size={12} />
                  </Link>
                </div>
              )) : (
                <p className="meta text-[var(--color-text-secondary)]">No saved castings yet.</p>
              )}
            </div>
            
            <Link to="/talent/saved" className="btn-secondary w-full mt-6 flex justify-center !py-2 !h-auto">
              View All Saved
            </Link>
          </section>

        </div>
      </div>
    </div>
  )
}
