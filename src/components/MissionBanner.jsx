import schoolLogo from '../assets/school-logo.png'

export default function MissionBanner() {
  return (
    <div className="mission-banner">
      <div className="mission-logo">
        <img src={schoolLogo} alt="Istituto G.B. Montini" />
      </div>
      <div className="mission-text">
        <p>
          <span className="mission-plain">La tua </span>
          <span className="mission-accent">formazione</span>
        </p>
        <p>
          <span className="mission-plain">la nostra </span>
          <span className="mission-accent">missione</span>
        </p>
        <p>
          <span className="mission-plain">verso un </span>
          <span className="mission-accent">futuro brillante</span>
        </p>
      </div>
    </div>
  )
}
