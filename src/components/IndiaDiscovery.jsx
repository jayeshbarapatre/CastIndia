import { useScrollReveal } from '../hooks/useScrollReveal'

const cities = [
  { name: 'Mumbai', count: '3,200+', label: 'Film Capital' },
  { name: 'Delhi', count: '1,800+', label: 'Media Hub' },
  { name: 'Hyderabad', count: '1,400+', label: 'Tollywood' },
  { name: 'Chennai', count: '1,200+', label: 'Kollywood' },
  { name: 'Bengaluru', count: '900+', label: 'Tech & Content' },
  { name: 'Kolkata', count: '800+', label: 'Tollywood East' },
  { name: 'Ahmedabad', count: '500+', label: 'Gujarati Cinema' },
  { name: 'Pune', count: '600+', label: 'Marathi Stage' },
]

const languages = [
  { name: 'Hindi', script: 'हिन्दी', color: 'text-[#C9A84C]' },
  { name: 'English', script: 'English', color: 'text-[#6C63FF]' },
  { name: 'Marathi', script: 'मराठी', color: 'text-[#2ECC71]' },
  { name: 'Tamil', script: 'தமிழ்', color: 'text-[#F48FB1]' },
  { name: 'Telugu', script: 'తెలుగు', color: 'text-[#7DD3FC]' },
  { name: 'Bengali', script: 'বাংলা', color: 'text-[#FBD38D]' },
  { name: 'Kannada', script: 'ಕನ್ನಡ', color: 'text-[#FCA5A5]' },
  { name: 'Gujarati', script: 'ગુજરાતી', color: 'text-[#9B96FF]' },
  { name: 'Malayalam', script: 'മലയാളം', color: 'text-[#5CE88A]' },
  { name: 'Punjabi', script: 'ਪੰਜਾਬੀ', color: 'text-[#E8C97A]' },
]

export default function IndiaDiscovery() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="india-discovery"
      className="section-pad relative bg-[var(--color-bg)] overflow-hidden border-t border-[rgba(255,255,255,0.03)]"
      aria-label="India-first talent discovery"
    >
      <div ref={revealRef} className="container-xl relative z-10 reveal-up">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="eyebrow !mb-2"
          >
            India-First Platform
          </p>
          <h2
            className="h2-section text-[var(--color-text-primary)] mb-5"
          >
            Talent from{' '}
            <span className="text-gradient-gold italic">Across India</span>
          </h2>
          <p
            className="body-large max-w-[560px] mx-auto text-[var(--color-text-secondary)]"
          >
            From the film studios of Mumbai to the classical stages of Chennai — CastIndia connects talent and opportunity across every state, city and language.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="mb-12">
          <p
            className="meta font-bold tracking-[0.14em] uppercase text-[var(--color-text-muted)] mb-5"
          >
            Talent by City
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cities.map(({ name, count, label }) => (
              <div
                key={name}
                className="transition-all duration-300 cursor-pointer group card-pad-lg glass-panel glass-panel-hover rounded-[24px] hover:border-[var(--color-gold-border)] hover:-translate-y-2"
                tabIndex={0}
                role="button"
                aria-label={`${name}: ${count} talent profiles`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div
                    className="h3-card group-hover:text-gradient-gold transition-colors text-[var(--color-text-primary)]"
                  >
                    {name}
                  </div>
                  <div className="body-sm font-bold px-2.5 py-1 rounded-lg bg-[var(--color-surface-1)] text-[var(--color-gold)]">
                    {count}
                  </div>
                </div>
                <div className="meta text-[var(--color-text-muted)]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <p
            className="meta font-bold tracking-[0.14em] uppercase mb-4 text-[var(--color-text-muted)]"
          >
            Languages Supported
          </p>
          <div className="flex flex-wrap gap-3">
            {languages.map(({ name, script, color }) => (
              <div
                key={name}
                className="flex items-center transition-all duration-300 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] py-2.5 px-5 rounded-full gap-2.5 hover:border-[var(--color-gold-border)] hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-1 cursor-default"
              >
                <span
                  className={`font-display font-medium text-[16px] ${color}`}
                >
                  {script}
                </span>
                <span className="meta text-[var(--color-text-muted)]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 card-pad-lg mt-16 glass-panel rounded-[24px] border-[var(--color-gold-border)] shadow-[0_0_30px_rgba(139,92,246,0.08)]"
        >
          <div>
            <h3 className="body-large font-semibold mb-2 text-[var(--color-text-primary)]">
              Talent discovery across India's 22+ languages
            </h3>
            <p className="body-sm text-[var(--color-text-muted)]">
              Regional language filters coming with the full platform launch. Currently supporting Hindi, English and 8 regional languages.
            </p>
          </div>
          <button
            id="india-explore-btn"
            className="btn-secondary btn-md shrink-0 bg-[var(--color-gold-muted)] border border-[var(--color-gold-border)] hover:bg-[var(--color-gold)] hover:text-[#0A0A0F]"
          >
            Explore Talent
          </button>
        </div>
      </div>
    </section>
  )
}
