import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import ContattaciBlock from '../components/ContattaciBlock'
import VideoTour from '../components/VideoTour'

export default function ContattaciPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%), url(/Contattaci-2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content">
          <h1>Contattaci</h1>
        </div>
      </section>

      <ContattaciBlock />
      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
