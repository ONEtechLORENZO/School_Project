import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function LinguisticoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Linguistico%20economico%20giuridico.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Linguistico economico</span> giuridico Montini
          </h1>
          <p style={{ fontSize: '20px', marginTop: '24px', color: 'rgba(255,255,255,0.9)' }}>
            Formare l'uomo per costruire il domani.
          </p>
        </div>
      </section>

      {/* Perché il Liceo Linguistico Block */}
      <section style={{ backgroundColor: '#001839', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left - Image */}
          <div style={{ overflow: 'hidden', borderRadius: '20px', height: '500px', backgroundImage: 'url(/Perch%C3%A9%20il%20Liceo%20Linguisticoeconomico.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          {/* Right Content */}
          <div>
            <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
              QUALITÀ PER TUTTI
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '30px', marginTop: 0 }}>
              Perché il Liceo Linguistico economico giuridico?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '35px' }}>
              Un percorso moderno che unisce lingue, economia e diritto, esperienze internazionali e progetti concreti, per costruire competenze reali e aprire le porte a università e carriera.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#34b8fe', color: '#000', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>
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

      {/* Materiali Scolastici Block */}
      <section style={{ backgroundColor: '#001839', padding: '80px', minHeight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{ color: '#0078bd', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', margin: 0, marginBottom: '16px', textTransform: 'uppercase' }}>
            MATERIALI SCOLASTICI
          </p>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', lineHeight: 1.2, margin: 0 }}>
            Materiali scolastici
          </h2>
        </div>

        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#34b8fe', color: '#000', padding: '12px 32px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          Scopri di più
          <span style={{ fontSize: '18px' }}>→</span>
        </a>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
