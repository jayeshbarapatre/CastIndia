import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, AlertTriangle, Lock, Eye, Phone, ArrowRight, CheckCircle2 } from 'lucide-react'
import { InfoPageHero, InfoSection, InfoCard, InfoGrid, SectionHeading } from '../InfoPage'

const safetyRules = [
  { icon: Lock, title: 'Never Pay to Audition', color: '#F87171', bg: 'rgba(248,113,113,0.12)', desc: 'Legitimate casting calls never ask you to pay for an audition, callback, or to be listed. Any request for money is a red flag.' },
  { icon: Eye, title: 'Protect Your Personal Info', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)', desc: 'Never share your Aadhaar, bank details, or home address with a casting director you haven\'t met in a verified setting.' },
  { icon: Shield, title: 'Use In-App Messaging', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)', desc: 'All communications with casting directors should happen through the CastIndia platform. This keeps a record and protects you.' },
  { icon: AlertTriangle, title: 'Verify the Production', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)', desc: 'Before attending any in-person audition, verify the production company, location, and casting director through official channels.' },
  { icon: Phone, title: 'Bring Someone You Trust', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)', desc: 'For in-person auditions, especially for newcomers, always bring a friend, parent, or trusted person with you.' },
  { icon: CheckCircle2, title: 'Report Suspicious Activity', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)', desc: 'If something feels off, use the Report button on any profile or listing. Our safety team reviews all reports within 24 hours.' },
]

const redFlags = [
  'Asked to pay for an audition or registration fee',
  'Casting director contacts you outside the platform',
  'Vague about the production company or project name',
  'Pressure to send revealing or inappropriate photos',
  'Promises of instant fame or unrealistic pay',
  'Asks for your bank account or personal ID number',
]

export default function SafetyGuide() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Your Safety Matters"
        icon={Shield}
        title="Safety"
        accent="Guide"
        subtitle="CastIndia is committed to creating a safe space for all talent. Here's how to protect yourself."
      />

      <InfoSection>
        <SectionHeading label="Stay Safe" title="6 Essential" accent="Safety Rules" subtitle="Follow these guidelines every time you interact with casting directors." />
        <InfoGrid cols={3}>
          {safetyRules.map(({ icon, title, color, bg, desc }) => (
            <InfoCard key={title} title={title} icon={icon} iconColor={color} iconBg={bg}>
              <p className="info-card__text">{desc}</p>
            </InfoCard>
          ))}
        </InfoGrid>
      </InfoSection>

      <InfoSection className="info-section--alt">
        <SectionHeading label="Warning Signs" title="Red Flags to" accent="Watch Out For" />
        <div className="info-redflags">
          {redFlags.map(flag => (
            <div key={flag} className="info-redflag">
              <AlertTriangle size={16} className="info-redflag__icon" />
              <p>{flag}</p>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection>
        <div className="info-cta-box" style={{ borderColor: 'rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.04)' }}>
          <Shield size={32} style={{ color: '#F87171', marginBottom: '12px' }} />
          <h2 className="info-cta-box__title">Report an Issue</h2>
          <p className="info-cta-box__sub">If you've experienced anything that made you feel unsafe, please report it immediately. Our team is here for you.</p>
          <Link to="/contact" className="info-cta-box__btn" style={{ background: '#F87171' }}>
            Report Now <ArrowRight size={16} />
          </Link>
        </div>
      </InfoSection>
    </div>
  )
}
