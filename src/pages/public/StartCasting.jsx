import React from 'react'
import { Link } from 'react-router-dom'
import { Megaphone, ArrowRight, CheckCircle2, Users, Search, Zap } from 'lucide-react'
import { InfoPageHero, InfoSection, InfoCard, InfoGrid, SectionHeading } from '../InfoPage'

const benefits = [
  { icon: Users, title: 'Access 50,000+ Verified Talent', desc: 'Browse a massive database of actors, models, dancers, and voice artists — all verified and ready to work.', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)' },
  { icon: Search, title: 'Powerful Search & Filters', desc: 'Filter by skill, language, location, age range, experience, and more to find exactly who you need.', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)' },
  { icon: Zap, title: 'Fast Application Management', desc: 'Receive applications, shortlist candidates, and communicate — all in one organized dashboard.', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)' },
]

const steps = [
  { step: '01', title: 'Create Your Casting Account', desc: 'Sign up as a casting director or production house. Verification takes 24 hours.' },
  { step: '02', title: 'Post Your Casting Call', desc: 'Describe the role, requirements, location, pay, and deadline. We\'ll review and publish it.' },
  { step: '03', title: 'Review Applications', desc: 'Applications come in automatically. Sort, filter, and shortlist the best candidates.' },
  { step: '04', title: 'Connect & Cast', desc: 'Message shortlisted talent directly, schedule auditions, and finalize your cast.' },
]

export default function StartCasting() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="For Casting Directors"
        icon={Megaphone}
        title="Start"
        accent="Casting Today"
        subtitle="Find the perfect talent for your film, ad, or web series from India's largest verified talent pool."
      />

      <InfoSection>
        <SectionHeading label="Why CastIndia" title="Everything You Need" accent="to Cast Better" />
        <InfoGrid cols={3}>
          {benefits.map(b => (
            <InfoCard key={b.title} title={b.title} icon={b.icon} iconColor={b.color} iconBg={b.bg}>
              <p className="info-card__text">{b.desc}</p>
            </InfoCard>
          ))}
        </InfoGrid>
      </InfoSection>

      <InfoSection className="info-section--alt">
        <SectionHeading label="Get Started" title="Post a Casting" accent="in 4 Steps" />
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

      <InfoSection>
        <div className="info-cta-box">
          <h2 className="info-cta-box__title">Ready to find your cast?</h2>
          <p className="info-cta-box__sub">Join hundreds of directors and production houses who trust CastIndia.</p>
          <Link to="/auth" className="info-cta-box__btn">Post a Casting Call <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>
    </div>
  )
}
