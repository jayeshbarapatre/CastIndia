import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronLeft, Camera, MapPin, Globe, Link2,
  Film, Briefcase, Star, ArrowRight, PlayCircle
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { AccountSidebar } from './AccountLayout'

const GENRES = ['Drama', 'Action', 'Comedy', 'Romance', 'Thriller', 'Documentary', 'Horror', 'Sci-Fi']
const LANGUAGES = ['Hindi', 'English', 'Marathi', 'Tamil', 'Telugu', 'Bengali', 'Punjabi']

export default function CastingProfile() {
  const { user } = useAuth()
  const [selectedGenres, setSelectedGenres] = useState(['Drama', 'Thriller'])
  const [selectedLangs, setSelectedLangs] = useState(['Hindi', 'English'])

  const toggle = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])
  }

  const initials = user?.user_metadata?.full_name?.charAt(0)?.toUpperCase() || 'J'

  return (
    <div className="account-page">
      <AccountSidebar />

      <main className="account-main">
        {/* Breadcrumb */}
        <div className="account-breadcrumb">
          <Link to="/casting-team/account" className="account-breadcrumb__link">
            <ChevronLeft size={15} /> Account
          </Link>
        </div>

        <div className="account-header">
          <h1 className="account-header__title">
            My <span className="account-header__title--accent">Profile</span>
          </h1>
          <p className="account-header__subtitle">
            Showcase your company and attract top talent.
          </p>
        </div>

        <div className="acct-profile-grid">
          {/* ── Company Banner / Avatar ── */}
          <div className="account-card">
            <div className="acct-profile-banner">
              <div className="acct-profile-banner__bg" />
              <button className="acct-profile-banner__edit-btn">
                <Camera size={13} /> Change Banner
              </button>
            </div>
            <div className="acct-profile-avatar-row">
              <div className="acct-profile-avatar">
                {initials}
                <button className="account-card__avatar-btn"><Camera size={13} /></button>
              </div>
              <div>
                <h2 className="account-card__name">
                  {user?.user_metadata?.full_name || 'Jayesh Casting Company'}
                </h2>
                <p className="account-card__email">{user?.email}</p>
              </div>
            </div>

            <div className="account-form__grid" style={{ marginTop: '24px' }}>
              <div className="account-form__field">
                <label className="account-form__label">Company Name</label>
                <div className="account-form__input-wrap">
                  <Briefcase size={15} className="account-form__input-icon" />
                  <input className="account-form__input" defaultValue={user?.user_metadata?.full_name || 'Jayesh Casting Company'} />
                </div>
              </div>
              <div className="account-form__field">
                <label className="account-form__label">Location</label>
                <div className="account-form__input-wrap">
                  <MapPin size={15} className="account-form__input-icon" />
                  <input className="account-form__input" placeholder="Mumbai, India" />
                </div>
              </div>
            </div>

            <div className="account-form__field" style={{ marginTop: '20px' }}>
              <label className="account-form__label">Bio / About</label>
              <textarea
                className="account-form__input"
                rows={3}
                placeholder="Tell talent about your company and casting style..."
                style={{ paddingLeft: '16px', paddingTop: '12px', resize: 'vertical' }}
              />
            </div>
          </div>

          {/* ── Social & Preferences ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="account-card">
              <p className="account-form__label" style={{ marginBottom: '14px' }}>Social Links</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { icon: Globe,       placeholder: 'Website URL' },
                  { icon: Link2,       placeholder: 'Instagram handle' },
                  { icon: PlayCircle,  placeholder: 'YouTube channel' },
                ].map(({ icon: Icon, placeholder }) => (
                  <div key={placeholder} className="account-form__input-wrap">
                    <Icon size={15} className="account-form__input-icon" />
                    <input className="account-form__input" placeholder={placeholder} />
                  </div>
                ))}
              </div>
            </div>

            <div className="account-card">
              <p className="account-form__label" style={{ marginBottom: '12px' }}>Preferred Genres</p>
              <div className="acct-tag-group">
                {GENRES.map(g => (
                  <button
                    key={g}
                    onClick={() => toggle(selectedGenres, setSelectedGenres, g)}
                    className={`acct-tag${selectedGenres.includes(g) ? ' acct-tag--active' : ''}`}
                  >
                    {selectedGenres.includes(g) && <Star size={10} fill="currentColor" />} {g}
                  </button>
                ))}
              </div>

              <p className="account-form__label" style={{ marginTop: '20px', marginBottom: '12px' }}>Working Languages</p>
              <div className="acct-tag-group">
                {LANGUAGES.map(l => (
                  <button
                    key={l}
                    onClick={() => toggle(selectedLangs, setSelectedLangs, l)}
                    className={`acct-tag${selectedLangs.includes(l) ? ' acct-tag--active' : ''}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="account-form__footer" style={{ marginTop: '24px' }}>
          <span />
          <button id="profile-save-btn" className="account-form__save-btn">
            Save Profile <ArrowRight size={15} />
          </button>
        </div>
      </main>

      <div className="account-cinematic">
        <img src="/account-cinematic-bg.jpg" alt="" className="account-cinematic__img" />
        <div className="account-cinematic__overlay" />
      </div>
    </div>
  )
}
