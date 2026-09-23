import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Upload, ChevronRight, ChevronLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import ProgressStepper from '../components/ProgressStepper'
import { supabase } from '../lib/supabase'

const steps = [
  { label: 'Profile' },
  { label: 'Requirements' },
  { label: 'Upload' },
  { label: 'Review' },
]

export default function ApplicationFlow() {
  const { id } = useParams()
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [castingCall, setCastingCall] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchCastingCall()
  }, [id])

  const fetchCastingCall = async () => {
    const { data, error } = await supabase
      .from('casting_calls')
      .select('*')
      .eq('id', id)
      .single()
      
    if (data) {
      setCastingCall(data)
    }
  }

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Submit Application
      setIsLoading(true)
      const primaryRole = (castingCall && castingCall.roles && castingCall.roles.length > 0) ? castingCall.roles[0].roleName : 'Unspecified Role'
      
      const { error } = await supabase
        .from('applications')
        .insert([
          {
            casting_id: id,
            role_name: primaryRole,
            candidate_name: 'Rahul Sharma', // Mock user
            candidate_id: 'user_123'
          }
        ])

      setIsLoading(false)
      if (error) {
        alert("Error submitting application: " + error.message)
      } else {
        setIsSubmitted(true)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    } else {
      navigate(-1)
    }
  }

  if (isSubmitted) {
    const roleName = (castingCall && castingCall.roles && castingCall.roles.length > 0) ? castingCall.roles[0].roleName : 'the role'
    
    return (
      <div className="max-w-[600px] mx-auto w-full px-4 py-16 text-center">
        <div className="w-24 h-24 rounded-full bg-[var(--color-verified-muted)] flex items-center justify-center mx-auto mb-8 border border-[var(--color-verified)]/20">
          <CheckCircle2 size={48} className="text-[var(--color-verified)]" />
        </div>
        <h1 className="h2-section text-[var(--color-text-primary)] mb-4">Application Submitted!</h1>
        <p className="body-large text-[var(--color-text-secondary)] mb-10">
          Your application for <strong className="text-[var(--color-text-primary)]">{roleName}</strong> has been successfully sent to the casting team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/talent/applications" className="btn-primary flex justify-center !px-8">
            Track Application Status
          </Link>
          <Link to="/casting" className="btn-secondary flex justify-center !px-8">
            Find More Casting
          </Link>
        </div>
      </div>
    )
  }

  const projectName = castingCall ? castingCall.project_name : 'Loading...'
  const roleName = (castingCall && castingCall.roles && castingCall.roles.length > 0) ? castingCall.roles[0].roleName : 'Loading...'

  return (
    <div className="max-w-[800px] mx-auto w-full px-4 py-8 md:py-12">
      <div className="mb-10">
        <h1 className="h3-card text-[var(--color-text-primary)] mb-8 text-center">Apply: {roleName}</h1>
        <div className="max-w-[500px] mx-auto">
          <ProgressStepper steps={steps} currentStep={currentStep} />
        </div>
      </div>

      <div className="glass-panel card-pad-lg rounded-[24px] mb-8 min-h-[400px]">
        {currentStep === 0 && (
          <div className="space-y-6 animate-fade-up">
            <h2 className="body-large font-bold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-4 mb-6">Confirm Profile Information</h2>
            <div className="bg-[rgba(56,189,248,0.05)] border border-[#7DD3FC]/20 rounded-xl p-4 flex items-start gap-3 mb-6">
              <AlertCircle size={20} className="text-[#7DD3FC] shrink-0 mt-0.5" />
              <p className="body-sm text-[var(--color-text-secondary)]">
                The casting team will review your CastIndia profile. Ensure your headshots and stats are up to date before submitting.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-[var(--color-surface-2)] p-6 rounded-2xl border border-[var(--color-border)] text-center sm:text-left">
              <div className="w-20 h-20 rounded-full bg-[var(--color-surface-3)] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="body-large font-bold text-[var(--color-text-primary)]">Rahul Sharma</h3>
                <p className="body-sm text-[var(--color-text-secondary)] mb-2">Actor • Mumbai, India</p>
                <Link to="/talent/profile" className="meta text-[var(--color-gold)] hover:underline">Edit Profile</Link>
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-up">
            <h2 className="body-large font-bold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-4 mb-6">Role Requirements</h2>
            <p className="body-sm text-[var(--color-text-secondary)] mb-6">Please confirm you meet the specific requirements for this role.</p>
            
            <div className="space-y-4">
              {[
                'Fluent in Hindi with a neutral accent',
                'Prior experience in web series or feature films',
                'Athletic build, willing to undergo basic action training',
                'Available for a 45-day continuous schedule starting Nov 2026'
              ].map((req, i) => (
                <label key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-gold-border)] cursor-pointer transition-colors bg-[var(--color-surface-2)]">
                  <div className="shrink-0 mt-0.5">
                    <input type="checkbox" className="w-4 h-4 accent-[var(--color-gold)]" defaultChecked />
                  </div>
                  <span className="body-sm text-[var(--color-text-primary)]">{req}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-up">
            <h2 className="body-large font-bold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-4 mb-6">Audition Materials</h2>
            
            <div className="mb-6">
              <h3 className="body-sm font-bold text-[var(--color-text-primary)] mb-2">Self Tape <span className="text-red-400">*</span></h3>
              <p className="meta text-[var(--color-text-muted)] mb-4">Please submit a 2-minute dramatic monologue in Hindi. Max size 200MB.</p>
              
              <div className="border-2 border-dashed border-[var(--color-border)] hover:border-[var(--color-gold-border)] rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-[var(--color-surface-2)]">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-3)] flex items-center justify-center mb-4 text-[var(--color-gold)]">
                  <Upload size={24} />
                </div>
                <p className="body-sm font-semibold text-[var(--color-text-primary)] mb-1">Click to upload or drag & drop</p>
                <p className="meta text-[var(--color-text-muted)]">MP4, MOV, or WebM</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-up">
            <h2 className="body-large font-bold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-4 mb-6">Review & Submit</h2>
            
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-start mb-6 pb-6 border-b border-[var(--color-border)]">
                <div>
                  <p className="meta text-[var(--color-text-muted)] mb-1">Applying for</p>
                  <p className="body-large font-bold text-[var(--color-text-primary)]">Lead Male — Detective</p>
                  <p className="body-sm text-[var(--color-text-secondary)]">Andhera (Web Series)</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="body-sm text-[var(--color-text-secondary)]">Profile Information</span>
                  <span className="meta text-[var(--color-verified)] flex items-center gap-1"><CheckCircle2 size={12}/> Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-sm text-[var(--color-text-secondary)]">Requirements</span>
                  <span className="meta text-[var(--color-verified)] flex items-center gap-1"><CheckCircle2 size={12}/> Confirmed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-sm text-[var(--color-text-secondary)]">Audition Video</span>
                  <span className="meta text-[var(--color-text-primary)]">self_tape_rahul.mp4</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <button onClick={handleBack} className="w-full sm:w-auto btn-secondary !bg-transparent !border-none !text-[var(--color-text-secondary)] hover:!text-[var(--color-text-primary)] flex items-center justify-center gap-2">
          <ChevronLeft size={16} />
          {currentStep === 0 ? 'Cancel' : 'Back'}
        </button>
        
        <button onClick={handleNext} className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 !px-8 !h-12">
          {currentStep === steps.length - 1 ? 'Submit Application' : 'Continue'}
          {currentStep < steps.length - 1 && <ChevronRight size={16} />}
        </button>
      </div>
    </div>
  )
}
