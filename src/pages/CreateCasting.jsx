import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Trash2, CheckCircle2 } from 'lucide-react'
import ProgressStepper from '../components/ProgressStepper'

const steps = [
  { label: 'Project Info' },
  { label: 'Roles' },
  { label: 'Publish' }
]

export default function CreateCasting() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPublished, setIsPublished] = useState(false)
  const navigate = useNavigate()

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsPublished(true)
    }
  }

  if (isPublished) {
    return (
      <div className="max-w-[600px] mx-auto w-full px-4 py-16 text-center">
        <div className="w-24 h-24 rounded-full bg-[var(--color-verified-muted)] flex items-center justify-center mx-auto mb-8 border border-[var(--color-verified)]/20">
          <CheckCircle2 size={48} className="text-[var(--color-verified)]" />
        </div>
        <h1 className="h2-section text-[var(--color-text-primary)] mb-4">Casting Published!</h1>
        <p className="body-large text-[var(--color-text-secondary)] mb-10">
          Your project is now live on CastIndia. Talent can now search for and apply to your roles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/casting-team/dashboard" className="btn-primary !bg-[var(--color-violet)] hover:!bg-[var(--color-violet-light)] hover:!text-white !border-transparent !text-white flex justify-center !px-8">
            Go to Dashboard
          </Link>
          <Link to="/talent" className="btn-secondary flex justify-center !px-8">
            Search Talent Now
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[800px] mx-auto w-full px-4 py-8 md:py-12">
      <div className="mb-10">
        <h1 className="h3-card text-[var(--color-text-primary)] mb-8 text-center">Post a Casting Call</h1>
        <div className="max-w-[500px] mx-auto">
          <ProgressStepper steps={steps} currentStep={currentStep} />
        </div>
      </div>

      <div className="glass-panel card-pad-lg rounded-[24px] mb-8 min-h-[400px]">
        {currentStep === 0 && (
          <div className="space-y-6 animate-fade-up">
            <h2 className="body-large font-bold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-4 mb-6">Project Details</h2>
            
            <div className="space-y-5">
              <div>
                <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Project Name *</label>
                <input type="text" placeholder="e.g. Untitled Thriller Series" className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] focus:bg-[rgba(108,99,255,0.03)] transition-all" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Project Type *</label>
                  <select className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all">
                    <option value="">Select Type</option>
                    <option value="web-series">Web Series</option>
                    <option value="feature-film">Feature Film</option>
                    <option value="ad">Advertisement</option>
                  </select>
                </div>
                <div>
                  <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Platform / Distribution</label>
                  <input type="text" placeholder="e.g. Netflix, Theatrical" className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all" />
                </div>
              </div>

              <div>
                <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Production Description</label>
                <textarea rows="4" placeholder="Brief synopsis of the project..." className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all resize-none"></textarea>
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4 mb-6">
              <h2 className="body-large font-bold text-[var(--color-text-primary)]">Roles & Requirements</h2>
              <button className="meta text-[var(--color-violet-light)] hover:underline font-semibold flex items-center gap-1">
                <Plus size={14} /> Add Role
              </button>
            </div>
            
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-6 relative">
              <button className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-red-500 hover:bg-red-500/10 p-2 rounded-full transition-all" aria-label="Remove role">
                <Trash2 size={16} />
              </button>
              
              <div className="space-y-5">
                <div>
                  <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Role Name *</label>
                  <input type="text" placeholder="e.g. Lead Detective" className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Gender</label>
                    <select className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all">
                      <option>Any</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Age Range</label>
                    <input type="text" placeholder="e.g. 25-35" className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all" />
                  </div>
                  <div>
                    <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Language</label>
                    <input type="text" placeholder="e.g. Hindi" className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Audition Type</label>
                  <select className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all">
                    <option>Self Tape</option>
                    <option>In-Person (Invite Only)</option>
                    <option>Audio Submission</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-up">
            <h2 className="body-large font-bold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-4 mb-6">Review & Publish</h2>
            
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-6 mb-6">
              <h3 className="h3-card text-[var(--color-text-primary)] mb-2">Untitled Thriller Series</h3>
              <p className="body-sm text-[var(--color-text-secondary)] mb-6">Web Series • 1 Role Defined</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-t border-[var(--color-border)]">
                  <span className="body-sm text-[var(--color-text-primary)]">Lead Detective</span>
                  <span className="meta text-[var(--color-text-muted)]">Male • 25-35 • Hindi</span>
                </div>
              </div>
            </div>
            
            <p className="meta text-[var(--color-text-secondary)] text-center">
              By publishing, you agree to CastIndia's community guidelines for casting professionals.
            </p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <button 
          onClick={() => currentStep > 0 ? setCurrentStep(prev => prev - 1) : navigate(-1)} 
          className="w-full sm:w-auto btn-secondary !bg-transparent !border-none !text-[var(--color-text-secondary)] hover:!text-[var(--color-text-primary)] flex items-center justify-center gap-2"
        >
          {currentStep === 0 ? 'Cancel' : 'Back'}
        </button>
        
        <button 
          onClick={handleNext} 
          className="w-full sm:w-auto btn-primary !bg-[var(--color-violet)] hover:!bg-[var(--color-violet-light)] hover:!text-white !border-transparent !text-white flex justify-center !px-8 !h-12"
        >
          {currentStep === steps.length - 1 ? 'Publish Casting' : 'Continue'}
        </button>
      </div>
    </div>
  )
}
