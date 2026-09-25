/**
 * Shared layout wrapper for all public informational pages (About, FAQ, Legal, etc.)
 * Uses a reusable hero + content pattern.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function InfoPageHero({ badge, title, accent, subtitle, icon: Icon }) {
  return (
    <section className="info-hero">
      <div className="info-hero__glow" />
      <div className="container-xl info-hero__inner">
        <Link to="/" className="info-hero__back">
          <ArrowLeft size={15} /> Back to Home
        </Link>
        {badge && (
          <div className="info-hero__badge">
            {Icon && <Icon size={14} />}
            {badge}
          </div>
        )}
        <h1 className="info-hero__title">
          {title}
          {accent && <span className="info-hero__accent"> {accent}</span>}
        </h1>
        {subtitle && <p className="info-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}

export function InfoSection({ children, className = '' }) {
  return (
    <section className={`info-section ${className}`}>
      <div className="container-xl info-section__inner">
        {children}
      </div>
    </section>
  )
}

export function InfoCard({ title, icon: Icon, iconColor = 'var(--color-violet-light)', iconBg = 'rgba(139,92,246,0.15)', children }) {
  return (
    <div className="info-card">
      {(Icon || title) && (
        <div className="info-card__header">
          {Icon && (
            <div className="info-card__icon" style={{ background: iconBg, color: iconColor }}>
              <Icon size={18} />
            </div>
          )}
          {title && <h3 className="info-card__title">{title}</h3>}
        </div>
      )}
      <div className="info-card__body">{children}</div>
    </div>
  )
}

export function InfoGrid({ cols = 3, children }) {
  return (
    <div className="info-grid" style={{ '--cols': cols }}>
      {children}
    </div>
  )
}

export function SectionHeading({ label, title, accent, subtitle }) {
  return (
    <div className="info-sec-heading">
      {label && <span className="info-sec-heading__label">{label}</span>}
      <h2 className="info-sec-heading__title">
        {title}{accent && <span className="info-sec-heading__accent"> {accent}</span>}
      </h2>
      {subtitle && <p className="info-sec-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
