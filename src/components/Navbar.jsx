import { useState } from 'react'

const dropdownItems = [
  'Iscrizioni al Montini',
  'Contributi economici e fattuali delle famiglie',
  'Regolamento istituto',
  'Pagamenti, IBAN e info bancarie',
]

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="topbar">
      <div className="topbar-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-pinterest-p"></i></a>
      </div>

      <nav className="topbar-nav">
        <div
          className="nav-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#">
            Ingresso al Montini <i className="fas fa-chevron-down"></i>
          </a>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {dropdownItems.map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>
          )}
        </div>

        <a href="#">Chi siamo</a>
        <a href="#">Scuola e didattica</a>

        <a href="#" className="logo">
          <div className="logo-circle"><i className="fas fa-graduation-cap"></i></div>
          Educve
        </a>

        <a href="#">Comunicazioni</a>
        <a href="#">Documentazione obbligatoria</a>
        <a href="#">Cooperativa Milano 15</a>
        <a href="#">Contattaci</a>
      </nav>

      <div className="topbar-right">
        <span className="lang">Italiano <i className="fas fa-globe"></i></span>
        <a href="#"><i className="fas fa-magnifying-glass"></i></a>
        <a href="#"><i className="fas fa-bars"></i></a>
      </div>
    </header>
  )
}
