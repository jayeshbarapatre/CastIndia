import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCTA() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="final-cta"
      className="section-pad relative overflow-hidden bg-[var(--color-bg)]"
      aria-label="Final call to action"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.06)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div ref={revealRef} className="container-xl relative z-10 reveal-up">
        <div
          className="rounded-[32px] overflow-hidden relative text-center glass-panel shadow-[0_0_80px_rgba(227,167,47,0.15)]"
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.10)_0%,transparent_50%)]"
            aria-hidden="true"
          />

          {/* Top golden line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[200px] bg-[linear-gradient(to_right,transparent,var(--color-gold),transparent)]"
            aria-hidden="true"
          />

          <div className="relative z-10 px-8 md:px-20 py-24 md:py-32">
            <p
              className="eyebrow !mb-2"
            >
              Join CastIndia Today
            </p>
            <h2
              className="h1-display leading-tight mx-auto text-[var(--color-text-primary)] max-w-[800px] mb-6"
            >
              Your Next Opportunity
              <br />
              <span className="text-gradient-gold italic">Could Start Here.</span>
            </h2>
            <p
              className="body-large mx-auto text-[var(--color-text-secondary)] max-w-[600px] mb-12"
            >
              Create your profile, discover the right casting opportunities and put your talent in front of the right people — all from one professional platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-5 mb-14">
              <button
                id="final-create-profile-btn"
                className="btn-primary"
              >
                Create Talent Profile
              </button>
              <button
                id="final-explore-auditions-btn"
                className="btn-secondary"
              >
                Explore Auditions
              </button>
              <button
                id="final-start-casting-btn"
                className="btn-casting"
              >
                Start Casting →
              </button>
            </div>

            {/* Social proof strip */}
            <div
              className="flex flex-wrap justify-center gap-10 pt-10 pb-4 md:pb-8 border-t border-[var(--color-border)]"
            >
              {[
                { num: '10,000+', label: 'Verified Profiles' },
                { num: '500+', label: 'Active Casting Calls' },
                { num: '200+', label: 'Production Houses' },
                { num: '15+', label: 'Industries Served' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="font-display font-semibold text-2xl text-[var(--color-gold)]"
                  >
                    {num}
                  </div>
                  <div className="meta mt-1 text-[var(--color-text-muted)]">
                    {label}
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
