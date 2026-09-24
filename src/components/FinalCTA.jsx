import { useScrollReveal } from '../hooks/useScrollReveal'
import heroBg from '../assets/images/hero_bg.jpg'

export default function FinalCTA() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden"
      style={{ padding: '6rem 0' }}
      aria-label="Final call to action"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" aria-hidden="true"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.25, mixBlendMode: 'luminosity' }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(10,8,20,0.97) 0%, rgba(10,8,20,0.80) 50%, rgba(10,8,20,0.95) 100%)'
        }} />
        {/* Golden glow center */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(227,167,47,0.08) 0%, transparent 60%)'
        }} />
        {/* Top gold line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{
          width: '240px', height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(227,167,47,0.5), transparent)'
        }} />
      </div>

      <div ref={revealRef} className="container-xl relative z-10 text-center reveal-up">
        <span style={{
          fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)', fontWeight: 600, display: 'block', marginBottom: '1.5rem'
        }}>JOIN CASTINDIA TODAY</span>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          color: 'var(--color-text-primary)',
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          Your Next Opportunity<br />
          <span style={{
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #F5D98A 0%, #E3A72F 50%, #C8851A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Could Start Here.</span>
        </h2>

        <p style={{
          fontSize: '1rem', color: 'rgba(255,255,255,0.5)',
          maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7,
        }}>
          Join CastIndia today and turn your talent into your career. Create a profile, discover auditions, and get noticed by India's top production houses.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button id="final-get-started-btn" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0 32px', height: '52px', borderRadius: '999px',
            background: 'linear-gradient(135deg, #E3A72F 0%, #C8851A 100%)',
            color: '#000', fontWeight: 700, fontSize: '0.95rem',
            border: 'none', cursor: 'pointer',
            boxShadow: '0 0 30px rgba(227,167,47,0.4)',
          }}>
            Get Started →
          </button>
          <button id="final-learn-more-btn" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0 32px', height: '52px', borderRadius: '999px',
            background: 'transparent', color: '#E8C97A', fontWeight: 600,
            fontSize: '0.95rem', border: '1.5px solid rgba(227,167,47,0.4)',
            cursor: 'pointer',
          }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
