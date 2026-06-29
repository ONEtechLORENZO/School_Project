import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import IscrizioniPage from './pages/IscrizioniPage'
import ContributiPage from './pages/ContributiPage'
import RegolamentoPage from './pages/RegolamentoPage'
import PagamentiPage from './pages/PagamentiPage'
import ContattaciPage from './pages/ContattaciPage'
import IlMontiniPage from './pages/IlMontiniPage'
import IntervistaPage from './pages/IntervistaPage'
import ParoleRettorePage from './pages/ParoleRettorePage'
import DocentiPage from './pages/DocentiPage'
import DocentiDetailPage from './pages/DocentiDetailPage'
import LiceoClassicoPage from './pages/LiceoClassicoPage'
import CentroCulturalePage from './pages/CentroCulturalePage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import MissionBanner from './components/MissionBanner'
import NotizieSection from './components/NotizieSection'
import IngressoBlock from './components/IngressoBlock'
import CalendarioBlock from './components/CalendarioBlock'
import InstagramSection from './components/InstagramSection'
import ChiSiamoSection from './components/ChiSiamoSection'
import RisorseSection from './components/RisorseSection'
import ContributiBlock from './components/ContributiBlock'
import CinqueMilleBlock from './components/CinqueMilleBlock'
import QuotesSlider from './components/QuotesSlider'
import VideoTour from './components/VideoTour'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <MissionBanner />
      <NotizieSection />
      <IngressoBlock />
      <CalendarioBlock />
      <InstagramSection />
      <ChiSiamoSection />
      <RisorseSection />
      <ContributiBlock />
      <CinqueMilleBlock />
      <QuotesSlider />
      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iscrizioni" element={<IscrizioniPage />} />
      <Route path="/contributi-economici" element={<ContributiPage />} />
      <Route path="/regolamento" element={<RegolamentoPage />} />
      <Route path="/pagamenti" element={<PagamentiPage />} />
      <Route path="/contattaci" element={<ContattaciPage />} />
      <Route path="/il-montini-ieri-e-oggi" element={<IlMontiniPage />} />
      <Route path="/intervista-don-paolo-alliata" element={<IntervistaPage />} />
      <Route path="/le-parole-del-rettore" element={<ParoleRettorePage />} />
      <Route path="/docenti" element={<DocentiPage />} />
      <Route path="/docenti/:slug" element={<DocentiDetailPage />} />
      <Route path="/liceo-classico-montini" element={<LiceoClassicoPage />} />
      <Route path="/centro-culturale-don-carlo-calori" element={<CentroCulturalePage />} />
    </Routes>
  )
}

export default App
