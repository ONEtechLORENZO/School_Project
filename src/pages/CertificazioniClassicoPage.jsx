import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function CertificazioniClassicoPage() {
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
            Certificazioni Liceo Classico
          </h1>

          <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#555', margin: '0 0 40px 0' }}>
            Al Montini le lingue straniere diventano competenza reale, con ore di madrelingua e preparazione certificata.
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
            <img src="/Certificazioni%20Liceo%20Classico.png" alt="Certificazioni Liceo Classico" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#001839', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
              Certificazione di lingua latina
            </h2>

            <p style={{ marginBottom: '24px' }}>
              L'Istituto Montini partecipa attivamente alla Certificazione di lingua latina per livelli, promossa dalla Rete dei Licei Classici di Milano, una proposta di grande valore culturale e formativo che restituisce al latino il suo ruolo di lingua viva del pensiero.
            </p>

            <p style={{ marginBottom: '24px' }}>
              La certificazione offre agli studenti la possibilità di misurare e attestare le proprie competenze in modo serio, progressivo e riconosciuto, valorizzando lo studio del latino non solo come esercizio scolastico, ma come autentica palestra di logica, rigore e comprensione del testo. I diversi livelli di certificazione permettono un percorso graduale, capace di accompagnare la crescita delle competenze linguistiche nel corso degli anni.
            </p>

            <p style={{ marginBottom: '24px' }}>
              La collaborazione con la Rete dei Licei Classici di Milano si inserisce pienamente nella visione del Montini: fare del liceo classico una scuola esigente, attuale e capace di offrire strumenti concreti. Prepararsi a una certificazione di latino significa riconoscere il valore dello studio approfondito della lingua, dare dignità e visibilità a competenze alte e spendibili, e rafforzare la consapevolezza del proprio percorso formativo.
            </p>

            <p style={{ margin: 0 }}>
              Un'iniziativa che unisce tradizione e innovazione, mettendo in rete scuole, docenti e studenti attorno a ciò che è davvero essenziale: la qualità dello studio e la formazione del pensiero.
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
