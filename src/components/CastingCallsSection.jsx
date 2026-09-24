import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import cat_acting from '../assets/images/cat_acting.jpg'
import cat_modeling from '../assets/images/cat_modeling.jpg'
import cat_musician from '../assets/images/cat_musician.jpg'

// Fallback demo cards when DB is empty
const demoCards = [
  {
    id: 'demo-1',
    projectType: 'Feature Film',
    projectName: 'Actors for Streaming Film',
    location: 'Mumbai', gender: 'Female', language: 'Hindi',
    deadline: '22 Aug 2026',
    thumb: cat_acting,
  },
  {
    id: 'demo-2',
    projectType: 'Commercial',
    projectName: 'Face Models for FashionBrand',
    location: 'Delhi', gender: 'Male', language: 'Marathi',
    deadline: '18 Aug 2026',
    thumb: cat_modeling,
  },
  {
    id: 'demo-3',
    projectType: 'Music Video',
    projectName: 'Singers for Music Video',
    location: 'Delhi', gender: 'Male', language: 'Delhi',
    deadline: '30 Aug 2026',
    thumb: cat_musician,
  },
]

export default function CastingCallsSection() {
  const revealRef = useScrollReveal()
  const [castingCalls, setCastingCalls] = useState([])

  useEffect(() => { fetchCastingCalls() }, [])

  const fetchCastingCalls = async () => {
    const { data, error } = await supabase
      .from('casting_calls')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3)

    if (!error && data && data.length > 0) {
      setCastingCalls(data.map((call, i) => ({
        id: call.id,
        projectType: call.project_type || 'Casting',
        projectName: call.project_name,
        location: 'Mumbai',
        gender: call.roles?.[0]?.gender || 'Any',
        language: call.roles?.[0]?.language || 'Hindi',
        deadline: 'Open',
        thumb: [cat_acting, cat_modeling, cat_musician][i % 3],
      })))
    } else {
      setCastingCalls(demoCards)
    }
  }

  return (
    <section
      id="casting-calls"
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
      aria-label="Latest casting opportunities"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(227,167,47,0.04) 0%, transparent 60%)'
      }} />

      <div ref={revealRef} className="container-xl relative z-10 reveal-up">
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '1.5rem', alignItems: 'stretch', minHeight: '340px' }}>

          {/* Left — dark hero card */}
          <div style={{
            borderRadius: '20px',
            background: 'linear-gradient(160deg, rgba(227,167,47,0.12) 0%, rgba(10,8,20,0.95) 60%)',
            border: '1px solid rgba(227,167,47,0.2)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Camera icon decoration */}
            <div style={{
              position: 'absolute', top: '-20px', right: '-20px',
              width: '140px', height: '140px', opacity: 0.06,
            }}>
              <svg viewBox="0 0 100 100" fill="white">
                <path d="M85 25H70l-8-10H38l-8 10H15C9.5 25 5 29.5 5 35v45c0 5.5 4.5 10 10 10h70c5.5 0 10-4.5 10-10V35c0-5.5-4.5-10-10-10zm-35 45c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"/>
              </svg>
            </div>

            <div>
              <span style={{
                fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#E3A72F', fontWeight: 700, display: 'block', marginBottom: '1rem'
              }}>LATEST CASTING OPPORTUNITIES</span>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                color: 'var(--color-text-primary)',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}>
                Latest<br />
                <span style={{ color: '#E3A72F', fontStyle: 'italic' }}>Casting</span>
                <br />Opportunities
              </h2>
              <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
                Fresh auditions from top production houses. Actors, models, musicians and more.
              </p>
            </div>

            <Link to="/casting" id="view-all-castings-btn" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0 20px', height: '42px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #E3A72F 0%, #C8851A 100%)',
              color: '#000', fontWeight: 700, fontSize: '0.82rem',
              border: 'none', cursor: 'pointer', textDecoration: 'none', alignSelf: 'flex-start',
              marginTop: '1.5rem',
            }}>
              View All Opportunities →
            </Link>
          </div>

          {/* Right — 3 casting cards stacked vertically */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {castingCalls.map(({ id, projectType, projectName, location, gender, language, deadline, thumb }) => (
              <div key={id} style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'border-color 0.3s, transform 0.3s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(227,167,47,0.35)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100px' }}>
                  <img src={thumb} alt={projectName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(10,8,20,0.5))' }} />
                </div>

                {/* Info */}
                <div style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.4rem' }}>
                  <span style={{
                    display: 'inline-block', fontSize: '0.65rem', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    background: 'rgba(227,167,47,0.15)', color: '#E3A72F',
                    padding: '2px 10px', borderRadius: '999px',
                    alignSelf: 'flex-start',
                  }}>{projectType}</span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.2 }}>
                    {projectName}
                  </h3>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Gender', val: gender },
                      { label: 'Lang', val: language },
                      { label: 'Date', val: deadline },
                    ].map(({ label, val }) => (
                      <div key={label} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
                        <span style={{ color: 'rgba(255,255,255,0.25)', marginRight: '4px' }}>{label}:</span>
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
