import React from 'react'
import { User, Mail, Phone, Camera, Shield, ChevronLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { AccountSidebar } from './AccountLayout'

export default function Account() {
  const { user } = useAuth()
  const initials = user?.user_metadata?.full_name?.charAt(0)?.toUpperCase() || 'J'

  return (
    <div className="account-page">
      {/* ── LEFT SIDEBAR ── */}
      <AccountSidebar />

      {/* ── MAIN CONTENT ── */}
      <main className="account-main">
        {/* Breadcrumb */}
        <div className="account-breadcrumb">
          <Link to="/casting-team/dashboard" className="account-breadcrumb__link">
            <ChevronLeft size={15} />
            Account
          </Link>
        </div>

        {/* Page Title */}
        <div className="account-header">
          <h1 className="account-header__title">
            My <span className="account-header__title--accent">Account</span>
          </h1>
          <p className="account-header__subtitle">
            Manage your personal profile and contact information.
          </p>
        </div>

        {/* Profile Card */}
        <div className="account-card">
          {/* Profile Picture Row */}
          <div className="account-card__profile-row">
            <div className="account-card__avatar-wrap">
              <div className="account-card__avatar">
                {initials}
              </div>
              <button className="account-card__avatar-btn" aria-label="Change photo">
                <Camera size={13} />
              </button>
            </div>

            <div className="account-card__profile-info">
              <h2 className="account-card__name">
                {user?.user_metadata?.full_name || 'Jayesh Casting Company'}
              </h2>
              <p className="account-card__email">{user?.email || 'jayeshcastingcompany@gmail.com'}</p>
            </div>

            <span className="account-card__status-badge">
              <span className="account-card__status-dot" />
              Profile Active
            </span>
          </div>

          {/* Form */}
          <div className="account-form">
            <div className="account-form__grid">
              {/* Full Name */}
              <div className="account-form__field">
                <label className="account-form__label">Full Name</label>
                <div className="account-form__input-wrap">
                  <User size={15} className="account-form__input-icon" />
                  <input
                    id="account-full-name"
                    type="text"
                    defaultValue={user?.user_metadata?.full_name || 'Jayesh Casting Company'}
                    className="account-form__input"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="account-form__field">
                <label className="account-form__label">Email Address</label>
                <div className="account-form__input-wrap">
                  <Mail size={15} className="account-form__input-icon" />
                  <input
                    id="account-email"
                    type="email"
                    disabled
                    defaultValue={user?.email || 'jayeshcastingcompany@gmail.com'}
                    className="account-form__input account-form__input--disabled"
                  />
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="account-form__field">
              <label className="account-form__label">Phone Number</label>
              <div className="account-form__input-wrap">
                <Phone size={15} className="account-form__input-icon" />
                <input
                  id="account-phone"
                  type="tel"
                  placeholder="+91"
                  className="account-form__input"
                />
              </div>
            </div>

            {/* Footer Row */}
            <div className="account-form__footer">
              <p className="account-form__security">
                <Shield size={14} className="account-form__security-icon" />
                Your data is securely encrypted.
              </p>
              <button id="account-save-btn" className="account-form__save-btn">
                Save Changes <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── RIGHT CINEMATIC PANEL ── */}
      <div className="account-cinematic">
        <img
          src="/account-cinematic-bg.jpg"
          alt="Your Talent Our Platform"
          className="account-cinematic__img"
        />
        <div className="account-cinematic__overlay" />
      </div>
    </div>
  )
}
