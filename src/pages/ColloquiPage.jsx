import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function ColloquiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero Section with Background Image */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Colloqui%20con%20i%20genitori.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Colloqui con</span> i genitori
          </h1>
        </div>
      </section>

      {/* Content Section - 2 Column */}
      <section style={{ backgroundColor: 'white', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left Column */}
          <div>
            <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              Accedi al modulo e prenota un colloquio
            </p>
            <h1 style={{ fontSize: '52px', fontWeight: 900, color: '#001839', lineHeight: 1.2, marginBottom: '30px', marginTop: 0 }}>
              Colloqui con i genitori
            </h1>
          </div>

          {/* Right Column - Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a
              href="https://www.istitutomontini.it/colloqui/login.php"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}
            >
              Prenota un colloquio
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
            <a
              href="https://docs.google.com/document/d/1S7rIxwOEhsyfgtg5d-4jcTwxzLs6SX4g/edit"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#34b8fe', color: '#001839', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}
            >
              Indicazioni per colloqui
              <span style={{ fontSize: '20px' }}>→</span>
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
