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

      {/* Studiare per capire section - Dark layout */}
      <section style={{ backgroundColor: '#3a3a3a', padding: '80px', minHeight: '700px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', width: '100%' }}>
          {/* Left Content */}
          <div>
            <h2 style={{ fontSize: '56px', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '30px', textTransform: 'uppercase' }}>
              Studiare per capire, capire per cambiare
            </h2>

            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '40px' }}>
              Al Liceo Classico Montini studiamo il passato per comprendere il presente e costruire il futuro. L'uomo, con la sua grandezza e le sue contraddizioni, è al centro del percorso, guidato da rigore, dialogo e passione.
            </p>

            <div style={{ backgroundColor: '#001839', padding: '24px 32px', borderRadius: '8px', marginBottom: '40px', display: 'inline-block' }}>
              <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>SCOPRI DI PIÙ</p>
              <div style={{ color: 'white', fontSize: '28px', fontWeight: 900 }}>→</div>
            </div>

            <h3 style={{ fontSize: '32px', fontWeight: 900, color: 'white', textTransform: 'uppercase' }}>
              La nostra comunità
            </h3>
          </div>

          {/* Right - Image Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                style={{
                  aspectRatio: '1 / 1',
                  backgroundColor: '#555',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Immagine {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
