const links = [
  'Supporto agli studenti',
  'Regolamenti e documenti',
  'Certificazioni',
  'Materiali scolastici',
  'Offerta formativa',
]

export default function RisorseSection() {
  return (
    <section className="risorse-section">

      <div className="risorse-left">
        <div className="risorse-deco"></div>
        <div className="risorse-collage">
          <div className="risorse-img risorse-img-tall"></div>
          <div className="risorse-col-right">
            <div className="risorse-img risorse-img-top"></div>
            <div className="risorse-img risorse-img-bottom"></div>
          </div>
        </div>
      </div>

      <div className="risorse-right">
        <span className="risorse-eyebrow">Le Nostre Risorse</span>
        <h2 className="risorse-heading">Tutto ciò di cui<br />hai bisogno</h2>
        <ul className="risorse-links">
          {links.map((link) => (
            <li key={link}>
              <a href="#">
                <span>{link}</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="risorse-btn">SCOPRI DI PIÙ</a>
      </div>

    </section>
  )
}
