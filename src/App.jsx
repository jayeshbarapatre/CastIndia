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

// Public Info Pages
import HowItWorks       from './pages/public/HowItWorks'
import CreateProfile     from './pages/public/CreateProfile'
import FindAuditions     from './pages/public/FindAuditions'
import Resources         from './pages/public/Resources'
import SafetyGuide       from './pages/public/SafetyGuide'
import StartCasting      from './pages/public/StartCasting'
import CastingResources  from './pages/public/CastingResources'
import Categories        from './pages/public/Categories'
import About             from './pages/public/About'
import Contact           from './pages/public/Contact'
import FAQ               from './pages/public/FAQ'
import HelpCenter        from './pages/public/HelpCenter'
import PrivacyPolicy     from './pages/public/PrivacyPolicy'
import TermsOfService    from './pages/public/TermsOfService'
import CommunityGuidelines from './pages/public/CommunityGuidelines'

// Shared Authenticated Pages
import Account from './pages/Account'
import Settings from './pages/Settings'
import CastingProfile from './pages/CastingProfile'
import CastingHistory from './pages/CastingHistory'
import CastingNotifications from './pages/CastingNotifications'

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

            {/* Footer public pages */}
            <Route path="/how-it-works"          element={<HowItWorks />} />
            <Route path="/create-profile"        element={<CreateProfile />} />
            <Route path="/auditions"             element={<FindAuditions />} />
            <Route path="/resources"             element={<Resources />} />
            <Route path="/safety"                element={<SafetyGuide />} />
            <Route path="/start-casting"         element={<StartCasting />} />
            <Route path="/casting-resources"     element={<CastingResources />} />
            <Route path="/categories"            element={<Categories />} />
            <Route path="/about"                 element={<About />} />
            <Route path="/contact"               element={<Contact />} />
            <Route path="/faq"                   element={<FAQ />} />
            <Route path="/help"                  element={<HelpCenter />} />
            <Route path="/privacy"               element={<PrivacyPolicy />} />
            <Route path="/terms"                 element={<TermsOfService />} />
            <Route path="/community-guidelines"  element={<CommunityGuidelines />} />
          </Route>

          <Route path="/auth" element={<Auth />} />

          {/* Talent Authenticated Routes */}
          <Route element={<ProtectedRoute allowedRole="talent" />}>
            <Route element={<TalentLayout />}>
              <Route path="/talent/dashboard"    element={<TalentDashboard />} />
              <Route path="/talent/applications" element={<TalentDashboard />} />
              <Route path="/talent/saved"        element={<TalentDashboard />} />
              <Route path="/talent/account"      element={<Account />} />
              <Route path="/talent/settings"     element={<Settings />} />
              <Route path="/casting"             element={<CastingSearch />} />
              <Route path="/casting/:id"         element={<CastingDetails />} />
              <Route path="/casting/:id/apply"   element={<ApplicationFlow />} />
            </Route>
          </Route>

          {/* Casting Team Authenticated Routes */}
          <Route element={<ProtectedRoute allowedRole="admin" />}>
            <Route element={<CastingLayout />}>
              <Route path="/casting-team/dashboard"      element={<CastingDashboard />} />
              <Route path="/casting-team/projects"       element={<CastingDashboard />} />
              <Route path="/casting-team/projects/:id"   element={<ProjectKanban />} />
              <Route path="/casting-team/shortlists"     element={<CastingDashboard />} />
              <Route path="/casting-team/new"            element={<CreateCasting />} />
              <Route path="/casting-team/account"        element={<Account />} />
              <Route path="/casting-team/profile"        element={<CastingProfile />} />
              <Route path="/casting-team/history"        element={<CastingHistory />} />
              <Route path="/casting-team/notifications"  element={<CastingNotifications />} />
              <Route path="/casting-team/settings"       element={<Settings />} />
              <Route path="/talent"                      element={<TalentSearch />} />
              <Route path="/talent/:id"                  element={<TalentProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
