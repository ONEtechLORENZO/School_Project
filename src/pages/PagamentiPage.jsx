import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import PagamentiInfoBlock from '../components/PagamentiInfoBlock'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'
import VideoTour from '../components/VideoTour'

export default function PagamentiPage() {
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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 100%), url(/iban.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content">
          <p className="hero-eyebrow">INFO BANCARIE</p>
          <h1><span>IBAN e</span><br />pagamenti</h1>
        </div>
      </section>

      <PagamentiInfoBlock />

      <CinqueMilleBlock />
      <ContributiBlock />
      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
