import React from 'react'
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'

export default function ConfirmAlert({ isOpen, title, message, type = 'warning', onConfirm, onCancel, confirmText = 'Confirm', cancelText = 'Cancel' }) {
  if (!isOpen) return null;

  const icons = {
    warning: <AlertTriangle size={28} className="text-[var(--color-gold)]" />,
    danger: <AlertTriangle size={28} className="text-[#FF4C4C]" />,
    success: <CheckCircle size={28} className="text-[#4ADE80]" />,
    info: <Info size={28} className="text-[#60A5FA]" />
  }

  const borderColors = {
    warning: 'border-[var(--color-gold)]/40',
    danger: 'border-[#FF4C4C]/40',
    success: 'border-[#4ADE80]/40',
    info: 'border-[#60A5FA]/40'
  }

  const confirmBtnStyles = {
    warning: 'bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-light)]',
    danger: 'bg-[#FF4C4C] text-white hover:bg-[#FF6B6B]',
    success: 'bg-[#4ADE80] text-black hover:bg-[#86EFAC]',
    info: 'bg-[#60A5FA] text-black hover:bg-[#93C5FD]'
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className={`relative w-full max-w-md glass-panel p-8 rounded-[24px] border ${borderColors[type]} shadow-2xl animate-fade-up scale-in`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-4 rounded-full bg-white/5 backdrop-blur-md">
            {icons[type]}
          </div>
          <h3 className="h3-card text-[var(--color-text-primary)] mb-2 font-display">{title}</h3>
          <p className="body-sm text-[var(--color-text-secondary)] mb-8">
            {message}
          </p>
          
          <div className="flex items-center gap-4 w-full">
            {onCancel && (
              <button 
                onClick={onCancel}
                className="flex-1 py-3 px-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)] transition-colors font-semibold"
              >
                {cancelText}
              </button>
            )}
            <button 
              onClick={onConfirm}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${confirmBtnStyles[type]}`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
