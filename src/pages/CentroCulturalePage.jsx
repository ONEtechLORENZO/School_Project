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


      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
