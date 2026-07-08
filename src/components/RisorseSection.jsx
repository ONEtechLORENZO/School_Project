import { Link } from 'react-router-dom'

const links = [
  { label: 'Supporto agli studenti', path: '/supporto-agli-studenti' },
  { label: 'Regolamenti e documenti', path: '/regolamento' },
  { label: 'Certificazioni', path: '/certificazioni-e-sperimentazioni' },
  { label: 'Materiali scolastici', path: '/materiali-scolastici' },
  { label: 'Offerta formativa', path: '/liceo-classico-montini' },
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
            <li key={link.label}>
              <Link to={link.path}>
                <span>{link.label}</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/supporto-agli-studenti" className="risorse-btn">SCOPRI DI PIÙ</Link>
      </div>

    </section>
  )
}
