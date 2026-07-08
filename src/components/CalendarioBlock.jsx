import { Link } from 'react-router-dom'

export default function CalendarioBlock() {
  return (
    <div className="calendario-block">
      <div className="calendario-left">
        <h2 className="calendario-title">Calendario scolastico e iniziative</h2>
        <Link to="/calendario" className="calendario-btn">
          Scopri di più <i className="fas fa-arrow-up-right-from-square"></i>
        </Link>
      </div>
      <div className="calendario-right">
        <p className="calendario-text">Consulta qui il calendario ufficiale</p>
      </div>
    </div>
  )
}
