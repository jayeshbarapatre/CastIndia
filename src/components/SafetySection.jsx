import { Shield, Lock, AlertTriangle, Headphones } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const trustBadges = [
  { icon: Shield,        color: '#4ADE80', title: 'Verified Casting Calls',    desc: 'All casting & bids are verified before going live' },
  { icon: Lock,          color: '#60A5FA', title: 'Secure Profile System',     desc: 'Your data is fully encrypted and protected' },
  { icon: AlertTriangle, color: '#FBBF24', title: 'Fraud Protection System',   desc: 'We actively monitor and remove fraudulent listings' },
  { icon: Headphones,    color: '#A78BFA', title: 'Dedicated Support',         desc: 'Our team is here to help you every step of the way' },
]

export default function SafetySection() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="safety"
      className="section-pad relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'var(--color-bg)' }}
      aria-label="Safety and trust"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(74,222,128,0.03) 0%, transparent 60%)'
      }} />

      <div ref={revealRef} className="container-xl relative z-10 reveal-up">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '3.5rem' }}>
          {/* Left: text */}
          <div>
            <span style={{
              fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', fontWeight: 600, display: 'block', marginBottom: '0.75rem'
            }}>SAY IT FIRST</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: 'var(--color-text-primary)', marginBottom: '1rem', lineHeight: 1.1
            }}>
              Discover. Connect.<br />
              <span style={{ color: '#E3A72F' }}>Grow.</span>
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '400px', marginBottom: '1.5rem' }}>
              Your safety is our priority. We ensure a secure and transparent platform for every talent and casting team.
            </p>
            <button id="safety-learn-more-btn" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0 22px', height: '44px', borderRadius: '999px',
              background: 'transparent', color: '#E8C97A', fontWeight: 600,
              fontSize: '0.875rem', border: '1.5px solid rgba(227,167,47,0.4)',
              cursor: 'pointer', transition: 'all 0.3s',
            }}>
              Learn More →
            </button>
          </div>

          {/* Right: trust badges 2x2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {trustBadges.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '1.25rem',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.75rem',
                }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.35rem', lineHeight: 1.2 }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
