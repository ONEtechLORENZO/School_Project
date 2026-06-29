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

      <section style={{ backgroundColor: 'white', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', marginBottom: '30px' }}>
            Chi siamo
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#100f2c', marginBottom: '20px' }}>
            Il Centro culturale Don Carlo Calori è un'istituzione educativa e culturale dell'Istituto G.B. Montini, dedicata alla promozione della cultura, della ricerca e del dialogo.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#100f2c' }}>
            Scopri di più sul nostro centro culturale e le iniziative che promuoviamo.
          </p>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
