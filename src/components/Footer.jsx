import { Link } from 'react-router-dom'
import schoolLogo from '../assets/school-logo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        {/* Col 1 – Logo */}
        <div className="footer-col footer-brand">
          <img src={schoolLogo} alt="Istituto G.B. Montini" className="footer-logo" />
          <p className="footer-5x1000"><strong>5x1000 al Montini</strong></p>
          <Link to="/5x1000" className="footer-link-underline">Scopri come contribuire</Link>
        </div>

        {/* Col 2 – Chi siamo */}
        <div className="footer-col">
          <h4 className="footer-col-title"><Link to="/chi-siamo">Chi siamo</Link></h4>
          <h5 className="footer-col-subtitle">Percorsi e risorse</h5>
          <ul className="footer-links">
            <li><Link to="/linguistico-economico-giuridico">Linguistico economico giuridico</Link></li>
            <li><Link to="/liceo-classico-montini">Liceo Classico</Link></li>
            <li><Link to="/materiali-scolastici">Materiali scolastici</Link></li>
            <li><Link to="/certificazioni-e-sperimentazioni">Certificazioni e sperimentazioni</Link></li>
          </ul>
        </div>

        {/* Col 3 – Documentazione */}
        <div className="footer-col">
          <h4 className="footer-col-title"><Link to="/documentazione-obbligatoria">Documentazione obbligatoria</Link></h4>
          <ul className="footer-links">
            <li><Link to="/dl-73-2021-e-sostegni-bis">DL 73/2021 e sostegni bis</Link></li>
            <li><Link to="/contributi-pubblici">Contributi pubblici</Link></li>
            <li><Link to="/bandi-europei">Bandi europei</Link></li>
          </ul>
        </div>

        {/* Col 4 – Contattaci */}
        <div className="footer-col">
          <h4 className="footer-col-title"><Link to="/contattaci">Contattaci</Link></h4>
          <ul className="footer-links footer-contact">
            <li><a href="tel:+39025453975">+39 025453975</a></li>
            <li><a href="mailto:segreteria@istitutomontini.it">segreteria@istitutomontini.it</a></li>
            <li>C.so di Porta Romana, 105</li>
            <li>20122 Milano.</li>
          </ul>
          <h5 className="footer-col-subtitle" style={{ marginTop: '20px' }}>Social Media</h5>
          <ul className="footer-links">
            <li><a href="https://www.instagram.com/istitutomontini/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2016-2026 Istituto G.B. Montini. All rights reserved</span>
        <div className="footer-bottom-links">
          <a href="#">Security</a>
          <span>|</span>
          <a href="#">Privacy &amp; Cookie Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
