import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { User, Bell, Menu, X } from 'lucide-react'
import Footer from '../Footer'

function TalentHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: 'Dashboard', path: '/talent/dashboard' },
    { label: 'Find Casting', path: '/casting' },
    { label: 'My Applications', path: '/talent/applications' },
    { label: 'Saved', path: '/talent/saved' }
  ]

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)] h-16 flex items-center transition-all duration-300">
        <div className="container-xl w-full flex items-center justify-between">
          <Link to="/talent/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[var(--color-gold)] flex items-center justify-center">
              <span className="font-display font-bold text-[#0A0A0F] text-lg leading-none">C</span>
            </div>
            <span className="font-display font-semibold text-[var(--color-text-primary)] tracking-wide">CastIndia</span>
            <span className="meta text-[var(--color-gold)] ml-2 bg-[var(--color-gold-muted)] px-2 py-0.5 rounded-full hidden sm:inline-block">Talent</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`body-sm transition-colors ${location.pathname === link.path ? 'text-[var(--color-gold)] font-semibold' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-gold)]'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors" aria-label="Notifications">
              <Bell size={20} />
            </button>
            <Link to="/talent/dashboard" className="w-8 h-8 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] cursor-pointer hover:border-[var(--color-gold-border)] transition-colors" aria-label="User Profile">
              <User size={16} />
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors p-1"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#000]/60 backdrop-blur-sm lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[var(--color-surface-1)] border-l border-[var(--color-border)] transform transition-transform duration-300 lg:hidden flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
          <span className="font-display font-semibold text-[var(--color-text-primary)] tracking-wide">Cast<span className="text-[var(--color-gold)]">India</span></span>
          <button 
            onClick={() => setDrawerOpen(false)}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] p-1 transition-colors"
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`px-4 py-3 rounded-xl transition-colors ${location.pathname === link.path ? 'bg-[var(--color-surface-2)] text-[var(--color-gold)] font-semibold' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text-primary)]'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="p-5 border-t border-[var(--color-border)]">
          <button className="w-full btn-secondary text-sm !py-2.5 flex items-center justify-center gap-2">
            <User size={16} /> My Profile
          </button>
        </div>
      </div>
    </>
  )
}

export default function TalentLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <TalentHeader />
      <main id="talent-main-content" className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
