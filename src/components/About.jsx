export default function About() {
  return (
    <section className="about">
      <div className="about-imgs">
        <div className="img-placeholder about-img-top"></div>
        <span className="est-label">EST 1995</span>
        <div className="img-placeholder about-img-bottom"></div>
        <div className="about-badge">
          <i className="fas fa-play"></i>
        </div>
      </div>

      <div className="about-content">
        <h2 className="about-ingresso-title">Ingresso<br />al Montini</h2>
        <p className="about-ingresso-desc">
          Pronti a iniziare! Accedi alle modalità di iscrizione per l'anno
          scolastico o per ingressi in corso d'anno
        </p>
        <div className="about-ingresso-btns">
          <a href="#" className="btn-cyan">Scopri di più &nbsp;→</a>
          <a href="#" className="btn-cyan">Vai alla pagina delle iscrizioni &nbsp;→</a>
        </div>
      </div>
    </section>
  )
}
