import React from 'react'
import { Bell, Lock, Eye, Globe, ShieldAlert } from 'lucide-react'

export default function Settings() {
  return (
    <div className="container-xl pt-12 pb-24 md:pb-32 animate-fade-in">
      <div className="mb-10 text-center">
        <h1 className="h2-section text-[var(--color-text-primary)] mb-3">Settings</h1>
        <p className="body-large text-[var(--color-text-secondary)]">Manage your preferences, privacy, and security.</p>
      </div>

      <div className="max-w-[700px] mx-auto grid gap-6">
        
        {/* Security Section */}
        <div className="glass-panel p-6 md:p-8 rounded-[20px] border border-[var(--color-border)]">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-border)]">
            <div className="p-2 bg-[var(--color-surface-2)] rounded-lg text-[var(--color-text-primary)]">
              <Lock size={20} />
            </div>
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] font-display">Security & Password</h2>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="body-sm font-semibold text-[var(--color-text-primary)]">Change Password</p>
              <p className="meta text-[var(--color-text-secondary)]">Update your password to keep your account secure.</p>
            </div>
            <button className="btn-secondary !py-2 !px-4 text-sm">Update</button>
          </div>
          <div className="flex items-center justify-between py-2 mt-4">
            <div>
              <p className="body-sm font-semibold text-[var(--color-text-primary)]">Two-Factor Authentication</p>
              <p className="meta text-[var(--color-text-secondary)]">Add an extra layer of security.</p>
            </div>
            <button className="btn-secondary !py-2 !px-4 text-sm">Enable</button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="glass-panel p-6 md:p-8 rounded-[20px] border border-[var(--color-border)]">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-border)]">
            <div className="p-2 bg-[var(--color-surface-2)] rounded-lg text-[var(--color-text-primary)]">
              <Bell size={20} />
            </div>
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] font-display">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer group">
              <div>
                <p className="body-sm font-semibold text-[var(--color-text-primary)]">Email Notifications</p>
                <p className="meta text-[var(--color-text-secondary)]">Receive casting alerts and updates via email.</p>
              </div>
              <div className="w-11 h-6 bg-[var(--color-violet)] rounded-full relative transition-colors border border-[rgba(255,255,255,0.1)]">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
              </div>
            </label>
            
            <label className="flex items-center justify-between cursor-pointer group pt-2 border-t border-[rgba(255,255,255,0.05)]">
              <div>
                <p className="body-sm font-semibold text-[var(--color-text-primary)]">Marketing Emails</p>
                <p className="meta text-[var(--color-text-secondary)]">Tips, tutorials, and CastIndia news.</p>
              </div>
              <div className="w-11 h-6 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full relative transition-colors">
                <div className="w-4 h-4 bg-[var(--color-text-muted)] rounded-full absolute left-1 top-[3px]"></div>
              </div>
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="glass-panel p-6 md:p-8 rounded-[20px] border border-[#FF4C4C]/30 bg-[#FF4C4C]/5 mt-4">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert size={20} className="text-[#FF4C4C]" />
            <h2 className="text-lg font-bold text-[#FF4C4C] font-display">Danger Zone</h2>
          </div>
          <p className="meta text-[var(--color-text-secondary)] mb-6">Once you delete your account, there is no going back. Please be certain.</p>
          <button className="bg-transparent border border-[#FF4C4C]/50 text-[#FF4C4C] hover:bg-[#FF4C4C] hover:text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  )
}
