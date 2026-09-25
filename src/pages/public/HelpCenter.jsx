import React from 'react'
import { Link } from 'react-router-dom'
import { HelpCircle, ArrowRight, MessageCircle, BookOpen, Search, Zap } from 'lucide-react'
import { InfoPageHero, InfoSection, InfoCard, InfoGrid, SectionHeading } from './InfoPage'

const quickLinks = [
  { icon: BookOpen, title: 'Getting Started', desc: 'New here? Learn how to set up your profile and start using CastIndia in minutes.', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)', link: '/how-it-works' },
  { icon: Search, title: 'Find Auditions', desc: 'Learn how to search, filter, and apply for casting calls that match your skills.', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)', link: '/auditions' },
  { icon: Zap, title: 'Start Casting', desc: 'For casting directors — how to post a casting call, manage applications, and shortlist talent.', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)', link: '/start-casting' },
  { icon: HelpCircle, title: 'FAQ', desc: 'Answers to the most commonly asked questions about CastIndia, applications, and safety.', color: '#F87171', bg: 'rgba(248,113,113,0.12)', link: '/faq' },
]

const popularArticles = [
  'How do I upload my demo reel?',
  'Why was my casting call rejected?',
  'How do I verify my talent profile?',
  'Can I edit my application after submitting?',
  'How do I reset my password?',
  'What is the difference between Talent and Casting accounts?',
  'How do shortlists work?',
  'How do I delete my account?',
]

export default function HelpCenter() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Support"
        icon={HelpCircle}
        title="Help"
        accent="Center"
        subtitle="Everything you need to use CastIndia confidently — guides, FAQs, and direct support."
      />

      <InfoSection>
        <SectionHeading label="Browse Topics" title="How Can We" accent="Help You?" />
        <InfoGrid cols={2}>
          {quickLinks.map(({ icon, title, desc, color, bg, link }) => (
            <InfoCard key={title} title={title} icon={icon} iconColor={color} iconBg={bg}>
              <p className="info-card__text">{desc}</p>
              <Link to={link} className="info-card__link">Learn More <ArrowRight size={13} /></Link>
            </InfoCard>
          ))}
        </InfoGrid>
      </InfoSection>

      <InfoSection className="info-section--alt">
        <SectionHeading label="Popular Articles" title="Common" accent="Questions" />
        <div className="help-articles">
          {popularArticles.map((article, i) => (
            <Link key={i} to="/faq" className="help-article">
              <span>{article}</span>
              <ArrowRight size={14} className="help-article__arrow" />
            </Link>
          ))}
        </div>
      </InfoSection>

      <InfoSection>
        <div className="info-cta-box">
          <MessageCircle size={32} style={{ color: 'var(--color-violet-light)', marginBottom: '12px' }} />
          <h2 className="info-cta-box__title">Can't find what you're looking for?</h2>
          <p className="info-cta-box__sub">Our support team responds within 4–8 hours on weekdays.</p>
          <Link to="/contact" className="info-cta-box__btn">Contact Support <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>
    </div>
  )
}
