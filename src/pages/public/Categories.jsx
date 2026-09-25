import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, ArrowRight, Film, Mic2, Camera, Music, Tv2, Palette, Radio, Users } from 'lucide-react'
import { InfoPageHero, InfoSection, SectionHeading } from './InfoPage'

const categories = [
  { icon: Film, label: 'Actors', count: '18,400+', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)', sub: 'Feature Film · Web Series · OTT' },
  { icon: Camera, label: 'Models', count: '7,200+', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)', sub: 'Fashion · Commercial · Editorial' },
  { icon: Music, label: 'Dancers', count: '5,800+', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)', sub: 'Classical · Contemporary · Bollywood' },
  { icon: Mic2, label: 'Voice Artists', count: '4,100+', color: '#F87171', bg: 'rgba(248,113,113,0.12)', sub: 'Narration · Dubbing · Jingles' },
  { icon: Tv2, label: 'TV Artists', count: '9,600+', color: 'var(--color-violet-light)', bg: 'rgba(139,92,246,0.15)', sub: 'Reality TV · Soaps · News' },
  { icon: Palette, label: 'Background Artists', count: '12,000+', color: 'var(--color-gold)', bg: 'rgba(227,167,47,0.15)', sub: 'Crowd · Extras · Atmosphere' },
  { icon: Radio, label: 'RJ / Podcast Hosts', count: '1,400+', color: 'var(--color-verified)', bg: 'rgba(46,204,113,0.12)', sub: 'Radio · Podcast · Digital' },
  { icon: Users, label: 'Child Artists', count: '2,300+', color: '#F87171', bg: 'rgba(248,113,113,0.12)', sub: 'Film · TV · Ad · Theatre' },
]

const languages = ['Hindi', 'English', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Punjabi', 'Gujarati', 'Malayalam', 'Odia', 'Bhojpuri', 'Rajasthani', 'Urdu', 'Assamese', 'Maithili']
const cities = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Chandigarh', 'Lucknow', 'Bhopal', 'Kochi', 'Nagpur', 'Indore', 'Surat']

export default function Categories() {
  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="Platform"
        icon={Grid}
        title="Talent"
        accent="Categories"
        subtitle="Discover talent across every type, language, and city in India."
      />

      <InfoSection>
        <SectionHeading label="Browse by Type" title="Find Talent by" accent="Category" subtitle="From lead actors to background artists — every kind of talent in one place." />
        <div className="categories-grid">
          {categories.map(({ icon: Icon, label, count, color, bg, sub }) => (
            <Link to="/auth" key={label} className="category-card">
              <div className="category-card__icon" style={{ background: bg, color }}>
                <Icon size={22} />
              </div>
              <div>
                <h3 className="category-card__label">{label}</h3>
                <p className="category-card__sub">{sub}</p>
              </div>
              <span className="category-card__count" style={{ color }}>{count}</span>
            </Link>
          ))}
        </div>
      </InfoSection>

      <InfoSection className="info-section--alt">
        <SectionHeading label="Browse by Language" title="Talent in Every" accent="Language" />
        <div className="acct-tag-group" style={{ justifyContent: 'center', gap: '10px' }}>
          {languages.map(l => (
            <Link key={l} to="/auth" className="category-lang-tag">{l}</Link>
          ))}
        </div>
      </InfoSection>

      <InfoSection>
        <SectionHeading label="Browse by City" title="Talent in Every" accent="City" />
        <div className="acct-tag-group" style={{ justifyContent: 'center', gap: '10px' }}>
          {cities.map(c => (
            <Link key={c} to="/auth" className="category-lang-tag">{c}</Link>
          ))}
        </div>

        <div className="info-cta-box" style={{ marginTop: '60px' }}>
          <h2 className="info-cta-box__title">Can't find what you need?</h2>
          <p className="info-cta-box__sub">Use our advanced talent search to filter by any combination of criteria.</p>
          <Link to="/auth" className="info-cta-box__btn">Search All Talent <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>
    </div>
  )
}
