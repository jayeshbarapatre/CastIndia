import React from 'react'
import { Link } from 'react-router-dom'
import { UserPlus, Camera, Star, CheckCircle2, ArrowRight, Film, Mic2, Palette, Music } from 'lucide-react'
import { InfoPageHero, InfoSection, InfoCard, InfoGrid, SectionHeading } from '../InfoPage'

const steps = [
  { step: '01', title: 'Sign Up for Free', desc: 'Create your talent account in under 2 minutes. No credit card needed.' },
  { step: '02', title: 'Build Your Profile', desc: 'Add your photos, demo reel, skills, languages, and experience to stand out.' },
  { step: '03', title: 'Get Discovered', desc: 'Casting directors browse verified talent profiles daily. Make sure yours shines.' },
  { step: '04', title: 'Apply to Castings', desc: 'Browse hundreds of open casting calls and apply directly through the platform.' },
]

const profileSections = [
  { icon: Camera, title: 'Professional Photos', desc: 'Upload headshots and portfolio images that showcase your look and range.', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)' },
  { icon: Film, title: 'Demo Reel', desc: 'Add your showreel or audition tape so directors can see you in action.', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)' },
  { icon: Star, title: 'Skills & Languages', desc: 'List your acting skills, languages, specializations, and training.', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)' },
  { icon: Mic2, title: 'Voice & Audio', desc: 'Voice artists can add audio samples for narration and dubbing roles.', color: '#F87171', bg: 'rgba(248,113,113,0.12)' },
  { icon: Palette, title: 'Credits & Experience', desc: 'Showcase your past films, series, ads, and stage performances.', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)' },
  { icon: Music, title: 'Dance & Performance', desc: 'Add dance styles, choreography skills, and performance art specialties.', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)' },
]

export default function CreateProfile() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="For Talent"
        icon={UserPlus}
        title="Create Your"
        accent="Talent Profile"
        subtitle="Join thousands of actors, models, dancers, and voice artists who get discovered by top casting directors across India."
      />

      {/* Steps */}
      <InfoSection>
        <SectionHeading label="Get Started" title="Your Journey" accent="in 4 Steps" subtitle="Getting started on CastIndia is simple and completely free." />
        <div className="info-steps">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="info-step">
              <div className="info-step__num">{step}</div>
              <div>
                <h3 className="info-step__title">{title}</h3>
                <p className="info-step__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </InfoSection>

      {/* Profile Sections */}
      <InfoSection className="info-section--alt">
        <SectionHeading label="Your Profile" title="What Goes on" accent="Your Profile" subtitle="A complete profile dramatically increases your chances of being shortlisted." />
        <InfoGrid cols={3}>
          {profileSections.map(({ icon, title, desc, color, bg }) => (
            <InfoCard key={title} title={title} icon={icon} iconColor={color} iconBg={bg}>
              <p className="info-card__text">{desc}</p>
            </InfoCard>
          ))}
        </InfoGrid>
      </InfoSection>

      {/* CTA */}
      <InfoSection>
        <div className="info-cta-box">
          <h2 className="info-cta-box__title">Ready to get discovered?</h2>
          <p className="info-cta-box__sub">Create your free talent profile in minutes and start getting noticed.</p>
          <Link to="/auth" className="info-cta-box__btn">
            Create Free Profile <ArrowRight size={16} />
          </Link>
        </div>
      </InfoSection>
    </div>
  )
}
