import { Archive } from 'lucide-react'

export default function EmptyState({ icon: Icon = Archive, title, description, actionText, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center glass-panel rounded-[24px]">
      <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center mb-6">
        <Icon size={32} className="text-[var(--color-text-muted)]" />
      </div>
      <h3 className="body-large text-[var(--color-text-primary)] font-semibold mb-2">
        {title}
      </h3>
      <p className="body-sm text-[var(--color-text-secondary)] max-w-sm mb-8">
        {description}
      </p>
      {actionText && onAction && (
        <button onClick={onAction} className="btn-secondary">
          {actionText}
        </button>
      )}
    </div>
  )
}
