import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, Bookmark, AlertCircle } from 'lucide-react'
import StatusBadge from '../components/StatusBadge'
import EmptyState from '../components/EmptyState'

// Mock Data
const recentApplications = [
  { id: '1', role: 'Lead Male — Detective', project: 'Andhera', date: 'Oct 1, 2026', status: 'underReview' },
  { id: '2', role: 'Brand Ambassador', project: 'Chai & Co.', date: 'Sep 25, 2026', status: 'shortlisted' },
  { id: '3', role: 'Supporting Male', project: 'Project Ananya', date: 'Sep 10, 2026', status: 'notSelected' },
]

export default function TalentDashboard() {
  const profileCompleteness = 85
  const navigate = useNavigate()

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Column - Applications */}
        <div className="lg:col-span-2 space-y-8">
          
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
        <div className="space-y-8">
          
          <section className="glass-panel card-pad-lg rounded-[24px]">
            <h2 className="h3-card text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <Bookmark size={20} className="text-[var(--color-gold)]" />
              Saved Casting
            </h2>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-[var(--color-border)]">
                <p className="body-sm font-bold text-[var(--color-text-primary)] mb-1">Lead Dancer</p>
                <p className="meta text-[var(--color-text-secondary)] mb-2">Rhythm Uncut (Music Video)</p>
                <Link to="/casting/cc-4" className="meta text-[var(--color-gold)] hover:underline flex items-center gap-1">
                  View Details <ChevronRight size={12} />
                </Link>
              </div>
              <div>
                <p className="body-sm font-bold text-[var(--color-text-primary)] mb-1">Voice Host</p>
                <p className="meta text-[var(--color-text-secondary)] mb-2">NightOwl Podcast</p>
                <Link to="/casting/cc-6" className="meta text-[var(--color-gold)] hover:underline flex items-center gap-1">
                  View Details <ChevronRight size={12} />
                </Link>
              </div>
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
