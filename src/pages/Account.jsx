import React from 'react'
import { User, Mail, Phone, Camera, Shield } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Account() {
  const { user } = useAuth()

  return (
    <div className="container-xl pt-12 pb-24 md:pb-32 animate-fade-in">
      <div className="mb-10 text-center">
        <h1 className="h2-section text-[var(--color-text-primary)] mb-3">My Account</h1>
        <p className="body-large text-[var(--color-text-secondary)]">Manage your personal profile and contact information.</p>
      </div>

      <div className="max-w-[700px] mx-auto glass-panel p-8 md:p-10 rounded-[24px] border border-[var(--color-border)]">
        
        {/* Profile Picture Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-[var(--color-border)] mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-text-muted)] text-3xl font-display font-bold border border-[var(--color-border)]">
              {user?.user_metadata?.full_name?.charAt(0) || 'U'}
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-[var(--color-violet)] hover:bg-[var(--color-violet-light)] text-white rounded-full transition-colors shadow-lg">
              <Camera size={14} />
            </button>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-display font-bold text-[var(--color-text-primary)] mb-1">
              {user?.user_metadata?.full_name || 'Verified User'}
            </h2>
            <p className="meta text-[var(--color-text-secondary)]">{user?.email}</p>
          </div>
        </div>

        {/* Basic Info Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                  <User size={16} />
                </div>
                <input 
                  type="text" 
                  defaultValue={user?.user_metadata?.full_name}
                  className="w-full bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl py-3 pl-11 pr-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                  <Mail size={16} />
                </div>
                <input 
                  type="email" 
                  disabled
                  defaultValue={user?.email}
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl py-3 pl-11 pr-4 text-sm text-[var(--color-text-muted)] cursor-not-allowed opacity-70"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Phone Number</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                <Phone size={16} />
              </div>
              <input 
                type="tel" 
                placeholder="+91 "
                className="w-full bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl py-3 pl-11 pr-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="meta text-[var(--color-text-muted)] flex items-center gap-2">
              <Shield size={14} className="text-[var(--color-verified)]" /> Your data is securely encrypted.
            </p>
            <button className="w-full sm:w-auto btn-primary !bg-[var(--color-violet)] hover:!bg-[var(--color-violet-light)] !border-transparent !text-white px-8">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
