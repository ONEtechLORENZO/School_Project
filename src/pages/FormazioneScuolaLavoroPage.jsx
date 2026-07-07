import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function FormazioneScuolaLavoroPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="certificazioni" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 12px 0', lineHeight: 1.2 }}>
            PCTO (Orientamento)
          </h1>

          <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#0078bd', margin: '0 0 40px 0' }}>
            Percorsi per le competenze trasversali e l'orientamento
          </h2>

          {/* Intro with image */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '40px' }}>
            {/* Left - Image */}
            <div style={{ overflow: 'hidden', borderRadius: '20px', height: '360px', backgroundImage: 'url(/PCTO%28Orientamento%29.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>

            {/* Right - Text */}
            <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
              <p style={{ marginTop: 0, marginBottom: '24px' }}>
                Nell'ambito del percorso formativo, l'Istituto Montini propone agli studenti del terzo, quarto e quinto anno un progetto di formazione scuola-lavoro pensato come esperienza autentica, personalizzata e orientativa.
              </p>
              <p style={{ margin: 0 }}>
                La scelta educativa del Montini è chiara: non un'unica proposta uguale per tutti, ma la possibilità di costruire un percorso personale, coerente con interessi, inclinazioni e competenze di ciascuno studente. Per questo la scuola mette a disposizione oltre 50 realtà diverse – in ambiti culturali, professionali e sociali – tra cui scegliere, favorendo una vera esperienza su misura.
              </p>
            </div>
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', maxWidth: '900px' }}>
            <p style={{ marginBottom: '24px' }}>
              Ogni studente è seguito da un tutor interno, che monitora l'intero percorso: accompagna la scelta, segue lo svolgimento dell'esperienza, dialoga con il tutor esterno e cura la ricaduta didattica, aiutando lo studente a rileggere criticamente quanto vissuto. La valutazione avviene in modo condiviso tra scuola e realtà ospitante, valorizzando competenze, atteggiamenti e capacità sviluppate.
            </p>
            <p style={{ marginBottom: '24px' }}>
              La formazione scuola-lavoro al Montini è prima di tutto un'esperienza di vita, ancor prima che di istruzione. È l'occasione per entrare in contatto con il mondo del lavoro e accorciare la distanza tra studio e realtà, attraverso esperienze brevi ma intense, in cui ciò che si è appreso in classe trova applicazione concreta: scrivere testi e progetti, sostenere colloqui in lingua straniera, partecipare a riunioni, redigere report, organizzare incontri.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Queste attività rendono lo studio vivo e significativo, permettono di scoprire risorse personali spesso inattese e rafforzano la motivazione all'apprendimento. L'esperienza coinvolge tutte le dimensioni della formazione: cognitiva, operativa, progettuale, relazionale ed emotiva, diventando parte integrante del percorso culturale dello studente.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Il progetto è condiviso e deliberato dai Consigli di Classe, dal Collegio Docenti e dal Consiglio di Istituto, e coinvolge attivamente studenti, famiglie, docenti, enti e istituzioni del territorio. Gli studenti sono valutati sia dai tutor scolastici sia dai tutor esterni, sulla base delle competenze attese e degli obiettivi del progetto.
            </p>
            <p style={{ margin: 0 }}>
              La formazione scuola-lavoro al Montini non è un obbligo da assolvere, ma un'occasione concreta di orientamento, crescita e consapevolezza, che aiuta ogni studente a interrogarsi sul proprio futuro e a costruirlo con maggiore lucidità e responsabilità.
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
