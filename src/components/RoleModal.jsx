import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function RoleModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col md:flex-row bg-[#030305]"
      role="dialog"
      aria-modal="true"
      aria-label="Choose your role"
    >
      {/* ─── TALENT HALF ─── */}
      <div 
        className="relative flex-1 group cursor-pointer overflow-hidden flex flex-col justify-center items-center p-8 md:p-16" 
        onClick={onClose}
      >
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-[url('/src/assets/talent_1.jpg')] bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-30 group-hover:opacity-70 grayscale-[30%] group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[rgba(3,3,5,0.85)] to-[rgba(3,3,5,0.4)] transition-opacity duration-700 group-hover:opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,167,47,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-[440px] transform transition-transform duration-700 group-hover:-translate-y-4">
          <div className="text-[64px] md:text-[80px] mb-6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">🎭</div>
          <h2 className="font-display font-semibold text-[2.5rem] md:text-[3.5rem] text-white mb-4 leading-tight drop-shadow-lg">
            I'm Talent
          </h2>
          <p className="body-large text-[rgba(255,255,255,0.7)] mb-10 transition-colors duration-500 group-hover:text-white">
            Build your professional profile, discover auditions and get discovered by leading casting teams across India.
          </p>
          <div className="inline-flex items-center gap-3 py-4 px-8 rounded-full bg-[rgba(227,167,47,0.1)] backdrop-blur-md border border-[rgba(227,167,47,0.3)] text-[var(--color-gold-light)] text-[16px] font-semibold transition-all duration-500 group-hover:bg-[var(--color-gold)] group-hover:text-black group-hover:shadow-[0_0_50px_rgba(227,167,47,0.4)]">
            Create Talent Profile →
          </div>
        </div>
      </div>

      {/* ─── CASTING HALF ─── */}
      <div 
        className="relative flex-1 group cursor-pointer overflow-hidden flex flex-col justify-center items-center p-8 md:p-16 border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.05)]" 
        onClick={onClose}
      >
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-[url('/src/assets/cat_acting.jpg')] bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-30 group-hover:opacity-70 grayscale-[30%] group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[rgba(3,3,5,0.85)] to-[rgba(3,3,5,0.4)] transition-opacity duration-700 group-hover:opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-[440px] transform transition-transform duration-700 group-hover:-translate-y-4">
          <div className="text-[64px] md:text-[80px] mb-6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">🎬</div>
          <h2 className="font-display font-semibold text-[2.5rem] md:text-[3.5rem] text-white mb-4 leading-tight drop-shadow-lg">
            I'm Casting
          </h2>
          <p className="body-large text-[rgba(255,255,255,0.7)] mb-10 transition-colors duration-500 group-hover:text-white">
            Find actors, models, singers and performers for your next production. Search India's verified talent database.
          </p>
          <div className="inline-flex items-center gap-3 py-4 px-8 rounded-full bg-[rgba(139,92,246,0.1)] backdrop-blur-md border border-[rgba(139,92,246,0.3)] text-[var(--color-violet-light)] text-[16px] font-semibold transition-all duration-500 group-hover:bg-[var(--color-violet)] group-hover:text-white group-hover:shadow-[0_0_50px_rgba(139,92,246,0.4)]">
            Start Casting →
          </div>
        </div>
      </div>

      {/* ─── CENTER ABSOLUTE ELEMENTS ─── */}
      
      {/* Main Heading Overlay */}
      <div className="absolute top-[12%] md:top-[15%] left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full text-center px-6">
        <p className="eyebrow !text-white/70 drop-shadow-lg !mb-4 tracking-[0.3em]">
          Welcome to CastIndia
        </p>
        <h1 className="font-display font-semibold text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          What Brings You Here?
        </h1>
      </div>

      {/* Close Button */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-30">
        <button
          className="rounded-full transition-all duration-300 flex items-center justify-center w-12 h-12 text-[rgba(255,255,255,0.7)] bg-[rgba(0,0,0,0.3)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] hover:text-white hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 hover:border-[rgba(255,255,255,0.3)]"
          onClick={onClose}
          aria-label="Close and continue to website"
        >
          <X size={20} />
        </button>
      </div>

      {/* Skip Link */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30">
        <button
          className="meta transition-colors text-[rgba(255,255,255,0.6)] bg-transparent border-none cursor-pointer hover:text-white drop-shadow-lg tracking-wide uppercase"
          onClick={onClose}
        >
          Just browsing — take me to the platform
        </button>
      </div>
    </div>
  )
}
