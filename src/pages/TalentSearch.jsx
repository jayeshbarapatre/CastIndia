import { useState, useEffect } from 'react'
import { Search, Filter, X } from 'lucide-react'
import TalentCard from '../components/TalentCard'
import EmptyState from '../components/EmptyState'
import { supabase } from '../lib/supabase'

import talent1 from '../assets/images/talent_1.jpg'
import talent2 from '../assets/images/talent_2.jpg'
import talent3 from '../assets/images/talent_3.jpg'

export default function TalentSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [allTalent, setAllTalent] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTalent()
  }, [])

  const fetchTalent = async () => {
    const { data, error } = await supabase
      .from('talent_profiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching talent:', error)
    } else {
      if (data.length === 0) {
        // Seed some initial data if empty for demonstration
        seedTalent()
      } else {
        const formatted = data.map(t => ({
          id: t.id,
          name: t.full_name,
          image: talent1, // Mock image
          category: t.role_title || 'Actor',
          city: t.location || 'Mumbai',
          languages: t.primary_language ? [t.primary_language] : ['Hindi', 'English'],
          skills: t.skills || ['Drama'],
          verified: t.verified,
          experience: t.experience_level || 'Beginner',
          gradientClass: null,
          initials: t.full_name.substring(0, 2).toUpperCase(),
        }))
        setAllTalent(formatted)
      }
    }
    setLoading(false)
  }

  const seedTalent = async () => {
    const mockProfiles = [
      {
        user_id: 'user_123',
        full_name: 'Rahul Mehta',
        role_title: 'Actor',
        location: 'Mumbai',
        primary_language: 'Hindi',
        skills: ['Drama', 'Theatre', 'Action'],
        verified: true,
        experience_level: '6 years'
      },
      {
        user_id: 'user_456',
        full_name: 'Priya Sharma',
        role_title: 'Actress',
        location: 'Delhi',
        primary_language: 'English',
        skills: ['Comedy', 'Drama', 'OTT'],
        verified: true,
        experience_level: '4 years'
      }
    ]
    await supabase.from('talent_profiles').insert(mockProfiles)
    fetchTalent() // Refetch after seed
  }

  const professionFilters = ['Actor', 'Actress', 'Model', 'Singer', 'Dancer']
  const locationFilters = ['Mumbai', 'Delhi NCR', 'Hyderabad', 'Bengaluru', 'Chennai']

  const filteredTalent = allTalent.filter(talent => {
    // 1. Text Search
    const matchesSearch = 
      (talent.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
      (talent.category || '').toLowerCase().includes(searchTerm.toLowerCase())

    // 2. Profession Filter (category/role_title)
    const selectedProfessions = selectedFilters.filter(f => professionFilters.includes(f))
    const matchesProfession = selectedProfessions.length === 0 || selectedProfessions.some(prof => (talent.category || '').toLowerCase().includes(prof.toLowerCase()))

    // 3. Location Filter
    const selectedLocations = selectedFilters.filter(f => locationFilters.includes(f))
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.some(loc => (talent.city || '').toLowerCase().includes(loc.toLowerCase()))

    return matchesSearch && matchesProfession && matchesLocation
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
              <button onClick={clearFilters} className="meta text-[var(--color-violet-light)] hover:underline">
                Clear All
              </button>
            )}
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input 
              type="text" 
              placeholder="Search names, professions..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl py-3 pl-12 pr-4 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-violet-border)] focus:bg-[rgba(108,99,255,0.03)] transition-all"
            />
          </div>

          {/* Filter Groups */}
          <div className="space-y-8">
            <div>
              <h3 className="meta font-bold tracking-wider uppercase text-[var(--color-text-muted)] mb-4">Profession</h3>
              <div className="flex flex-col gap-3">
                {['Actor', 'Actress', 'Model', 'Singer', 'Dancer'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedFilters.includes(type) ? 'bg-[var(--color-violet)] border-[var(--color-violet)] text-white' : 'border-[var(--color-border)] bg-[var(--color-surface-1)] group-hover:border-[var(--color-violet-border)]'}`}>
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
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedFilters.includes(loc) ? 'bg-[var(--color-violet)] border-[var(--color-violet)] text-white' : 'border-[var(--color-border)] bg-[var(--color-surface-1)] group-hover:border-[var(--color-violet-border)]'}`}>
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
            className="flex-1 btn-primary !bg-[var(--color-violet)] !border-[var(--color-violet)] !text-white hover:!bg-[#7B73FF] !h-12 flex items-center justify-center"
          >
            Show {filteredTalent.length} Results
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="h2-section text-[var(--color-text-primary)] mb-2">Find Talent</h1>
            <p className="body-sm text-[var(--color-text-secondary)]">Showing {filteredTalent.length} professionals</p>
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
        {filteredTalent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTalent.map(talent => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No talent found"
            description="We couldn't find any professionals matching your current filters. Try adjusting your search criteria."
            actionText="Clear Filters"
            onAction={clearFilters}
          />
        )}
      </main>
    </div>
  )
}
