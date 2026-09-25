import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, Film, Users, CheckCircle2, Clock, XCircle, ChevronRight } from 'lucide-react'
import { AccountSidebar } from './AccountLayout'

const mockHistory = [
  {
    id: 1,
    title: 'Cyberpunk Mumbai – Lead Actor',
    type: 'Feature Film',
    date: 'Sep 12, 2026',
    candidates: 84,
    status: 'Completed',
    statusColor: 'var(--color-verified)',
    icon: CheckCircle2,
  },
  {
    id: 2,
    title: 'Nike India TVC – Brand Ambassador',
    type: 'Advertisement',
    date: 'Aug 28, 2026',
    candidates: 42,
    status: 'Completed',
    statusColor: 'var(--color-verified)',
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: 'Zindagi Web Series – Supporting Cast',
    type: 'Web Series',
    date: 'Aug 5, 2026',
    candidates: 117,
    status: 'Completed',
    statusColor: 'var(--color-verified)',
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: 'Bombay Jazz – Background Dancers',
    type: 'Short Film',
    date: 'Jul 19, 2026',
    candidates: 31,
    status: 'Cancelled',
    statusColor: '#FF4C4C',
    icon: XCircle,
  },
  {
    id: 5,
    title: 'Sunlight Documentary – Voice Over',
    type: 'Documentary',
    date: 'Jun 30, 2026',
    candidates: 18,
    status: 'In Progress',
    statusColor: 'var(--color-gold)',
    icon: Clock,
  },
]

const FILTERS = ['All', 'Completed', 'In Progress', 'Cancelled']

export default function CastingHistory() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? mockHistory : mockHistory.filter(c => c.status === filter)

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
            Casting <span className="account-header__title--accent">History</span>
          </h1>
          <p className="account-header__subtitle">
            A record of all your past and ongoing casting calls.
          </p>
        </div>

        {/* Stats Row */}
        <div className="acct-history-stats">
          {[
            { label: 'Total Castings', value: mockHistory.length, icon: Film },
            { label: 'Total Candidates', value: mockHistory.reduce((a, c) => a + c.candidates, 0), icon: Users },
            { label: 'Completed', value: mockHistory.filter(c => c.status === 'Completed').length, icon: CheckCircle2 },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="acct-history-stat">
              <Icon size={18} className="acct-history-stat__icon" />
              <div>
                <p className="acct-history-stat__value">{value}</p>
                <p className="acct-history-stat__label">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="acct-filter-row">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`acct-filter-btn${filter === f ? ' acct-filter-btn--active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="account-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="acct-history-table-header">
            <span>Casting Call</span>
            <span>Date</span>
            <span>Candidates</span>
            <span>Status</span>
            <span />
          </div>
          {filtered.map((item, i) => {
            const StatusIcon = item.icon
            return (
              <div key={item.id} className={`acct-history-row${i % 2 === 0 ? '' : ' acct-history-row--alt'}`}>
                <div className="acct-history-row__info">
                  <Film size={14} className="acct-history-row__film-icon" />
                  <div>
                    <p className="acct-history-row__title">{item.title}</p>
                    <p className="acct-history-row__type">{item.type}</p>
                  </div>
                </div>
                <span className="acct-history-row__date">{item.date}</span>
                <span className="acct-history-row__candidates">
                  <Users size={13} /> {item.candidates}
                </span>
                <span className="acct-history-row__status" style={{ color: item.statusColor }}>
                  <StatusIcon size={13} /> {item.status}
                </span>
                <button className="acct-history-row__view-btn">
                  View <ChevronRight size={13} />
                </button>
              </div>
            )
          })}
          {filtered.length === 0 && (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '14px' }}>
              No castings found for this filter.
            </div>
          )}
        </div>
      </main>

      <div className="account-cinematic">
        <img src="/account-cinematic-bg.jpg" alt="" className="account-cinematic__img" />
        <div className="account-cinematic__overlay" />
      </div>
    </div>
  )
}
