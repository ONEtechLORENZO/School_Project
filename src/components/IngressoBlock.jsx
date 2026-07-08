import { Link } from 'react-router-dom'
import ingressoImg from '../assets/ingresso-montini.png'

export default function IngressoBlock() {
  return (
    <section className="ingresso-block">
      <div className="ingresso-left">
        <h2 className="ingresso-heading">Ingresso al Montini</h2>
        <p className="ingresso-desc">
          <strong>Pronti a iniziare!</strong><br />
          <em>
            Accedi alle modalità di iscrizione<br />
            per l'anno scolastico o per ingressi in corso d'anno
          </em>
        </p>
        <div className="ingresso-btns">
          <Link to="/iscrizioni" className="ingresso-btn">
            <span>SCOPRI DI PIÙ</span>
            <i className="fas fa-arrow-up-right-from-square"></i>
          </Link>
          <Link to="/iscrizioni" className="ingresso-btn">
            <span>PAGINA ISCRIZIONI</span>
            <i className="fas fa-arrow-up-right-from-square"></i>
          </Link>
        </div>
      </div>

      <div className="ingresso-right">
        <img src={ingressoImg} alt="Ingresso al Montini" className="ingresso-img" />
      </div>
    </section>
  )
}
