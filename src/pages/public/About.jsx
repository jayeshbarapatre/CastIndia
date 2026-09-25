import React from 'react'
import { Link } from 'react-router-dom'
import { Info, ArrowRight, Target, Heart, Zap, Globe2, Award, Users } from 'lucide-react'
import { InfoPageHero, InfoSection, InfoCard, InfoGrid, SectionHeading } from './InfoPage'

const values = [
  { icon: Heart, title: 'Talent First', desc: 'We built this platform for talent. Every feature, every decision is made to help performers get discovered and succeed.', color: '#F87171', bg: 'rgba(248,113,113,0.12)' },
  { icon: Globe2, title: 'All of India', desc: 'We are not just Mumbai or Delhi. CastIndia is for every city, every language, and every screen — from Bollywood to regional OTT.', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)' },
  { icon: Zap, title: 'Faster Casting', desc: 'We remove friction. Casting a film should not take months of calls and WhatsApp groups. We make it fast, organized, and fair.', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)' },
  { icon: Award, title: 'Quality Over Quantity', desc: 'Every talent profile is reviewed. Every casting call is verified. We\'d rather have fewer, better listings than a flooded unmoderated board.', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)' },
]

const stats = [
  { value: '50,000+', label: 'Verified Talent Profiles' },
  { value: '2,400+', label: 'Casting Calls Posted' },
  { value: '18 States', label: 'Talent from Across India' },
  { value: '15+ Languages', label: 'Supported on Platform' },
]

const team = [
  { name: 'Jayesh Barapatre', role: 'Founder & CEO', initials: 'JB', color: 'var(--color-violet)' },
  { name: 'Priya Mehta', role: 'Head of Talent Relations', initials: 'PM', color: 'var(--color-gold)' },
  { name: 'Rahul Desai', role: 'Chief Technology Officer', initials: 'RD', color: 'var(--color-verified)' },
  { name: 'Anjali Singh', role: 'Head of Safety & Trust', initials: 'AS', color: '#F87171' },
]

export default function AboutCastIndia() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Our Story"
        icon={Info}
        title="About"
        accent="CastIndia"
        subtitle="India's premier digital casting and talent discovery platform — built to connect every performer with every opportunity."
      />

      {/* Mission */}
      <InfoSection>
        <div className="info-mission">
          <Target size={36} style={{ color: 'var(--color-violet-light)', marginBottom: '16px' }} />
          <h2 className="info-mission__title">Our Mission</h2>
          <p className="info-mission__text">
            CastIndia exists to democratize the casting process in India. We believe that talent is everywhere — in every city, in every language, from every background. Our job is to make sure that talent gets seen. And we believe casting directors deserve faster, smarter, fairer tools to find exactly who they're looking for.
          </p>
        </div>
      </InfoSection>

      {/* Stats */}
      <InfoSection className="info-section--alt">
        <div className="info-stats-row">
          {stats.map(({ value, label }) => (
            <div key={label} className="info-stat-item">
              <p className="info-stat-item__value">{value}</p>
              <p className="info-stat-item__label">{label}</p>
            </div>
          ))}
        </div>
      </InfoSection>

      {/* Values */}
      <InfoSection>
        <SectionHeading label="What We Stand For" title="Our Core" accent="Values" />
        <InfoGrid cols={2}>
          {values.map(v => (
            <InfoCard key={v.title} title={v.title} icon={v.icon} iconColor={v.color} iconBg={v.bg}>
              <p className="info-card__text">{v.desc}</p>
            </InfoCard>
          ))}
        </InfoGrid>
      </InfoSection>

      {/* Team */}
      <InfoSection className="info-section--alt">
        <SectionHeading label="The Team" title="People Behind" accent="CastIndia" />
        <div className="info-team-grid">
          {team.map(({ name, role, initials, color }) => (
            <div key={name} className="info-team-card">
              <div className="info-team-card__avatar" style={{ background: color }}>
                {initials}
              </div>
              <h3 className="info-team-card__name">{name}</h3>
              <p className="info-team-card__role">{role}</p>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection>
        <div className="info-cta-box">
          <h2 className="info-cta-box__title">Join the CastIndia community</h2>
          <p className="info-cta-box__sub">Whether you're talent or a casting director, there's a place for you here.</p>
          <Link to="/auth" className="info-cta-box__btn">Get Started Free <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>
    </div>
  )
}
