import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function ProgettoConiMiurPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="certificazioni" />

        <section style={{ flex: 1, backgroundColor: '#001839', padding: '70px 80px', minHeight: 'auto' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '40px', fontWeight: 900, color: 'white', margin: '0 0 16px 0', lineHeight: 1.1 }}>
              Progetto CONI/Miur
            </h1>

            <p style={{ fontSize: '18px', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', margin: '0 0 40px 0', maxWidth: '620px' }}>
              Al Montini gli studenti-atleti possono conciliare sport di alto livello e percorso scolastico personalizzato.
            </p>

            {/* Center image */}
            <div style={{ textAlign: 'center', margin: '40px 0' }}>
              <img src="/ProgettoCONIMiur.png" alt="Progetto CONI/Miur" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>

            <div style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)' }}>
              <p style={{ margin: '0 0 24px 0' }}>
                Sei un atleta di alto livello e vuoi fare una scuola di alto livello? Al Montini puoi! Siamo infatti una delle scuole italiane ad aderire alla al Progetto che il Comitato Olimpico Nazionale Italiano e il MiM mettono a disposizione dei ragazzi che praticano sport con un impegno non comune. Prepareremo per te un Piano Formativo Personalizzato, terremo insieme a te i contatti con la tua Società sportiva o con la tua Federazione, collaboreremo con il tuo allenatore, creeremo un un progetto che sia soltanto tuo!
              </p>
              <p style={{ margin: 0 }}>
                Scarica negli allegati la presentazione del progetto e la circolare per l'anno scolastico in corso. Per qualsiasi dubbio non esitare a contattarci.
              </p>
            </div>

            <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'white', margin: '50px 0 24px 0' }}>
              Documenti
            </h2>

            <a
              href="https://drive.google.com/drive/folders/11u0wol8H_bvRAoe5sqJ9fLengX2IxCDg"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '14px 32px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              <i className="far fa-file-alt"></i>
              In cosa consiste il progetto
            </a>
          </div>
        </section>
      </div>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
