import { Globe, Play, Share2 } from 'lucide-react'

const footerLinks = {
  talent: {
    label: 'For Talent',
    links: [
      { label: 'Create Profile', href: '#' },
      { label: 'Find Auditions', href: '#casting-calls' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Resources', href: '#' },
      { label: 'Safety Guide', href: '#safety' },
    ],
  },
  casting: {
    label: 'For Casting',
    links: [
      { label: 'Start Casting', href: '#' },
      { label: 'Find Talent', href: '#featured-talent' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Casting Resources', href: '#' },
    ],
  },
  platform: {
    label: 'Platform',
    links: [
      { label: 'Categories', href: '#categories' },
      { label: 'About CastIndia', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Help Center', href: '#' },
    ],
  },
  legal: {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Community Guidelines', href: '#' },
    ],
  },
}

const socialLinks = [
  { icon: Globe, label: 'Instagram', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
  { icon: Share2, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href === '#') return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer
      id="footer"
      className="border-t border-[rgba(255,255,255,0.05)] py-4 md:py-8"
      aria-label="Site footer"
    >
      <div className="container-xl">
        {/* Top row: Logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-20 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2.5 no-underline mb-4"
              aria-label="CastIndia home"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[linear-gradient(135deg,#C9A84C,#E8C97A)] text-[#0A0A0F] font-display text-[18px] font-bold"
              >
                C
              </div>
              <span
                className="font-display text-xl font-semibold text-[var(--color-text-primary)]"
              >
                Cast<span className="text-[var(--color-gold)]">India</span>
              </span>
            </a>
            <p
              className="body-sm leading-relaxed mb-5 text-[var(--color-text-muted)] max-w-[220px]"
            >
              India's premier digital casting and talent discovery platform. Connecting talent with opportunity across every city, language and screen.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
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
              <h3
                className="meta font-bold tracking-[0.14em] uppercase text-[var(--color-text-secondary)] mb-5"
              >
                {label}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map(({ label: linkLabel, href }) => (
                  <li key={linkLabel}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="body-sm transition-colors no-underline block py-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                    >
                      {linkLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-[var(--color-border)]"
        >
          <p className="meta text-[var(--color-text-muted)]">
            © 2026 CastIndia. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="meta text-[var(--color-text-muted)]">
              Phase 01 — Public Beta Preview
            </p>
            <div
              className="h-3 w-px bg-[var(--color-border)]"
            />
            <p className="meta text-[var(--color-text-muted)]">
              Made in India 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
