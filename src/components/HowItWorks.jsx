import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Create Profile',
    desc: 'Showcase your skills, add photos and build your profile.',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'Explore Roles',
    desc: 'Browse latest auditions and casting calls that suit your talent.',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Apply',
    desc: 'Build your profile and stand out to casting teams.',
  },
  {
    num: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Get Selected',
    desc: 'If shortlisted, you\'ll be contacted by the production team.',
  },
]

export default function HowItWorks() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="how-it-works"
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
      aria-label="How CastIndia works"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 60%, rgba(227,167,47,0.04) 0%, transparent 65%)'
      }} />

      <div ref={revealRef} className="container-xl relative z-10 reveal-up">

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{
              fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', fontWeight: 600, display: 'block', marginBottom: '0.5rem'
            }}>SIMPLE STEPS</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: 'var(--color-text-primary)', marginBottom: '0.5rem', lineHeight: 1.1
            }}>How It Works</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', maxWidth: '420px' }}>
              Get started in just a few easy steps and turn your talent into opportunities.
            </p>
          </div>
          {/* Decorative script */}
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic', fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
            color: 'rgba(227,167,47,0.55)', lineHeight: 1.6, textAlign: 'right',
            transform: 'rotate(-3deg)', transformOrigin: 'right top',
          }}>
            Your talent<br />matters here
          </div>
        </div>

        {/* 4 Steps — horizontal */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', alignItems: 'start' }}>
          {steps.map(({ num, icon, title, desc }, i) => (
            <div key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
              {/* Step card */}
              <div style={{
                flex: 1,
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                transition: 'border-color 0.3s, transform 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(227,167,47,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Icon circle */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: i === 0 ? 'linear-gradient(135deg, #E3A72F, #C8851A)' : 'rgba(255,255,255,0.06)',
                  border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: i === 0 ? '#000' : 'rgba(255,255,255,0.55)',
                }}>
                  {icon}
                </div>
                {/* Step number + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#E3A72F', fontWeight: 700, letterSpacing: '0.05em' }}>{num}</span>
                  <h3 style={{
                    fontSize: '1rem', fontWeight: 700,
                    color: 'var(--color-text-primary)', lineHeight: 1.2,
                  }}>{title}</h3>
                </div>
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{desc}</p>
              </div>

              {/* Arrow connector — between steps */}
              {i < steps.length - 1 && (
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '40px', flexShrink: 0, paddingTop: '26px',
                }}>
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M0 8h17M12 2l6 6-6 6" stroke="rgba(227,167,47,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <style>{`
          @media (max-width: 768px) {
            #how-it-works .hw-grid { grid-template-columns: 1fr !important; }
            #how-it-works .hw-arrow { transform: rotate(90deg); }
          }
        `}</style>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button id="how-talent-cta-btn" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0 28px', height: '48px', borderRadius: '999px',
            background: 'linear-gradient(135deg, #E3A72F 0%, #C8851A 100%)',
            color: '#000', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer',
          }}>
            Create Profile →
          </button>
        </div>
      </div>
    </section>
  )
}
