import { CheckCircle2, Clock, XCircle, AlertCircle, FileText } from 'lucide-react'

const statusConfig = {
  applied: {
    icon: FileText,
    label: 'Applied',
    colors: 'bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  },
  underReview: {
    icon: Clock,
    label: 'Under Review',
    colors: 'bg-[rgba(56,189,248,0.1)] text-[#7DD3FC] border border-[#7DD3FC]/20',
  },
  shortlisted: {
    icon: CheckCircle2,
    label: 'Shortlisted',
    colors: 'bg-[var(--color-verified-muted)] text-[var(--color-verified)] border border-[var(--color-verified)]/20',
  },
  auditionRequested: {
    icon: AlertCircle,
    label: 'Audition Requested',
    colors: 'bg-[var(--color-gold-muted)] text-[var(--color-gold)] border border-[var(--color-gold-border)]',
  },
  notSelected: {
    icon: XCircle,
    label: 'Not Selected',
    colors: 'bg-[rgba(239,68,68,0.1)] text-[#FCA5A5] border border-[#FCA5A5]/20',
  },
}

export default function StatusBadge({ status = 'applied' }) {
  const config = statusConfig[status] || statusConfig.applied
  const Icon = config.icon

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.colors}`}>
      <Icon size={12} />
      {config.label}
    </div>
  )
}
