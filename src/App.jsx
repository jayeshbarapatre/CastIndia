import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layouts
import PublicLayout from './components/layouts/PublicLayout'
import TalentLayout from './components/layouts/TalentLayout'
import CastingLayout from './components/layouts/CastingLayout'

// Public Pages
import Home from './pages/Home'

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Talent Authenticated Routes */}
        <Route element={<TalentLayout />}>
          <Route path="/talent/dashboard" element={<TalentDashboard />} />
          <Route path="/talent/applications" element={<TalentDashboard />} />
          <Route path="/talent/saved" element={<TalentDashboard />} />
          
          {/* Casting Discovery for Talent */}
          <Route path="/casting" element={<CastingSearch />} />
          <Route path="/casting/:id" element={<CastingDetails />} />
          <Route path="/casting/:id/apply" element={<ApplicationFlow />} />
        </Route>

        {/* Casting Team Authenticated Routes */}
        <Route element={<CastingLayout />}>
          <Route path="/casting-team/dashboard" element={<CastingDashboard />} />
          <Route path="/casting-team/projects" element={<CastingDashboard />} />
          <Route path="/casting-team/shortlists" element={<CastingDashboard />} />
          <Route path="/casting-team/new" element={<CreateCasting />} />
          
          {/* Talent Discovery for Casting */}
          <Route path="/talent" element={<TalentSearch />} />
          <Route path="/talent/:id" element={<TalentProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
