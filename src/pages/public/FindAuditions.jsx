import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, MapPin, Clock, ArrowRight, Briefcase, Star } from 'lucide-react'
import { InfoPageHero, InfoSection, SectionHeading } from '../InfoPage'

const auditions = [
  { id: 1, title: 'Lead Actor – Cyberpunk Mumbai', type: 'Feature Film', location: 'Mumbai', deadline: '3 days left', pay: '₹2–5L', tags: ['Hindi', 'Action', '18–35'], featured: true },
  { id: 2, title: 'Brand Ambassador – Nike India TVC', type: 'Advertisement', location: 'Delhi', deadline: '5 days left', pay: '₹50K–1L', tags: ['Any language', 'Fit', 'Confident'], featured: false },
  { id: 3, title: 'Supporting Cast – Zindagi Web Series', type: 'Web Series', location: 'Hyderabad', deadline: '8 days left', pay: '₹30K–80K', tags: ['Telugu', 'Drama', '25–45'], featured: false },
  { id: 4, title: 'Voice Over – Animated Series', type: 'Animation', location: 'Remote', deadline: '10 days left', pay: '₹20K–60K', tags: ['Hindi', 'English', 'Kids'], featured: true },
  { id: 5, title: 'Classical Dancer – Shaadi Promo', type: 'Advertisement', location: 'Jaipur', deadline: '2 days left', pay: '₹15K–40K', tags: ['Classical', 'Dance', '18–30'], featured: false },
  { id: 6, title: 'Narrator – Documentary Film', type: 'Documentary', location: 'Remote', deadline: '12 days left', pay: '₹25K–50K', tags: ['Deep Voice', 'Hindi', 'English'], featured: false },
]

const TYPES = ['All', 'Feature Film', 'Web Series', 'Advertisement', 'Documentary', 'Animation']

export default function FindAuditions() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = auditions.filter(a => {
    const matchType = filter === 'All' || a.type === filter
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.location.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  return (
    <div className="animate-fade-in">
      <InfoPageHero
        badge="For Talent"
        icon={Search}
        title="Find Your Next"
        accent="Audition"
        subtitle="Browse hundreds of verified casting calls from top directors, OTT platforms, and brands across India."
      />

      <InfoSection>
        {/* Search + Filter */}
        <div className="auditions-controls">
          <div className="auditions-search-wrap">
            <Search size={16} className="auditions-search-icon" />
            <input
              className="auditions-search"
              placeholder="Search by title or city..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="auditions-filters">
            {TYPES.map(t => (
              <button key={t} onClick={() => setFilter(t)} className={`acct-filter-btn${filter === t ? ' acct-filter-btn--active' : ''}`}>{t}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="auditions-grid">
          {filtered.map(a => (
            <div key={a.id} className={`audition-card${a.featured ? ' audition-card--featured' : ''}`}>
              {a.featured && <span className="audition-card__featured-badge"><Star size={10} fill="currentColor" /> Featured</span>}
              <div className="audition-card__top">
                <span className="audition-card__type">{a.type}</span>
                <span className="audition-card__deadline"><Clock size={12} /> {a.deadline}</span>
              </div>
              <h3 className="audition-card__title">{a.title}</h3>
              <div className="audition-card__meta">
                <span><MapPin size={12} /> {a.location}</span>
                <span><Briefcase size={12} /> {a.pay}</span>
              </div>
              <div className="audition-card__tags">
                {a.tags.map(tag => <span key={tag} className="audition-card__tag">{tag}</span>)}
              </div>
              <Link to="/auth" className="audition-card__apply-btn">
                Apply Now <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-text-muted)' }}>
            No auditions found. Try a different filter.
          </div>
        )}

        <div className="info-cta-box" style={{ marginTop: '60px' }}>
          <h2 className="info-cta-box__title">See 500+ more castings</h2>
          <p className="info-cta-box__sub">Create a free profile to apply and get personalised recommendations.</p>
          <Link to="/auth" className="info-cta-box__btn">Create Free Profile <ArrowRight size={16} /></Link>
        </div>
      </InfoSection>
    </div>
  )
}
