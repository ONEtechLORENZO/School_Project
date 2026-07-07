import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function CambridgeExamCenterPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="linguistico" />

        <section style={{ flex: 1, backgroundColor: '#001839', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'stretch' }}>
          {/* Left - Image */}
          <div style={{ overflow: 'hidden', borderRadius: '24px', height: '100%', minHeight: '500px', backgroundImage: 'url(/Cambridge%20exam%20center.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          {/* Right - Text */}
          <div>
            <h1 style={{ fontSize: '44px', fontWeight: 900, color: 'white', margin: '0 0 30px 0', lineHeight: 1.1 }}>
              Cambridge exam center
            </h1>

            <div style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)' }}>
              <p style={{ margin: '0 0 24px 0' }}>
                L'Istituto Montini non è solo una scuola che insegna l'inglese: è un centro di preparazione ufficiale e sede d'esame per le certificazioni Cambridge, un riconoscimento che testimonia la qualità, la serietà e l'efficacia del percorso linguistico proposto.
              </p>

              <p style={{ margin: '0 0 24px 0' }}>
                Essere sede d'esame Cambridge English significa offrire agli studenti un'opportunità concreta e prestigiosa: prepararsi e sostenere certificazioni riconosciute a livello internazionale nel proprio ambiente scolastico, con docenti qualificati, metodologie consolidate e un accompagnamento attento e personalizzato.
              </p>

              <p style={{ margin: '0 0 24px 0' }}>
                Le certificazioni Cambridge non sono solo un traguardo formale, ma un vero passaporto per il futuro: attestano competenze linguistiche solide, spendibili nel mondo universitario e professionale, in Italia e all'estero. Al Montini, la preparazione non è improvvisata, ma costruita passo dopo passo, con un lavoro costante che punta a sviluppare sicurezza, autonomia e padronanza reale della lingua.
              </p>

              <p style={{ margin: 0 }}>
                Questo rende l'Istituto Montini un luogo in cui l'inglese non si studia soltanto, ma si conquista. Un valore aggiunto che qualifica l'offerta formativa della scuola e offre agli studenti uno strumento decisivo per affrontare con fiducia le sfide di un mondo sempre più internazionale.
              </p>
            </div>
          </div>
        </div>
        </section>
      </div>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
