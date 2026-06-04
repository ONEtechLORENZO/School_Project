import { useEffect } from 'react'
import contributiBg from '../assets/contributi-economici.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'
import FareGenitoreSection from '../components/FareGenitoreSection'
import EducativoEconomicoSection from '../components/EducativoEconomicoSection'
import ContributiCooperativaSection from '../components/ContributiCooperativaSection'
import IscrzionePromessaBlock from '../components/IscrzionePromessaBlock'
import DoteScuolaBlock from '../components/DoteScuolaBlock'
import VideoTour from '../components/VideoTour'

export default function ContributiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(${contributiBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px', whiteSpace: 'nowrap' }}>
            <span>Contributi economici</span> e fattuali
          </h1>
          <h1 style={{ fontSize: '52px', marginTop: '4px' }}>
            delle famiglie
          </h1>
        </div>
      </section>
      <FareGenitoreSection />
      <EducativoEconomicoSection />
      <ContributiCooperativaSection />
      <IscrzionePromessaBlock />
      <DoteScuolaBlock />
      <CinqueMilleBlock />
      <ContributiBlock />
      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
