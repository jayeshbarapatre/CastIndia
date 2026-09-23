import { useScrollReveal } from '../hooks/useScrollReveal'

const talentSteps = [
  {
    num: '01',
    title: 'Create Your Profile',
    desc: 'Build a professional casting identity with photos, showreel, credits, skills, languages and physical stats. One profile for your entire career.',
  },
  {
    num: '02',
    title: 'Discover Opportunities',
    desc: 'Browse auditions filtered by category, location, language and project type. Set preferences and receive relevant casting alerts.',
  },
  {
    num: '03',
    title: 'Apply & Audition',
    desc: 'Submit applications, record self-tapes and attend in-person auditions — all through one professional casting platform.',
  },
  {
    num: '04',
    title: 'Get Shortlisted',
    desc: 'Receive callbacks and shortlist notifications directly through CastIndia. Track your applications and manage your casting journey.',
  },
]

const castingSteps = [
  {
    num: '01',
    title: 'Create Your Project',
    desc: "Publish your production with all relevant details — project type, platform, timeline and production credentials.",
  },
  {
    num: '02',
    title: 'Define Your Roles',
    desc: 'Create structured role profiles with specific requirements — age, gender, location, language, skills and audition format.',
  },
  {
    num: '03',
    title: 'Discover Talent',
    desc: 'Search India\'s verified talent database with powerful filters. Browse profiles, showreels and credits at a glance.',
  },
  {
    num: '04',
    title: 'Review & Shortlist',
    desc: 'Evaluate candidates, build shortlists by role and manage your casting process from discovery to final selection.',
  },
]

function StepCard({ step, textClass, hoverBorderClass }) {
  return (
    <div
      className="relative group h-full"
    >
      <div
        className={`glass-panel glass-panel-hover card-pad-lg h-full rounded-[24px] transition-all duration-300 hover:-translate-y-1 ${hoverBorderClass}`}
      >
        <div
          className={`font-display font-light text-[3.5rem] leading-none mb-4 ${textClass}`}
        >
          {step.num}
        </div>
        <h3
          className="body-large font-semibold leading-snug text-[var(--color-text-primary)] mb-4"
        >
          {step.title}
        </h3>
        <p className="body-sm text-[var(--color-text-muted)]">
          {step.desc}
        </p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="how-it-works"
      className="section-pad"
      aria-label="How CastIndia works"
    >
      <div ref={revealRef} className="container-xl relative reveal-up">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="eyebrow !mb-2"
          >
            Platform Overview
          </p>
          <h2
            className="h2-section text-[var(--color-text-primary)] mb-4"
          >
            How It Works
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* For Talent */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🎭</span>
              <div>
                <p className="eyebrow !mb-1">
                  For Talent
                </p>
                <h3
                  className="h3-card text-[var(--color-text-primary)]"
                >
                  Your Casting Journey
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {talentSteps.map((step) => (
                <StepCard 
                  key={step.num} 
                  step={step} 
                  textClass="text-[rgba(227,167,47,0.3)] group-hover:text-[var(--color-gold)] transition-colors duration-300" 
                  hoverBorderClass="group-hover:border-[var(--color-gold-border)]" 
                />
              ))}
            </div>
            <div className="mt-10">
              <button
                id="how-talent-cta-btn"
                className="btn-primary btn-md"
              >
                Create Talent Profile
              </button>
            </div>
          </div>

          {/* Vertical divider */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[1px] bg-[var(--color-border)] top-40 bottom-0"
          />

          {/* For Casting */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🎬</span>
              <div>
                <p className="eyebrow !mb-1 !text-[var(--color-violet-light)]">
                  For Casting Teams
                </p>
                <h3
                  className="h3-card text-[var(--color-text-primary)]"
                >
                  Your Casting Process
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {castingSteps.map((step) => (
                <StepCard 
                  key={step.num} 
                  step={step} 
                  textClass="text-[rgba(139,92,246,0.3)] group-hover:text-[var(--color-violet)] transition-colors duration-300" 
                  hoverBorderClass="group-hover:border-[var(--color-violet-border)]" 
                />
              ))}
            </div>
            <div className="mt-10">
              <button
                id="how-casting-cta-btn"
                className="btn-casting btn-md"
              >
                Start Casting →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
