import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function CertificazioniPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Certificazioni%20e%20Sperimentazioni.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Certificazioni e</span> Sperimentazioni
          </h1>
          <p style={{ fontSize: '20px', marginTop: '24px', color: 'rgba(255,255,255,0.9)' }}>
            Il Montini non è scuola soltanto dalle 8.00 alle 13.00, ma accompagna ogni ragazzo nella vita di ogni giorno con una serie eccezionale di proposte.
          </p>
        </div>
      </section>

      {/* Liceo Classico Block */}
      <section style={{ backgroundColor: 'white', padding: '120px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundImage: 'url(/LiceoClassico.jfif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div>
            <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              CERTIFICAZIONI
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#001839', lineHeight: 1.2, marginBottom: '30px', marginTop: 0 }}>
              Liceo Classico
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#100f2c', marginBottom: '35px' }}>
              Il Liceo Classico Montini valorizza le lingue con un percorso potenziato e orientato alle certificazioni. Grazie a docenti madrelingua e pratica mirata, gli studenti raggiungono il FIRST con solida preparazione.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Liceo Linguistico Block */}
      <section style={{ backgroundColor: '#001839', padding: '120px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              QUALITÀ PER TUTTI
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '30px', marginTop: 0 }}>
              Liceo Linguistico
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '35px' }}>
              Il Liceo Linguistico garantisce una preparazione mirata alle certificazioni grazie a percorsi strutturati e ore di madrelingua. Gli studenti accedono con sicurezza a FIRST, DELE e DELF, con opzioni avanzate per chi eccelle.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#34b8fe', color: '#000', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundImage: 'url(/LiceoLinguistico.jfif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>
      </section>

      {/* Certificazioni Lingua Latina Block */}
      <section style={{ backgroundColor: 'white', padding: '120px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundImage: 'url(/Certificazionilingua%20latina.jfif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div>
            <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              CERTIFICAZIONI
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#001839', lineHeight: 1.2, marginBottom: '30px', marginTop: 0 }}>
              Certificazioni lingua latina
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#100f2c', marginBottom: '35px' }}>
              Al Montini il latino non è solo studio: è competenza certificata, innovazione didattica e un ruolo da protagonista a livello regionale e nazionale.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Eccellenza e Sperimentazioni Block */}
      <section style={{ backgroundColor: '#001839', padding: '120px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              QUALITÀ PER TUTTI
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '30px', marginTop: 0 }}>
              Eccellenza e sperimentazioni
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '35px' }}>
              Le sperimentazioni al Montini non sono eccezioni: sono la norma. Ogni anno proponiamo progetti innovativi che trasformano la didattica in esperienza concreta e rilevante.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#34b8fe', color: '#000', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundImage: 'url(/Eccellenza%20esperimentazioni.jfif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>
      </section>

      {/* Progetto CONI/Miur Block */}
      <section style={{ backgroundColor: 'white', padding: '120px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              PROGETTO CONI/MIUR
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#001839', lineHeight: 1.2, margin: 0 }}>
              Progetto CONI/Miur
            </h2>
          </div>

          {/* Center - Image */}
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '350px', backgroundImage: 'url(/ProgettoCONIMiur.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          </div>

          {/* Right Content */}
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#100f2c', marginBottom: '35px' }}>
              Sei un atleta di alto livello e vuoi fare una scuola di alto livello? Al Montini puoi!
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
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
