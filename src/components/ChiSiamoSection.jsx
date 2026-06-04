export default function ChiSiamoSection() {
  return (
    <section className="chi-siamo">

      <div className="chi-siamo-pills">
        <div className="pill pill-1"></div>
        <div className="pill pill-2"></div>
      </div>

      <div className="chi-siamo-content">
        <span className="chi-siamo-eyebrow">Chi Siamo?</span>
        <h2 className="chi-siamo-heading">
          Una scuola cattolica<br />moderna e di qualità<br />per tutti
        </h2>
        <ul className="chi-siamo-list">
          <li>Una cura e uno sguardo personalizzato su ogni studente</li>
          <li>
            Un'esperienza di reciprocità tra famiglie, studenti e docenti,
            in dialogo col mondo e la cultura.
          </li>
          <li>Un'avventura educativa: tutti per mano e una mano per tutti!</li>
        </ul>
        <div className="chi-siamo-cta">
          <a href="#" className="chi-siamo-btn">
            Scopri di più
          </a>
          <div className="chi-siamo-contact">
            <i className="fas fa-phone-volume"></i>
            <div>
              <small>Contattaci</small>
              <strong>+39 02 1234 5678</strong>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
