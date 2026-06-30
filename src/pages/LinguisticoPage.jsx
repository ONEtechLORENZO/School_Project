import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function LinguisticoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Linguistico%20economico%20giuridico.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Linguistico economico</span> giuridico Montini
          </h1>
          <p style={{ fontSize: '20px', marginTop: '24px', color: 'rgba(255,255,255,0.9)' }}>
            Formare l'uomo per costruire il domani.
          </p>
        </div>
      </section>

      {/* Perché il Liceo Linguistico Block */}
      <section style={{ backgroundColor: 'white', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left - Image */}
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '500px', backgroundImage: 'url(/Perch%C3%A9%20il%20Liceo%20Linguisticoeconomico.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          {/* Right Content */}
          <div>
            <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              QUALITÀ PER TUTTI
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', lineHeight: 1.2, marginBottom: '30px', marginTop: 0 }}>
              Perché il Liceo Linguistico economico giuridico?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#100f2c', marginBottom: '35px' }}>
              Un percorso moderno che unisce lingue, economia e diritto, esperienze internazionali e progetti concreti, per costruire competenze reali e aprire le porte a università e carriera.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
