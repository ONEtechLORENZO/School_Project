import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function DocumentazioneObbligatoriaPage() {
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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.35) 100%), url(/Chi%20Siamo%20333.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 15%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            Documentazione Obbligatoria
          </h1>
        </div>
      </section>

      {/* DL 73/2021 Section */}
      <section style={{ backgroundColor: 'white', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left - Content */}
          <div>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#0078bd', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
              Trasparenza
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#001839', margin: '0 0 20px 0', lineHeight: 1.2 }}>
              DL 73/2021 e Sostegni BIS
            </h2>
            <p style={{ fontSize: '16px', color: '#333', lineHeight: 1.8, marginBottom: '30px' }}>
              Tutte le informazioni della Milano 15 – Società Cooperativa Sociale per i punti previsti dal DL 73 2021.
            </p>
            <Link
              to="/dl-73-2021-e-sostegni-bis"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#001839',
                color: 'white',
                padding: '14px 36px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </Link>
          </div>

          {/* Right - Image */}
          <div
            style={{
              height: '400px',
              backgroundImage: `url(/Chi%20Siamo456.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px'
            }}
          ></div>
        </div>
      </section>

      {/* Organigramma Section */}
      <section style={{ backgroundColor: '#001839', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left - Content */}
          <div>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#34b8fe', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
              Struttura
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: 'white', margin: '0 0 20px 0', lineHeight: 1.2 }}>
              Organigramma
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, marginBottom: '30px' }}>
              La struttura organizzativa dell'Istituto, con ruoli, responsabilità e riferimenti dei principali organi.
            </p>
            <a
              href="/Organigramma-2026-sito.pdf"
              download="Organigramma-2026-sito.pdf"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '14px 36px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              Scarica organigramma
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>

          {/* Right - Image */}
          <div
            style={{
              height: '400px',
              backgroundImage: `url(/Organigramma.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px'
            }}
          ></div>
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
