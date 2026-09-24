import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

// Layouts
import PublicLayout from './components/layouts/PublicLayout'
import TalentLayout from './components/layouts/TalentLayout'
import CastingLayout from './components/layouts/CastingLayout'

// Public Pages
import Home from './pages/Home'
import Auth from './pages/Auth'

// Shared Authenticated Pages
import Account from './pages/Account'
import Settings from './pages/Settings'

// Talent Pages
import CastingSearch from './pages/CastingSearch'
import CastingDetails from './pages/CastingDetails'
import ApplicationFlow from './pages/ApplicationFlow'
import TalentDashboard from './pages/TalentDashboard'

// Casting Pages
import TalentSearch from './pages/TalentSearch'
import TalentProfile from './pages/TalentProfile'
import CastingDashboard from './pages/CastingDashboard'
import CreateCasting from './pages/CreateCasting'
import ProjectKanban from './pages/ProjectKanban'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          
          <Route path="/auth" element={<Auth />} />

          {/* Talent Authenticated Routes */}
          <Route element={<ProtectedRoute allowedRole="talent" />}>
            <Route element={<TalentLayout />}>
              <Route path="/talent/dashboard" element={<TalentDashboard />} />
              <Route path="/talent/applications" element={<TalentDashboard />} />
              <Route path="/talent/saved" element={<TalentDashboard />} />
              <Route path="/talent/account" element={<Account />} />
              <Route path="/talent/settings" element={<Settings />} />
              
              {/* Casting Discovery for Talent */}
              <Route path="/casting" element={<CastingSearch />} />
              <Route path="/casting/:id" element={<CastingDetails />} />
              <Route path="/casting/:id/apply" element={<ApplicationFlow />} />
            </Route>
          </Route>

          {/* Casting Team Authenticated Routes */}
          <Route element={<ProtectedRoute allowedRole="admin" />}>
            <Route element={<CastingLayout />}>
              <Route path="/casting-team/dashboard" element={<CastingDashboard />} />
              <Route path="/casting-team/projects" element={<CastingDashboard />} />
              <Route path="/casting-team/projects/:id" element={<ProjectKanban />} />
              <Route path="/casting-team/shortlists" element={<CastingDashboard />} />
              <Route path="/casting-team/new" element={<CreateCasting />} />
              <Route path="/casting-team/account" element={<Account />} />
              <Route path="/casting-team/settings" element={<Settings />} />
              
              {/* Talent Discovery for Casting */}
              <Route path="/talent" element={<TalentSearch />} />
              <Route path="/talent/:id" element={<TalentProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
