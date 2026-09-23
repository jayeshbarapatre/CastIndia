import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Trash2, CheckCircle2, AlertCircle, X } from 'lucide-react'
import ProgressStepper from '../components/ProgressStepper'
import { supabase } from '../lib/supabase'

const steps = [
  { label: 'Project Info' },
  { label: 'Roles' },
  { label: 'Publish' }
]

export default function CreateCasting() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPublished, setIsPublished] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  // Form State
  const [projectData, setProjectData] = useState({
    projectName: '',
    projectType: '',
    platform: '',
    description: ''
  })
  
  const [roles, setRoles] = useState([{
    roleName: '',
    gender: 'Any',
    ageRange: '',
    language: '',
    auditionType: 'Self Tape'
  }])

  const showError = (msg) => {
    setErrorMsg(msg)
    setTimeout(() => setErrorMsg(''), 5000)
  }

  const handleNext = async () => {
    if (currentStep === 0) {
      if (!projectData.projectName || !projectData.projectType) {
        showError("Please fill in the required fields (Project Name and Type).")
        return
      }
      setCurrentStep(1)
    } else if (currentStep === 1) {
      if (!roles[0].roleName) {
        showError("Please add at least one role with a name.")
        return
      }
      setCurrentStep(2)
    } else if (currentStep === 2) {
      // Publish to Supabase
      setIsLoading(true)
      const { data, error } = await supabase
        .from('casting_calls')
        .insert([
          {
            project_name: projectData.projectName,
            project_type: projectData.projectType,
            platform: projectData.platform,
            description: projectData.description,
            roles: roles
          }
        ])

      setIsLoading(false)
      
      if (error) {
        showError("Error publishing casting call: " + error.message)
        console.error(error)
      } else {
        setIsPublished(true)
      }
    }
  }

  const addRole = () => {
    setRoles([...roles, { roleName: '', gender: 'Any', ageRange: '', language: '', auditionType: 'Self Tape' }])
  }

  const removeRole = (index) => {
    if (roles.length > 1) {
      const newRoles = [...roles]
      newRoles.splice(index, 1)
      setRoles(newRoles)
    }
  }

  const updateRole = (index, field, value) => {
    const newRoles = [...roles]
    newRoles[index][field] = value
    setRoles(newRoles)
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
    <div className="max-w-[800px] mx-auto w-full px-4 py-8 md:py-12 relative">
      {/* Premium UI Error Toast */}
      {errorMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#2A1111]/90 border border-[#FF4C4C]/40 text-[#FF8585] px-6 py-4 rounded-xl flex items-center gap-3 shadow-[0_10px_40px_rgba(255,76,76,0.2)] animate-fade-down backdrop-blur-md">
          <AlertCircle size={20} className="text-[#FF4C4C] shrink-0" />
          <span className="font-medium text-sm leading-snug">{errorMsg}</span>
          <button onClick={() => setErrorMsg('')} className="ml-4 hover:text-white transition-colors shrink-0 text-[#FF4C4C]/70">
            <X size={18} />
          </button>
        </div>
      )}

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
                <input 
                  type="text" 
                  value={projectData.projectName}
                  onChange={(e) => setProjectData({...projectData, projectName: e.target.value})}
                  placeholder="e.g. Untitled Thriller Series" 
                  className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] focus:bg-[rgba(108,99,255,0.03)] transition-all" 
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Project Type *</label>
                  <select 
                    value={projectData.projectType}
                    onChange={(e) => setProjectData({...projectData, projectType: e.target.value})}
                    className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all"
                  >
                    <option value="">Select Type</option>
                    <option value="Web Series">Web Series</option>
                    <option value="Feature Film">Feature Film</option>
                    <option value="Advertisement">Advertisement</option>
                  </select>
                </div>
                <div>
                  <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Platform / Distribution</label>
                  <input 
                    type="text" 
                    value={projectData.platform}
                    onChange={(e) => setProjectData({...projectData, platform: e.target.value})}
                    placeholder="e.g. Netflix, Theatrical" 
                    className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Production Description</label>
                <textarea 
                  rows="4" 
                  value={projectData.description}
                  onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                  placeholder="Brief synopsis of the project..." 
                  className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4 mb-6">
              <h2 className="body-large font-bold text-[var(--color-text-primary)]">Roles & Requirements</h2>
              <button onClick={addRole} className="meta text-[var(--color-violet-light)] hover:underline font-semibold flex items-center gap-1">
                <Plus size={14} /> Add Role
              </button>
            </div>
            
            {roles.map((role, idx) => (
              <div key={idx} className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-6 relative mb-4">
                {roles.length > 1 && (
                  <button onClick={() => removeRole(idx)} className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-red-500 hover:bg-red-500/10 p-2 rounded-full transition-all" aria-label="Remove role">
                    <Trash2 size={16} />
                  </button>
                )}
                
                <div className="space-y-5">
                  <div>
                    <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Role Name *</label>
                    <input 
                      type="text" 
                      value={role.roleName}
                      onChange={(e) => updateRole(idx, 'roleName', e.target.value)}
                      placeholder="e.g. Lead Detective" 
                      className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Gender</label>
                      <select 
                        value={role.gender}
                        onChange={(e) => updateRole(idx, 'gender', e.target.value)}
                        className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all"
                      >
                        <option>Any</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Age Range</label>
                      <input 
                        type="text" 
                        value={role.ageRange}
                        onChange={(e) => updateRole(idx, 'ageRange', e.target.value)}
                        placeholder="e.g. 25-35" 
                        className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Language</label>
                      <input 
                        type="text" 
                        value={role.language}
                        onChange={(e) => updateRole(idx, 'language', e.target.value)}
                        placeholder="e.g. Hindi" 
                        className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Audition Type</label>
                    <select 
                      value={role.auditionType}
                      onChange={(e) => updateRole(idx, 'auditionType', e.target.value)}
                      className="w-full bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl py-2 px-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] transition-all"
                    >
                      <option>Self Tape</option>
                      <option>In-Person (Invite Only)</option>
                      <option>Audio Submission</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-up">
            <h2 className="body-large font-bold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-4 mb-6">Review & Publish</h2>
            
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-6 mb-6">
              <h3 className="h3-card text-[var(--color-text-primary)] mb-2">{projectData.projectName || 'Untitled Project'}</h3>
              <p className="body-sm text-[var(--color-text-secondary)] mb-6">{projectData.projectType || 'Unspecified Type'} • {roles.length} Role(s) Defined</p>
              
              <div className="space-y-4">
                {roles.map((role, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-t border-[var(--color-border)]">
                    <span className="body-sm text-[var(--color-text-primary)]">{role.roleName || 'Unnamed Role'}</span>
                    <span className="meta text-[var(--color-text-muted)]">{role.gender} • {role.ageRange || 'Any age'} • {role.language || 'Any language'}</span>
                  </div>
                ))}
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
          disabled={isLoading}
        >
          {currentStep === 0 ? 'Cancel' : 'Back'}
        </button>
        
        <button 
          onClick={handleNext} 
          disabled={isLoading}
          className={`w-full sm:w-auto btn-primary !bg-[var(--color-violet)] hover:!bg-[var(--color-violet-light)] hover:!text-white !border-transparent !text-white flex justify-center !px-8 !h-12 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Publishing...' : currentStep === steps.length - 1 ? 'Publish Casting' : 'Continue'}
        </button>
      </div>
    </div>
  )
}
