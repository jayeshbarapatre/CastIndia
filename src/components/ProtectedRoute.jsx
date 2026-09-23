import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Loader2 } from 'lucide-react'

export default function ProtectedRoute({ allowedRole }) {
  const { user, role, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <Loader2 className="animate-spin text-[var(--color-gold)]" size={48} />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/auth" replace />
  }

  if (allowedRole && role !== allowedRole) {
    // If they have the wrong role, redirect them to their respective dashboard
    return <Navigate to={role === 'admin' ? '/casting-team/dashboard' : '/talent/dashboard'} replace />
  }

  return <Outlet />
}
