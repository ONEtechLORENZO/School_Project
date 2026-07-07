import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function RiduzioneDivariPage() {
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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Riduzione%20Divari.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '48px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Riduzione dei divari</span> negli apprendimenti
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ backgroundColor: 'white', padding: '80px', minHeight: '600px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#333', fontSize: '16px', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
            Scarica il resoconto sul bando <strong>Riduzione dei divari negli apprendimenti e contrasto alla dispersione scolastica</strong>
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, margin: '40px 0 20px 0' }}>
            Documenti
          </h2>

          <a
            href="https://www.istitutomontini.it/wp-content/uploads/2026/03/Riduzione-dei-divari-negli-apprendimenti.docx"
            target="_blank"
            rel="noreferrer"
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
            📄 Riduzione dei divari
            <span style={{ fontSize: '20px' }}>→</span>
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
