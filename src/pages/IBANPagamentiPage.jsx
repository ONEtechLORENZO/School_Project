import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function IBANPagamentiPage() {
  const navigate = useNavigate()

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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/iban.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Cooperativa Milano 15</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>IBAN e</span> pagamenti
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: 'white', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px' }}>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#0078bd', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                INFO BANCARIE
              </p>
              <h2 style={{ fontSize: '52px', fontWeight: 900, color: '#001839', margin: '0', lineHeight: 1.2 }}>
                IBAN e pagamenti
              </h2>
            </div>
            <button
              onClick={() => navigate('/contattaci')}
              style={{
                backgroundColor: '#001839',
                color: 'white',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '24px',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Contattaci
              <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>

          <div style={{ borderTop: '1px solid #ddd', paddingTop: '40px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '24px' }}>
              Di seguito Vi segnaliamo le istruzioni con le quali dovranno essere effettuati tutti i <strong>pagamenti intestati alla COOPERATIVA MILANO 15</strong>, per evitare errori o disguidi:
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '24px' }}>
              La modalità preferibile è <strong>addebito bancario</strong>, noto come SDD. La domiciliazione bancaria garantisce puntualità e automazione. È <strong>riservata alle rate di contribuzione</strong>. Al momento della compilazione del format dell'iscrizione , Vi richiediamo di indicare il nominativo dell'intestatario del conto bancario, sul quale si dovrà appoggiare l'addebito diretto e le coordinate bancarie (IBAN).
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '40px' }}>
              La seconda modalità preferibile è il <strong>bonifico bancario</strong> sempre intestato alla Cooperativa Milano 15 con la corretta specifica della causale, che è fondamentale per identificare il pagamento.
            </p>

            <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '8px', borderLeft: '4px solid #34b8fe', marginBottom: '40px' }}>
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 12px 0' }}>
                Coordinate bancarie della Cooperativa Milano 15:
              </p>
              <p style={{ fontSize: '18px', fontWeight: 900, color: '#001839', margin: '0', wordBreak: 'break-all' }}>
                BANCA INTESA SAN PAOLO - IBAN IT45D0306909606100000193456
              </p>
            </div>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '24px' }}>
              Con questa modalità si può effettuare il pagamento della <strong>tassa di iscrizione</strong> a inizio anno e di <strong>tutte le iniziative</strong> didattiche ed educative proposte durante l'anno scolastico.
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
              Per altre modalità di pagamento Vi preghiamo di contattare direttamente la segreteria.
            </p>
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
