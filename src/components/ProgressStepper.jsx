import { Check } from 'lucide-react'

export default function ProgressStepper({ steps, currentStep }) {
  return (
    <div className="flex items-center justify-between w-full relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[var(--color-surface-2)] -z-10" />
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--color-gold)] transition-all duration-300 -z-10" 
        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
      />
      
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep

        return (
          <div key={step.label} className="flex flex-col items-center gap-2">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${
                isCompleted 
                  ? 'bg-[var(--color-gold)] text-[#0A0A0F] shadow-[0_0_15px_rgba(227,167,47,0.3)]' 
                  : isCurrent
                    ? 'bg-[var(--color-bg)] text-[var(--color-gold)] border-2 border-[var(--color-gold)]'
                    : 'bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]'
              }`}
            >
              {isCompleted ? <Check size={16} /> : index + 1}
            </div>
            <span className={`text-[11px] font-semibold uppercase tracking-wider hidden sm:block ${isCurrent || isCompleted ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}`}>
              {step.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
