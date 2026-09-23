import heroBg from '../assets/images/hero_bg.jpg'
import { Link } from 'react-router-dom'

export default function HeroSection() {

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-start overflow-hidden min-h-[100vh]"
      aria-label="Hero section"
    >
      {/* Background & Cinematic Lighting */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg)] overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Deep space gradient overlay */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,5,0.6)_0%,rgba(3,3,5,0.3)_40%,rgba(3,3,5,0.8)_80%,var(--color-bg)_100%)]"
        />
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[var(--color-gold)] rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-float" />
        <div className="absolute bottom-1/4 right-1/5 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[var(--color-violet)] rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div
        className="container-xl relative z-10 pt-48 pb-24 md:pt-56 md:pb-32"
      >
        <div className="max-w-[760px]">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-5 animate-fade-up" style={{ animationDelay: '0ms' }}>
            <div className="w-12 h-[1.5px] bg-[var(--color-gold)] shrink-0" />
            <span
              className="eyebrow !mb-0"
            >
              India's Premier Casting Platform
            </span>
          </div>

          {/* Headline — H1 ~70px */}
          <h1
            className="h1-display text-[var(--color-text-primary)] mb-6 drop-shadow-2xl animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            Your Next Role
            <br />
            <span className="text-gradient-gold italic pr-4">Starts Here.</span>
          </h1>

          {/* Supporting text — 18px */}
          <p
            className="body-large text-[var(--color-text-secondary)] max-w-[540px] mb-10 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            Discover auditions, showcase your talent and connect with the people creating the next generation of Indian entertainment.
          </p>

          {/* CTA Group — clear hierarchy, w-full on mobile */}
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-16 w-full animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            {/* Primary — solid gold with glowing pulse */}
            <Link
              to="/casting"
              id="hero-find-auditions-btn"
              className="btn-primary animate-pulse-glow w-full sm:w-auto flex items-center justify-center"
            >
              Find Auditions
            </Link>

            {/* Secondary — gold outline */}
            <Link
              to="/talent/dashboard"
              id="hero-create-profile-btn"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center"
            >
              Create Talent Profile
            </Link>

            {/* Tertiary — muted violet, visually lighter */}
            <Link
              to="/casting-team/dashboard"
              id="hero-start-casting-btn"
              className="btn-casting opacity-90 w-full sm:w-auto flex items-center justify-center"
            >
              Start Casting →
            </Link>
          </div>

          {/* Glassmorphic Stats strip */}
          <div
            className="glass-panel rounded-[24px] p-8 md:p-10 flex flex-wrap gap-10 md:gap-16 justify-between items-center"
          >
            {[
              { num: '10,000+', label: 'Verified Talent Profiles' },
              { num: '500+', label: 'Active Casting Calls' },
              { num: '200+', label: 'Production Houses' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  className="font-display font-semibold text-[2.5rem] text-[var(--color-gold)] leading-[1.1] drop-shadow-md"
                >
                  {num}
                </div>
                <div className="meta text-[var(--color-text-primary)] opacity-80 mt-1 font-medium tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute flex flex-col items-center gap-2 bottom-10 left-1/2 -translate-x-1/2 opacity-45 z-10"
        aria-hidden="true"
      >
        <span className="meta text-[var(--color-text-muted)] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-[linear-gradient(to_bottom,var(--color-text-muted),transparent)]" />
      </div>
    </section>
  )
}
