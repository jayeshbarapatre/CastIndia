import { CheckCircle, Shield, Eye, Flag, Lock } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const trustPillars = [
  {
    icon: CheckCircle,
    title: 'Verified Casting Teams',
    desc: 'Casting directors and production houses go through a manual verification process before publishing calls.',
    colorClass: 'text-[var(--color-gold)]',
    bgClass: 'bg-[var(--color-gold-muted)]',
    hoverBorderClass: 'group-hover:border-[var(--color-gold-border)]',
  },
  {
    icon: Shield,
    title: 'Verified Talent Profiles',
    desc: 'Performers can verify their identity to build credibility with casting teams across the platform.',
    colorClass: 'text-[var(--color-verified)]',
    bgClass: 'bg-[var(--color-verified-muted)]',
    hoverBorderClass: 'group-hover:border-[var(--color-verified)]/30',
  },
  {
    icon: Lock,
    title: 'Secure Submissions',
    desc: 'Audition submissions, self-tapes and profile information are transmitted securely.',
    colorClass: 'text-[var(--color-violet-light)]',
    bgClass: 'bg-[var(--color-violet-muted)]',
    hoverBorderClass: 'group-hover:border-[var(--color-violet-light)]/30',
  },
  {
    icon: Flag,
    title: 'Report Suspicious Activity',
    desc: 'Any suspicious casting call can be reported directly from within the platform. Our team reviews all reports.',
    colorClass: 'text-[#FCA5A5]',
    bgClass: 'bg-[rgba(239,68,68,0.10)]',
    hoverBorderClass: 'group-hover:border-[#FCA5A5]/30',
  },
  {
    icon: Eye,
    title: 'Privacy Controls',
    desc: 'You control exactly what is visible on your public profile. Personal contact details are never publicly exposed.',
    colorClass: 'text-[#7DD3FC]',
    bgClass: 'bg-[rgba(56,189,248,0.10)]',
    hoverBorderClass: 'group-hover:border-[#7DD3FC]/30',
  },
]

export default function TrustStrip() {
  const revealRef = useScrollReveal()

  return (
    <section
      id="trust"
      className="section-pad"
      aria-label="Trust and verification"
    >
      <div ref={revealRef} className="container-xl reveal-up">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow !mb-2">Safety & Verification</span>
          <h2
            className="h2-section text-[var(--color-text-primary)] mb-5"
          >
            Cast With Confidence
          </h2>
          <p
            className="body-large text-[var(--color-text-secondary)] max-w-[560px] mx-auto"
          >
            CastIndia is built around trust. Verified profiles, verified casting teams and transparent processes — so every interaction feels professional and safe.
          </p>
        </div>

        {/* Trust Pillars — 5 cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {trustPillars.map(({ icon: Icon, title, desc, colorClass, bgClass, hoverBorderClass }) => (
            <div
              key={title}
              className={`glass-panel glass-panel-hover card-pad rounded-[24px] group ${hoverBorderClass}`}
            >
              <div
                className={`flex items-center justify-center rounded-2xl w-[60px] h-[60px] mb-4 ${bgClass}`}
              >
                <Icon size={28} className={colorClass} />
              </div>
              <h3
                className="body-large text-[var(--color-text-primary)] font-semibold mb-3 leading-[1.3]"
              >
                {title}
              </h3>
              <p className="body-sm text-[var(--color-text-muted)] leading-[1.6]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-center meta text-[var(--color-text-secondary)] mt-10 opacity-60"
        >
          CastIndia works to create a safer casting environment. Always exercise your own judgment when responding to casting opportunities.
        </p>
      </div>
    </section>
  )
}
