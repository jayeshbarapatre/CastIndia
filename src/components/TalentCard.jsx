import { CheckCircle, MapPin, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TalentCard({ talent }) {
  return (
    <div
      className="flex flex-col overflow-hidden glass-panel glass-panel-hover rounded-[24px] group"
    >
      {/* Dominant photo area */}
      <div className="relative overflow-hidden h-[340px]">
        {talent.image ? (
          <img
            src={talent.image}
            alt={talent.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center ${talent.gradientClass}`}
          >
            <span
              className="font-display text-[4.5rem] font-light text-[rgba(240,237,232,0.35)]"
            >
              {talent.initials}
            </span>
          </div>
        )}
        {/* Bottom gradient */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,24,1)_0%,rgba(17,17,24,0.3)_40%,transparent_70%)]"
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="meta bg-[rgba(10,10,15,0.82)] border border-[var(--color-border)] text-[var(--color-text-secondary)] py-[5px] px-[14px] rounded-full backdrop-blur-md font-medium"
          >
            {talent.category}
          </span>
        </div>
        {/* Verified */}
        {talent.verified && (
          <div className="absolute top-4 right-4">
            <div className="badge-verified">
              <CheckCircle size={11} />
              Verified
            </div>
          </div>
        )}
      </div>

      {/* Info block — generous padding */}
      <div className="card-pad-lg pb-0 pt-6 flex-1">
        <h3
          className="h3-card text-[var(--color-text-primary)] mb-4 line-clamp-1"
        >
          {talent.name}
        </h3>

        <div className="flex items-center gap-2 mb-6">
          <MapPin size={13} className="text-[var(--color-text-muted)] shrink-0" />
          <span className="body-sm text-[var(--color-text-muted)]">
            {talent.city}
          </span>
          <span className="body-sm text-[var(--color-surface-4)]">·</span>
          <span className="body-sm text-[var(--color-text-muted)]">
            {talent.experience}
          </span>
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {talent.languages.map((lang) => (
            <span
              key={lang}
              className="meta bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] py-1 px-3 rounded-full font-medium"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {talent.skills.map((skill) => (
            <span key={skill} className="tag-pill text-[12px] py-1 px-3">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card-pad-lg pt-6">
        <Link
          to={`/talent/${talent.id}`}
          className="w-full flex items-center justify-center gap-2 transition-all duration-300 h-[52px] rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[var(--color-text-secondary)] text-[15px] font-semibold cursor-pointer group-hover:bg-[var(--color-gold-muted)] group-hover:border-[var(--color-gold-border)] group-hover:text-[var(--color-gold)] group-hover:shadow-[0_4px_20px_rgba(227,167,47,0.15)] hover:!bg-[var(--color-gold)] hover:!text-[#0A0A0F]"
        >
          View Profile
          <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
