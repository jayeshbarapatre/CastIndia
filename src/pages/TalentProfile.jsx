import { MapPin, Globe, CheckCircle, Share2, PlayCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import talent1 from '../assets/images/talent_1.jpg'

// Mock Data
const talentData = {
  id: 't1',
  name: 'Rahul Mehta',
  image: talent1,
  category: 'Actor',
  city: 'Mumbai, Maharashtra',
  languages: ['Hindi (Native)', 'English (Fluent)', 'Marathi (Conversational)'],
  skills: ['Drama', 'Theatre', 'Action', 'Voiceover', 'Horse Riding'],
  verified: true,
  experience: '6 years',
  about: "I am a professionally trained actor with 6 years of experience in both theatre and on-screen acting. I have a strong foundation in dramatic arts from NSD and have recently transitioned into web series and feature films. My physical build allows me to comfortably perform action sequences, and I'm deeply committed to character development.",
  stats: {
    height: "5' 10\"",
    weight: "72 kg",
    eyeColor: "Brown",
    hairColor: "Black"
  },
  showreel: "https://example.com/showreel",
  recentWork: [
    { title: "Shadows of the City", role: "Supporting", type: "Web Series", year: "2025" },
    { title: "Parinda", role: "Lead", type: "Short Film", year: "2024" },
    { title: "Zomato Delivery", role: "Featured", type: "Advertisement", year: "2024" }
  ]
}

export default function TalentProfile() {
  const talent = talentData

  return (
    <div className="max-w-[1000px] mx-auto w-full px-4 pt-8 pb-32 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-8 meta text-[var(--color-text-muted)]">
        <Link to="/talent" className="hover:text-[var(--color-violet-light)] transition-colors">Find Talent</Link>
        <span>/</span>
        <span className="text-[var(--color-text-secondary)]">{talent.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Photos & Stats */}
        <div className="space-y-6">
          <div className="glass-panel p-4 rounded-[24px]">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4">
              <img src={talent.image} alt={talent.name} className="w-full h-full object-cover" />
            </div>
            <button className="btn-primary w-full flex justify-center !py-3 !bg-[var(--color-violet)] hover:!bg-[var(--color-violet-light)] hover:!text-white hover:!shadow-[0_4px_20px_rgba(108,99,255,0.25)] !text-white !border-[var(--color-violet)] mb-3">
              Shortlist Candidate
            </button>
            <button className="btn-secondary w-full flex justify-center !py-3">
              Send Message
            </button>
          </div>

          <div className="glass-panel card-pad-lg rounded-[24px]">
            <h3 className="body-large font-bold text-[var(--color-text-primary)] mb-4">Physical Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="body-sm text-[var(--color-text-muted)]">Height</span>
                <span className="body-sm font-semibold text-[var(--color-text-primary)]">{talent.stats.height}</span>
              </div>
              <div className="flex justify-between">
                <span className="body-sm text-[var(--color-text-muted)]">Weight</span>
                <span className="body-sm font-semibold text-[var(--color-text-primary)]">{talent.stats.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="body-sm text-[var(--color-text-muted)]">Eye Color</span>
                <span className="body-sm font-semibold text-[var(--color-text-primary)]">{talent.stats.eyeColor}</span>
              </div>
              <div className="flex justify-between">
                <span className="body-sm text-[var(--color-text-muted)]">Hair Color</span>
                <span className="body-sm font-semibold text-[var(--color-text-primary)]">{talent.stats.hairColor}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="glass-panel card-pad-lg rounded-[24px]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="h2-section text-[var(--color-text-primary)]">{talent.name}</h1>
                  {talent.verified && (
                    <div className="badge-verified shrink-0">
                      <CheckCircle size={12} /> Verified
                    </div>
                  )}
                </div>
                <p className="body-large text-[var(--color-violet-light)] font-medium mb-4">{talent.category} • {talent.experience}</p>
                
                <div className="flex items-center gap-4 meta text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {talent.city}</span>
                  <span className="flex items-center gap-1.5"><Globe size={14} /> @rahulmehta_act</span>
                </div>
              </div>
              
              <button className="w-10 h-10 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-violet-light)] border border-[var(--color-border)] hover:border-[var(--color-violet-border)] transition-colors" aria-label="Share profile">
                <Share2 size={16} />
              </button>
            </div>

            <div className="h-[1px] w-full bg-[var(--color-border)] my-6" />

            <h3 className="body-large font-bold text-[var(--color-text-primary)] mb-3">About</h3>
            <p className="body-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {talent.about}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="body-large font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                  <Globe size={18} className="text-[var(--color-violet-light)]" /> Languages
                </h3>
                <ul className="space-y-2">
                  {talent.languages.map(lang => (
                    <li key={lang} className="body-sm text-[var(--color-text-secondary)]">{lang}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="body-large font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                  <Star size={18} className="text-[var(--color-violet-light)]" /> Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {talent.skills.map(skill => (
                    <span key={skill} className="tag-pill !bg-[rgba(108,99,255,0.05)] !border-[rgba(108,99,255,0.1)] !text-[var(--color-text-secondary)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Showreel */}
          <div className="glass-panel card-pad-lg rounded-[24px]">
            <h2 className="h3-card text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <PlayCircle size={20} className="text-[var(--color-violet-light)]" />
              Showreel & Media
            </h2>
            <div className="aspect-video bg-[var(--color-surface-2)] rounded-xl border border-[var(--color-border)] flex flex-col items-center justify-center text-[var(--color-text-muted)] cursor-pointer hover:border-[var(--color-violet-border)] transition-colors group">
              <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] group-hover:bg-[var(--color-violet)] flex items-center justify-center mb-4 transition-colors">
                <PlayCircle size={32} className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors" />
              </div>
              <p className="body-sm font-semibold text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">Play Dramatic Showreel (2025)</p>
            </div>
          </div>

          {/* Recent Work */}
          <div className="glass-panel card-pad-lg rounded-[24px]">
            <h2 className="h3-card text-[var(--color-text-primary)] mb-6">Recent Credits</h2>
            <div className="space-y-4">
              {talent.recentWork.map((work, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]">
                  <div>
                    <p className="body-sm font-bold text-[var(--color-text-primary)]">{work.title}</p>
                    <p className="meta text-[var(--color-text-secondary)]">{work.role} • {work.type}</p>
                  </div>
                  <span className="meta font-semibold text-[var(--color-text-muted)] mt-2 sm:mt-0">{work.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-[var(--color-bg)]/90 backdrop-blur-xl border-t border-[var(--color-border)] z-40 pb-[env(safe-area-inset-bottom,16px)]">
        <button className="btn-primary w-full flex justify-center !h-[50px] !text-[16px] shadow-lg !bg-[var(--color-violet)] hover:!bg-[var(--color-violet-light)] !border-[var(--color-violet)] !text-white">
          Shortlist Candidate
        </button>
      </div>
    </div>
  )
}
