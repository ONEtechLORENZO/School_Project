import { useEffect } from 'react'
import regolamentoBg from '../assets/regolamento-istituto.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import RegolamentoContent from '../components/RegolamentoContent'
import DocumentiSection from '../components/DocumentiSection'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'
import VideoTour from '../components/VideoTour'

export default function RegolamentoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 100%), url(${regolamentoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content">
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1>
            <span>Regolamento</span><br />
            di Istituto
          </h1>
        </div>
      </section>
      <RegolamentoContent />
      <DocumentiSection />
      <CinqueMilleBlock />
      <ContributiBlock />
      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
