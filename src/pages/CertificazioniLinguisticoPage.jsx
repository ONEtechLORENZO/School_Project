import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function CertificazioniLinguisticoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="certificazioni" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#001839', margin: '0 0 10px 0', lineHeight: 1.2 }}>
            Certificazioni Liceo Linguistico economico giuridico
          </h1>

          <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#555', margin: '0 0 40px 0' }}>
            Al Liceo Linguistico economico giuridico, le lingue si apprendono davvero, con certificazioni riconosciute e ore di madrelingua.
          </p>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#001839', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
              First Certificate
            </h2>

            <p style={{ marginBottom: '24px' }}>
              L'Istituto Montini offre un percorso strutturato e mirato di preparazione alle certificazioni Cambridge FIRST (livello B2) e C1, con esame in sede, pensato specificamente per gli studenti del Liceo Classico.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Il corso pomeridiano nasce da una scelta chiara: valorizzare le competenze proprie del classico – capacità di analisi, precisione linguistica, attenzione al testo, ricchezza lessicale – orientandole in modo efficace verso le richieste delle certificazioni Cambridge English. La metodologia di lezione è quindi calibrata su questo profilo: lavoro approfondito su reading e writing, cura dell'argomentazione, uso consapevole della lingua e allenamento costante alle prove d'esame.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Un elemento distintivo del percorso è la presenza di un'insegnante madrelingua, che affianca il lavoro curricolare già dal biennio, con un'attenzione particolare alla conversazione e all'ascolto. Questo permette agli studenti di acquisire fin da subito naturalezza, sicurezza e familiarità con l'inglese autentico, costruendo nel tempo una competenza solida e duratura.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Prepararsi al FIRST e al C1 al Montini significa affrontare certificazioni di alto livello con un percorso serio, coerente e progressivo, che unisce rigore culturale e apertura internazionale. Un'opportunità concreta per trasformare lo studio della lingua in uno strumento forte e spendibile per il futuro universitario e professionale.
            </p>
          </div>

          {/* Center image */}
          <div style={{ margin: '40px 0', textAlign: 'center' }}>
            <img src="/Certificazioni%20Liceo%20Linguistico%20economico%20giuridico.png" alt="Certificazioni Liceo Linguistico economico giuridico" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
            <p style={{ marginBottom: '24px' }}>
              Al Liceo Linguistico dell'Istituto Montini lo studio delle lingue si traduce in competenze certificate e riconosciute a livello internazionale, offrendo agli studenti strumenti concreti e spendibili per il loro futuro accademico e professionale.
            </p>

            <p style={{ marginBottom: '12px' }}>
              Nel percorso di lingua francese, gli studenti possono conseguire il Diplôme d'Étude en Langue Française:
            </p>

            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>livello B1 al quarto anno;</li>
              <li>livello B2 al quinto anno, con certificazione rilasciata dal Centre Culturel Français. Un traguardo che attesta una solida padronanza della lingua e della cultura francese, valorizzando il percorso di studio svolto nel quinquennio.</li>
            </ul>

            <p style={{ marginBottom: '12px' }}>
              Parallelamente, per la lingua spagnola, il Montini offre la preparazione al Diploma de Español como Lengua Extranjera (DELE):
            </p>

            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>livello B1 al quarto anno;</li>
              <li>livello B2 al quinto anno, rilasciato dall'Instituto Cervantes, ente ufficiale di riferimento per la diffusione della lingua e della cultura spagnola nel mondo.</li>
            </ul>

            <p style={{ margin: 0 }}>
              Queste certificazioni non sono un'aggiunta formale, ma il naturale esito di un percorso didattico serio, strutturato e orientato alla comunicazione reale. Un valore aggiunto che qualifica l'offerta del Liceo Linguistico e permette agli studenti di uscire dalla scuola con titoli riconosciuti, competenze solide e uno sguardo autenticamente europeo.
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
