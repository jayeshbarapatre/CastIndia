import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { AlertCircle, User, Briefcase } from 'lucide-react'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('talent') // 'talent' or 'admin'
  const [name, setName] = useState('')
  
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  
  const { signIn, signUp, user, role: userRole } = useAuth()
  const navigate = useNavigate()

  // Redirect if already logged in
  if (user) {
    return <Navigate to={userRole === 'admin' ? '/casting-team/dashboard' : '/talent/dashboard'} replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    try {
      if (isLogin) {
        const { error } = await signIn({ email, password })
        if (error) throw error
      } else {
        if (!name) throw new Error('Please enter your name')
        
        const { data, error } = await signUp({ 
          email, 
          password,
          options: {
            data: {
              full_name: name,
              role: role
            }
          }
        })
        if (error) throw error
        
        // Supabase might require email confirmation depending on settings
        if (data?.user && data?.session === null) {
          setErrorMsg('Registration successful! Please check your email to verify your account.')
          setIsLogin(true)
          setLoading(false)
          return
        }
      }
    } catch (error) {
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-4">
      {/* Premium UI Error Toast */}
      {errorMsg && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#2A1111]/90 border border-[#FF4C4C]/40 text-[#FF8585] px-6 py-4 rounded-xl flex items-center gap-3 shadow-[0_10px_40px_rgba(255,76,76,0.2)] animate-fade-down backdrop-blur-md max-w-md w-full text-center">
          <AlertCircle size={20} className="text-[#FF4C4C] shrink-0" />
          <span className="font-medium text-sm leading-snug">{errorMsg}</span>
        </div>
      )}

      <div className="w-full max-w-md glass-panel p-8 md:p-10 rounded-[24px] animate-fade-up">
        <div className="text-center mb-8">
          <h1 className="h3-card text-[var(--color-text-primary)] mb-2 font-display">
            {isLogin ? 'Welcome Back' : 'Create an Account'}
          </h1>
          <p className="body-sm text-[var(--color-text-secondary)]">
            {isLogin ? 'Sign in to access your dashboard' : 'Join CastIndia and start your journey'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <>
              <div>
                <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">I am a...</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole('talent')}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${role === 'talent' ? 'bg-[var(--color-gold-muted)] border-[var(--color-gold)] text-[var(--color-gold)]' : 'bg-[var(--color-surface-2)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]'}`}
                  >
                    <User size={18} />
                    Talent
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('admin')}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${role === 'admin' ? 'bg-[var(--color-violet-muted)] border-[var(--color-violet)] text-[var(--color-violet-light)]' : 'bg-[var(--color-surface-2)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]'}`}
                  >
                    <Briefcase size={18} />
                    Casting Team
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma" 
                  className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-gold-border)] focus:bg-[var(--color-surface-3)] transition-all" 
                />
              </div>
            </>
          )}

          <div>
            <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com" 
              className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-gold-border)] focus:bg-[var(--color-surface-3)] transition-all" 
            />
          </div>

          <div>
            <label className="block meta font-bold text-[var(--color-text-secondary)] mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••" 
              className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 px-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-gold-border)] focus:bg-[var(--color-surface-3)] transition-all" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full !mt-8 btn-primary flex justify-center !h-12 ${loading ? 'opacity-70 cursor-not-allowed' : ''} ${!isLogin && role === 'admin' ? '!bg-[var(--color-violet)] hover:!bg-[var(--color-violet-light)] !text-white' : ''}`}
          >
            {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="body-sm text-[var(--color-text-secondary)]">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => { setIsLogin(!isLogin); setErrorMsg(''); }}
              className={`font-semibold hover:underline ${!isLogin && role === 'admin' ? 'text-[var(--color-violet-light)]' : 'text-[var(--color-gold)]'}`}
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
