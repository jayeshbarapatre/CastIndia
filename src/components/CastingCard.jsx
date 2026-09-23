import { CheckCircle, MapPin, Globe, Calendar, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const typeColors = {
  'Web Series':     { bg: 'bg-[rgba(108,99,255,0.12)]', color: 'text-[#9B96FF]' },
  'Feature Film':   { bg: 'bg-[rgba(201,168,76,0.12)]',  color: 'text-[#E8C97A]' },
  'Advertisement':  { bg: 'bg-[rgba(46,204,113,0.12)]',  color: 'text-[#5CE88A]' },
  'Music Video':    { bg: 'bg-[rgba(236,72,153,0.12)]',   color: 'text-[#F48FB1]' },
  'TV Serial':      { bg: 'bg-[rgba(251,146,60,0.12)]',   color: 'text-[#FBD38D]' },
  'Digital Content':{ bg: 'bg-[rgba(56,189,248,0.12)]',   color: 'text-[#7DD3FC]' },
}

export default function CastingCard({ call }) {
  const typeStyle = typeColors[call.projectType] || { bg: 'bg-[var(--color-surface-3)]', color: 'text-[var(--color-text-secondary)]' }

  return (
    <div
      className="flex flex-col h-full glass-panel glass-panel-hover rounded-[24px] min-w-[320px] relative overflow-hidden group"
    >
      {/* Subtle top glow on hover */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card Header */}
      <div className="card-pad-lg pb-6 border-b border-[var(--color-border)]">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`${typeStyle.bg} ${typeStyle.color} text-[12px] font-semibold py-[5px] px-3 rounded-full`}
            >
              {call.projectType}
            </span>
            {call.urgent && (
              <span
                className="bg-[rgba(239,68,68,0.12)] text-[#FCA5A5] text-[12px] font-semibold py-[5px] px-3 rounded-full"
              >
                Urgent
              </span>
            )}
          </div>
          {call.verified && (
            <div className="badge-verified shrink-0">
              <CheckCircle size={11} />
              Verified
            </div>
          )}
        </div>

        <h3
          className="h3-card text-[var(--color-text-primary)] mb-2 line-clamp-1"
        >
          {call.projectName}
        </h3>
        <p className="meta text-[var(--color-text-muted)]">
          {call.platform}
        </p>
      </div>

      {/* Role Details */}
      <div className="card-pad-lg pt-6 pb-0 flex-1">
        <p
          className="meta text-[var(--color-text-muted)] uppercase tracking-[0.1em] font-semibold mb-2"
        >
          Role
        </p>
        <p
          className="body-large text-[var(--color-text-primary)] font-semibold mb-6 line-clamp-2"
        >
          {call.roleName}
        </p>

        {/* Key metadata — 3 items */}
        <div
          className="grid grid-cols-3 gap-5 mb-6"
        >
          {[
            { label: 'Age', value: call.ageRange },
            { label: 'Gender', value: call.gender },
            { label: 'Audition', value: call.auditionType },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="meta text-[var(--color-text-muted)] mb-[3px]">{label}</p>
              <p className="body-sm text-[var(--color-text-secondary)] font-medium line-clamp-1">{value}</p>
            </div>
          ))}
        </div>

        {/* Location & Language pills */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <span className="tag-pill">
            <MapPin size={12} /> {call.location}
          </span>
          <span className="tag-pill">
            <Globe size={12} /> {call.language}
          </span>
        </div>

        {/* Deadline */}
        <div className="flex items-center gap-2 meta text-[var(--color-text-muted)]">
          <Calendar size={13} />
          Deadline: <span className="text-[var(--color-text-secondary)]">{call.deadline}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="card-pad-lg pt-8 relative z-10">
        <Link
          to={`/casting/${call.id}`}
          className="flex items-center justify-center gap-2 transition-all duration-300 w-full h-[52px] rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[var(--color-text-secondary)] text-[15px] font-semibold cursor-pointer group-hover:bg-[var(--color-gold-muted)] group-hover:border-[var(--color-gold-border)] group-hover:text-[var(--color-gold)] group-hover:shadow-[0_4px_20px_rgba(227,167,47,0.15)] hover:!bg-[var(--color-gold)] hover:!text-[#0A0A0F]"
        >
          View Casting
          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
