import { useState, useEffect } from 'react'
import { Search, Filter, X } from 'lucide-react'
import CastingCard from '../components/CastingCard'
import EmptyState from '../components/EmptyState'
import { supabase } from '../lib/supabase'

export default function CastingSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [allCastingCalls, setAllCastingCalls] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCastingCalls()
  }, [])

  const fetchCastingCalls = async () => {
    const { data, error } = await supabase
      .from('casting_calls')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching casting calls:', error)
    } else {
      // Map Supabase data to the format expected by CastingCard
      const formatted = data.map(call => {
        const primaryRole = (call.roles && call.roles.length > 0) ? call.roles[0] : {}
        return {
          id: call.id,
          projectName: call.project_name,
          projectType: call.project_type,
          platform: call.platform || 'Any Platform',
          roleName: primaryRole.roleName || 'Unspecified Role',
          ageRange: primaryRole.ageRange || 'Any',
          gender: primaryRole.gender || 'Any',
          location: 'Anywhere', // Location not captured in form, defaulting
          language: primaryRole.language || 'Any',
          auditionType: primaryRole.auditionType || 'Self Tape',
          deadline: 'Open', 
          status: 'Applications Open',
          verified: true,
          urgent: false,
        }
      })
      setAllCastingCalls(formatted)
    }
    setLoading(false)
  }

  const projectTypeFilters = ['Feature Film', 'Web Series', 'Advertisement', 'Music Video', 'TV Serial']
  const locationFilters = ['Mumbai', 'Delhi NCR', 'Hyderabad', 'Bengaluru', 'Chennai']

  const filteredCalls = allCastingCalls.filter(call => {
    // 1. Text Search
    const matchesSearch = 
      (call.projectName || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
      (call.roleName || '').toLowerCase().includes(searchTerm.toLowerCase())

    // 2. Project Type Filter
    const selectedProjectTypes = selectedFilters.filter(f => projectTypeFilters.includes(f))
    const matchesProjectType = selectedProjectTypes.length === 0 || selectedProjectTypes.includes(call.projectType)

    // 3. Location Filter (mocking location match if not present)
    const selectedLocations = selectedFilters.filter(f => locationFilters.includes(f))
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(call.location) || selectedLocations.some(loc => (call.projectName || '').includes(loc))

    return matchesSearch && matchesProjectType && matchesLocation
  })

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setSearchTerm('')
  }

  return (
    <div className="flex-1 flex flex-col md:flex-row max-w-[1440px] mx-auto w-full">
      {/* Sidebar Filters */}
      <aside className={`fixed inset-0 z-50 md:z-0 md:relative md:w-[300px] lg:w-[340px] bg-[var(--color-bg)] border-r border-[var(--color-border)] flex flex-col transition-transform duration-300 ${showMobileFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)] md:hidden">
          <h2 className="body-large font-bold">Filters</h2>
          <button onClick={() => setShowMobileFilters(false)} className="text-[var(--color-text-muted)] p-1" aria-label="Close filters">
            <X size={24} />
          </button>
        </div>
        
        {/* Filter Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="hidden md:flex items-center justify-between mb-6">
            <h2 className="body-large font-semibold text-[var(--color-text-primary)]">Filters</h2>
            {selectedFilters.length > 0 && (
              <button onClick={clearFilters} className="meta text-[var(--color-gold)] hover:underline">
                Clear All
              </button>
            )}
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input 
              type="text" 
              placeholder="Search roles, projects..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 pl-12 pr-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-gold-border)] focus:bg-[rgba(227,167,47,0.03)] transition-all"
            />
          </div>

          {/* Filter Groups */}
          <div className="space-y-8">
            <div>
              <h3 className="meta font-bold tracking-wider uppercase text-[var(--color-text-muted)] mb-4">Project Type</h3>
              <div className="flex flex-col gap-3">
                {['Feature Film', 'Web Series', 'Advertisement', 'Music Video', 'TV Serial'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedFilters.includes(type) ? 'bg-[var(--color-gold)] border-[var(--color-gold)] text-[#0A0A0F]' : 'border-[var(--color-border)] bg-[var(--color-surface-1)] group-hover:border-[var(--color-gold-border)]'}`}>
                      {selectedFilters.includes(type) && <X size={14} />}
                    </div>
                    <span className="body-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="meta font-bold tracking-wider uppercase text-[var(--color-text-muted)] mb-4">Location</h3>
              <div className="flex flex-col gap-3">
                {['Mumbai', 'Delhi NCR', 'Hyderabad', 'Bengaluru', 'Chennai'].map(loc => (
                  <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedFilters.includes(loc) ? 'bg-[var(--color-gold)] border-[var(--color-gold)] text-[#0A0A0F]' : 'border-[var(--color-border)] bg-[var(--color-surface-1)] group-hover:border-[var(--color-gold-border)]'}`}>
                      {selectedFilters.includes(loc) && <X size={14} />}
                    </div>
                    <span className="body-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">{loc}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Footer */}
        <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-bg)] md:hidden flex items-center gap-4">
          <button 
            onClick={clearFilters} 
            className="body-sm text-[var(--color-text-secondary)] px-4 font-semibold"
          >
            Clear
          </button>
          <button 
            onClick={() => setShowMobileFilters(false)}
            className="flex-1 btn-primary !h-12 flex items-center justify-center"
          >
            Show {filteredCalls.length} Results
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="h2-section text-[var(--color-text-primary)] mb-2">Find Casting</h1>
            <p className="body-sm text-[var(--color-text-secondary)]">Showing {filteredCalls.length} opportunities</p>
          </div>
          
          <button 
            onClick={() => setShowMobileFilters(true)}
            className="md:hidden flex items-center gap-2 btn-secondary !py-2 !px-4"
          >
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Selected Filter Tags */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedFilters.map(filter => (
              <span key={filter} className="tag-pill !bg-[var(--color-surface-3)] !text-[var(--color-text-primary)] flex items-center gap-2 cursor-pointer hover:!bg-[var(--color-surface-4)]" onClick={() => toggleFilter(filter)}>
                {filter} <X size={14} className="text-[var(--color-text-muted)]" />
              </span>
            ))}
          </div>
        )}

        {/* Results Grid */}
        {filteredCalls.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCalls.map(call => (
              <CastingCard key={call.id} call={call} />
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No casting calls found"
            description="We couldn't find any opportunities matching your current filters. Try adjusting your search criteria."
            actionText="Clear Filters"
            onAction={clearFilters}
          />
        )}
      </main>
    </div>
  )
}
