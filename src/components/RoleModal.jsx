import { useEffect } from 'react'
import { X } from 'lucide-react'
import talentBg from '../assets/images/talent_1.jpg'
import castingBg from '../assets/images/cat_acting.jpg'

export default function RoleModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      style={{ position:'fixed', inset:0, zIndex:50, display:'flex', flexDirection:'row', background:'#06040e', overflow:'hidden' }}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your role"
    >
      {/* ─── TALENT HALF ─── */}
      <div
        onClick={onClose}
        className="rm-half rm-half--talent"
      >
        {/* Background photo */}
        <div className="rm-bg" style={{ backgroundImage: `url(${talentBg})` }} />
        {/* Amber color grading */}
        <div className="rm-overlay rm-overlay--talent" />
        {/* Bottom fade */}
        <div className="rm-fade" />

        <div className="rm-content">
          {/* Custom theater-mask icon */}
          <div className="rm-icon rm-icon--talent">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Comedy mask */}
              <path d="M8 14a3 3 0 013-3h10a3 3 0 013 3v9a8 8 0 01-16 0v-9z" fill="none" stroke="#E3A72F" strokeWidth="1.6"/>
              <circle cx="13" cy="19" r="1.2" fill="#E3A72F"/>
              <circle cx="19" cy="19" r="1.2" fill="#E3A72F"/>
              <path d="M13 25c.8 1.5 2.3 2.5 4 2.5s3.2-1 4-2.5" stroke="#E3A72F" strokeWidth="1.5" strokeLinecap="round"/>
              {/* Tragedy mask (offset right+down) */}
              <path d="M28 20a3 3 0 013-3h10a3 3 0 013 3v9a8 8 0 01-16 0v-9z" fill="none" stroke="#C89545" strokeWidth="1.6"/>
              <circle cx="33" cy="25" r="1.2" fill="#C89545"/>
              <circle cx="39" cy="25" r="1.2" fill="#C89545"/>
              <path d="M33 33c.8-1.5 2.3-2.5 4-2.5s3.2 1 4 2.5" stroke="#C89545" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <h2 className="rm-title rm-title--talent">I'm Talent</h2>
          <p className="rm-desc">
            Build your professional profile, discover auditions and get discovered by leading casting teams across India.
          </p>
          <span className="rm-btn rm-btn--talent">Create Talent Profile &nbsp;→</span>
        </div>
      </div>

      {/* ─── VERTICAL DIVIDER ─── */}
      <div className="rm-divider" />

      {/* ─── CASTING HALF ─── */}
      <div
        onClick={onClose}
        className="rm-half rm-half--casting"
      >
        {/* Background photo */}
        <div className="rm-bg" style={{ backgroundImage: `url(${castingBg})` }} />
        {/* Purple color grading */}
        <div className="rm-overlay rm-overlay--casting" />
        {/* Bottom fade */}
        <div className="rm-fade" />

        <div className="rm-content">
          {/* Custom clapperboard icon */}
          <div className="rm-icon rm-icon--casting">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Board body */}
              <rect x="10" y="24" width="32" height="20" rx="2.5" fill="none" stroke="#9D7FF5" strokeWidth="1.6"/>
              {/* Top bar */}
              <rect x="10" y="16" width="32" height="9" rx="2" fill="none" stroke="#9D7FF5" strokeWidth="1.6"/>
              {/* Stripes on top bar */}
              <line x1="16" y1="16" x2="18.5" y2="25" stroke="#9D7FF5" strokeWidth="1.5"/>
              <line x1="23" y1="16" x2="25.5" y2="25" stroke="#9D7FF5" strokeWidth="1.5"/>
              <line x1="30" y1="16" x2="32.5" y2="25" stroke="#9D7FF5" strokeWidth="1.5"/>
              <line x1="37" y1="16" x2="39" y2="22" stroke="#9D7FF5" strokeWidth="1.5"/>
              {/* Play triangle */}
              <path d="M21 30l12 5-12 5V30z" fill="#9D7FF5"/>
            </svg>
          </div>

          <h2 className="rm-title rm-title--casting">I'm Casting</h2>
          <p className="rm-desc">
            Find actors, models, singers and performers for your next production. Search India's verified talent database.
          </p>
          <span className="rm-btn rm-btn--casting">Start Casting &nbsp;→</span>
        </div>
      </div>

      {/* ─── TOP HEADING ─── */}
      <div className="rm-heading-wrap">
        <p className="rm-eyebrow">
          <span className="rm-line" />
          Welcome to CastIndia
          <span className="rm-line" />
        </p>
        <h1 className="rm-heading">What Brings You Here?</h1>
      </div>

      {/* ─── CLOSE ─── */}
      <div style={{ position:'absolute', top:'2rem', right:'2rem', zIndex:30 }}>
        <button className="rm-close" onClick={onClose} aria-label="Close and continue to website">
          <X size={18} />
        </button>
      </div>

      {/* ─── SKIP ─── */}
      <div className="rm-skip-wrap">
        <button className="rm-skip" onClick={onClose}>
          <span className="rm-line rm-line--dim" />
          Just Browsing — Take Me To The Platform
          <span className="rm-line rm-line--dim" />
        </button>
      </div>

      <style>{`
        /* HALVES */
        .rm-half {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 5rem 4rem 4rem;
          cursor: pointer;
          overflow: hidden;
        }

        /* BACKGROUND */
        .rm-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.55;
          transition: opacity 0.9s ease, transform 1.6s ease;
        }
        .rm-half:hover .rm-bg {
          opacity: 0.9;
          transform: scale(1.05);
        }

        /* COLOR OVERLAY */
        .rm-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: opacity 0.7s ease;
        }
        .rm-overlay--talent {
          background:
            radial-gradient(ellipse at 25% 55%, rgba(170,90,5,0.55) 0%, transparent 60%),
            linear-gradient(to right, rgba(40,18,0,0.7) 0%, transparent 70%);
        }
        .rm-overlay--casting {
          background:
            radial-gradient(ellipse at 75% 55%, rgba(90,40,180,0.55) 0%, transparent 60%),
            linear-gradient(to left, rgba(10,0,35,0.7) 0%, transparent 70%);
        }

        /* BOTTOM FADE */
        .rm-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(to top, #06040e 0%, transparent 100%);
          pointer-events: none;
        }

        /* CONTENT */
        .rm-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 420px;
          transition: transform 0.7s ease;
        }
        .rm-half:hover .rm-content {
          transform: translateY(-10px);
        }

        /* ICON */
        .rm-icon {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .rm-half:hover .rm-icon {
          transform: scale(1.12);
        }
        .rm-icon--talent {
          background: radial-gradient(circle, rgba(227,167,47,0.2) 0%, rgba(0,0,0,0.5) 100%);
          border: 1.5px solid rgba(227,167,47,0.4);
          box-shadow: 0 0 30px rgba(227,167,47,0.2), 0 0 60px rgba(227,167,47,0.1);
        }
        .rm-half--talent:hover .rm-icon--talent {
          box-shadow: 0 0 50px rgba(227,167,47,0.4), 0 0 100px rgba(227,167,47,0.15);
        }
        .rm-icon--casting {
          background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(0,0,0,0.5) 100%);
          border: 1.5px solid rgba(139,92,246,0.4);
          box-shadow: 0 0 30px rgba(139,92,246,0.2), 0 0 60px rgba(139,92,246,0.1);
        }
        .rm-half--casting:hover .rm-icon--casting {
          box-shadow: 0 0 50px rgba(139,92,246,0.4), 0 0 100px rgba(139,92,246,0.15);
        }

        /* TITLES */
        .rm-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 600;
          font-size: clamp(2rem, 3.5vw, 3.2rem);
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .rm-title--talent {
          color: #E8C97A;
          text-shadow: 0 2px 24px rgba(200,140,30,0.5);
        }
        .rm-title--casting {
          color: #FFFFFF;
          text-shadow: 0 2px 24px rgba(139,92,246,0.5);
        }

        /* DESC */
        .rm-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.68);
          margin-bottom: 2.2rem;
          max-width: 330px;
          transition: color 0.5s ease;
        }
        .rm-half:hover .rm-desc {
          color: rgba(255,255,255,0.9);
        }

        /* BUTTONS */
        .rm-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.85rem 2rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.5s ease;
          cursor: pointer;
        }
        .rm-btn--talent {
          background: rgba(227,167,47,0.08);
          border: 1.5px solid rgba(227,167,47,0.45);
          color: #E8C97A;
          backdrop-filter: blur(8px);
        }
        .rm-half--talent:hover .rm-btn--talent {
          background: #E3A72F;
          color: #000;
          border-color: #E3A72F;
          box-shadow: 0 0 40px rgba(227,167,47,0.45);
        }
        .rm-btn--casting {
          background: rgba(100,60,220,0.3);
          border: 1.5px solid rgba(139,92,246,0.6);
          color: #C4B5FD;
          backdrop-filter: blur(8px);
        }
        .rm-half--casting:hover .rm-btn--casting {
          background: #7C3AED;
          color: #fff;
          border-color: #7C3AED;
          box-shadow: 0 0 40px rgba(139,92,246,0.45);
        }

        /* DIVIDER */
        .rm-divider {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom,
            transparent 0%,
            rgba(255,255,255,0.1) 15%,
            rgba(255,255,255,0.1) 85%,
            transparent 100%
          );
          z-index: 15;
          pointer-events: none;
        }

        /* HEADING */
        .rm-heading-wrap {
          position: absolute;
          top: 11%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          pointer-events: none;
          width: 100%;
          text-align: center;
          padding: 0 1.5rem;
        }
        .rm-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 0.65rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.8rem;
          font-weight: 500;
        }
        .rm-line {
          display: inline-block;
          width: 55px;
          height: 1px;
          background: rgba(255,255,255,0.3);
          flex-shrink: 0;
        }
        .rm-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: clamp(2rem, 5vw, 4.2rem);
          color: #fff;
          line-height: 1.05;
          text-shadow: 0 10px 40px rgba(0,0,0,0.9);
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* CLOSE */
        .rm-close {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.65);
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .rm-close:hover {
          background: rgba(255,255,255,0.16);
          color: #fff;
          transform: scale(1.1);
        }

        /* SKIP */
        .rm-skip-wrap {
          position: absolute;
          bottom: 1.8rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          white-space: nowrap;
        }
        .rm-skip {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .rm-skip:hover { color: rgba(255,255,255,0.8); }
        .rm-line--dim {
          background: rgba(255,255,255,0.22);
          width: 36px;
        }

        /* RESPONSIVE */
        @media (max-width: 767px) {
          .rm-half { flex-direction: column; padding: 3.5rem 1.5rem 2.5rem; }
          .rm-divider {
            top: 50%; left: 0; width: 100%; height: 1px;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent);
            transform: none;
          }
          .rm-heading-wrap { top: 5%; }
          .rm-heading { font-size: clamp(1.7rem, 7vw, 2.4rem); }
        }
      `}</style>
    </div>
  )
}
