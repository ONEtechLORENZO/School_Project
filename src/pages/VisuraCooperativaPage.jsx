import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function VisuraCooperativaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Visura%20Cooperativa.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Cooperativa Milano 15</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Visura</span> Cooperativa
          </h1>
        </div>
      </section>

      {/* Organization Overview - Dark Blue */}
      <section style={{ backgroundColor: '#001839', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Chi Siamo – Cooperativa Milano 15
          </h2>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            Fondata nel 1976, la Cooperativa Milano 15 ha da sempre come obiettivo quello di promuovere l'integrazione sociale e lo sviluppo culturale. Attraverso una varietà di servizi educativi e culturali, la Cooperativa si impegna a creare opportunità di crescita per tutti, offrendo supporto a persone di ogni età e provenienti da contesti diversi.
          </p>

          <h3 style={{ fontSize: '32px', fontWeight: 900, color: 'white', margin: '40px 0 24px 0' }}>
            Cosa facciamo
          </h3>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            La Cooperativa Milano 15 è attiva in diversi settori, tutti finalizzati a rafforzare il tessuto sociale e culturale della comunità. Promuoviamo attività culturali che spaziano dall'arte alla scienza, passando per il teatro e altre forme di espressione creativa, con l'intento di stimolare la partecipazione di tutti i cittadini.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            In ambito educativo, la Cooperativa gestisce scuole paritarie, come l'Istituto Superiore Milanese di Educazione e Cultura Cattolica e il Liceo "G.B. Montini". Questi istituti offrono una formazione di alta qualità, basata su metodi didattici innovativi e una forte attenzione all'accessibilità economica per le famiglie, con contributi volontari che tengono conto delle diverse possibilità economiche.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            Oltre a ciò, la Cooperativa è impegnata anche nella gestione di attività editoriali, come librerie e pubblicazioni, e nella produzione di opere discografiche e audiovisive, con lo scopo di arricchire l'offerta culturale a livello locale e nazionale.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '40px' }}>
            Non manca l'impegno nella ricerca: siamo attivi nello studio e nell'approfondimento di tematiche psico-pedagogiche e socio-economiche, per comprendere meglio le dinamiche sociali ed educative e migliorare continuamente i nostri servizi.
          </p>
        </div>
      </section>

      {/* Centro Culturale ISMECC - Sky Blue */}
      <section style={{ backgroundColor: '#34b8fe', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Il Centro Culturale ISMECC
          </h2>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#001839', marginBottom: '24px' }}>
            Uno dei progetti più significativi della Cooperativa è il Centro culturale ISMECC, un punto di riferimento per la comunità. ISMECC offre corsi e attività che spaziano dalla cultura generale all'educazione permanente, rivolgendosi a persone di tutte le età e contribuendo a favorire l'inclusione sociale e la crescita culturale continua.
          </p>

          <h3 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', margin: '40px 0 24px 0' }}>
            La nostra missione
          </h3>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#001839' }}>
            La missione della Cooperativa Milano 15 è chiara: rendere la cultura e l'educazione accessibili a tutti, creando uno spazio in cui ogni individuo possa crescere, imparare e contribuire al benessere collettivo. In un mondo in continuo cambiamento, vogliamo essere un punto di riferimento per chi cerca opportunità di formazione e per chi desidera essere parte attiva nella costruzione di una comunità più inclusiva e consapevole.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 60px 0', lineHeight: 1.2 }}>
            Documenti
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '14px 28px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              📄 Sintesi aiuti Pubblica Amministrazione
            </Link>

            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '14px 28px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              📄 Bilancio Cooperativa Milano 15
            </Link>

            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '14px 28px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              📄 Contributi pubblici Montini 2019 2022
            </Link>

            <a
              href="https://drive.google.com/file/d/1-JHGkkUbByX9BS6XZsrEmz2KXJy1vd8X/view"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '14px 28px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              📄 Statuto
            </a>

            <a
              href="https://drive.google.com/drive/folders/1OsRiKsC3EYMnl6AVssMhirUWroD5o3H4"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '14px 28px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              📄 Documenti cooperativa
            </a>
          </div>
        </div>
      </section>

      <CinqueMilleBlock />
      <ContributiBlock />

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
