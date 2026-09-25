import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight, BarChart2, Clipboard, Users, FileText } from 'lucide-react'
import { InfoPageHero, InfoSection, InfoCard, InfoGrid, SectionHeading } from '../InfoPage'

const resources = [
  { icon: FileText, title: 'How to Write a Casting Brief', desc: 'A complete template for writing a clear, professional casting brief that attracts the right talent.', tag: 'Template', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)' },
  { icon: Users, title: 'Managing Large Applicant Pools', desc: 'Best practices for organizing, shortlisting, and communicating with hundreds of applicants efficiently.', tag: 'Guide', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)' },
  { icon: BarChart2, title: 'Industry Pay Rate Guide', desc: 'A comprehensive overview of standard pay rates for actors across OTT, film, ads, and web series in India.', tag: 'Reference', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)' },
  { icon: Clipboard, title: 'Audition Room Checklist', desc: 'Everything you need to set up a professional audition room — from lighting to release forms.', tag: 'Checklist', color: '#F87171', bg: 'rgba(248,113,113,0.12)' },
  { icon: BookOpen, title: 'Legal Contracts for Talent', desc: 'Downloadable contract templates for talent agreements, release forms, and NDA documents.', tag: 'Download', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)' },
  { icon: BarChart2, title: 'Platform Analytics Guide', desc: 'How to read your casting dashboard analytics to understand your reach and improve future castings.', tag: 'Tutorial', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)' },
]

export default function CastingResources() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="For Casting Directors"
        icon={BookOpen}
        title="Casting"
        accent="Resources"
        subtitle="Professional guides, templates, and references to help you run better casting calls."
      />

      <InfoSection>
        <SectionHeading label="For Directors" title="Resources to Cast" accent="Like a Pro" subtitle="From writing briefs to managing hundreds of applicants — we've got you covered." />
        <InfoGrid cols={3}>
          {resources.map(({ icon, title, desc, tag, color, bg }) => (
            <InfoCard key={title} title={title} icon={icon} iconColor={color} iconBg={bg}>
              <span className="info-resource-tag" style={{ color, borderColor: color, background: bg }}>{tag}</span>
              <p className="info-card__text" style={{ marginTop: '10px' }}>{desc}</p>
              <Link to="/auth" className="info-card__link">Access Resource <ArrowRight size={13} /></Link>
            </InfoCard>
          ))}
        </InfoGrid>
      </InfoSection>

      <InfoSection className="info-section--alt">
        <div className="info-cta-box">
          <h2 className="info-cta-box__title">Get full access to all resources</h2>
          <p className="info-cta-box__sub">Sign up as a casting director to unlock templates, contracts, and industry guides.</p>
          <Link to="/auth" className="info-cta-box__btn">Create Casting Account <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>
    </div>
  )
}
