import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import talent1 from '../assets/images/talent_1.jpg'
import talent2 from '../assets/images/talent_2.jpg'
import talent3 from '../assets/images/talent_3.jpg'
import TalentCard from './TalentCard'

// Mock Data
const talentProfiles = [
  {
    id: 't1',
    name: 'Rahul Mehta',
    image: talent1,
    category: 'Actor',
    city: 'Mumbai',
    languages: ['Hindi', 'English', 'Marathi'],
    skills: ['Drama', 'Theatre', 'Action'],
    verified: true,
    experience: '6 years',
    gradientClass: null,
    initials: null,
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    image: talent2,
    category: 'Actress',
    city: 'Delhi',
    languages: ['Hindi', 'English', 'Punjabi'],
    skills: ['Comedy', 'Drama', 'OTT'],
    verified: true,
    experience: '4 years',
    gradientClass: null,
    initials: null,
  },
  {
    id: 't3',
    name: 'Ananya Krishnan',
    image: talent3,
    category: 'Model',
    city: 'Bengaluru',
    languages: ['Kannada', 'English', 'Hindi'],
    skills: ['Runway', 'Editorial', 'Commercial'],
    verified: true,
    experience: '5 years',
    gradientClass: null,
    initials: null,
  },
  {
    id: 't4',
    name: 'Arjun Nair',
    image: null,
    category: 'Singer',
    city: 'Chennai',
    languages: ['Tamil', 'Hindi', 'English'],
    skills: ['Playback', 'Live', 'Carnatic'],
    verified: true,
    experience: '8 years',
    gradientClass: 'bg-[linear-gradient(135deg,rgba(201,168,76,0.15),rgba(108,99,255,0.2))]',
    initials: 'AN',
  },
  {
    id: 't5',
    name: 'Meera Pillai',
    image: null,
    category: 'Dancer',
    city: 'Hyderabad',
    languages: ['Telugu', 'Hindi', 'English'],
    skills: ['Bharatanatyam', 'Contemporary', 'Bollywood'],
    verified: false,
    experience: '7 years',
    gradientClass: 'bg-[linear-gradient(135deg,rgba(108,99,255,0.15),rgba(46,204,113,0.15))]',
    initials: 'MP',
  },
  {
    id: 't6',
    name: 'Kabir Syed',
    image: null,
    category: 'Voice Artist',
    city: 'Mumbai',
    languages: ['Hindi', 'Urdu', 'English'],
    skills: ['Dubbing', 'Narration', 'Commercial'],
    verified: true,
    experience: '10 years',
    gradientClass: 'bg-[linear-gradient(135deg,rgba(46,204,113,0.15),rgba(201,168,76,0.15))]',
    initials: 'KS',
  },
]

export default function FeaturedTalent() {
  const revealRef = useScrollReveal()

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
