import { Link } from 'react-router-dom'
import SearchWidget from './SearchWidget'

export default function ScrollTop() {
  return (
    <>
      <SearchWidget />
      <Link
        to="/contattaci"
        aria-label="Contattaci"
        style={{
          position: 'fixed',
          bottom: '84px',
          right: '28px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#34b8fe',
          color: '#001839',
          padding: '12px 20px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '14px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          zIndex: 1000,
          cursor: 'pointer'
        }}
      >
        <i className="fas fa-phone"></i>
        Contattaci
      </Link>

      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}
