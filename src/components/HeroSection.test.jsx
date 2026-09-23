import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import HeroSection from './HeroSection'

describe('HeroSection Component', () => {
  it('renders the main heading correctly', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    )
    
    // Check if the text "Your Next Role" exists
    const heading = screen.getByText(/Your Next Role/i)
    expect(heading).toBeDefined()
  })

  it('renders the call to action buttons', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    )
    
    const findAuditionsBtn = screen.getByText('Find Auditions')
    const createProfileBtn = screen.getByText('Create Talent Profile')
    
    expect(findAuditionsBtn).toBeDefined()
    expect(createProfileBtn).toBeDefined()
  })
})
