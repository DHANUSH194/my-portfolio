import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'var(--transition)',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
    }}>
      <a href="#home" style={{
        fontSize: '1.5rem',
        fontWeight: 800,
        background: 'var(--gradient-1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.5px',
      }}>
        DP.
      </a>

      <div style={{
        gap: '2rem',
        alignItems: 'center',
      }} className="nav-links">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'var(--transition)',
            position: 'relative',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            background: 'transparent',
            overflow: 'hidden',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#fff'
            e.currentTarget.style.background = 'rgba(108, 99, 255, 0.25)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(108, 99, 255, 0.3), inset 0 0 15px rgba(108, 99, 255, 0.1)'
            const orb = e.currentTarget.querySelector('.nav-orb') as HTMLElement
            if (orb) orb.style.opacity = '1'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-secondary)'
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.boxShadow = 'none'
            const orb = e.currentTarget.querySelector('.nav-orb') as HTMLElement
            if (orb) orb.style.opacity = '0'
          }}
          >
            <span className="nav-orb" style={{
              position: 'absolute',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'rgba(108, 99, 255, 0.5)',
              filter: 'blur(8px)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              animation: 'orbRotate 2s linear infinite',
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
              pointerEvents: 'none',
            }} />
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
        className="mobile-menu-btn"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              fontWeight: 500,
            }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
