import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function LiceoClassicoNuoviLinguaggiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="classico" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 900, color: '#001839', margin: '0 0 16px 0', lineHeight: 1.2 }}>
            Liceo classico nuovi linguaggi
          </h1>

          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0078bd', margin: '0 0 40px 0' }}>
            Perché il Liceo classico nuovi linguaggi?
          </h2>

          {/* Intro with image */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '50px' }}>
            {/* Left - Image */}
            <div>
              <div style={{ overflow: 'hidden', borderRadius: '20px', height: '340px', backgroundImage: 'url(/esperienza%20della%20IV%20liceo%20classico%20in%20Sicilia.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', margin: '12px 0 0 0', textAlign: 'center' }}>
                Esperienza della IV liceo classico in Sicilia - 2025
              </p>
            </div>

            {/* Right - Text */}
            <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
              <p style={{ marginTop: 0, marginBottom: '24px' }}>
                Il Liceo Classico Montini di Milano, fedele alla propria tradizione di eccellenza e apertura all'innovazione, inaugura un nuovo potenziamento in Media e Comunicazione, che si propone di integrare lo studio dei classici con i linguaggi e le sfide della contemporaneità.
              </p>
              <p style={{ margin: 0 }}>
                L'iniziativa nasce dalla convinzione che la formazione liceale non debba limitarsi alla trasmissione di conoscenze, ma debba offrire agli studenti strumenti critici ed espressivi capaci di accompagnarli nel loro percorso di crescita personale e di cittadinanza attiva. In un mondo in cui la comunicazione è sempre più rapida, multicanale e globale, diventa essenziale acquisire consapevolezza delle sue forme, delle sue dinamiche e delle sue implicazioni etiche.
              </p>
            </div>
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', maxWidth: '900px' }}>
            <p style={{ marginBottom: '24px' }}>
              Il percorso si articola in più moduli che scandiscono i cinque anni di studio e che guidano i ragazzi in un viaggio che va "dal mito ai media":
            </p>

            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>dalle origini della comunicazione umana alla retorica classica,</li>
              <li style={{ marginBottom: '12px' }}>dalla scrittura creativa al teatro,</li>
              <li style={{ marginBottom: '12px' }}>dall'analisi dei social e delle fake news all'uso consapevole dei linguaggi digitali,</li>
              <li>fino alla creazione di podcast, cortometraggi e campagne comunicative multimediali.</li>
            </ul>

            <p style={{ marginBottom: '24px' }}>
              La progettazione didattica prevede momenti laboratoriali e collaborazioni con importanti realtà del mondo culturale e professionale: Accademia dei Filodrammatici, Eco della Stampa, Radio 24, Choramedia, Cineteatro Argentia, Teatro Oscar, Teatro Anteo, oltre a professionisti della comunicazione, del giornalismo e delle arti performative.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Gli studenti saranno così chiamati a sperimentare in prima persona:
            </p>

            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>il public speaking, in italiano e in inglese, attraverso lo studio e la pratica della retorica;</li>
              <li style={{ marginBottom: '12px' }}>la produzione multimediale, con podcast e cortometraggi ispirati ai grandi temi classici;</li>
              <li style={{ marginBottom: '12px' }}>la comunicazione digitale, con la gestione di contenuti social dedicati al mondo antico e al loro significato per il presente;</li>
              <li>la comunicazione civica, grazie a progetti di service learning e alla creazione di eventi scolastici e culturali.</li>
            </ul>

            <p style={{ marginBottom: '24px' }}>
              Accanto alle competenze tecniche, il potenziamento pone particolare attenzione all'etica della comunicazione, affinché i ragazzi imparino non solo a usare i linguaggi, ma anche a valutarne responsabilmente l'impatto sulla società.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Questo percorso non snatura l'identità del liceo classico, ma al contrario ne valorizza la missione originaria: formare persone capaci di pensiero critico, di espressione efficace e di dialogo costruttivo con il presente. In questo modo la cultura classica continua a essere non solo custodia della memoria, ma anche chiave interpretativa del mondo contemporaneo e risorsa viva per costruire il futuro.
            </p>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #e0e0e0' }}>
            <a href="https://gamma.app/docs/Liceo-Classico-Media-e-Comunicazione-kz92flgke9bphzj?mode=doc" target="_blank" rel="noreferrer" style={{ color: '#0078bd', textDecoration: 'none', fontWeight: 600, fontSize: '15px', wordBreak: 'break-all' }}>
              https://gamma.app/docs/Liceo-Classico-Media-e-Comunicazione-kz92flgke9bphzj?mode=doc
            </a>
          </div>
        </div>
      </div>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
