import schoolLogo from '../assets/school-logo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        {/* Col 1 – Logo */}
        <div className="footer-col footer-brand">
          <img src={schoolLogo} alt="Istituto G.B. Montini" className="footer-logo" />
          <p className="footer-5x1000"><strong>5x1000 al Montini</strong></p>
          <a href="#" className="footer-link-underline">Scopri come contribuire</a>
        </div>

        {/* Col 2 – Chi siamo */}
        <div className="footer-col">
          <h4 className="footer-col-title">Chi siamo</h4>
          <h5 className="footer-col-subtitle">Percorsi e risorse</h5>
          <ul className="footer-links">
            <li><a href="#">Linguistico economico giuridico</a></li>
            <li><a href="#">Liceo Classico</a></li>
            <li><a href="#">Materiali scolastici</a></li>
            <li><a href="#">Certificazioni e sperimentazioni</a></li>
          </ul>
        </div>

        {/* Col 3 – Documentazione */}
        <div className="footer-col">
          <h4 className="footer-col-title">Documentazione obbligatoria</h4>
          <ul className="footer-links">
            <li><a href="#">DL 73/2021 e sostegni bis</a></li>
            <li><a href="#">Contributi pubblici</a></li>
            <li><a href="#">Bandi europei</a></li>
          </ul>
        </div>

        {/* Col 4 – Contattaci */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contattaci</h4>
          <ul className="footer-links footer-contact">
            <li><a href="tel:+39025453975">+39 025453975</a></li>
            <li><a href="mailto:segreteria@istitutomontini.it">segreteria@istitutomontini.it</a></li>
            <li>C.so di Porta Romana, 105</li>
            <li>20122 Milano.</li>
          </ul>
          <h5 className="footer-col-subtitle" style={{ marginTop: '20px' }}>Social Media</h5>
          <ul className="footer-links">
            <li><a href="#">Instagram</a></li>
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
