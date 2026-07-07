import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function CentroCulturaleDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* Content Section */}
      <section style={{ backgroundColor: '#001839', padding: '80px', minHeight: '600px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center' }}>
          {/* Left Column */}
          <div>
            <h1 style={{ fontSize: '40px', fontWeight: 900, color: 'white', margin: '0 0 30px 0', lineHeight: 1.2 }}>
              Centro Culturale Don Carlo Calori - 50 Anni di Montini
            </h1>
            <div style={{ fontSize: '14px', color: '#999' }}>
              <p style={{ margin: '0 0 8px 0' }}>Published</p>
              <p style={{ margin: 0, fontSize: '16px', color: 'white', fontWeight: 600 }}>08/04/2026</p>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'white' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: 'white', margin: '30px 0 20px 0' }}>
              La piccola tragedia di Puskin "Mozart e Salieri" – La Messa da Requiem di Mozart tra leggenda e storia
            </h2>

            <p style={{ marginBottom: '20px' }}>
              <strong>LUNEDÌ 13 APRILE:</strong> 18:00-19:30<br />
              <strong>LUNEDÌ 20 APRILE:</strong> 18:00-19:30
            </p>

            <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
              Con guida all'ascolto e guida alla lettura, a cura della prof.ssa Daniela Caccia
            </p>

            <hr style={{ borderColor: 'rgba(255,255,255,0.3)', margin: '40px 0' }} />

            <h2 style={{ fontSize: '22px', fontWeight: 900, color: 'white', margin: '30px 0 20px 0' }}>
              La vita nelle parole
            </h2>

            <p style={{ marginBottom: '20px' }}>
              <strong>ABBRACCIO, LUNEDÌ 4 MAGGIO:</strong> 18:00-19:30<br />
              <strong>MISTERO, LUNEDÌ 11 MAGGIO:</strong> 18:00-19:30
            </p>

            <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
              A cura di Don Paolo Alliata, Rettore dell'istituto Montini, e del prof. Fabrizio Fassini
            </p>

            <hr style={{ borderColor: 'rgba(255,255,255,0.3)', margin: '40px 0' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'white', margin: '30px 0 15px 0' }}>
              DOVE:
            </h3>

            <p style={{ marginBottom: '30px' }}>
              Aula Quaglino, Istituto Montini – Corso di Porta Romana 105
            </p>

            <hr style={{ borderColor: 'rgba(255,255,255,0.3)', margin: '40px 0' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'white', margin: '30px 0 15px 0' }}>
              COSTI e MODALITÀ DI ISCRIZIONE:
            </h3>

            <ul style={{ fontSize: '16px', lineHeight: 2, marginBottom: 0 }}>
              <li>Per partecipare, è necessario inquadrare il QRcode e iscriversi utilizzando il modulo</li>
              <li>I corsi verranno svolti in presenza di almeno 15 iscritti</li>
              <li>Scadenza iscrizioni: 4 aprile</li>
              <li>Quota: €15 per un corso, €20 per entrambi i corsi</li>
              <li>Il pagamento avverrà in seguito presso la segreteria</li>
              <li>Il ricavato concorrerà a sostenere le attività dell'Istituto Montini</li>
            </ul>
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
