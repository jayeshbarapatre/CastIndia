import { Shield, Eye, Flag, Lock, UserX, Image } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Verified Profiles',
    desc: 'Both talent and casting teams can apply for verification. Verified status is clearly visible throughout the platform.',
    colorClass: 'text-[var(--color-verified)]',
    bgClass: 'bg-[var(--color-verified-muted)]',
    hoverBorderClass: 'group-hover:border-[var(--color-verified)]/30',
  },
  {
    icon: Eye,
    title: 'Privacy Controls',
    desc: 'You decide what appears on your public profile. Personal contact details are never publicly exposed — all communication is managed through the platform.',
    colorClass: 'text-[#7DD3FC]',
    bgClass: 'bg-[rgba(56,189,248,0.10)]',
    hoverBorderClass: 'group-hover:border-[#7DD3FC]/30',
  },
  {
    icon: Flag,
    title: 'Report Casting',
    desc: 'Any suspicious or unprofessional casting call can be flagged directly from the listing. Our team reviews all reports.',
    colorClass: 'text-[#FCA5A5]',
    bgClass: 'bg-[rgba(239,68,68,0.10)]',
    hoverBorderClass: 'group-hover:border-[#FCA5A5]/30',
  },
  {
    icon: UserX,
    title: 'Block User',
    desc: 'Block any individual from contacting you or viewing your profile. Blocking is private and immediate.',
    colorClass: 'text-[#9B96FF]',
    bgClass: 'bg-[var(--color-violet-muted)]',
    hoverBorderClass: 'group-hover:border-[#9B96FF]/30',
  },
  {
    icon: Lock,
    title: 'Secure Media',
    desc: 'Your showreels, photos and submitted audition materials are stored securely. You control access to your portfolio.',
    colorClass: 'text-[var(--color-gold)]',
    bgClass: 'bg-[var(--color-gold-muted)]',
    hoverBorderClass: 'group-hover:border-[var(--color-gold-border)]',
  },
  {
    icon: Image,
    title: 'Watermarked Assets',
    desc: 'Profile photos and media can be optionally watermarked to protect your creative work from unauthorized use.',
    colorClass: 'text-[#FBD38D]',
    bgClass: 'bg-[rgba(251,211,141,0.10)]',
    hoverBorderClass: 'group-hover:border-[#FBD38D]/30',
  },
]

export default function SafetySection() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="safety"
      className="section-pad"
      aria-label="Safety and privacy"
    >
      <div ref={revealRef} className="container-xl reveal-up">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-24 mb-16">
          <div>
            <p
              className="eyebrow !mb-2"
            >
              Safety & Privacy
            </p>
            <h2
              className="h2-section leading-tight text-[var(--color-text-primary)] mb-6"
            >
              Your Safety Is
              <br />
              <span className="text-gradient-gold italic">Our Priority</span>
            </h2>
            <p
              className="body-large text-[var(--color-text-secondary)] max-w-[540px]"
            >
              The entertainment industry has a trust problem. CastIndia is built from the ground up to make professional casting safer, more transparent and more respectful for everyone.
            </p>
          </div>

          {/* Key commitment */}
          <div
            className="rounded-[24px] card-pad-lg glass-panel border-[var(--color-gold-border)] shadow-[0_0_40px_rgba(227,167,47,0.1)]"
          >
            <p
              className="meta font-bold tracking-[0.14em] uppercase mb-5 text-[var(--color-gold)]"
            >
              Our Commitment
            </p>
            {[
              'Your personal contact number is never shared with casting teams',
              'All casting calls are reviewed before going live',
              'Verified badges are earned — not purchased',
              'You can delete your profile and all associated data at any time',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 mb-3 last:mb-0">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[var(--color-verified-muted)]"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-[var(--color-verified)]"
                  />
                </div>
                <p className="body-sm text-[var(--color-text-secondary)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map(({ icon: Icon, title, desc, colorClass, bgClass, hoverBorderClass }) => (
            <div
              key={title}
              className={`rounded-[24px] glass-panel glass-panel-hover card-pad-lg group hover:-translate-y-2 ${hoverBorderClass}`}
            >
              <div
                className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 ${bgClass}`}
              >
                <Icon size={22} className={colorClass} />
              </div>
              <h3 className="body-large font-semibold mb-2.5 text-[var(--color-text-primary)]">
                {title}
              </h3>
              <p className="body-sm text-[var(--color-text-muted)]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Minor note */}
        <div
          className="mt-10 rounded-[20px] card-pad-lg flex items-start gap-4 glass-panel border-[var(--color-border)]"
        >
          <Shield size={20} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="body-sm text-[var(--color-text-muted)]">
            <strong className="text-[var(--color-text-secondary)]">Special protections for minors:</strong>{' '}
            In future phases, CastIndia will implement dedicated guardian consent workflows and additional privacy protections for performers under 18. These features are in active development.
          </p>
        </div>
      </div>
    </section>
  )
}
