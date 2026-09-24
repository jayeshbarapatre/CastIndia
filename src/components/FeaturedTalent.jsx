import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import talent1 from '../assets/images/talent_1.jpg'
import talent2 from '../assets/images/talent_2.jpg'
import talent3 from '../assets/images/talent_3.jpg'

const demoTalent = [
  { id: 'd1', name: 'Kartik Singh',  category: 'Actor',     city: 'Mumbai',    rating: 5.0, image: talent1 },
  { id: 'd2', name: 'Neha Gupta',   category: 'Model',     city: 'Delhi',     rating: 5.0, image: talent2 },
  { id: 'd3', name: 'Rohan Sharma', category: 'Musician',  city: 'Bengaluru', rating: 4.8, image: talent3 },
  { id: 'd4', name: 'Priya Varma',  category: 'Dancer',    city: 'Chennai',   rating: 5.0, image: talent1 },
  { id: 'd5', name: 'Arjun Mehta',  category: 'Performer', city: 'Hyderabad', rating: 4.9, image: talent2 },
]

function StarRating({ rating }) {
  const full = Math.floor(rating)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={i <= full ? '#E3A72F' : 'rgba(255,255,255,0.2)'}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
      <span style={{ fontSize: '0.72rem', color: '#E3A72F', fontWeight: 700, marginLeft: '4px' }}>{rating.toFixed(1)}</span>
    </div>
  )
}

export default function FeaturedTalent() {
  const revealRef = useScrollReveal()
  const scrollRef = useRef(null)
  const [talents, setTalents] = useState([])

  useEffect(() => { fetchFeaturedTalent() }, [])

  const fetchFeaturedTalent = async () => {
    const { data, error } = await supabase
      .from('talent_profiles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)

    if (!error && data && data.length > 0) {
      setTalents(data.map((t, i) => ({
        id: t.id,
        name: t.full_name,
        category: t.role_title || 'Actor',
        city: t.location || 'Mumbai',
        rating: 5.0,
        image: [talent1, talent2, talent3][i % 3],
      })))
    } else {
      setTalents(demoTalent)
    }
  }

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="featured-talent"
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
      aria-label="Featured talent profiles"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 70% 40%, rgba(227,167,47,0.04) 0%, transparent 60%)'
      }} />

      <div ref={revealRef} className="container-xl relative z-10 reveal-up">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{
              fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', fontWeight: 600, display: 'block', marginBottom: '0.5rem'
            }}>TALENT SHOWCASE</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: 'var(--color-text-primary)', marginBottom: '0.35rem', lineHeight: 1.1
            }}>Featured Talent</h2>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)' }}>
              Meet some of the amazing talents already on our platform.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Prev/Next arrows */}
            {[{ dir: -1, label: '←' }, { dir: 1, label: '→' }].map(({ dir, label }) => (
              <button key={dir} onClick={() => scroll(dir)} style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)', fontSize: '1rem', cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(227,167,47,0.15)'; e.currentTarget.style.borderColor = 'rgba(227,167,47,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >{label}</button>
            ))}
            <Link to="/talent" id="view-all-talent-btn" style={{
              fontSize: '0.83rem', color: '#E3A72F', fontWeight: 600, textDecoration: 'none'
            }}>
              View All Talents →
            </Link>
          </div>
        </div>

        {/* Horizontal scrollable talent cards */}
        <div ref={scrollRef} style={{
          display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem',
          scrollSnapType: 'x mandatory', scrollbarWidth: 'none',
        }}>
          {talents.map(({ id, name, category, city, rating, image }) => (
            <div key={id} style={{
              flexShrink: 0, width: '190px', borderRadius: '18px', overflow: 'hidden',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              scrollSnapAlign: 'start', transition: 'border-color 0.3s, transform 0.3s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(227,167,47,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Photo */}
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                <img src={image} alt={name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,20,0.6) 0%, transparent 50%)' }} />
                {/* Play button */}
                <div style={{
                  position: 'absolute', bottom: '10px', right: '10px',
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                    <path d="M0 0l10 6-10 6z"/>
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '0.875rem 1rem' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '2px' }}>{name}</h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginBottom: '6px' }}>{category} · {city}</p>
                <StarRating rating={rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
