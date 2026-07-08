import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  {
    label: 'Home',
    dropdown: null,
    path: '/',
  },
  {
    label: 'Ingresso al Montini',
    dropdown: [
      'Iscrizioni al Montini',
      'Contributi economici e fattuali delle famiglie',
      'Regolamento istituto',
      'Pagamenti, IBAN e info bancarie',
    ],
  },
  {
    label: 'Chi siamo',
    dropdown: [
      'Chi siamo',
      'Il Montini ieri e oggi',
      'Intervista a Don Paolo Alliata',
      'Le parole del rettore',
      'Docenti',
      'Centro culturale don Carlo Calori',
    ],
  },
  {
    label: 'Scuola e didattica',
    dropdown: [
      {
        label: 'Liceo Classico',
        submenu: [
          { label: 'Liceo Classico', path: '/liceo-classico-montini' },
          { label: 'Perché il Classico Montini', path: '/perche-il-classico-montini' },
          { label: 'Liceo classico nuovi linguaggi', path: '/liceo-classico-nuovi-linguaggi' },
          { label: 'Viaggi Studio – Classico', path: '/viaggi-studio-classico' }
        ]
      },
      {
        label: 'Linguistico economico giuridico',
        submenu: [
          { label: 'Linguistico economico giuridico', path: '/linguistico-economico-giuridico' },
          { label: 'Perché il Linguistico economico giuridico Montini', path: '/perche-il-linguistico' },
          { label: 'Viaggio Studio – Linguistico', path: '/viaggi-studio-linguistico' },
          { label: 'Cambridge Exam Center', path: '/cambridge-exam-center' }
        ]
      },
      'Materiali scolastici',
      {
        label: 'Certificazioni e sperimentazioni',
        submenu: [
          { label: 'Certificazioni e sperimentazioni', path: '/certificazioni-e-sperimentazioni' },
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
      'Le nostre iniziative',
      'Supporto agli studenti',
      "L'estate del Montini",
    ],
  },
  {
    label: 'Comunicazioni',
    dropdown: [
      'Colloqui con i genitori',
      'Calendario & Notizie',
    ],
  },
  {
    label: 'Documentazione obbligatoria',
    dropdown: [
      'Documentazione obbligatoria',
      'DL 73/2021 e sostegni bis',
      'Contributi pubblici',
      'Bandi Europei',
    ],
    path: '/documentazione-obbligatoria',
  },
  {
    label: 'Cooperativa Milano 15',
    dropdown: [
      'Visura cooperativa',
      'IBAN e pagamenti',
      'Regolamento soci e cooperativa',
    ],
    path: '/cooperativa-milano-15',
  },
  {
    label: 'Contattaci',
    dropdown: null,
    path: '/contattaci',
  },
]

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null)
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null)
  const [hoveredNested, setHoveredNested] = useState(null)
  const [dropdownPosition, setDropdownPosition] = useState('center')
  const [submenuPosition, setSubmenuPosition] = useState('right')
  const closeTimers = {}

  const handleDropdownRef = (ref, i) => {
    if (!ref) return
    const rect = ref.getBoundingClientRect()
    const dropdownWidth = 260
    const spaceRight = window.innerWidth - rect.right

    if (spaceRight < dropdownWidth + 20) {
      setDropdownPosition('right')
    } else {
      setDropdownPosition('center')
    }
  }

  const handleSubmenuRef = (ref) => {
    if (!ref) return
    const rect = ref.getBoundingClientRect()
    const submenuWidth = 240
    const spaceRight = window.innerWidth - rect.right

    if (spaceRight < submenuWidth + 20) {
      setSubmenuPosition('left')
    } else {
      setSubmenuPosition('right')
    }
  }

  const handleEnter = (i) => {
    clearTimeout(closeTimers[i])
    setOpenIndex(i)
  }

  const handleLeave = (i) => {
    closeTimers[i] = setTimeout(() => {
      setOpenIndex((prev) => (prev === i ? null : prev))
    }, 120)
  }

  return (
    <header className="topbar">
      <div className="topbar-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-pinterest-p"></i></a>
      </div>

      <nav className="topbar-nav">
        {navItems.map((item, i) =>
          item.path && !item.dropdown ? (
            <Link
              key={item.label}
              to={item.path}
              className="nav-home-link"
              style={item.label === 'Contattaci' ? { color: '#34b8fe' } : undefined}
            >
              {item.label}
            </Link>
          ) : item.dropdown ? (
            <div
              key={item.label}
              className="nav-dropdown"
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
              ref={(ref) => handleDropdownRef(ref, i)}
            >
              {item.path ? (
                <Link to={item.path}>
                  {item.label} <i className="fas fa-chevron-down"></i>
                </Link>
              ) : (
                <a href="#">
                  {item.label} <i className="fas fa-chevron-down"></i>
                </a>
              )}
              {openIndex === i && (
                <div
                  className="dropdown-menu"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: dropdownPosition === 'center' ? '50%' : 'auto',
                    right: dropdownPosition === 'right' ? '0' : 'auto',
                    transform: dropdownPosition === 'center' ? 'translateX(-50%)' : 'none',
                    background: 'var(--crimson-dark)',
                    borderTop: '3px solid rgba(255,255,255,0.25)',
                    borderRadius: '0 0 8px 8px',
                    minWidth: '260px',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                    zIndex: 2000,
                    overflow: 'visible',
                    paddingTop: '4px'
                  }}
                >
                  {item.dropdown.map((sub) => {
                    const isObj = typeof sub === 'object'
                    const label = isObj ? sub.label : sub

                    return isObj ? (
                      <div
                        key={label}
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setHoveredSubmenu(label)}
                        onMouseLeave={() => setHoveredSubmenu(null)}
                      >
                        <button
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px 20px',
                            color: 'rgba(255,255,255,0.88)',
                            background: hoveredSubmenu === label ? 'rgba(255,255,255,0.12)' : 'none',
                            border: 'none',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            width: '100%',
                            transition: 'background .15s',
                            gap: '8px'
                          }}
                        >
                          <span>{label}</span>
                          <i
                            className="fas fa-chevron-right"
                            style={{
                              fontSize: '10px',
                              transition: 'transform .2s',
                              transform: hoveredSubmenu === label ? 'translateX(4px)' : 'translateX(0)'
                            }}
                          ></i>
                        </button>

                        {hoveredSubmenu === label && sub.submenu && (
                          <div
                            ref={handleSubmenuRef}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: submenuPosition === 'right' ? '100%' : 'auto',
                              right: submenuPosition === 'left' ? '100%' : 'auto',
                              backgroundColor: '#001839',
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: submenuPosition === 'right' ? '0 8px 8px 0' : '8px 0 0 8px',
                              minWidth: '240px',
                              zIndex: 2001,
                              boxShadow: '0 12px 32px rgba(0,0,0,0.15)'
                            }}
                          >
                            {sub.submenu.map((submenu, idx) => (
                              submenu.submenu ? (
                                <div
                                  key={submenu.label}
                                  style={{ position: 'relative' }}
                                  onMouseEnter={() => setHoveredNested(submenu.label)}
                                  onMouseLeave={() => setHoveredNested(null)}
                                >
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      padding: '14px 20px',
                                      color: 'rgba(255,255,255,0.88)',
                                      background: hoveredNested === submenu.label ? 'rgba(255,255,255,0.12)' : 'transparent',
                                      fontSize: '13px',
                                      fontWeight: 500,
                                      cursor: 'pointer',
                                      borderBottom: idx === sub.submenu.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                      transition: 'background .15s',
                                      gap: '8px'
                                    }}
                                  >
                                    <span>{submenu.label}</span>
                                    <i className="fas fa-chevron-right" style={{ fontSize: '10px' }}></i>
                                  </div>

                                  {hoveredNested === submenu.label && (
                                    <div
                                      style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: '100%',
                                        backgroundColor: '#001839',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '0 8px 8px 0',
                                        minWidth: '240px',
                                        zIndex: 2002,
                                        boxShadow: '0 12px 32px rgba(0,0,0,0.15)'
                                      }}
                                    >
                                      {submenu.submenu.map((nested, nIdx) => (
                                        <Link
                                          key={nested.label}
                                          to={nested.path}
                                          style={{
                                            display: 'block',
                                            padding: '14px 20px',
                                            color: 'rgba(255,255,255,0.88)',
                                            textDecoration: 'none',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            borderBottom: nIdx === submenu.submenu.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                            transition: 'background .15s'
                                          }}
                                          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.12)'}
                                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                        >
                                          {nested.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                              <Link
                                key={submenu.label}
                                to={submenu.path}
                                style={{
                                  display: 'block',
                                  padding: '14px 20px',
                                  color: 'rgba(255,255,255,0.88)',
                                  textDecoration: 'none',
                                  fontSize: '13px',
                                  fontWeight: 500,
                                  borderBottom: idx === sub.submenu.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                  transition: 'background .15s'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.12)'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                              >
                                {submenu.label}
                              </Link>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      label === 'Documentazione obbligatoria'
                        ? <Link key={label} to="/documentazione-obbligatoria">{label}</Link>
                        : label === 'Chi siamo'
                        ? <Link key={label} to="/chi-siamo">{label}</Link>
                        : label === 'Iscrizioni al Montini'
                        ? <Link key={label} to="/iscrizioni">{label}</Link>
                        : label === 'Contributi economici e fattuali delle famiglie'
                        ? <Link key={label} to="/contributi-economici">{label}</Link>
                        : label === 'Regolamento istituto'
                        ? <Link key={label} to="/regolamento">{label}</Link>
                        : label === 'Pagamenti, IBAN e info bancarie'
                        ? <Link key={label} to="/pagamenti">{label}</Link>
                        : label === 'Il Montini ieri e oggi'
                        ? <Link key={label} to="/il-montini-ieri-e-oggi">{label}</Link>
                        : label === 'Intervista a Don Paolo Alliata'
                        ? <Link key={label} to="/intervista-don-paolo-alliata">{label}</Link>
                        : label === 'Le parole del rettore'
                        ? <Link key={label} to="/le-parole-del-rettore">{label}</Link>
                        : label === 'Docenti'
                        ? <Link key={label} to="/docenti">{label}</Link>
                        : label === 'Linguistico economico giuridico'
                        ? <Link key={label} to="/linguistico-economico-giuridico">{label}</Link>
                        : label === 'Materiali scolastici'
                        ? <Link key={label} to="/materiali-scolastici">{label}</Link>
                        : label === 'Certificazioni e sperimentazioni'
                        ? <Link key={label} to="/certificazioni-e-sperimentazioni">{label}</Link>
                        : label === 'Le nostre iniziative'
                        ? <Link key={label} to="/le-nostre-iniziative">{label}</Link>
                        : label === 'Supporto agli studenti'
                        ? <Link key={label} to="/supporto-agli-studenti">{label}</Link>
                        : label === "L'estate del Montini"
                        ? <Link key={label} to="/l-estate-del-montini">{label}</Link>
                        : label === 'Colloqui con i genitori'
                        ? <Link key={label} to="/colloqui-con-i-genitori">{label}</Link>
                        : label === 'Calendario & Notizie'
                        ? <Link key={label} to="/calendario">{label}</Link>
                        : label === 'DL 73/2021 e sostegni bis'
                        ? <Link key={label} to="/dl-73-2021-e-sostegni-bis">{label}</Link>
                        : label === 'Contributi pubblici'
                        ? <Link key={label} to="/contributi-pubblici">{label}</Link>
                        : label === 'Bandi Europei'
                        ? <Link key={label} to="/bandi-europei">{label}</Link>
                        : label === 'Visura cooperativa'
                        ? <Link key={label} to="/visura-cooperativa">{label}</Link>
                        : label === 'IBAN e pagamenti'
                        ? <Link key={label} to="/iban-e-pagamenti">{label}</Link>
                        : label === 'Regolamento soci e cooperativa'
                        ? <Link key={label} to="/regolamento-cooperativa">{label}</Link>
                        : label === 'Centro culturale don Carlo Calori'
                        ? <Link key={label} to="/centro-culturale-don-carlo-calori">{label}</Link>
                        : <a key={label} href="#">{label}</a>
                    )
                  })}
                </div>
              )}
            </div>
          ) : (
            <a key={item.label} href="#">{item.label}</a>
          )

        )}
      </nav>

    </header>
  )
}
