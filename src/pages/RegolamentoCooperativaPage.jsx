import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function RegolamentoCooperativaPage() {
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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Regolamento%20soci%20e%20cooperativa.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Cooperativa Milano 15</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Regolamento</span> soci e cooperativa
          </h1>
        </div>
      </section>

      {/* Main Content - Dark Blue Intro Block */}
      <section style={{ backgroundColor: '#001839', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px', marginBottom: '60px' }}>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', fontStyle: 'italic' }}>
            In questa sezione sono raccolti i regolamenti e i documenti ufficiali che disciplinano il funzionamento della cooperativa e i rapporti tra soci e istituto. I materiali consultabili definiscono diritti, doveri, modalità operative e principi di riferimento a cui si ispira la comunità scolastica.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section style={{ backgroundColor: 'white', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Documenti
          </h2>

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
      </section>

      <CinqueMilleBlock />
      <ContributiBlock />

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
