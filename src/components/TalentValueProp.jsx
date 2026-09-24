import { User, Search, FileCheck, Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const profileFeatures = [
  'Professional Photos',
  'Showreels & Demo Videos',
  'Experience & Credits',
  'Skills & Training',
  'Languages Spoken',
  'Physical Stats',
  'Social Links',
]

const journeySteps = [
  {
    icon: User,
    step: '01',
    title: 'Build Your Profile',
    desc: 'Create your professional casting identity — photos, showreel, credits, skills and everything a casting director needs to evaluate you.',
    active: true,
  },
  {
    icon: Search,
    step: '02',
    title: 'Discover Opportunities',
    desc: "Browse auditions filtered by category, location, language and project type. Find what's relevant to you, fast.",
    active: false,
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Apply & Audition',
    desc: 'Submit your application, self-tape or attend in-person auditions — all managed from one professional platform.',
    active: false,
  },
  {
    icon: Star,
    step: '04',
    title: 'Get Shortlisted',
    desc: 'When casting teams find you, receive callbacks and notifications directly through the platform.',
    active: false,
  },
]

export default function TalentValueProp() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="talent-value"
      className="pt-[80px] pb-[40px] md:pt-[100px] md:pb-[60px] lg:pt-[120px] lg:pb-[80px] relative bg-[var(--color-bg)] overflow-hidden border-t border-[var(--color-border)]"
      aria-label="Talent value proposition"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(227,167,47,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div ref={revealRef} className="container-xl relative z-10 reveal-up">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
        >
          {/* Left — Headline + features */}
          <div>
            <span className="eyebrow !mb-2">For Talent</span>
            <h2
              className="h2-section text-[var(--color-text-primary)] mb-6"
            >
              Your Talent Deserves More Than a
              <span className="text-gradient-gold italic"> WhatsApp Message.</span>
            </h2>
            <p
              className="body-large text-[var(--color-text-secondary)] max-w-[540px] mb-12"
            >
              Build one professional profile and use it across your entire casting journey. No more sending screenshots, no more chasing contacts.
            </p>

            {/* Profile features */}
            <div
              className="glass-panel glass-panel-hover rounded-[24px] p-8 mb-12"
            >
              <p
                className="meta text-[var(--color-text-muted)] font-bold tracking-[0.14em] uppercase mb-5"
              >
                Your Professional Profile Includes
              </p>
              <div className="flex flex-wrap gap-2">
                {profileFeatures.map((f) => (
                  <span key={f} className="tag-pill">
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>

            <button
              id="talent-create-profile-btn"
              className="btn-primary"
            >
              Create Your Free Profile
            </button>
          </div>

          {/* Right — Journey steps */}
          <div className="relative">
            {/* Connector line — sits behind the circles (z-0), centered under w-12 icon */}
            <div
              className="absolute hidden sm:block left-[23px] top-16 bottom-16 w-[1px] z-0 bg-[linear-gradient(to_bottom,var(--color-gold-border),transparent)]"
            />

            <div className="flex flex-col gap-10">
              {journeySteps.map(({ icon: Icon, step, title, desc, active }) => (
                <div key={step} className="relative z-[1] flex gap-6 items-start p-6 cursor-pointer group hover:bg-[var(--color-surface-2)] rounded-[20px] transition-colors duration-200">
                  {/* Step icon */}
                  <div
                    className={`flex items-center justify-center rounded-xl shrink-0 w-12 h-12 relative z-10 border transition-colors duration-200 ${
                      active ? 'bg-[var(--color-gold)] border-[var(--color-gold)]' : 'bg-[var(--color-surface-2)] border-[var(--color-border)] group-hover:border-[var(--color-gold-border)]'
                    }`}
                  >
                    <Icon size={20} className={active ? 'text-[#0A0A0F]' : 'text-[var(--color-text-muted)] group-hover:text-[var(--color-gold)] transition-colors duration-200'} />
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span
                        className="meta text-[var(--color-gold)] font-bold opacity-70"
                      >
                        {step}
                      </span>
                      <h3
                        className="body-large text-[var(--color-text-primary)] font-semibold transition-colors group-hover:text-[var(--color-gold)]"
                      >
                        {title}
                      </h3>
                    </div>
                    <p className="body-sm text-[var(--color-text-muted)] leading-[1.65]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
