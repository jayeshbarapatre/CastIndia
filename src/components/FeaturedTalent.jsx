import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import talent1 from '../assets/images/talent_1.jpg'
import TalentCard from './TalentCard'

export default function FeaturedTalent() {
  const revealRef = useScrollReveal()
  const [talentProfiles, setTalentProfiles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedTalent()
  }, [])

  const fetchFeaturedTalent = async () => {
    const { data, error } = await supabase
      .from('talent_profiles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6)

    if (error) {
      console.error('Error fetching featured talent:', error)
    } else if (data) {
      const formatted = data.map(t => ({
        id: t.id,
        name: t.full_name,
        image: talent1, // Mock image
        category: t.role_title || 'Actor',
        city: t.location || 'Mumbai',
        languages: t.primary_language ? [t.primary_language] : ['Hindi', 'English'],
        skills: t.skills || ['Drama'],
        verified: t.verified,
        experience: t.experience_level || 'Beginner',
        gradientClass: null,
        initials: t.full_name.substring(0, 2).toUpperCase(),
      }))
      setTalentProfiles(formatted)
    }
    setLoading(false)
  }

  return (
    <section
      id="featured-talent"
      className="section-pad relative bg-[var(--color-bg)] overflow-hidden"
      aria-label="Featured talent profiles"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(227,167,47,0.04)_0%,transparent_60%)] pointer-events-none" />
      
      <div ref={revealRef} className="container-xl relative z-10 reveal-up">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="eyebrow !mb-2">Featured Profiles</span>
            <h2 className="h2-section text-[var(--color-text-primary)]">
              Discover Exceptional
              <br />
              <span className="italic">Indian Talent</span>
            </h2>
          </div>
          <Link
            to="/talent"
            id="view-all-talent-btn"
            className="body-sm transition-colors shrink-0 text-[var(--color-gold)] font-semibold bg-transparent border-none cursor-pointer"
          >
            Browse All Talent →
          </Link>
        </div>

        {/* Desktop grid */}
        <div
          className="hidden md:grid grid-cols-3 gap-6"
        >
          {talentProfiles.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden scroll-x flex gap-4 pb-4">
          {talentProfiles.map((talent) => (
            <div key={talent.id} className="scroll-snap-start shrink-0 w-[280px]">
              <TalentCard talent={talent} />
            </div>
          ))}
        </div>

        {/* Create profile nudge */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between card-pad-lg mt-20 rounded-[24px] glass-panel border-[var(--color-gold-border)] shadow-[0_0_40px_rgba(227,167,47,0.1)] gap-6"
        >
          <div>
            <h3
              className="body-large text-[var(--color-gold)] font-semibold mb-2"
            >
              Are you a performer?
            </h3>
            <p className="body-sm text-[var(--color-text-secondary)]">
              Join thousands of verified talent profiles on CastIndia.
            </p>
          </div>
          <Link
            to="/talent/dashboard"
            id="talent-join-nudge-btn"
            className="btn-primary btn-md shrink-0 flex items-center justify-center"
          >
            Create Your Profile
          </Link>
        </div>
      </div>
    </section>
  )
}
