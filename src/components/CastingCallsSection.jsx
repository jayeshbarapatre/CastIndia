
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const castingCalls = [
  {
    id: 'cc-1',
    projectName: 'Andhera',
    projectType: 'Web Series',
    platform: 'OTT',
    roleName: 'Lead Male — Detective',
    ageRange: '28–38',
    gender: 'Male',
    location: 'Mumbai',
    language: 'Hindi',
    auditionType: 'Self Tape',
    deadline: 'Oct 5, 2026',
    status: 'Applications Open',
    verified: true,
    urgent: false,
  },
  {
    id: 'cc-2',
    projectName: 'Project Ananya',
    projectType: 'Feature Film',
    platform: 'Theatrical',
    roleName: 'Supporting Female',
    ageRange: '22–30',
    gender: 'Female',
    location: 'Hyderabad',
    language: 'Telugu',
    auditionType: 'In-Person',
    deadline: 'Oct 10, 2026',
    status: 'Applications Open',
    verified: true,
    urgent: true,
  },
  {
    id: 'cc-3',
    projectName: 'Chai & Co.',
    projectType: 'Advertisement',
    platform: 'TV + Digital',
    roleName: 'Brand Ambassador',
    ageRange: '25–35',
    gender: 'Any',
    location: 'Delhi NCR',
    language: 'Hindi • English',
    auditionType: 'Self Tape',
    deadline: 'Oct 15, 2026',
    status: 'Applications Open',
    verified: true,
    urgent: false,
  },
  {
    id: 'cc-4',
    projectName: 'Rhythm Uncut',
    projectType: 'Music Video',
    platform: 'YouTube',
    roleName: 'Lead Dancer',
    ageRange: '18–26',
    gender: 'Female',
    location: 'Bengaluru',
    language: 'Kannada • Hindi',
    auditionType: 'In-Person',
    deadline: 'Sep 28, 2026',
    status: 'Applications Open',
    verified: false,
    urgent: true,
  },
  {
    id: 'cc-5',
    projectName: 'Sitara',
    projectType: 'TV Serial',
    platform: 'Star Plus',
    roleName: 'Child Lead — Age 10–14',
    ageRange: '10–14',
    gender: 'Female',
    location: 'Mumbai',
    language: 'Hindi',
    auditionType: 'Self Tape',
    deadline: 'Oct 20, 2026',
    status: 'Applications Open',
    verified: true,
    urgent: false,
  },
  {
    id: 'cc-6',
    projectName: 'NightOwl Podcast',
    projectType: 'Digital Content',
    platform: 'Spotify + YouTube',
    roleName: 'Voice Host',
    ageRange: '24–40',
    gender: 'Any',
    location: 'Remote',
    language: 'English',
    auditionType: 'Audio Submission',
    deadline: 'Oct 30, 2026',
    status: 'Applications Open',
    verified: true,
    urgent: false,
  },
]

import CastingCard from './CastingCard'

export default function CastingCallsSection() {
  const revealRef = useScrollReveal()

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
