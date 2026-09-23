import { Clapperboard, Users, Search } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const castingWorkflow = [
  { num: '01', title: 'Create Project',   desc: 'Define your production details, platform and timeline.' },
  { num: '02', title: 'Define Roles',     desc: 'Specify role requirements, age, gender and language.' },
  { num: '03', title: 'Discover Talent',  desc: 'Search India\'s verified talent database.' },
  { num: '04', title: 'Shortlist',        desc: 'Curate candidates and manage your casting process.' },
]

const searchDimensions = [
  { icon: '🎭', label: 'Category' },
  { icon: '📍', label: 'Location' },
  { icon: '🗣', label: 'Language' },
  { icon: '🎂', label: 'Age Range' },
  { icon: '✨', label: 'Skills' },
  { icon: '🏆', label: 'Experience' },
  { icon: '✅', label: 'Verified Only' },
  { icon: '🎬', label: 'Project Type' },
]

export default function CastingValueProp() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="casting-value"
      className="pt-[40px] pb-[80px] md:pt-[60px] md:pb-[100px] lg:pt-[80px] lg:pb-[120px] relative bg-[var(--color-bg)] overflow-hidden"
      aria-label="Casting value proposition"
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div ref={revealRef} className="container-xl relative z-10 reveal-up">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
        >
          {/* Left — Workflow visual */}
          <div>
            {/* Numbered workflow */}
            <div
              className="glass-panel rounded-[24px] overflow-hidden mb-12"
            >
              <div className="p-8 border-b border-[var(--color-border)]">
                <p
                  className="meta text-[var(--color-text-muted)] font-bold tracking-[0.14em] uppercase"
                >
                  Casting Workflow
                </p>
              </div>
              <div className="flex flex-col">
                {castingWorkflow.map(({ num, title, desc }, i) => (
                  <div
                    key={num}
                    className={`flex items-start transition-colors duration-200 gap-6 p-8 cursor-pointer group hover:bg-[var(--color-surface-2)] ${i < castingWorkflow.length - 1 ? 'border-b border-[var(--color-border)]' : 'border-none'}`}
                  >
                    {/* Large number */}
                    <div
                      className={`font-display shrink-0 text-[2.5rem] font-light leading-none min-w-[48px] ${i === 0 ? 'text-[var(--color-violet)]' : 'text-[var(--color-surface-4)]'}`}
                    >
                      {num}
                    </div>
                    <div className="pt-2">
                      <p
                        className="body-large text-[var(--color-text-primary)] font-semibold mb-1 transition-colors group-hover:text-[var(--color-gold)]"
                      >
                        {title}
                      </p>
                      <p className="body-sm text-[var(--color-text-muted)]">
                        {desc}
                      </p>
                    </div>
                    {i === 0 && (
                      <div
                        className="shrink-0 meta ml-auto bg-[var(--color-violet-muted)] text-[var(--color-violet-light)] py-1 px-3 rounded-full font-semibold self-center"
                      >
                        Active
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Search dimensions */}
            <div
              className="glass-panel glass-panel-hover rounded-[24px] p-8"
            >
              <p
                className="meta text-[var(--color-text-muted)] font-bold tracking-[0.14em] uppercase mb-5"
              >
                Search Talent By
              </p>
              <div className="flex flex-wrap gap-2">
                {searchDimensions.map(({ icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-[13px] font-medium py-[7px] px-3.5 rounded-full"
                  >
                    {icon} {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div>
            <span className="eyebrow text-[var(--color-violet-light)] !mb-2">For Casting Teams</span>
            <h2
              className="h2-section text-[var(--color-text-primary)] mb-6"
            >
              Build Your Cast.{' '}
              <span className="text-gradient-violet italic">Faster.</span>
            </h2>
            <p
              className="body-large text-[var(--color-text-secondary)] max-w-[540px] mb-12"
            >
              Post casting calls, browse India's most complete verified talent database, and manage your discovery workflow — all from one professional casting platform.
            </p>

            <div className="flex flex-col gap-10 mb-12">
              {[
                { icon: Clapperboard, title: 'Post Casting Calls', desc: 'Publish structured, verified casting calls that reach the right performers instantly.' },
                { icon: Search, title: 'Discover Talent', desc: 'Search by category, location, language, age and skills across thousands of verified profiles.' },
                { icon: Users, title: 'Manage Shortlists', desc: 'Organize candidates by role and move them through your casting process.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-5 items-start">
                  <div
                    className="flex items-center justify-center rounded-xl shrink-0 w-12 h-12 bg-[var(--color-violet-muted)] border border-[var(--color-violet-border)]"
                  >
                    <Icon size={24} className="text-[var(--color-violet-light)]" />
                  </div>
                  <div>
                    <h3
                      className="body-large text-[var(--color-text-primary)] font-semibold mb-1.5"
                    >
                      {title}
                    </h3>
                    <p className="body-sm text-[var(--color-text-muted)] leading-[1.65]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button id="casting-start-btn" className="btn-casting">
              Start Casting →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
