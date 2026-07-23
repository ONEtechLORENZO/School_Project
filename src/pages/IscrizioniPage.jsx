import { useState, useEffect } from 'react'
import iscrizioneBg from '../assets/iscrizione-primo.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'
import VideoTour from '../components/VideoTour'

const SCUOLAPAY_URL =
  'https://form.scuolapay.it/iscriviti/gb-montini?token=2e5e2f530572252640b5a2990099172af65adef965878067fce607aa7265b3c7'

const tabs = [
  { label: 'Primo anno', target: 'primo-anno' },
  { label: 'Anni successivi', target: 'anni-successivi' },
  { label: 'Trasferimento da altro istituto', target: 'trasferimento' },
]

// The payment note is identical under all three enrolment routes.
// `light` = rendered on a coloured background, so the text flips to white.
function PagamentiScuolaPay({ light }) {
  const tone = light ? ' white-text' : ''
  return (
    <>
      <p className={`iscrizioni-pagamenti-title${tone}`}>
        Informazioni sui pagamenti tramite ScuolaPay
      </p>
      <ul className={`iscrizioni-pagamenti-list${tone}`}>
        <li>
          Per la ricezione dei <strong>bonifici, ScuolaPay</strong> si avvale di{' '}
          <strong>MangoPay</strong>, un istituto di moneta elettronica autorizzato che fornisce
          infrastrutture di pagamento a livello europeo.
        </li>
        <li>
          Per questo motivo, <strong>l’IBAN indicato per il bonifico</strong> risulterà di un
          istituto <strong>FRANCESE</strong>. Trattandosi comunque di un conto in area SEPA, il
          bonifico non comporta alcuna commissione aggiuntiva rispetto a un normale bonifico
          bancario effettuato in Italia, né tempi di accredito più lunghi.
        </li>
      </ul>
    </>
  )
}

function IscrizioneCta({ light }) {
  return (
    <div className="iscrizioni-cta">
      <h3 className={`iscrizioni-cta-title ${light ? 'white' : 'crimson'}`}>
        Iscrizione ad<br />anni successivi
      </h3>
      <a
        href={SCUOLAPAY_URL}
        target="_blank"
        rel="noreferrer"
        className="iscrizioni-cta-btn"
      >
        Accedi al modulo di iscrizione <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function IscrizioniPage() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      tabs.forEach((tab, i) => {
        const el = document.getElementById(tab.target)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 120) setActiveTab(i)
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabClick = (i) => {
    setActiveTab(i)
    scrollTo(tabs[i].target)
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 100%), url(${iscrizioneBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content">
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1><span>Iscrizioni</span><br />al Montini</h1>
        </div>
      </section>

      <div style={{ height: '48px', background: 'white' }}></div>

      {/* STICKY TAB BAR */}
      <div className="iscrizioni-tab-bar">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`iscrizioni-tab ${activeTab === i ? 'active' : ''}`}
            onClick={() => handleTabClick(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PRIMO ANNO */}
      <div id="primo-anno" className="iscrizioni-section bg-white">
        <div className="iscrizioni-left">
          <h2 className="iscrizioni-section-label crimson">Primo Anno</h2>
          <div className="iscrizioni-spacer" />
          <h3 className="iscrizioni-title crimson">Iscrizione<br />Primo Anno</h3>
          <p className="iscrizioni-desc">
            Hai scelto di iniziare la tua avventura al Liceo Montini: BENVENUTO!<br />
            Per completare l’iscrizione, accedi al modulo online di <strong>ScuolaPay</strong> e
            compilalo integralmente in ogni sua sezione.
          </p>
          <PagamentiScuolaPay />
        </div>
        <div className="iscrizioni-right">
          <IscrizioneCta />
        </div>
      </div>

      {/* ANNI SUCCESSIVI */}
      <div id="anni-successivi" className="iscrizioni-section bg-navy">
        <div className="iscrizioni-left">
          <h2 className="iscrizioni-section-label white">Anni Successivi</h2>
          <div className="iscrizioni-spacer" />
          <h3 className="iscrizioni-title white">Iscrizione<br />Anni Successivi</h3>
          <p className="iscrizioni-desc white-text">
            Anche quest’anno inizia la tua avventura al Liceo Montini.<br />
            Per completare l’iscrizione, accedi al modulo online di <strong>ScuolaPay</strong> e
            compilalo integralmente in ogni sua sezione.
          </p>
          <PagamentiScuolaPay light />
        </div>
        <div className="iscrizioni-right">
          <IscrizioneCta light />
        </div>
      </div>

      {/* TRASFERIMENTO */}
      <div id="trasferimento" className="iscrizioni-section bg-white">
        <div className="iscrizioni-left">
          <h2 className="iscrizioni-section-label crimson">Trasferimento da altri istituti</h2>
          <div className="iscrizioni-spacer" />
          <h3 className="iscrizioni-title crimson">Trasferimento<br />da altri istituti</h3>
          <p className="iscrizioni-desc">
            Hai scelto di cambiare scuola e di iscriverti al Montini: benvenuto.<br />
            Se sei già in accordo con la Presidenza e hai già ottenuto il nullaosta dall’istituto
            di provenienza non ti resta che formalizzare la tua iscrizione: per farlo sarà
            sufficiente accedi al modulo online di ScuolaPay e compilalo integralmente in ogni
            sua sezione.
          </p>
          <PagamentiScuolaPay />
          <p className="iscrizioni-desc iscrizioni-desc-note">
            Se invece non hai ancora un accordo con la Presidenza non esitare a scrivere a{' '}
            <a href="mailto:fabrizio.fassini@istitutomontini.it" className="iscrizioni-email">
              fabrizio.fassini@istitutomontini.it
            </a>
          </p>
        </div>
        <div className="iscrizioni-right">
          <IscrizioneCta />
        </div>
      </div>

      <CinqueMilleBlock />
      <ContributiBlock />
      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
