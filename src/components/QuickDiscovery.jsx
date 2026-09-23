import { Search, SlidersHorizontal } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const quickCategories = [
  { icon: '🎭', label: 'Acting' },
  { icon: '📸', label: 'Modeling' },
  { icon: '🎙', label: 'Voice' },
  { icon: '💃', label: 'Dance' },
  { icon: '🎤', label: 'Singing' },
  { icon: '📺', label: 'TV' },
  { icon: '🎬', label: 'Film' },
  { icon: '📱', label: 'Digital' },
]

export default function QuickDiscovery() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="discovery"
      className="relative bg-[var(--color-bg)] overflow-hidden"
      aria-label="Quick audition discovery"
    >
      {/* Ambient glow matching the hero transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(227,167,47,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div ref={revealRef} className="container-xl section-pad relative z-10 reveal-up">

        {/* Section Label */}
        <div className="text-center mb-16">
          <h2
            className="h2-section text-[var(--color-text-primary)] mb-4"
          >
            Find Your Next Opportunity
          </h2>
          <p className="body-large text-[var(--color-text-muted)] max-w-[700px] mx-auto">
            Search across thousands of auditions, roles and projects from across India
          </p>
        </div>

        {/* Search Bar — 56px height */}
        <div className="max-w-[880px] mx-auto mb-16 relative group">
          <div className="absolute inset-0 bg-[var(--color-gold)] blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
          <div
            className="glass-panel relative flex items-center gap-4 rounded-full p-3 pl-8 transition-transform duration-300 group-hover:-translate-y-1"
          >
            {/* Search input area */}
            <Search size={24} className="text-[var(--color-text-secondary)] shrink-0" />
            <input
              id="audition-search-input"
              type="search"
              placeholder="Search auditions, roles or projects..."
              className="flex-1 bg-transparent outline-none border-none text-[var(--color-text-primary)] font-ui text-[18px] h-[52px]"
              aria-label="Search auditions, roles or projects"
            />

            {/* Filter dropdowns — desktop only */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-[1px] h-8 bg-[var(--color-border)]" />
              {['Category', 'Location', 'Language'].map((filter) => (
                <select
                  key={filter}
                  id={`filter-${filter.toLowerCase()}`}
                  className="outline-none border-none cursor-pointer rounded-[14px] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-primary)] font-ui text-[16px] font-medium px-5 h-[52px] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                  aria-label={`Filter by ${filter}`}
                >
                  <option>{filter}</option>
                  {filter === 'Category' && (
                    <>
                      <option>Acting</option>
                      <option>Modeling</option>
                      <option>Singing</option>
                      <option>Dance</option>
                      <option>Voice</option>
                      <option>Anchoring</option>
                    </>
                  )}
                  {filter === 'Location' && (
                    <>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Hyderabad</option>
                      <option>Chennai</option>
                      <option>Bengaluru</option>
                      <option>Kolkata</option>
                    </>
                  )}
                  {filter === 'Language' && (
                    <>
                      <option>Hindi</option>
                      <option>English</option>
                      <option>Tamil</option>
                      <option>Telugu</option>
                      <option>Marathi</option>
                      <option>Bengali</option>
                    </>
                  )}
                </select>
              ))}
            </div>

            {/* Search button */}
            <button
              id="discovery-search-btn"
              className="btn-primary !h-[52px] !rounded-[16px] shrink-0"
            >
              Search
            </button>
          </div>

          <div
            className="md:hidden flex gap-2 scroll-x pb-1 mt-3"
          >
            {['Category', 'Location', 'Language'].map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-2 rounded-[14px] whitespace-nowrap transition-colors shrink-0 bg-[rgba(255,255,255,0.03)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-[15px] font-medium px-5 h-[48px] hover:bg-[rgba(255,255,255,0.08)]"
              >
                <SlidersHorizontal size={14} />
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-16 relative z-10">
          {quickCategories.map(({ icon, label }) => (
            <button
              key={label}
              id={`quick-cat-${label.toLowerCase()}-btn`}
              className="flex items-center rounded-full cursor-pointer transition-all duration-300 gap-2.5 px-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[var(--color-text-secondary)] text-[16px] font-medium h-[48px] hover:-translate-y-1 hover:border-[var(--color-gold-border)] hover:text-[var(--color-gold)] hover:bg-[var(--color-gold-muted)] hover:shadow-[0_8px_24px_rgba(227,167,47,0.15)]"
            >
              <span className="text-[18px]">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
