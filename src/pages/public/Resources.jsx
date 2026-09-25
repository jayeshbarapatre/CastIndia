import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight, FileText, Video, Download, Lightbulb, Award } from 'lucide-react'
import { InfoPageHero, InfoSection, InfoCard, InfoGrid, SectionHeading } from './InfoPage'

const guides = [
  { icon: Video, title: 'How to Film Your Self-Tape', desc: 'A step-by-step guide to filming a professional-quality audition from your phone at home.', tag: 'Video Guide', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)' },
  { icon: FileText, title: 'Writing the Perfect Bio', desc: 'Learn how to write a compelling talent bio that gets you noticed by casting directors.', tag: 'Article', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)' },
  { icon: Lightbulb, title: 'Cold Audition Tips', desc: 'Expert advice on how to walk into an audition room confident, prepared, and ready.', tag: 'Tips', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)' },
  { icon: Award, title: 'Understanding Casting Types', desc: 'The difference between OTT, feature film, ad, and web series castings — and how to prepare for each.', tag: 'Guide', color: '#F87171', bg: 'rgba(248,113,113,0.12)' },
  { icon: Download, title: 'Free Monologue Scripts', desc: 'Download 50+ free monologue scripts for film, theatre, and web. Sorted by genre, language, and age.', tag: 'Download', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)' },
  { icon: BookOpen, title: 'Industry Glossary', desc: 'A complete A–Z glossary of casting and film industry terms every aspiring actor should know.', tag: 'Reference', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)' },
]

export default function Resources() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Learning Hub"
        icon={BookOpen}
        title="Talent"
        accent="Resources"
        subtitle="Guides, tips, and tools to help you build your career in India's entertainment industry."
      />

      <InfoSection>
        <SectionHeading label="Learn & Grow" title="Resources for" accent="Every Stage" subtitle="Whether you're just starting out or already an experienced performer, we have something for you." />
        <InfoGrid cols={3}>
          {guides.map(({ icon, title, desc, tag, color, bg }) => (
            <InfoCard key={title} title={title} icon={icon} iconColor={color} iconBg={bg}>
              <span className="info-resource-tag" style={{ color, borderColor: color, background: bg }}>{tag}</span>
              <p className="info-card__text" style={{ marginTop: '10px' }}>{desc}</p>
              <Link to="/auth" className="info-card__link">Read More <ArrowRight size={13} /></Link>
            </InfoCard>
          ))}
        </InfoGrid>
      </InfoSection>

      <InfoSection className="info-section--alt">
        <div className="info-cta-box">
          <h2 className="info-cta-box__title">Get personalised guidance</h2>
          <p className="info-cta-box__sub">Create a free profile and unlock access to all resources, workshops, and industry insights.</p>
          <Link to="/auth" className="info-cta-box__btn">Get Free Access <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>
    </div>
  )
}
