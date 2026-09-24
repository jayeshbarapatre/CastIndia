import { Search } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useState } from 'react'

const categoryTabs = [
  { id: 'all',        icon: '⊞', label: 'All' },
  { id: 'actors',     icon: '🎭', label: 'Actors' },
  { id: 'models',     icon: '📸', label: 'Models' },
  { id: 'singers',    icon: '🎤', label: 'Singers' },
  { id: 'dancers',    icon: '💃', label: 'Dancers' },
  { id: 'performers', icon: '🎬', label: 'Performers' },
  { id: 'others',     icon: '✦',  label: 'Others' },
]

export default function QuickDiscovery() {
  const revealRef = useScrollReveal()
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section
      id="discovery"
      className="relative overflow-hidden"
      style={{ background: 'var(--color-bg)', paddingTop: '5rem', paddingBottom: '5rem' }}
      aria-label="Quick audition discovery"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: '100%', height: '300px',
        background: 'radial-gradient(ellipse at top, rgba(227,167,47,0.05) 0%, transparent 70%)'
      }} />

      <div ref={revealRef} className="container-xl relative z-10 reveal-up">

        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: 'var(--color-text-primary)',
            marginBottom: '0.75rem',
            lineHeight: 1.1,
          }}>
            Find Your <span style={{ color: '#E3A72F' }}>Next Opportunity</span>
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.01em' }}>
            Auditions, roles, modeling, singing, jobs — all in one place.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '820px', margin: '0 auto 2.5rem', position: 'relative' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            borderRadius: '999px',
            padding: '6px 6px 6px 24px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(16px)',
          }}>
            <Search size={20} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
            <input
              id="audition-search-input"
              type="search"
              placeholder="Search by city, location or keyword..."
              style={{
                flex: 1, background: 'transparent', outline: 'none', border: 'none',
                color: 'var(--color-text-primary)', fontSize: '0.95rem', height: '48px',
              }}
              aria-label="Search auditions, roles or projects"
            />
            <div className="hidden md:flex items-center gap-2">
              <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.1)' }} />
              {['All Categories', '#Locations'].map((filter) => (
                <select key={filter} style={{
                  outline: 'none', border: 'none', cursor: 'pointer', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.65)',
                  fontSize: '0.875rem', fontWeight: 500, padding: '0 16px', height: '44px',
                }}>
                  <option>{filter}</option>
                </select>
              ))}
            </div>
            <button id="discovery-search-btn" style={{
              display: 'flex', alignItems: 'center', padding: '0 28px', height: '48px',
              borderRadius: '999px', background: 'linear-gradient(135deg, #E3A72F 0%, #C8851A 100%)',
              color: '#000', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer', flexShrink: 0,
            }}>
              Search
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {categoryTabs.map(({ id, icon, label }) => (
            <button
              key={id}
              id={`quick-cat-${id}-btn`}
              onClick={() => setActiveTab(id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 20px', borderRadius: '999px',
                fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: activeTab === id ? '1.5px solid rgba(227,167,47,0.7)' : '1.5px solid rgba(255,255,255,0.08)',
                background: activeTab === id ? 'rgba(227,167,47,0.12)' : 'rgba(255,255,255,0.03)',
                color: activeTab === id ? '#E8C97A' : 'rgba(255,255,255,0.55)',
                boxShadow: activeTab === id ? '0 4px 16px rgba(227,167,47,0.15)' : 'none',
              }}
            >
              <span style={{ fontSize: '1rem' }}>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}


