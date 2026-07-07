import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function SupportoStudentiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Supporto%20agli%20studenti.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Supporto agli</span> studenti
          </h1>
        </div>
      </section>

      {/* Crescere Insieme Block */}
      <section style={{ backgroundColor: '#001839', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.95fr 1.3fr', gap: '60px', alignItems: 'flex-start' }}>
          <div>
            <div style={{ overflow: 'hidden', borderRadius: '20px', height: '480px', backgroundImage: 'url(/Crescere%20insieme%20sostegno%20e%20cura%20per%20ogni%20studente.png)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '20px' }}>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
              La prof.ssa Giussani e la Dott.ssa Vavasson in un momento di gioia
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '46px', fontWeight: 900, color: 'white', lineHeight: 1.25, marginBottom: '35px', marginTop: 0 }}>
              Crescere insieme: sostegno e cura per ogni studente
            </h2>
            <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'white', marginBottom: '20px' }}>
              Ogni ragazzo va seguito e amato a partire dai suoi bisogni. Il Montini non "scarica" chi fa fatica, ma cerca di offrire tutti gli strumenti affinché ogni studente possa raggiungere il proprio obiettivo. Per noi gli studenti non sono numeri né men che meno "problemi": sono sempre e comunque un dono che c'è affidato, un mistero che viene da lontano, da Dio. La loro storia ci riguarda, le loro fatiche ci interpellano, la loro crescita ci arricchisce, il loro bene diventa reciprocità d'amore. E tutto ciò non a parole, ma nei fatti.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'white', marginBottom: '20px' }}>
              Per questo, durante l'anno, vi sono diverse attività di sostegno e supporto: ore di "sportello" coi docenti, incontri con studenti della classe superiori (o universitari) che si affidancano ai docenti anche in ore pomeridiane, attività di recupero in itinere e al termine del trimestre, accoglienza. Questi aiuti si abbinano alle azioni che la scuola mette in atto per accompagnare le "eccellenze".
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'white', marginBottom: '0' }}>
              Per tutti vale il principio di equità proprio degli Atti degli Apostoli: a ciascuno secondo i suoi bisogni, da ciascuno secondo le sue possibilità.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '1400px', margin: '30px auto 0', paddingTop: '20px' }}>
          <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'white', marginBottom: '30px' }}>
            Papa Paolo VI diceva: "i giovani di oggi ascoltano più volentieri i testimoni che i maestri, se ascolta i maestri, è perché sono dei testimoni". I nostri docenti hanno quest'ambizione ed è per questo che con i ragazzi si crea un rapporto unico di empatia e collaborazione.
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'white', marginBottom: '0' }}>
            Se ogni montiniano sa di poter contare su tutti i propri docenti è vero anche che sa ancora meglio che in qualunque momento e per qualunque difficoltà può trovare nella prof.ssa Giussani, nostra insegnante di religione, e nella dott.ssa Vavasson, assistente sociale della scuola, un porto sicuro e una mano sempre tesa. Il Montini ti accompagna nella vita, non solo nelle cinque ore tra i banchi.
          </p>
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
