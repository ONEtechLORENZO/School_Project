import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function LiceoClassicoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Liceo%20Classico%20Montini.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Liceo Classico</span> Montini
          </h1>
          <p style={{ fontSize: '20px', marginTop: '24px', color: 'rgba(255,255,255,0.9)' }}>
            Formare l'uomo per costruire il domani.
          </p>
        </div>
      </section>

      {/* Studiare per capire section */}
      <section style={{ backgroundColor: 'white', padding: '60px 80px', minHeight: '650px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        {/* Left Content */}
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', lineHeight: 1.25, marginBottom: '40px', marginTop: 0, textTransform: 'uppercase' }}>
            Studiare per capire, capire per cambiare
          </h2>

          <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#100f2c' }}>
            <p style={{ margin: '0 0 20px 0' }}>
              Al Liceo Classico Montini studiamo il passato per comprendere il presente e costruire il futuro. L'uomo, con la sua grandezza e le sue contraddizioni, è al centro del percorso, guidato da rigore, dialogo e passione.
            </p>
          </div>

          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '12px 24px', borderRadius: '6px', marginTop: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
            SCOPRI DI PIÙ
            <span style={{ fontSize: '18px' }}>→</span>
          </a>
        </div>

        {/* Right - Image */}
        <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundImage: 'url(/Studiare%20per%20capire,%20capire%20per%20cambiare.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
      </section>

      {/* Liceo Classico Nuovi Linguaggi Section */}
      <section style={{ backgroundColor: '#34b8fe', padding: '60px 80px', minHeight: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        {/* Image */}
        <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundImage: 'url(/Liceo%20classico%20nuovi%20linguaggi.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>

        {/* Right Content */}
        <div>
          <p style={{ color: '#8B0A2A', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px', margin: 0, textTransform: 'uppercase' }}>
            LICEO CLASSICO NUOVI LINGUAGGI
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', lineHeight: 1.25, marginBottom: '40px', marginTop: 0, textTransform: 'uppercase' }}>
            Liceo classico nuovi linguaggi
          </h2>
          <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#100f2c' }}>
            <p style={{ margin: '0 0 20px 0' }}>
              Liceo classico con potenziamento media e comunicazione.
            </p>
          </div>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '12px 24px', borderRadius: '6px', marginTop: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
            SCOPRI DI PIÙ
            <span style={{ fontSize: '18px' }}>→</span>
          </a>
        </div>
      </section>

      {/* Professor Profiles Block */}
      <section style={{ backgroundColor: 'white', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', margin: 0, textTransform: 'uppercase' }}>
              I nostri docenti
            </h2>
            <a href="/docenti" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Vedi tutti
              <span style={{ fontSize: '18px' }}>→</span>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px' }}>
            {/* Terry Costanzo */}
            <div style={{ cursor: 'pointer', textAlign: 'center', transition: 'transform 0.2s' }} onClick={() => window.location.href = '/docenti/terry-costanzo'}>
              <div style={{ width: '100%', aspectRatio: '1', borderRadius: '12px', backgroundImage: 'url(/Costanzo-768x768.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '16px' }}></div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#001839', margin: '0 0 8px 0' }}>Terry Costanzo</h3>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Docente di Scienze</p>
            </div>

            {/* Palumbo Serena */}
            <div style={{ cursor: 'pointer', textAlign: 'center', transition: 'transform 0.2s' }} onClick={() => window.location.href = '/docenti/palumbo-serena'}>
              <div style={{ width: '100%', aspectRatio: '1', borderRadius: '12px', backgroundImage: 'url(/Palumbo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '16px' }}></div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#001839', margin: '0 0 8px 0' }}>Palumbo Serena</h3>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Docente di Lingue</p>
            </div>

            {/* Gerra Nicoletta */}
            <div style={{ cursor: 'pointer', textAlign: 'center', transition: 'transform 0.2s' }} onClick={() => window.location.href = '/docenti/gerra-nicoletta'}>
              <div style={{ width: '100%', aspectRatio: '1', borderRadius: '12px', backgroundImage: 'url(/Gerra-768x769.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '16px' }}></div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#001839', margin: '0 0 8px 0' }}>Gerra Nicoletta</h3>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Docente di Lettere Classiche</p>
            </div>

            {/* Marino Marco */}
            <div style={{ cursor: 'pointer', textAlign: 'center', transition: 'transform 0.2s' }} onClick={() => window.location.href = '/docenti/marino-marco'}>
              <div style={{ width: '100%', aspectRatio: '1', borderRadius: '12px', backgroundImage: 'url(/Marino-768x768.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '16px' }}></div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#001839', margin: '0 0 8px 0' }}>Marino Marco</h3>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Docente di Scienze Motorie</p>
            </div>

            {/* Don Paolo Alliata */}
            <div style={{ cursor: 'pointer', textAlign: 'center', transition: 'transform 0.2s' }} onClick={() => window.location.href = '/intervista-don-paolo-alliata'}>
              <div style={{ width: '100%', aspectRatio: '1', borderRadius: '12px', backgroundImage: 'url(/Don%20Paolo%20Alliata.png)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '16px' }}></div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#001839', margin: '0 0 8px 0' }}>Don Paolo Alliata</h3>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Rettore dell'Istituto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Libri di Testo Block */}
      <section style={{ backgroundColor: '#001839', padding: '80px', minHeight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
            LIBRI DI TESTO
          </p>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', lineHeight: 1.2, margin: 0 }}>
            I libri di testo per il liceo classico
          </h2>
        </div>

        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#34b8fe', color: '#000', padding: '12px 32px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          Scopri di più
          <span style={{ fontSize: '18px' }}>→</span>
        </a>
      </section>

      {/* Viaggi Studio Block */}
      <section style={{ backgroundColor: '#0078bd', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <p style={{ color: 'white', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              VIAGGI STUDIO
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', lineHeight: 1.2, margin: 0 }}>
              I Viaggi Studio del liceo classico
            </h2>
          </div>

          {/* Center - Image */}
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px', backgroundImage: 'url(/viaggi%20studio.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          {/* Right Content */}
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'white', marginBottom: '30px' }}>
              I viaggi di istruzione al Montini sono molto più di semplici gite: sono esperienze che <strong>aprono la mente, avvicinano alla cultura e trasformano lo studio in scoperta</strong>. Scoprire nuovi luoghi insieme significa crescere, imparare e creare ricordi che restano per sempre.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'white', marginBottom: '30px' }}>
              Al Montini, la scuola si vive fuori e dentro l'aula.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#001839', color: 'white', padding: '12px 32px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '18px' }}>→</span>
            </a>
          </div>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
