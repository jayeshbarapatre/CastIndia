import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HelpCircle, ArrowRight, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import { InfoPageHero, InfoSection, SectionHeading } from './InfoPage'

const faqData = [
  {
    category: 'For Talent',
    items: [
      { q: 'Is CastIndia free to use for talent?', a: 'Yes! Creating a talent profile and applying to casting calls is completely free. We believe talent should never have to pay to be discovered.' },
      { q: 'How do I get shortlisted for a role?', a: 'Keep your profile complete and updated with recent photos, a demo reel, and accurate skills. Casting directors search for talent that matches specific requirements.' },
      { q: 'Can I apply from any city in India?', a: 'Absolutely. CastIndia connects talent from every city, town, and region. Many castings also accept remote applications or self-tape submissions.' },
      { q: 'How do I know if a casting call is genuine?', a: 'All casting calls on CastIndia are verified by our team. We review every listing before it goes live. Report any suspicious listings using the flag button.' },
      { q: 'Will I be contacted directly by casting directors?', a: 'Yes. When a casting director shortlists you, you will receive a notification and they can message you through the platform.' },
    ],
  },
  {
    category: 'For Casting Directors',
    items: [
      { q: 'How do I post a casting call?', a: 'After creating a casting director account, go to your dashboard and click "Post Casting". Fill in the role details, requirements, and deadline. It goes live after a quick review.' },
      { q: 'Can I search talent before posting a casting?', a: 'Yes. Use the Find Talent search to browse our entire talent database by skill, language, location, age range, and more.' },
      { q: 'How many applications can I expect?', a: 'Active casting calls typically receive 30–150 applications depending on the role requirements and reach. Our matching algorithm also surfaces the most relevant profiles.' },
      { q: 'Is there a fee for posting casting calls?', a: 'Basic listings are free. Premium listings get featured placement, more visibility, and advanced search filters. See our pricing page for details.' },
    ],
  },
  {
    category: 'Platform & Safety',
    items: [
      { q: 'How does CastIndia verify talent?', a: 'Talent can verify their identity with a government ID. Verified profiles get a blue checkmark and higher visibility in search results.' },
      { q: 'What if I receive an inappropriate message?', a: 'You can block and report any user from within a conversation. Our safety team reviews all reports within 24 hours.' },
      { q: 'Is my personal data safe?', a: 'Yes. We use end-to-end encryption for messages and never sell your personal data to third parties. Read our Privacy Policy for full details.' },
    ],
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-item__q">
        <span>{q}</span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Help Center"
        icon={HelpCircle}
        title="Frequently Asked"
        accent="Questions"
        subtitle="Everything you need to know about CastIndia — for talent and casting directors."
      />

      <InfoSection>
        <div className="faq-wrapper">
          {faqData.map(({ category, items }) => (
            <div key={category} style={{ marginBottom: '48px' }}>
              <SectionHeading title={category} />
              <div className="faq-list">
                {items.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
              </div>
            </div>
          ))}
        </div>

        <div className="info-cta-box">
          <MessageCircle size={32} style={{ color: 'var(--color-violet-light)', marginBottom: '12px' }} />
          <h2 className="info-cta-box__title">Still have questions?</h2>
          <p className="info-cta-box__sub">Our support team is here to help. We usually respond within a few hours.</p>
          <Link to="/contact" className="info-cta-box__btn">Contact Support <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>
    </div>
  )
}
