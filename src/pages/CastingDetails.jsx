import { AlertCircle, FileText, Clapperboard, Briefcase, Share2, Bookmark } from 'lucide-react'
import { Link } from 'react-router-dom'

// Mock Data (matches CastingSearch)
const castingData = {
  id: 'cc-1',
  projectName: 'Andhera',
  projectType: 'Web Series',
  platform: 'OTT (Major Platform)',
  roleName: 'Lead Male — Detective',
  ageRange: '28–38',
  gender: 'Male',
  location: 'Mumbai (Shoot location)',
  language: 'Hindi',
  auditionType: 'Self Tape',
  deadline: 'Oct 5, 2026',
  status: 'Applications Open',
  verified: true,
  urgent: false,
  description: 'Seeking a rugged, intense male lead for a gritty crime thriller web series. The character is a suspended detective who works outside the system to solve cold cases. Requires strong dramatic performance and ability to perform light action sequences.',
  requirements: [
    'Must be fluent in Hindi with a neutral accent',
    'Prior experience in web series or feature films preferred',
    'Athletic build, willing to undergo basic action training',
    'Available for a 45-day continuous schedule starting Nov 2026'
  ],
  productionDetails: 'Produced by Blue Sky Entertainment. Directed by Vikram Singh. 8-episode series.',
  auditionInstructions: 'Please submit a 2-minute dramatic monologue in Hindi (self-tape). Ensure good lighting and clear audio. Slate your name, age, height, and current city before the performance.'
}

export default function CastingDetails() {
  // In a real app, fetch data based on ID. Using mock data here.
  const call = castingData

  return (
    <div className="max-w-[1000px] mx-auto w-full px-4 pt-8 pb-32 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-8 meta text-[var(--color-text-muted)]">
        <Link to="/casting" className="hover:text-[var(--color-gold)] transition-colors">Find Casting</Link>
        <span>/</span>
        <span className="text-[var(--color-text-secondary)]">{call.projectName}</span>
      </div>

      {/* Project Header */}
      <div className="glass-panel card-pad-lg rounded-[24px] mb-8 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(227,167,47,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <span className="bg-[rgba(108,99,255,0.12)] text-[#9B96FF] text-[12px] font-semibold py-[5px] px-3 rounded-full">
                {call.projectType}
              </span>
              <span className="bg-[var(--color-verified-muted)] text-[var(--color-verified)] text-[12px] font-semibold py-[5px] px-3 rounded-full flex items-center gap-1.5">
                <CheckCircle size={12} /> Verified
              </span>
            </div>
            <h1 className="h2-section text-[var(--color-text-primary)] mb-2">{call.projectName}</h1>
            <p className="body-large text-[var(--color-text-secondary)]">{call.platform}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold-border)] transition-all" aria-label="Share casting">
              <Share2 size={18} />
            </button>
            <button className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold-border)] transition-all" aria-label="Bookmark casting">
              <Bookmark size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-10 border-t border-[var(--color-border)] pt-6">
          <div>
            <p className="meta text-[var(--color-text-muted)] mb-1">Status</p>
            <p className="body-sm font-semibold text-[var(--color-verified)]">{call.status}</p>
          </div>
          <div>
            <p className="meta text-[var(--color-text-muted)] mb-1">Deadline</p>
            <p className="body-sm font-semibold text-[var(--color-text-primary)]">{call.deadline}</p>
          </div>
          <div>
            <p className="meta text-[var(--color-text-muted)] mb-1">Location</p>
            <p className="body-sm font-semibold text-[var(--color-text-primary)]">{call.location}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Role Information */}
          <section className="glass-panel card-pad-lg rounded-[24px]">
            <h2 className="h3-card text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-[var(--color-gold)]" />
              Role Information
            </h2>
            
            <h3 className="body-large font-bold text-[var(--color-text-primary)] mb-4">{call.roleName}</h3>
            <p className="body-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {call.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <p className="meta text-[var(--color-text-muted)] mb-1">Age Range</p>
                <p className="body-sm font-semibold text-[var(--color-text-primary)]">{call.ageRange}</p>
              </div>
              <div>
                <p className="meta text-[var(--color-text-muted)] mb-1">Gender</p>
                <p className="body-sm font-semibold text-[var(--color-text-primary)]">{call.gender}</p>
              </div>
              <div>
                <p className="meta text-[var(--color-text-muted)] mb-1">Language</p>
                <p className="body-sm font-semibold text-[var(--color-text-primary)]">{call.language}</p>
              </div>
            </div>

            <h4 className="meta font-bold tracking-wider uppercase text-[var(--color-text-muted)] mb-4">Requirements</h4>
            <ul className="space-y-3">
              {call.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] body-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Project Details */}
          <section className="glass-panel card-pad-lg rounded-[24px]">
            <h2 className="h3-card text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <Clapperboard size={20} className="text-[var(--color-gold)]" />
              Project Details
            </h2>
            <p className="body-sm text-[var(--color-text-secondary)] leading-relaxed">
              {call.productionDetails}
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          
          {/* Audition Info */}
          <section className="glass-panel card-pad-lg rounded-[24px] border-[var(--color-gold-border)] shadow-[0_0_30px_rgba(227,167,47,0.05)] sticky top-24">
            <h2 className="h3-card text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <FileText size={20} className="text-[var(--color-gold)]" />
              Audition Info
            </h2>
            
            <div className="mb-6">
              <p className="meta text-[var(--color-text-muted)] mb-1">Format</p>
              <p className="body-sm font-semibold text-[var(--color-text-primary)]">{call.auditionType}</p>
            </div>

            <div className="mb-8">
              <p className="meta text-[var(--color-text-muted)] mb-2">Instructions</p>
              <p className="body-sm text-[var(--color-text-secondary)] leading-relaxed bg-[var(--color-surface-2)] p-4 rounded-xl border border-[var(--color-border)]">
                {call.auditionInstructions}
              </p>
            </div>

            <Link to={`/casting/${call.id}/apply`} className="btn-primary w-full hidden md:flex justify-center !h-[56px] !text-[16px]">
              Apply Now
            </Link>
            
            <p className="meta text-[var(--color-text-muted)] text-center mt-4 hidden md:flex items-center justify-center gap-1.5">
              <AlertCircle size={12} />
              Applications close on {call.deadline}
            </p>
          </section>

        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[var(--color-bg)]/90 backdrop-blur-xl border-t border-[var(--color-border)] z-40 pb-[env(safe-area-inset-bottom,16px)]">
        <Link to={`/casting/${call.id}/apply`} className="btn-primary w-full flex justify-center !h-[50px] !text-[16px] shadow-lg">
          Apply Now
        </Link>
        <p className="meta text-[var(--color-text-muted)] text-center mt-2 flex items-center justify-center gap-1.5">
          <AlertCircle size={12} />
          Closes {call.deadline}
        </p>
      </div>
    </div>
  )
}

function CheckCircle({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  )
}
