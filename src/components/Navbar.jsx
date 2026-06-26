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
      'Liceo Classico',
      'Linguistico economico giuridico',
      'Materiali scolastici',
      'Certificazioni e sperimentazioni',
      'Le nostre iniziative',
      'Supporto agli studenti',
      "L'estate del Montini",
    ],
  },
  {
    label: 'Comunicazioni',
    dropdown: [
      'Colloqui con i genitori',
      'Calendario',
      'Notizie',
    ],
  },
  {
    label: 'Documentazione obbligatoria',
    dropdown: [
      'DL 73/2021 e sostegni bis',
      'Contributi pubblici',
      'Bandi Europei',
    ],
  },
  {
    label: 'Cooperativa Milano 15',
    dropdown: [
      'Visura cooperativa',
      'IBAN e pagamenti',
      'Regolamento soci e cooperativa',
    ],
  },
  {
    label: 'Contattaci',
    dropdown: null,
    path: '/contattaci',
  },
]

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null)
  const closeTimers = {}

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
            <Link key={item.label} to={item.path} className="nav-home-link">{item.label}</Link>
          ) : item.dropdown ? (
            <div
              key={item.label}
              className="nav-dropdown"
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
            >
              <a href="#">
                {item.label} <i className="fas fa-chevron-down"></i>
              </a>
              {openIndex === i && (
                <div className="dropdown-menu">
                  {item.dropdown.map((sub) => (
                    sub === 'Iscrizioni al Montini'
                      ? <Link key={sub} to="/iscrizioni">{sub}</Link>
                      : sub === 'Contributi economici e fattuali delle famiglie'
                      ? <Link key={sub} to="/contributi-economici">{sub}</Link>
                      : sub === 'Regolamento istituto'
                      ? <Link key={sub} to="/regolamento">{sub}</Link>
                      : sub === 'Pagamenti, IBAN e info bancarie'
                      ? <Link key={sub} to="/pagamenti">{sub}</Link>
                      : sub === 'Il Montini ieri e oggi'
                      ? <Link key={sub} to="/il-montini-ieri-e-oggi">{sub}</Link>
                      : sub === 'Intervista a Don Paolo Alliata'
                      ? <Link key={sub} to="/intervista-don-paolo-alliata">{sub}</Link>
                      : sub === 'Le parole del rettore'
                      ? <Link key={sub} to="/le-parole-del-rettore">{sub}</Link>
                      : sub === 'Docenti'
                      ? <Link key={sub} to="/docenti">{sub}</Link>
                      : sub === 'Liceo Classico'
                      ? <Link key={sub} to="/liceo-classico-montini">{sub}</Link>
                      : <a key={sub} href="#">{sub}</a>
                  ))}
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
