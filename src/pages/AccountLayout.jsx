import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User, History, Bell, Settings, Star, ArrowRight } from 'lucide-react'

export const sidebarNavItems = [
  { icon: User,    label: 'My Account',      path: '/casting-team/account' },
  { icon: User,    label: 'Profile',         path: '/casting-team/profile' },
  { icon: History, label: 'Casting History', path: '/casting-team/history' },
  { icon: Bell,    label: 'Notifications',   path: '/casting-team/notifications' },
  { icon: Settings,label: 'Settings',        path: '/casting-team/settings' },
]

export function AccountSidebar() {
  const location = useLocation()

  return (
    <aside className="account-sidebar">
      <nav className="account-sidebar__nav">
        {sidebarNavItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path
          return (
            <Link
              key={path}
              to={path}
              className={`account-sidebar__nav-item${isActive ? ' account-sidebar__nav-item--active' : ''}`}
            >
              <Icon size={17} />
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="account-sidebar__promo">
        <div className="account-sidebar__promo-star">
          <Star size={14} fill="currentColor" />
        </div>
        <h4 className="account-sidebar__promo-title">
          Ready for<br />your next big role?
        </h4>
        <p className="account-sidebar__promo-desc">
          Keep your profile updated and get discovered by directors and brands.
        </p>
        <Link to="/casting-team/projects" className="account-sidebar__promo-btn">
          View Opportunities <ArrowRight size={14} />
        </Link>
      </div>
    </aside>
  )
}
