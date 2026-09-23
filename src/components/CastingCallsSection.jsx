import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import CastingCard from './CastingCard'
import { supabase } from '../lib/supabase'

export default function CastingCallsSection() {
  const revealRef = useScrollReveal()
  const [castingCalls, setCastingCalls] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCastingCalls()
  }, [])

  const fetchCastingCalls = async () => {
    const { data, error } = await supabase
      .from('casting_calls')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6)

    if (error) {
      console.error('Error fetching casting calls:', error)
    } else if (data) {
      const formatted = data.map(call => {
        const primaryRole = (call.roles && call.roles.length > 0) ? call.roles[0] : {}
        return {
          id: call.id,
          projectName: call.project_name,
          projectType: call.project_type,
          platform: call.platform || 'Any Platform',
          roleName: primaryRole.roleName || 'Unspecified Role',
          ageRange: primaryRole.ageRange || 'Any',
          gender: primaryRole.gender || 'Any',
          location: 'Anywhere',
          language: primaryRole.language || 'Any',
          auditionType: primaryRole.auditionType || 'Self Tape',
          deadline: 'Open', 
          status: 'Applications Open',
          verified: true,
          urgent: false,
        }
      })
      setCastingCalls(formatted)
    }
    setLoading(false)
  }

  return (
    <section
      id="casting-calls"
      className="section-pad relative bg-[var(--color-bg)] overflow-hidden"
      aria-label="Latest casting opportunities"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-full h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.03)_0%,transparent_60%)] pointer-events-none" />
      
      <div ref={revealRef} className="container-xl relative z-10 reveal-up">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="eyebrow !mb-2">Casting Calls</span>
            <h2 className="h2-section text-[var(--color-text-primary)]">
              Latest Casting
              <br />
              <span className="italic">Opportunities</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="body-sm text-[var(--color-text-muted)] max-w-[280px]">
              Illustrative placeholder casting calls. Real casting data will appear when the platform launches.
            </p>
            <Link
              to="/casting"
              id="view-all-castings-btn"
              className="body-sm transition-colors text-[var(--color-gold)] font-semibold bg-transparent border-none cursor-pointer"
            >
              View All Casting Calls →
            </Link>
          </div>
        </div>

        {/* Desktop 3-col grid */}
        <div
          className="hidden md:grid grid-cols-3 gap-6"
        >
          {castingCalls.map((call) => (
            <CastingCard key={call.id} call={call} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden scroll-x flex gap-4 pb-4">
          {castingCalls.map((call) => (
            <div key={call.id} className="scroll-snap-start shrink-0 w-[320px]">
              <CastingCard call={call} />
            </div>
          ))}
        </div>

        {/* View all bottom CTA */}
        <div className="hidden md:flex justify-center mt-16 pb-8">
          <Link to="/casting" className="btn-secondary">
            View All Casting Calls →
          </Link>
        </div>
      </div>
    </section>
  )
}
