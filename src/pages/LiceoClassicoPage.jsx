import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function LiceoClassicoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Liceo%20Classico%20Montini.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Liceo Classico</span> Montini
          </h1>
          <p style={{ fontSize: '20px', marginTop: '24px', color: 'rgba(255,255,255,0.9)' }}>
            Formare l'uomo per costruire il domani.
          </p>
        </div>
      </section>

      {/* Studiare per capire section */}
      <section style={{ backgroundColor: 'white', padding: '60px 80px', minHeight: '650px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        {/* Left Content */}
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', lineHeight: 1.25, marginBottom: '40px', marginTop: 0, textTransform: 'uppercase' }}>
            Studiare per capire, capire per cambiare
          </h2>

          <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#100f2c' }}>
            <p style={{ margin: '0 0 20px 0' }}>
              Al Liceo Classico Montini studiamo il passato per comprendere il presente e costruire il futuro. L'uomo, con la sua grandezza e le sue contraddizioni, è al centro del percorso, guidato da rigore, dialogo e passione.
            </p>
          </div>

          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '12px 24px', borderRadius: '6px', marginTop: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
            SCOPRI DI PIÙ
            <span style={{ fontSize: '18px' }}>→</span>
          </a>
        </div>

        {/* Right - Image */}
        <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '18px', fontWeight: 600 }}>
          Immagine
        </div>
      </section>

      {/* Liceo Classico Nuovi Linguaggi Section */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '60px 80px', minHeight: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        {/* Image */}
        <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '18px', fontWeight: 600 }}>
          Immagine
        </div>

        {/* Right Content */}
        <div>
          <p style={{ color: '#8B0A2A', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px', margin: 0, textTransform: 'uppercase' }}>
            LICEO CLASSICO NUOVI LINGUAGGI
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', lineHeight: 1.25, marginBottom: '40px', marginTop: 0, textTransform: 'uppercase' }}>
            Liceo classico nuovi linguaggi
          </h2>
          <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#100f2c' }}>
            <p style={{ margin: '0 0 20px 0' }}>
              Liceo classico con potenziamento media e comunicazione.
            </p>
          </div>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '12px 24px', borderRadius: '6px', marginTop: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
            SCOPRI DI PIÙ
            <span style={{ fontSize: '18px' }}>→</span>
          </a>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
