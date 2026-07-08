import { Link } from 'react-router-dom'

export default function ContributiBlock() {
  return (
    <div className="contributi-block">
      <div className="contributi-left">
        <span className="contributi-eyebrow">CONTRIBUTI E REGOLAMENTI</span>
        <h2 className="contributi-heading">Contributi e<br />regolamenti</h2>
        <Link to="/contributi-economici" className="contributi-btn">Scopri di più →</Link>
      </div>
      <div className="contributi-right">
        <p className="contributi-desc">
          In questa sezione sono disponibili dettagli su tasse,
          normative e disposizioni per garantire una gestione
          trasparente e organizzata.
        </p>
      </div>
    </div>
  )
}
