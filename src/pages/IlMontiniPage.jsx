import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'
import VideoTour from '../components/VideoTour'

export default function IlMontiniPage() {
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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 100%), url(/School.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content">
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ whiteSpace: 'nowrap', overflow: 'visible' }}><span style={{ backgroundColor: '#8B0A2A', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '12px' }}>Il Montini</span> ieri e oggi</h1>
          <p className="hero-sub">Il Liceo Montini unisce educazione cattolica, qualità e accessibilità, offrendo formazione culturale e spirituale aperta a tutti.</p>
        </div>
      </section>

      {/* MONTINI HISTORY SECTIONS */}
      <section className="montini-history-container">
        <div className="montini-history-grid">
          {/* LEFT BLOCK */}
          <div className="montini-history-block">
            <span className="montini-history-number">1</span>
            <h3 className="montini-history-title">Un'origine ispirata e una missione chiara</h3>
            <p className="montini-history-text">
              Il Liceo Montini nasce alla fine degli anni '79 per iniziativa di don Carlo Calori, in una zona periferica di Milano. Il suo intento era quello di offrire una proposta educativa cattolica e di qualità, che fosse davvero accessibile a tutti. La prima grande intuizione del fondatore fu quella di una scuola dichiaratamente cattolica, dove i contenuti e il metodo educativo si ispireranno alla visione cristiana della vita e della storia, ponendo al centro la persona, seguita e accompagnata con rispetto, amore e attenzione.
            </p>
          </div>

          {/* MIDDLE IMAGE PLACEHOLDER */}
          <div className="montini-history-image" style={{ backgroundImage: 'url(/don%20Carlo%20Calori.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Image will be added here */}
          </div>

          {/* RIGHT BLOCK */}
          <div className="montini-history-block">
            <span className="montini-history-number">2</span>
            <h3 className="montini-history-title">Una scuola per tutti, non solo per pochi</h3>
            <p className="montini-history-text">
              La seconda intuizione, profondamente sociale, nasce dalla convinzione che l'istruzione cattolica di qualità non debba essere un privilegio per pochi. Don Carlo riteneva inaccettabile che l'accesso a un'educazione seria e ispirata ai valori cristiani dipendesse dalle possibilità economiche. Per questo motivo, da altre quarant'anni, al Montini non esistono rette fisse: ogni famiglia contribuisce secondo coscienza e secondo le proprie possibilità, in un modello educativo fondato sulla solidarietà e corresponsabilità.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCKS 3 & 4 - STACKED LAYOUT */}
      <section className="montini-blocks-container">
        <div className="montini-blocks-image" style={{ backgroundImage: 'url(/la%20qualità.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Image placeholder */}
        </div>

        <div className="montini-blocks-content">
          {/* BLOCK 3 - QUALITY */}
          <div className="montini-block-item">
            <h3 className="montini-block-number">3</h3>
            <div>
              <h4 className="montini-block-title">La qualità al servizio della persona</h4>
              <p className="montini-block-text">
                La terza intuizione riguarda l'eccellenza formativa. Per don Carlo, "popolare" non significava "di basso livello": al contrario, riteneva che la qualità e la competenza dovessero andare di pari passo con l'accessibilità. Ha sempre chiesto ai suoi docenti non solo la professionalità, ma anche un forte impegno personale e spirituale. Questo approccio ha garantito, negli anni, un livello culturale elevato, mantenendo al contempo un'attenzione personalizzata per ciascuno studente.
              </p>
            </div>
          </div>

          {/* BLOCK 4 - CURRENT PROPOSAL */}
          <div className="montini-block-item">
            <h3 className="montini-block-number">4</h3>
            <div>
              <h4 className="montini-block-title">Una proposta educativa viva e attuale</h4>
              <p className="montini-block-text">
                Oggi, il Liceo Montini – articolato in un Liceo Classico e un Liceo Linguistico – mantiene saldi i tre pilastri originari: cattolicità, accessibilità e qualità. La scuola offre un percorso educativo che include momenti di formazione e spiritualità, settimane di volontariato in Italia e all'estero, e attività pomeridiane di servizio. Tutto si svolge nel pieno rispetto della libertà individuale, valorizzando le capacità di ciascun alunno. Gli insegnanti lavorano affinché tutti possano raggiungere obiettivi didattici significativi, senza escludere traguardi di eccellenza per chi ha il talento e la motivazione per raggiungerli.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CinqueMilleBlock />
      <ContributiBlock />
      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
