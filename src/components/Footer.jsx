import { Link } from 'react-router-dom'
import { Globe, Play, Share2 } from 'lucide-react'

const footerLinks = {
  talent: {
    label: 'For Talent',
    links: [
      { label: 'Create Profile',  to: '/create-profile' },
      { label: 'Find Auditions',  to: '/auditions' },
      { label: 'How It Works',    to: '/how-it-works' },
      { label: 'Resources',       to: '/resources' },
      { label: 'Safety Guide',    to: '/safety' },
    ],
  },
  casting: {
    label: 'For Casting',
    links: [
      { label: 'Start Casting',      to: '/start-casting' },
      { label: 'Find Talent',        to: '/auth' },
      { label: 'How It Works',       to: '/how-it-works' },
      { label: 'Casting Resources',  to: '/casting-resources' },
    ],
  },
  platform: {
    label: 'Platform',
    links: [
      { label: 'Categories',      to: '/categories' },
      { label: 'About CastIndia', to: '/about' },
      { label: 'Contact Us',      to: '/contact' },
      { label: 'FAQ',             to: '/faq' },
      { label: 'Help Center',     to: '/help' },
    ],
  },
  legal: {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy',        to: '/privacy' },
      { label: 'Terms of Service',      to: '/terms' },
      { label: 'Community Guidelines',  to: '/community-guidelines' },
    ],
  },
}

const socialLinks = [
  { icon: Globe,  label: 'Instagram', href: 'https://instagram.com' },
  { icon: Play,   label: 'YouTube',   href: 'https://youtube.com' },
  { icon: Share2, label: 'LinkedIn',  href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-[rgba(255,255,255,0.05)] py-4 md:py-8 mt-auto"
      aria-label="Site footer"
    >
      <div className="container-xl">
        {/* Top row: Logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-20 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2.5 no-underline mb-4"
              aria-label="CastIndia home"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[linear-gradient(135deg,#C9A84C,#E8C97A)] text-[#0A0A0F] font-display text-[18px] font-bold">
                C
              </div>
              <span className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                Cast<span className="text-[var(--color-gold)]">India</span>
              </span>
            </Link>
            <p className="body-sm leading-relaxed mb-5 text-[var(--color-text-muted)] max-w-[220px]">
              India's premier digital casting and talent discovery platform. Connecting talent with opportunity across every city, language and screen.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 no-underline bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-gold-border)] hover:text-[var(--color-gold)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map(({ label, links }) => (
            <div key={label} className="col-span-1">
              <h3 className="meta font-bold tracking-[0.14em] uppercase text-[var(--color-text-secondary)] mb-5">
                {label}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map(({ label: linkLabel, to }) => (
                  <li key={linkLabel}>
                    <Link
                      to={to}
                      className="body-sm transition-colors no-underline block py-1 text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                    >
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-[var(--color-border)]">
          <p className="meta text-[var(--color-text-muted)]">
            © 2026 CastIndia. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="meta text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors no-underline">Privacy</Link>
            <div className="h-3 w-px bg-[var(--color-border)]" />
            <Link to="/terms" className="meta text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors no-underline">Terms</Link>
            <div className="h-3 w-px bg-[var(--color-border)]" />
            <p className="meta text-[var(--color-text-muted)]">
              Phase 01 — Public Beta Preview
            </p>
            <div className="h-3 w-px bg-[var(--color-border)]" />
            <p className="meta text-[var(--color-text-muted)]">
              Made in India 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
