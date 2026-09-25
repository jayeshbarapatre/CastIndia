import React from 'react'
import { ArrowRight, Info, Users, Lightbulb, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InfoPageHero, InfoSection, SectionHeading } from '../InfoPage'

const talentSteps = [
  { step: '01', title: 'Create Your Free Profile', desc: 'Sign up as talent. Add your photos, demo reel, skills, languages, and experience. It\'s 100% free.' },
  { step: '02', title: 'Get Discovered', desc: 'Casting directors actively search our talent database every day. Complete profiles get found first.' },
  { step: '03', title: 'Apply to Casting Calls', desc: 'Browse open castings and apply with one click. Track all your applications from your dashboard.' },
  { step: '04', title: 'Get Shortlisted & Hired', desc: 'When a director shortlists you, you get notified instantly. Communicate, audition, and land the role.' },
]

const castingSteps = [
  { step: '01', title: 'Create a Casting Account', desc: 'Register as a casting director or production house. Verification takes under 24 hours.' },
  { step: '02', title: 'Post a Casting Call', desc: 'Describe the role — requirements, pay, location, deadline. We review and publish it same day.' },
  { step: '03', title: 'Browse & Shortlist Talent', desc: 'Applications arrive automatically. Use filters to sort and shortlist the best candidates.' },
  { step: '04', title: 'Connect & Cast', desc: 'Message shortlisted talent, schedule auditions, and finalize your cast — all on one platform.' },
]

export default function HowItWorks() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Platform Guide"
        icon={Lightbulb}
        title="How"
        accent="It Works"
        subtitle="CastIndia connects talent with opportunity in 4 simple steps — whether you're performing or casting."
      />

      {/* For Talent */}
      <InfoSection>
        <SectionHeading label="For Talent" title="Get Discovered in" accent="4 Steps" subtitle="Join free and start getting noticed by top casting directors across India." />
        <div className="info-steps">
          {talentSteps.map(({ step, title, desc }) => (
            <div key={step} className="info-step">
              <div className="info-step__num">{step}</div>
              <div>
                <h3 className="info-step__title">{title}</h3>
                <p className="info-step__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link to="/auth" className="info-cta-box__btn" style={{ display: 'inline-flex' }}>Create Talent Profile <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>

      {/* For Casting */}
      <InfoSection className="info-section--alt">
        <SectionHeading label="For Casting Directors" title="Find Your Cast in" accent="4 Steps" subtitle="Post castings, discover talent, and manage your entire process in one place." />
        <div className="info-steps">
          {castingSteps.map(({ step, title, desc }) => (
            <div key={step} className="info-step info-step--gold">
              <div className="info-step__num info-step__num--gold">{step}</div>
              <div>
                <h3 className="info-step__title">{title}</h3>
                <p className="info-step__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link to="/auth" className="info-cta-box__btn info-cta-box__btn--gold" style={{ display: 'inline-flex' }}>Start Casting <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>

      {/* Highlights */}
      <InfoSection>
        <div className="hiw-highlights">
          {[
            { icon: CheckCircle2, label: 'Free for talent — always' },
            { icon: CheckCircle2, label: 'Verified casting calls only' },
            { icon: CheckCircle2, label: 'Safe in-app communication' },
            { icon: CheckCircle2, label: 'Talent from every state in India' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="hiw-highlight">
              <Icon size={18} style={{ color: 'var(--color-verified)', flexShrink: 0 }} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </InfoSection>
    </div>
  )
}
