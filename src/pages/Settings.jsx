import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, Lock, Bell, ShieldAlert, Eye, Globe, ArrowRight, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { AccountSidebar } from './AccountLayout'

function ToggleSwitch({ defaultOn = false }) {
  const [on, setOn] = React.useState(defaultOn)
  return (
    <button
      onClick={() => setOn(!on)}
      aria-label="Toggle"
      style={{
        width: '44px', height: '24px',
        borderRadius: '9999px',
        background: on ? 'var(--color-violet)' : 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.1)',
        position: 'relative', cursor: 'pointer',
        transition: 'background 0.2s', flexShrink: 0,
        padding: 0,
      }}
    >
      <span style={{
        position: 'absolute',
        top: '3px',
        left: on ? 'calc(100% - 19px)' : '3px',
        width: '16px', height: '16px',
        borderRadius: '50%',
        background: '#fff',
        transition: 'left 0.2s',
        boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
      }} />
    </button>
  )
}

export default function SettingsPage() {
  const { signOut } = useAuth()

  return (
    <div className="account-page">
      <AccountSidebar />

      <main className="account-main">
        <div className="account-breadcrumb">
          <Link to="/casting-team/account" className="account-breadcrumb__link">
            <ChevronLeft size={15} /> Account
          </Link>
        </div>

        <div className="account-header">
          <h1 className="account-header__title">
            Set<span className="account-header__title--accent">tings</span>
          </h1>
          <p className="account-header__subtitle">
            Manage your security, privacy, and notification preferences.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* ── Security ── */}
          <div className="account-card">
            <div className="acct-settings-section-header">
              <div className="acct-settings-section-icon" style={{ background: 'rgba(139,92,246,0.15)', color: 'var(--color-violet-light)' }}>
                <Lock size={16} />
              </div>
              <h2 className="acct-settings-section-title">Security &amp; Password</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { label: 'Change Password', sub: 'Update your password to keep your account secure.' },
                { label: 'Two-Factor Authentication', sub: 'Add an extra layer of security to your account.' },
              ].map(({ label, sub }, i) => (
                <div key={label} className={`acct-settings-row${i > 0 ? ' acct-settings-row--bordered' : ''}`}>
                  <div>
                    <p className="acct-settings-row__label">{label}</p>
                    <p className="acct-settings-row__sub">{sub}</p>
                  </div>
                  <button id={`settings-${label.toLowerCase().replace(/\s/g,'-')}`} className="acct-settings-action-btn">
                    {label === 'Two-Factor Authentication' ? 'Enable' : 'Update'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── Notifications ── */}
          <div className="account-card">
            <div className="acct-settings-section-header">
              <div className="acct-settings-section-icon" style={{ background: 'rgba(227,167,47,0.12)', color: 'var(--color-gold)' }}>
                <Bell size={16} />
              </div>
              <h2 className="acct-settings-section-title">Notifications</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { label: 'Email Notifications', sub: 'Receive casting alerts and updates via email.', on: true },
                { label: 'Application Alerts', sub: 'Get notified when talent applies to your casting call.', on: true },
                { label: 'Marketing Emails', sub: 'Tips, tutorials, and CastIndia news.', on: false },
                { label: 'SMS Notifications', sub: 'Receive important alerts via SMS.', on: false },
              ].map(({ label, sub, on }, i) => (
                <div key={label} className={`acct-settings-row${i > 0 ? ' acct-settings-row--bordered' : ''}`}>
                  <div>
                    <p className="acct-settings-row__label">{label}</p>
                    <p className="acct-settings-row__sub">{sub}</p>
                  </div>
                  <ToggleSwitch defaultOn={on} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Privacy ── */}
          <div className="account-card">
            <div className="acct-settings-section-header">
              <div className="acct-settings-section-icon" style={{ background: 'rgba(46,204,113,0.12)', color: 'var(--color-verified)' }}>
                <Eye size={16} />
              </div>
              <h2 className="acct-settings-section-title">Privacy</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { label: 'Public Profile', sub: 'Allow talent to discover your casting company.', on: true },
                { label: 'Show Contact Info', sub: 'Display your contact details on your profile.', on: false },
              ].map(({ label, sub, on }, i) => (
                <div key={label} className={`acct-settings-row${i > 0 ? ' acct-settings-row--bordered' : ''}`}>
                  <div>
                    <p className="acct-settings-row__label">{label}</p>
                    <p className="acct-settings-row__sub">{sub}</p>
                  </div>
                  <ToggleSwitch defaultOn={on} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Sign Out ── */}
          <div className="account-card">
            <div className="acct-settings-row">
              <div>
                <p className="acct-settings-row__label">Sign Out</p>
                <p className="acct-settings-row__sub">Sign out of your CastIndia account on this device.</p>
              </div>
              <button
                id="settings-sign-out"
                onClick={signOut}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '9px 18px', borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,76,76,0.1)', border: '1px solid rgba(255,76,76,0.3)',
                  color: '#FF4C4C', fontSize: '13px', fontWeight: '600',
                  cursor: 'pointer', transition: 'background 0.15s',
                }}
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          </div>

          {/* ── Danger Zone ── */}
          <div className="account-card" style={{ border: '1px solid rgba(255,76,76,0.3)', background: 'rgba(255,76,76,0.04)' }}>
            <div className="acct-settings-section-header">
              <div className="acct-settings-section-icon" style={{ background: 'rgba(255,76,76,0.12)', color: '#FF4C4C' }}>
                <ShieldAlert size={16} />
              </div>
              <h2 className="acct-settings-section-title" style={{ color: '#FF4C4C' }}>Danger Zone</h2>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
              Once you delete your account, all your castings, shortlists, and data will be permanently removed. This action cannot be undone.
            </p>
            <button
              id="settings-delete-account"
              style={{
                padding: '10px 24px', borderRadius: 'var(--radius-md)',
                background: 'transparent', border: '1px solid rgba(255,76,76,0.5)',
                color: '#FF4C4C', fontSize: '13px', fontWeight: '600',
                cursor: 'pointer', transition: 'background 0.15s, color 0.15s',
              }}
              onMouseOver={e => { e.target.style.background='#FF4C4C'; e.target.style.color='#fff' }}
              onMouseOut={e => { e.target.style.background='transparent'; e.target.style.color='#FF4C4C' }}
            >
              Delete Account
            </button>
          </div>

        </div>
      </main>

      <div className="account-cinematic">
        <img src="/account-cinematic-bg.jpg" alt="" className="account-cinematic__img" />
        <div className="account-cinematic__overlay" />
      </div>
    </div>
  )
}
