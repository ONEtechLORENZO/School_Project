import { useState } from 'react'
import { Link } from 'react-router-dom'

const navigationItems = [
  {
    id: 'classico',
    label: 'Liceo Classico',
    items: [
      { label: 'Perché il Classico Montini', path: '/perche-il-classico-montini' },
      { label: 'Liceo classico nuovi linguaggi', path: '/liceo-classico-nuovi-linguaggi' },
      { label: 'Viaggi Studio – Classico', path: '/viaggi-studio-classico' }
    ]
  },
  {
    id: 'linguistico',
    label: 'Linguistico economico giuridico',
    items: [
      { label: 'Perché il Linguistico economico giuridico Montini', path: '/perche-il-linguistico' },
      { label: 'Viaggio Studio – Linguistico', path: '/viaggi-studio-linguistico' },
      { label: 'Cambridge Exam Center', path: '/cambridge-exam-center' }
    ]
  },
  {
    id: 'materiali',
    label: 'Materiali scolastici',
    items: [
      { label: 'Libri di testo', path: '/materiali-scolastici' },
      { label: 'Fornitori', path: '/fornitori' }
    ]
  },
  {
    id: 'certificazioni',
    label: 'Certificazioni e sperimentazioni',
    items: [
      {
        label: 'Certificazioni linguistiche',
        submenu: [
          { label: 'Classico', path: '/certificazioni-linguistiche-classico' },
          { label: 'Linguistico economico giuridico', path: '/certificazioni-linguistiche-linguistico' }
        ]
      },
      { label: 'Eccellenza e sperimentazioni', path: '/eccellenza-e-sperimentazioni' },
      { label: 'Formazione scuola/lavoro', path: '/formazione-scuola-lavoro' },
      { label: 'Progetto CONI/Miur', path: '/progetto-coni-miur' }
    ]
  },
  {
    id: 'iniziative',
    label: 'Le nostre iniziative',
    items: [
      { label: 'Tutte le iniziative', path: '/le-nostre-iniziative' },
      { label: 'Centri Studio', path: '/centri-studio' }
    ]
  }
]

export default function SidebarNavigation({ category }) {
  const visibleItems = category
    ? navigationItems.filter(item => item.id === category)
    : navigationItems

  const [selectedId, setSelectedId] = useState(category || 'classico')
  const [isOpen, setIsOpen] = useState(true)

  const selectedCategory = visibleItems.find(item => item.id === selectedId) || visibleItems[0]

  if (!isOpen) {
    return (
      <button
        className="sn-toggle"
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#001839',
          color: 'white',
          border: 'none',
          padding: '12px 8px',
          borderRadius: '0 6px 6px 0',
          cursor: 'pointer',
          zIndex: 100,
          fontSize: '12px',
          fontWeight: 600
        }}
      >
        ☰
      </button>
    )
  }

  return (
    <>
      {/* Left Sidebar */}
      <div className="sn-panel" style={{
        width: '220px',
        backgroundColor: '#001839',
        padding: '24px 16px',
        borderRight: '1px solid #000',
        maxHeight: 'calc(100vh - 60px)',
        overflowY: 'auto',
        position: 'sticky',
        top: '60px',
        zIndex: 50
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: 'white' }}>
            {selectedCategory?.label}
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {visibleItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              style={{
                padding: '14px 12px',
                backgroundColor: selectedId === item.id ? 'rgba(255,255,255,0.15)' : 'transparent',
                color: 'white',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
            >
              {item.label}
              <span style={{ float: 'right', fontSize: '16px' }}>+</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Side Menu */}
      <div className="sn-panel" style={{
        width: '260px',
        backgroundColor: '#f5f5f5',
        padding: '24px 20px',
        borderRight: '1px solid #e0e0e0',
        minHeight: 'calc(100vh - 60px)',
        position: 'sticky',
        top: '60px',
        zIndex: 49
      }}>
        <h4 style={{ margin: '0 0 20px 0', fontSize: '13px', fontWeight: 600, color: '#001839', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Sezioni
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {selectedCategory?.items.map((item, index) => (
            item.submenu ? (
              <div
                key={index}
                style={{
                  borderBottom: '1px solid #e0e0e0',
                  padding: '4px 0'
                }}
              >
                <div style={{ padding: '12px 16px 6px 16px', fontSize: '14px', fontWeight: 700, color: '#001839' }}>
                  {item.label}
                </div>
                {item.submenu.map((sub, sIdx) => (
                  <Link
                    key={sIdx}
                    to={sub.path}
                    style={{
                      display: 'block',
                      padding: '10px 16px 10px 28px',
                      color: '#333',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e8e8e8'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
            <Link
              key={index}
              to={item.path}
              style={{
                padding: '12px 16px',
                color: '#333',
                textDecoration: 'none',
                fontSize: '14px',
                borderBottom: '1px solid #e0e0e0',
                transition: 'all 0.2s',
                cursor: 'pointer',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e8e8e8'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
              }}
            >
              {item.label}
            </Link>
            )
          ))}
        </div>
      </div>
    </>
  )
}
