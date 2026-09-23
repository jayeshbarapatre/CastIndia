import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import RoleModal from '../RoleModal'

export default function PublicLayout() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Show the role selection modal on first visit
    const hasVisited = sessionStorage.getItem('castindia_visited')
    if (!hasVisited) {
      // Slight delay so page can render first
      const timer = setTimeout(() => setShowModal(true), 600)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleCloseModal = () => {
    setShowModal(false)
    sessionStorage.setItem('castindia_visited', '1')
  }

  return (
    <>
      <Header />
      {showModal && <RoleModal onClose={handleCloseModal} />}
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
