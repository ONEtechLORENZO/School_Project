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
import LinguisticoPage from './pages/LinguisticoPage'
import MaterialiScolasticiPage from './pages/MaterialiScolasticiPage'
import CertificazioniPage from './pages/CertificazioniPage'
import LeNostreIniziativePage from './pages/LeNostreIniziativePage'
import InitiativeDetailPage from './pages/InitiativeDetailPage'
import CentroCulturalePage from './pages/CentroCulturalePage'
import SupportoStudentiPage from './pages/SupportoStudentiPage'
import LEstatedelMontiniPage from './pages/LEstatedelMontiniPage'
import LEstatedelMontiniDetailPage from './pages/LEstatedelMontiniDetailPage'
import ColloquiPage from './pages/ColloquiPage'
import CalendarioPage from './pages/CalendarioPage'
import MontinialiDetailPage from './pages/MontinialiDetailPage'
import CentroCulturaleDetailPage from './pages/CentroCulturaleDetailPage'
import DL73Page from './pages/DL73Page'
import ContributiPubbliciPage from './pages/ContributiPubbliciPage'
import DocumentazioneObbligatoriaPage from './pages/DocumentazioneObbligatoriaPage'
import BandiEuropeiPage from './pages/BandiEuropeiPage'
import CooperativaMilano15Page from './pages/CooperativaMilano15Page'
import VisuraCooperativaPage from './pages/VisuraCooperativaPage'
import IBANPagamentiPage from './pages/IBANPagamentiPage'
import RegolamentoCooperativaPage from './pages/RegolamentoCooperativaPage'
import ChiSiamoPage from './pages/ChiSiamoPage'
import PerchéClassicoPage from './pages/PerchéClassicoPage'
import PerchéLinguisticoPage from './pages/PerchéLinguisticoPage'
import ViaggiStudioClassicoPage from './pages/ViaggiStudioClassicoPage'
import ViaggiStudioDetailPage from './pages/ViaggiStudioDetailPage'
import ViaggiStudioLinguisticoPage from './pages/ViaggiStudioLinguisticoPage'
import CambridgeExamCenterPage from './pages/CambridgeExamCenterPage'
import EccellenzaSperimentazioniPage from './pages/EccellenzaSperimentazioniPage'
import EccellenzaDetailPage from './pages/EccellenzaDetailPage'
import FormazioneScuolaLavoroPage from './pages/FormazioneScuolaLavoroPage'
import ProgettoConiMiurPage from './pages/ProgettoConiMiurPage'
import CertificazioniClassicoPage from './pages/CertificazioniClassicoPage'
import CertificazioniLinguisticoPage from './pages/CertificazioniLinguisticoPage'
import CinqueMillePage from './pages/CinqueMillePage'
import CertificazioniLatinaPage from './pages/CertificazioniLatinaPage'
import EventoTerraSantaPage from './pages/EventoTerraSantaPage'
import LiceoClassicoNuoviLinguaggiPage from './pages/LiceoClassicoNuoviLinguaggiPage'
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
      <NotizieSection />
      <LogoBar />
      <MissionBanner />
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
  useEffect(() => {
    // Site-wide safety net: if any image fails to load, hide it gracefully
    // instead of showing a broken-image icon (keeps its layout space).
    const handleImageError = (e) => {
      const el = e.target
      if (el && el.tagName === 'IMG') {
        el.style.visibility = 'hidden'
      }
    }
    document.addEventListener('error', handleImageError, true)
    return () => document.removeEventListener('error', handleImageError, true)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iscrizioni" element={<IscrizioniPage />} />
      <Route path="/contributi-economici" element={<ContributiPage />} />
      <Route path="/regolamento" element={<RegolamentoPage />} />
      <Route path="/pagamenti" element={<PagamentiPage />} />
      <Route path="/contattaci" element={<ContattaciPage />} />
      <Route path="/colloqui-con-i-genitori" element={<ColloquiPage />} />
      <Route path="/calendario" element={<CalendarioPage />} />
      <Route path="/montiniadi-2026" element={<MontinialiDetailPage />} />
      <Route path="/centro-culturale-50-anni" element={<CentroCulturaleDetailPage />} />
      <Route path="/documentazione-obbligatoria" element={<DocumentazioneObbligatoriaPage />} />
      <Route path="/dl-73-2021-e-sostegni-bis" element={<DL73Page />} />
      <Route path="/contributi-pubblici" element={<ContributiPubbliciPage />} />
      <Route path="/bandi-europei" element={<BandiEuropeiPage />} />
      <Route path="/cooperativa-milano-15" element={<CooperativaMilano15Page />} />
      <Route path="/visura-cooperativa" element={<VisuraCooperativaPage />} />
      <Route path="/iban-e-pagamenti" element={<IBANPagamentiPage />} />
      <Route path="/regolamento-cooperativa" element={<RegolamentoCooperativaPage />} />
      <Route path="/chi-siamo" element={<ChiSiamoPage />} />
      <Route path="/perche-il-classico-montini" element={<PerchéClassicoPage />} />
      <Route path="/viaggi-studio-classico" element={<ViaggiStudioClassicoPage />} />
      <Route path="/viaggi-studio-classico/:slug" element={<ViaggiStudioDetailPage />} />
      <Route path="/il-montini-ieri-e-oggi" element={<IlMontiniPage />} />
      <Route path="/intervista-don-paolo-alliata" element={<IntervistaPage />} />
      <Route path="/le-parole-del-rettore" element={<ParoleRettorePage />} />
      <Route path="/docenti" element={<DocentiPage />} />
      <Route path="/docenti/:slug" element={<DocentiDetailPage />} />
      <Route path="/liceo-classico-montini" element={<LiceoClassicoPage />} />
      <Route path="/liceo-classico-nuovi-linguaggi" element={<LiceoClassicoNuoviLinguaggiPage />} />
      <Route path="/linguistico-economico-giuridico" element={<LinguisticoPage />} />
      <Route path="/perche-il-linguistico" element={<PerchéLinguisticoPage />} />
      <Route path="/viaggi-studio-linguistico" element={<ViaggiStudioLinguisticoPage />} />
      <Route path="/viaggi-studio-linguistico/:slug" element={<ViaggiStudioDetailPage />} />
      <Route path="/cambridge-exam-center" element={<CambridgeExamCenterPage />} />
      <Route path="/eccellenza-e-sperimentazioni" element={<EccellenzaSperimentazioniPage />} />
      <Route path="/eccellenza-e-sperimentazioni/:slug" element={<EccellenzaDetailPage />} />
      <Route path="/formazione-scuola-lavoro" element={<FormazioneScuolaLavoroPage />} />
      <Route path="/progetto-coni-miur" element={<ProgettoConiMiurPage />} />
      <Route path="/certificazioni-linguistiche-classico" element={<CertificazioniClassicoPage />} />
      <Route path="/certificazioni-linguistiche-linguistico" element={<CertificazioniLinguisticoPage />} />
      <Route path="/5x1000" element={<CinqueMillePage />} />
      <Route path="/certificazioni-lingua-latina" element={<CertificazioniLatinaPage />} />
      <Route path="/eventi/esperienza-estiva-terra-santa" element={<EventoTerraSantaPage />} />
      <Route path="/materiali-scolastici" element={<MaterialiScolasticiPage />} />
      <Route path="/certificazioni-e-sperimentazioni" element={<CertificazioniPage />} />
      <Route path="/le-nostre-iniziative" element={<LeNostreIniziativePage />} />
      <Route path="/iniziative/:slug" element={<InitiativeDetailPage />} />
      <Route path="/supporto-agli-studenti" element={<SupportoStudentiPage />} />
      <Route path="/l-estate-del-montini" element={<LEstatedelMontiniPage />} />
      <Route path="/l-estate-del-montini/:slug" element={<LEstatedelMontiniDetailPage />} />
      <Route path="/centro-culturale-don-carlo-calori" element={<CentroCulturalePage />} />
    </Routes>
  )
}

export default App
