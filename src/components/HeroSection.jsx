import heroBg from '../assets/images/hero_bg.jpg'
import talent2 from '../assets/images/talent_2.jpg'
import { Link } from 'react-router-dom'

export default function HeroSection() {

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-start overflow-hidden min-h-[100vh]"
      aria-label="Hero section"
    >
      {/* Background & Cinematic Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ background: '#06040a' }}>
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.35, mixBlendMode: 'luminosity' }}
        />
        {/* Deep gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(6,4,10,0.55) 0%, rgba(6,4,10,0.15) 40%, rgba(6,4,10,0.75) 80%, #06040a 100%)' }} />
        {/* Warm amber ambient glow — left */}
        <div className="absolute" style={{ top: '10%', left: '-5%', width: '55vw', height: '70vh', background: 'radial-gradient(ellipse at center, rgba(200,130,20,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
        {/* Violet ambient glow — bottom right */}
        <div className="absolute" style={{ bottom: '0', right: '0', width: '50vw', height: '60vh', background: 'radial-gradient(ellipse at 70% 80%, rgba(100,50,200,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
      </div>

      {/* Portrait image — right side */}
      <div className="absolute right-0 top-0 h-full z-[1] pointer-events-none"
        style={{ width: 'clamp(320px, 42%, 650px)' }}
      >
        <img
          src={talent2}
          alt="Talent performer"
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.85 }}
        />
        {/* Fade portrait into background on left + bottom */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, #06040a 0%, transparent 35%), linear-gradient(to top, #06040a 0%, transparent 30%)'
        }} />
        {/* Warm spotlight on portrait */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 60% 30%, rgba(200,130,20,0.15) 0%, transparent 55%)'
        }} />
      </div>

      {/* Decorative script — right side */}
      <div
        className="absolute z-[2] pointer-events-none hidden lg:flex flex-col items-end"
        style={{ right: 'clamp(200px, 36%, 560px)', top: '38%', transform: 'rotate(8deg)', transformOrigin: 'right center' }}
      >
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: 'italic',
          fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)',
          color: 'rgba(227,167,47,0.65)',
          lineHeight: 1.8,
          textAlign: 'right',
          letterSpacing: '0.02em',
          textShadow: '0 2px 12px rgba(0,0,0,0.5)',
        }}>
          Real People.<br />Real Roles.<br />Real Opportunities
        </span>
      </div>

      {/* Content */}
      <div className="container-xl relative z-10 pt-28 pb-20 md:pt-32 md:pb-28" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ maxWidth: '640px' }}>

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-5 animate-fade-up" style={{ animationDelay: '0ms' }}>
            <div className="shrink-0" style={{ width: '40px', height: '1.5px', background: 'var(--color-gold)' }} />
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 600,
            }}>
              India's Leading Casting Platform
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[var(--color-text-primary)] mb-6 drop-shadow-2xl animate-fade-up"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              animationDelay: '80ms',
            }}
          >
            Your Next Role<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #F5D98A 0%, #E3A72F 50%, #C8851A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
                paddingRight: '8px',
              }}
            >
              Starts Here.
            </span>
          </h1>

          {/* Supporting text */}
          <p
            className="animate-fade-up"
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '480px',
              marginBottom: '2.5rem',
              animationDelay: '160ms',
            }}
          >
            Discover auditions, connect with top industry professionals, and raise your talent to the next level.
          </p>

          {/* CTA Group */}
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-4 animate-fade-up"
            style={{ marginBottom: '3.5rem', animationDelay: '240ms' }}
          >
            <Link
              to="/casting"
              id="hero-explore-opportunities-btn"
              className="animate-pulse-glow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0 28px',
                height: '52px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #E3A72F 0%, #C8851A 100%)',
                color: '#000',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.01em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 30px rgba(227,167,47,0.4)',
                textDecoration: 'none',
              }}
            >
              Explore Opportunities →
            </Link>
            <Link
              to="/talent/dashboard"
              id="hero-create-profile-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0 28px',
                height: '52px',
                borderRadius: '999px',
                background: 'transparent',
                color: '#E8C97A',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: '1.5px solid rgba(227,167,47,0.45)',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(227,167,47,0.12)'; e.currentTarget.style.borderColor = 'rgba(227,167,47,0.7)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(227,167,47,0.45)' }}
            >
              Create Profile
            </Link>
          </div>

          {/* Stats strip — inline horizontal */}
          <div
            className="animate-fade-up"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0',
              alignItems: 'center',
              animationDelay: '320ms',
            }}
          >
            {[
              { icon: '🎬', num: '10,000+', label: 'Casting Opportunities' },
              { icon: '👤', num: '500+', label: 'Happy Talents' },
              { icon: '🏠', num: '200+', label: 'Production Houses' },
            ].map(({ icon, num, label }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '0 20px',
                  borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      fontSize: '1.3rem',
                      color: '#E3A72F',
                      lineHeight: 1.1,
                    }}>{num}</div>
                    <div style={{
                      fontSize: '0.68rem',
                      color: 'rgba(255,255,255,0.5)',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      marginTop: '2px',
                    }}>{label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute flex flex-col items-center gap-2 bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
      </div>
    </section>
  )
}

