import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function PerchéClassicoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="classico" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Classico
          </h1>

          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0078bd', margin: '0 0 40px 0' }}>
            Perché il Classico Montini?
          </h2>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', maxWidth: '900px' }}>
            <p style={{ marginBottom: '24px' }}>
              Al Liceo Classico Montini crediamo che tutto ciò che riguarda l'essere umano ci riguardi da vicino. Per questo studiamo il passato: per capire meglio il presente e costruire con consapevolezza il futuro. Dalla Grecia ereditiamo la cura dell'anima, da Roma la passione per la vita civile, dalla cultura cristiana il valore assoluto della persona. Sono radici che ancora oggi parlano e guidano. L'uomo, creativo e contraddittorio, capace di grandezza e distruzione, come dice Sofocle, è al centro del nostro percorso di formazione: conoscerlo davvero significa imparare a migliorare il mondo.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Il Liceo Classico Montini è un istituto che da anni si distingue per la qualità della sua offerta formativa, capace di coniugare la profondità dello studio classico con un approccio moderno e attento alle esigenze degli studenti. Nel nostro liceo, lo studio del latino, del greco antico, della filosofia, della storia e della letteratura viene affrontato con rigore e passione. I nostri docenti sono professionisti qualificati e motivati, che accompagnano gli studenti in un percorso di crescita culturale e personale, stimolando il pensiero critico e la capacità di analisi.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Al Montini crediamo nel rigore dello studio, nel dialogo autentico e nella passione per ciò che ci rende umani. Le classi sono spazi di confronto e dialogo, in cui si valorizzano le diversità e si promuove il lavoro di gruppo. Grazie a un metodo di studio solido e approfondito, gli studenti acquisiscono una preparazione completa, che apre le porte a diverse facoltà universitarie e li rende capaci di affrontare con consapevolezza sfide complesse, sia nell'ambito accademico sia nel mondo del lavoro.
            </p>

            <p>
              Il Liceo Classico Montini è dunque una realtà dove tradizione e innovazione si incontrano, offrendo una formazione culturale di alto livello, sostenuta da una comunità scolastica accogliente, collaborativa e dinamica. È questo il cuore della nostra proposta: niente di più. Ma niente di meno.
            </p>
          </div>

          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e0e0e0' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#666', margin: 0 }}>
              Qui potete trovare il Piano dell'Offerta Formativa: <a href="https://docs.google.com/document/d/1aVCzltJ-FPL6X32iF2hdEk-DE3LGab_2/edit" target="_blank" rel="noreferrer" style={{ color: '#0078bd', textDecoration: 'none', fontWeight: 600 }}>https://docs.google.com/document/d/1aVCzltJ-FPL6X32iF2hdEk-DE3LGab_2/edit</a>
            </p>
          </div>
        </div>
      </div>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
