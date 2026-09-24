import { useScrollReveal } from '../hooks/useScrollReveal'
import heroBg from '../assets/images/hero_bg.jpg'

const stats = [
  { num: '10,000+', label: 'Casting Opportunities' },
  { num: '500+',    label: 'Happy Talents' },
  { num: '200+',    label: 'Production Houses' },
  { num: '90+',     label: 'Online Portal India' },
]

export default function IndiaDiscovery() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="india-discovery"
      className="relative overflow-hidden"
      style={{ minHeight: '380px', padding: '5rem 0' }}
      aria-label="Built for Dreamers, Backed by Industry"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.3, mixBlendMode: 'luminosity' }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(10,8,20,0.96) 0%, rgba(10,8,20,0.75) 60%, rgba(10,8,20,0.9) 100%)'
        }} />
        {/* Amber glow left */}
        <div className="absolute" style={{
          top: '20%', left: '-5%', width: '50vw', height: '60vh',
          background: 'radial-gradient(ellipse at center, rgba(200,130,20,0.14) 0%, transparent 65%)',
          pointerEvents: 'none'
        }} />
      </div>

      <div ref={revealRef} className="container-xl relative z-10 reveal-up">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left — headline */}
          <div>
            <span style={{
              fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', fontWeight: 600, display: 'block', marginBottom: '1rem'
            }}>TRUSTED PLATFORM</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Built for Dreamers,<br />
              Backed by{' '}
              <span style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #F5D98A 0%, #E3A72F 50%, #C8851A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Industry</span>
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '400px' }}>
              India's most trusted casting platform connecting real talent with real opportunities across film, TV, OTT and digital media.
            </p>
          </div>

          {/* Right — 2x2 stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {stats.map(({ num, label }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '18px',
                padding: '1.5rem 1.25rem',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(227,167,47,0.35)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)',
                  color: '#E3A72F',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}>{num}</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 500,
                  letterSpacing: '0.03em',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
