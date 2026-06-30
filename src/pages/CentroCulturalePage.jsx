import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function CentroCulturalePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%)`,
          backgroundColor: '#001839',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            Centro culturale
          </h1>
          <h1 style={{ fontSize: '52px', marginTop: '4px' }}>
            Don Carlo Calori
          </h1>
        </div>
      </section>

      {/* Viaggi Studio Block */}
      <section style={{ backgroundColor: '#0078bd', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <p style={{ color: 'white', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              VIAGGI STUDIO
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', lineHeight: 1.2, margin: 0 }}>
              I Viaggi Studio del liceo classico
            </h2>
          </div>

          {/* Center - Image */}
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundImage: 'url(/viaggi%20studio.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          {/* Right Content */}
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'white', marginBottom: '30px' }}>
              I viaggi di istruzione al Montini sono molto più di semplici gite: sono esperienze che <strong>aprono la mente, avvicinano alla cultura e trasformano lo studio in scoperta</strong>. Scoprire nuovi luoghi insieme significa crescere, imparare e creare ricordi che restano per sempre.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'white', marginBottom: '30px' }}>
              Al Montini, la scuola si vive fuori e dentro l'aula.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '12px 32px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '18px' }}>→</span>
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
