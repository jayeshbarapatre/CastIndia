import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, Bell, CheckCircle2, Users, Star, AlertCircle, Megaphone } from 'lucide-react'
import { AccountSidebar } from './AccountLayout'

const mockNotifications = [
  {
    id: 1,
    icon: Users,
    iconColor: 'var(--color-violet-light)',
    iconBg: 'rgba(139,92,246,0.15)',
    title: 'New Application Received',
    message: 'Priya Sharma applied to "Cyberpunk Mumbai – Lead Actress" casting call.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    icon: Star,
    iconColor: 'var(--color-gold)',
    iconBg: 'rgba(227,167,47,0.15)',
    title: 'Talent Shortlisted',
    message: 'You shortlisted Rahul Verma for Nike India TVC. He has been notified.',
    time: '5 hours ago',
    unread: true,
  },
  {
    id: 3,
    icon: CheckCircle2,
    iconColor: 'var(--color-verified)',
    iconBg: 'rgba(46,204,113,0.12)',
    title: 'Casting Call Published',
    message: '"Bombay Jazz – Background Dancers" is now live and accepting applications.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 4,
    icon: AlertCircle,
    iconColor: '#FF4C4C',
    iconBg: 'rgba(255,76,76,0.12)',
    title: 'Application Deadline Reminder',
    message: '"Zindagi Web Series" casting closes in 3 days. Review pending applications.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 5,
    icon: Megaphone,
    iconColor: 'var(--color-violet-light)',
    iconBg: 'rgba(139,92,246,0.15)',
    title: 'Platform Update',
    message: 'CastIndia has launched AI-based talent matching. Try it in your next casting call.',
    time: '3 days ago',
    unread: false,
  },
]

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications)

  const markAllRead = () => setNotifications(n => n.map(x => ({ ...x, unread: false })))
  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <div className="account-page">
      <AccountSidebar />

      <main className="account-main">
        <div className="account-breadcrumb">
          <Link to="/casting-team/account" className="account-breadcrumb__link">
            <ChevronLeft size={15} /> Account
          </Link>
        </div>

        <div className="account-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 className="account-header__title">
              Notifi<span className="account-header__title--accent">cations</span>
            </h1>
            <p className="account-header__subtitle">
              Stay updated on applications, shortlists, and platform news.
            </p>
          </div>
          {unreadCount > 0 && (
            <button onClick={markAllRead} className="acct-mark-all-btn">
              <Bell size={14} /> Mark all as read ({unreadCount})
            </button>
          )}
        </div>

        <div className="account-card" style={{ padding: 0, overflow: 'hidden' }}>
          {notifications.map((notif, i) => {
            const Icon = notif.icon
            return (
              <div
                key={notif.id}
                className={`acct-notif-row${notif.unread ? ' acct-notif-row--unread' : ''}${i < notifications.length - 1 ? ' acct-notif-row--bordered' : ''}`}
                onClick={() => setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, unread: false } : n))}
              >
                <div
                  className="acct-notif-icon"
                  style={{ background: notif.iconBg, color: notif.iconColor }}
                >
                  <Icon size={16} />
                </div>
                <div className="acct-notif-body">
                  <div className="acct-notif-top">
                    <p className="acct-notif-title">{notif.title}</p>
                    <span className="acct-notif-time">{notif.time}</span>
                  </div>
                  <p className="acct-notif-message">{notif.message}</p>
                </div>
                {notif.unread && <span className="acct-notif-dot" />}
              </div>
            )
          })}
        </div>
      </main>

      <div className="account-cinematic">
        <img src="/account-cinematic-bg.jpg" alt="" className="account-cinematic__img" />
        <div className="account-cinematic__overlay" />
      </div>
    </div>
  )
}
