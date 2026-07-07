import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function DocumentazioneCooperativaPage() {
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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Documentazione%20Cooperativa.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Cooperativa Milano 15</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Dove il sapere</span> prende forma
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ backgroundColor: 'white', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 16px 0', lineHeight: 1.2 }}>
            Dove il sapere prende forma
          </h2>

          <p style={{ fontSize: '20px', fontWeight: 600, color: '#0078bd', margin: '0 0 60px 0', lineHeight: 1.4 }}>
            La tua formazione, la nostra missione: verso un futuro brillante.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '24px' }}>
            La Cooperativa Milano 15 si impegna a fornire servizi educativi e culturali di eccellenza, con trasparenza e responsabilità verso la comunità. I documenti sottostanti illustrano il nostro impegno nella gestione consapevole delle risorse pubbliche e nella promozione dello sviluppo culturale e sociale.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '40px' }}>
            Consulta la nostra documentazione ufficiale per comprendere meglio le nostre attività, i contributi ricevuti e il nostro operato trasparente a servizio della comunità.
          </p>

          <h3 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', margin: '40px 0 32px 0' }}>
            Documentazione
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #34b8fe' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#001839', margin: '0 0 12px 0' }}>
                Sintesi aiuti Pubblica Amministrazione
              </h4>
              <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                Rendicontazione dettagliata dei contributi ricevuti dalla Pubblica Amministrazione e loro utilizzo.
              </p>
            </div>

            <div style={{ backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #34b8fe' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#001839', margin: '0 0 12px 0' }}>
                Bilancio Cooperativa Milano 15
              </h4>
              <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                Bilancio annuale della Cooperativa che documenta il nostro operato finanziario e la gestione delle risorse.
              </p>
            </div>

            <div style={{ backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #34b8fe' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#001839', margin: '0 0 12px 0' }}>
                Contributi pubblici Montini 2019 2022
              </h4>
              <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                Elenco completo dei contributi pubblici erogati ai nostri istituti nel periodo 2019-2022.
              </p>
            </div>
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
