import { useState, useEffect } from 'react'
import iscrizioneBg from '../assets/iscrizione-primo.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'
import VideoTour from '../components/VideoTour'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdr7v_HU_TKr_lpxkPl9qCxhJJaWSL2Bx9N_jkxzbJqbwcCqQ/viewform'

const tabs = [
  { label: 'Primo anno', target: 'primo-anno' },
  { label: 'Anni successivi', target: 'anni-successivi' },
  { label: 'Trasferimento da altro istituto', target: 'trasferimento' },
]

const primoAnnoButtons = [
  'Iscrizione in prima',
  'Anagrafica Familiare',
  'Autorizzazioni Uscite',
  'Trattamento dei Dati Personali (GDPR 2016/679)',
  'Proposta di Collaborazione',
  'Contributo Economico',
  'Iscrizioni e Promesse RID',
]

const anniSuccessiviButtons = [
  'Iscrizione ad anni successivi',
  'Anagrafica Familiare',
  'Autorizzazioni Uscite',
  'Trattamento dei Dati Personali (GDPR 2016/679)',
  'Proposta di Collaborazione',
  'Contributo Economico',
  'Iscrizioni e Promesse RID',
]

const trasferimentoButtons = [
  'Trasferimento da altro istituto',
  'Anagrafica Familiare',
  'Autorizzazioni Uscite',
  'Trattamento dei Dati Personali (GDPR 2016/679)',
  'Proposta di Collaborazione',
  'Contributo Economico',
  'Iscrizioni e Promesse RID',
]

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
            <em>
              Hai scelto di iniziare la tua avventura al Liceo Montini: BENVENUTO!<br />
              Per formalizzare la tua iscrizione sarà sufficiente prendere visione dei seguenti
              materiali e compilare in tutte le sue parti il questionario che trovi di seguito.
            </em>
          </p>
          <a href={FORM_URL} target="_blank" rel="noreferrer" className="iscrizioni-link-btn">
            LINK AL MODULO <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div className="iscrizioni-right">
          {primoAnnoButtons.map((btn) => (
            <a key={btn} href={FORM_URL} target="_blank" rel="noreferrer" className="iscrizioni-doc-btn navy">
              {btn}
            </a>
          ))}
        </div>
      </div>

      {/* ANNI SUCCESSIVI */}
      <div id="anni-successivi" className="iscrizioni-section bg-navy">
        <div className="iscrizioni-left">
          <h2 className="iscrizioni-section-label white">Anni Successivi</h2>
          <div className="iscrizioni-spacer" />
          <h3 className="iscrizioni-title white">Iscrizione<br />Anni Successivi</h3>
          <p className="iscrizioni-desc white-text">
            <em>
              Anche quest'anno inizia la tua avventura al Liceo Montini.<br />
              Come di consueto dovrai formalizzare la tua iscrizione: per farlo sarà sufficiente
              prendere visione dei seguenti materiali e compilare in tutte le sue parti il
              questionario che trovi di seguito.
            </em>
          </p>
          <a href={FORM_URL} target="_blank" rel="noreferrer" className="iscrizioni-link-btn">
            LINK AL MODULO <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div className="iscrizioni-right">
          {anniSuccessiviButtons.map((btn) => (
            <a key={btn} href={FORM_URL} target="_blank" rel="noreferrer" className="iscrizioni-doc-btn crimson-btn">
              {btn}
            </a>
          ))}
        </div>
      </div>

      {/* TRASFERIMENTO */}
      <div id="trasferimento" className="iscrizioni-section bg-white">
        <div className="iscrizioni-left">
          <h2 className="iscrizioni-section-label crimson">Trasferimento da altri istituti</h2>
          <div className="iscrizioni-spacer" />
          <h3 className="iscrizioni-title crimson">Trasferimento da<br />altri istituti</h3>
          <p className="iscrizioni-desc">
            <em>
              Hai scelto di cambiare scuola e di iscriverti al Montini: benvenuto.<br /><br />
              Se sei già in accordo con la Presidenza e hai già ottenuto il nullaosta
              dall'istituto di provenienza non ti resta che formalizzare la tua iscrizione:
              per farlo sarà sufficiente prendere visione dei seguenti materiali e compilare
              in tutte le sue parti il questionario che trovi di seguito.<br /><br />
              Se invece non hai ancora un accordo con la Presidenza non esitare a scrivere a{' '}
              <a href="mailto:fabrizio.fassini@istitutomontini.it" className="iscrizioni-email">
                fabrizio.fassini@istitutomontini.it
              </a>
            </em>
          </p>
          <a href={FORM_URL} target="_blank" rel="noreferrer" className="iscrizioni-link-btn">
            LINK AL MODULO <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div className="iscrizioni-right">
          {trasferimentoButtons.map((btn) => (
            <a key={btn} href={FORM_URL} target="_blank" rel="noreferrer" className="iscrizioni-doc-btn navy">
              {btn}
            </a>
          ))}
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
