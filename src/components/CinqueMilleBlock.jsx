import cahtuto from '../assets/cahtuto.png'
import cinquemilleBg from '../assets/cinquemille-bg.png'

export default function CinqueMilleBlock() {
  return (
    <section
      className="cinquemille-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${cinquemilleBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* LEFT — image */}
      <div className="cinquemille-right">
        <img src={cahtuto} alt="5x1000 modulo" className="cinquemille-form-img" />
      </div>

      {/* RIGHT — text */}
      <div className="cinquemille-content">
        <p className="cinquemille-school-name">Istituto Paritario G.B. Montini</p>
        <h2 className="cinquemille-heading">
          5 <span className="cinquemille-accent">x</span> 1000
        </h2>
        <p className="cinquemille-sub">al Montini</p>

        <p className="cinquemille-body">
          La nostra scuola si sostiene grazie alla "libera contribuzione secondo coscienza"
          delle famiglie e al 5×1000 dell'Irpef, unico aiuto statale.
          Vi invitiamo a destinare il vostro 5×1000 alla nostra cooperativa educativa,
          senza alcun costo per voi.
        </p>
        <p className="cinquemille-body">
          Questo contributo ci permette di supportare le famiglie meno abbienti
          e migliorare le risorse per una didattica attenta alla persona.
        </p>
        <p className="cinquemille-body">Grazie per il vostro sostegno.</p>

        <p className="cinquemille-code">
          <strong>Il codice da indicare è 03546070156</strong>
        </p>

        <a href="#" className="cinquemille-btn">Scopri di più &nbsp;→</a>
      </div>
    </section>
  )
}
