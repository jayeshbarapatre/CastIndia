import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import catActing from '../assets/images/cat_acting.jpg'
import catModeling from '../assets/images/cat_modeling.jpg'
import catDance from '../assets/images/cat_dance.jpg'
import catSinging from '../assets/images/cat_singing.jpg'
import catVoice from '../assets/images/cat_voice.jpg'
import catMusician from '../assets/images/cat_musician.jpg'
import catInfluencer from '../assets/images/cat_influencer.jpg'
import catAnchor from '../assets/images/cat_anchor.jpg'
import catJunior from '../assets/images/cat_junior.jpg'

const categories = [
  { id: 'actors',     label: 'Actors',        desc: 'Film, TV, OTT & Theatre',               image: catActing,    count: '3,200+' },
  { id: 'models',     label: 'Models',         desc: 'Fashion, Commercial & Editorial',        image: catModeling,  count: '1,800+' },
  { id: 'dancers',    label: 'Dancers',        desc: 'Classical, Contemporary & Bollywood',    image: catDance,     count: '900+'   },
  { id: 'singers',    label: 'Singers',        desc: 'Playback, Live & Studio',                image: catSinging,   count: '1,100+' },
  { id: 'voice',      label: 'Voice Artists',  desc: 'Dubbing, Narration & Commercial',        image: catVoice,     count: '600+'   },
  { id: 'musicians',  label: 'Musicians',      desc: 'Classical, Contemporary & Fusion',       image: catMusician,  count: '700+'   },
  { id: 'influencers',label: 'Influencers',    desc: 'Digital Content & Brand Collaborations', image: catInfluencer,count: '1,500+' },
  { id: 'anchors',    label: 'Anchors',        desc: 'TV, Live Events & Corporate',            image: catAnchor,    count: '400+'   },
  { id: 'junior',     label: 'Junior Artists', desc: 'Background & Supporting Roles',          image: catJunior,    count: '2,000+' },
]

function CategoryCard({ cat, tall }) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer rounded-[24px] border border-[var(--color-border)] h-full transition-all duration-500 hover:border-[var(--color-gold-border)] hover:shadow-[0_16px_40px_rgba(227,167,47,0.15)] hover:-translate-y-2"
      tabIndex={0}
      role="button"
      aria-label={`Explore ${cat.label}`}
      onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
    >
      <img
        src={cat.image}
        alt={cat.label}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      {/* Gradient overlays for cinematic depth */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,8,0.2)_0%,transparent_30%,rgba(5,5,8,0.7)_70%,var(--color-bg)_100%)] mix-blend-multiply"
      />
      <div
        className="absolute inset-0 transition-opacity duration-500 bg-[linear-gradient(to_top,rgba(5,5,8,0.95)_0%,rgba(5,5,8,0.3)_60%,transparent_100%)]"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[rgba(227,167,47,0.1)] mix-blend-overlay"
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 card-pad-lg">
        <div className="flex items-end justify-between gap-4">
          <div className="transition-transform duration-500 group-hover:-translate-y-1">
            <h3
              className={`h3-card text-[var(--color-text-primary)] mb-2 drop-shadow-md transition-colors duration-300 group-hover:text-[var(--color-gold-light)] ${tall ? '!text-[2.25rem]' : ''}`}
            >
              {cat.label}
            </h3>
            <p className="meta text-[var(--color-text-secondary)] mb-3 group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
              {cat.desc}
            </p>
            <p className="meta text-[var(--color-gold)] font-semibold">
              {cat.count} profiles
            </p>
          </div>
          <div
            className="flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 shrink-0 w-10 h-10 bg-[var(--color-gold)] shadow-[0_0_20px_rgba(227,167,47,0.6)]"
          >
            <ArrowUpRight size={18} color="#0A0A0F" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CategoriesSection() {
  const revealRef = useScrollReveal()

  return (
    <section id="categories" className="section-pad" aria-label="Talent categories">
      <div ref={revealRef} className="container-xl reveal-up">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="eyebrow !mb-2">Browse by Type</span>
            <h2
              className="h2-section text-[var(--color-text-primary)]"
            >
              Explore Your Stage
            </h2>
          </div>
          <p className="body-base text-[var(--color-text-secondary)] max-w-[340px]">
            From the big screen to digital content — discover every type of performing artist on CastIndia.
          </p>
        </div>

        {/* Desktop editorial grid */}
        <div
          className="hidden md:grid grid-cols-4 grid-rows-auto gap-6"
        >
          {/* Large featured — col 1, spans 2 rows */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-3 h-[584px]">
            <CategoryCard cat={categories[0]} tall />
          </div>
          {/* Row 1 — cols 2,3,4 */}
          {[categories[1], categories[2], categories[3]].map((cat) => (
            <div key={cat.id} className="h-[280px]">
              <CategoryCard cat={cat} />
            </div>
          ))}
          {/* Row 2 — cols 2,3 */}
          {[categories[4], categories[5]].map((cat) => (
            <div key={cat.id} className="h-[280px]">
              <CategoryCard cat={cat} />
            </div>
          ))}
          {/* Row 3 — full width 3 cards */}
          {[categories[6], categories[7], categories[8]].map((cat) => (
            <div key={cat.id} className="h-[240px]">
              <CategoryCard cat={cat} />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="mb-4 h-[300px]">
            <CategoryCard cat={categories[0]} tall />
          </div>
          <div className="scroll-x flex gap-4 pb-2">
            {categories.slice(1).map((cat) => (
              <div
                key={cat.id}
                className="scroll-snap-start shrink-0 w-[200px] h-[250px]"
              >
                <CategoryCard cat={cat} />
              </div>
            ))}
          </div>
        </div>

        {/* View all */}
        <div className="text-center mt-16">
          <button
            id="view-all-categories-btn"
            className="btn-secondary btn-md rounded-xl"
          >
            View All Categories →
          </button>
        </div>
      </div>
    </section>
  )
}
