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
      <section style={{ backgroundColor: 'white', padding: '80px', minHeight: '600px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Image */}
          <div style={{ overflow: 'hidden', borderRadius: '20px' }}>
            <img src="/Liceo Classico Montini.png" alt="Studiare per capire" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          {/* Text Content */}
          <div>
            <p style={{ color: '#8B0A2A', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
              PERCHÈ IL LICEO CLASSICO MONTINI
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', lineHeight: 1.2, marginBottom: '24px' }}>
              Studiare per capire, capire per cambiare
            </h2>
            <p style={{ fontSize: '16px', color: '#100f2c', lineHeight: 1.8, marginBottom: '30px' }}>
              Al Liceo Classico Montini studiamo il passato per comprendere il presente e costruire il futuro. L'uomo, con la sua grandezza e le sue contraddizioni, è al centro del percorso, guidato da rigore, dialogo e passione.
            </p>
            <a href="#" style={{ display: 'inline-block', backgroundColor: '#8B0A2A', color: 'white', padding: '12px 32px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              SCOPRI DI PIÙ →
            </a>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section style={{ backgroundColor: '#f8f8f8', padding: '80px', minHeight: '500px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', marginBottom: '60px', textAlign: 'center' }}>
            La nostra comunità
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                style={{
                  aspectRatio: '1 / 1',
                  backgroundColor: '#e8e8e8',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '18px',
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
