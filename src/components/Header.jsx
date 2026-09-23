import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Find Auditions', href: '#casting-calls' },
  { label: 'Find Talent', href: '#featured-talent' },
  { label: 'Categories', href: '#categories' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Resources', href: '#' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setDrawerOpen(false)
    if (href === '#') return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-2xl border-b ${
          scrolled
            ? 'bg-[rgba(10,10,15,0.96)] border-[rgba(255,255,255,0.07)]'
            : 'bg-[rgba(10,10,15,0.55)] border-transparent'
        }`}
      >
        <div className="container-xl">
          {/* Header row — compact on scroll */}
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>

            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 no-underline shrink-0"
              aria-label="CastIndia home"
            >
              <div
                className="rounded-xl flex items-center justify-center shrink-0 w-9 h-9 bg-[linear-gradient(135deg,#C9A84C,#E8C97A)] text-[#0A0A0F] font-display text-[20px] font-bold"
              >
                C
              </div>
              <span
                className="font-display font-semibold text-[22px] tracking-[0.01em] text-[var(--color-text-primary)]"
              >
                Cast<span className="text-[var(--color-gold)]">India</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="no-underline rounded-xl transition-all duration-200 text-[var(--color-text-secondary)] font-ui text-[15px] font-medium px-4 py-2.5 hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.05)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#"
                className="no-underline transition-all duration-200 text-[var(--color-text-secondary)] text-[15px] font-medium px-4 py-2.5 hover:text-[var(--color-text-primary)]"
              >
                Login
              </a>
              <Link
                to="/talent/dashboard"
                id="header-create-profile-btn"
                className="btn-secondary btn-md"
              >
                Create Profile
              </Link>
              <Link
                to="/casting-team/dashboard"
                id="header-start-casting-btn"
                className="btn-casting btn-md bg-[var(--color-violet)] text-white hover:bg-[#7B73FF] hover:border-[#7B73FF]"
              >
                Start Casting
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden rounded-xl transition-colors text-[var(--color-text-secondary)] p-2.5 bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] hover:bg-[rgba(255,255,255,0.1)]"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="drawer-overlay lg:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 flex flex-col transition-transform duration-300 w-[300px] bg-[var(--color-surface-1)] border-l border-[var(--color-border)] ${
          drawerOpen ? 'translate-x-0' : 'translate-x-[100%]'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div
          className="flex items-center justify-between py-5 px-6 border-b border-[var(--color-border)]"
        >
          <span
            className="font-display font-semibold text-[20px] text-[var(--color-text-primary)]"
          >
            Cast<span className="text-[var(--color-gold)]">India</span>
          </span>
          <button
            className="rounded-xl transition-colors text-[var(--color-text-secondary)] p-2 bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)]"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav className="flex-1 flex flex-col p-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-xl no-underline transition-all text-[var(--color-text-secondary)] bg-transparent text-[16px] font-medium py-[14px] px-4 mb-1 hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTAs */}
        <div className="pt-6 px-4 pb-8 border-t border-[var(--color-border)] flex flex-col gap-3">
          <a
            href="#"
            className="text-center no-underline transition-all rounded-xl py-[14px] px-5 text-[15px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.05)]"
          >
            Login
          </a>
          <Link
            to="/talent/dashboard"
            onClick={() => setDrawerOpen(false)}
            id="mobile-create-profile-btn"
            className="text-center no-underline transition-all rounded-xl py-[15px] px-5 text-[15px] font-semibold bg-[var(--color-gold-muted)] border-[1.5px] border-[var(--color-gold-border)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[#0A0A0F]"
          >
            Create Talent Profile
          </Link>
          <Link
            to="/casting-team/dashboard"
            onClick={() => setDrawerOpen(false)}
            id="mobile-start-casting-btn"
            className="text-center no-underline transition-all rounded-xl py-[15px] px-5 text-[15px] font-semibold bg-[var(--color-violet)] text-white hover:bg-[#7B73FF]"
          >
            Start Casting
          </Link>
        </div>
      </div>
    </>
  )
}
