import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function ChiSiamoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Chi%20Siamo%20333.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Chi</span> Siamo
          </h1>
        </div>
      </section>

      {/* Il Montini Ieri e Oggi */}
      <section style={{ backgroundColor: 'white', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#0078bd', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Educazione di qualità per tutti
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
              Il Montini<br/>ieri e Oggi
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: '40px' }}>
              I Liceo Montini unisce educazione cattolica, qualità e accessibilità, offrendo formazione culturale e spirituale aperta a tutti.
            </p>
            <a
              href="/il-montini-ieri-e-oggi"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '12px 24px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              Scopri di più
              <span style={{ fontSize: '18px' }}>→</span>
            </a>
          </div>
          <div>
            <img
              src="/Chi%20Siamo456.png"
              alt="Il Montini"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* Intervista a Don Paolo Alliata - Dark Blue */}
      <section style={{ backgroundColor: '#001839', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#34b8fe', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Educazione di qualità per tutti
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', margin: '0 0 40px 0', lineHeight: 1.2 }}>
              Intervista a<br/>Don Paolo Alliata
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '40px' }}>
              In questa sezione potrete trovare presto i testi e gli audio di tutti gli interventi di Don Paolo nei momenti forti dell'anno
            </p>
            <a
              href="/intervista-don-paolo-alliata"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '12px 24px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              Scopri di più
              <span style={{ fontSize: '18px' }}>→</span>
            </a>
          </div>
          <div>
            <img
              src="/Don%20Paolo%20Alliata.png"
              alt="Don Paolo Alliata"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* Il Fondatore - Sky Blue */}
      <section style={{ backgroundColor: '#34b8fe', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <img
              src="/Don%20Carlo%20Calori456.png"
              alt="Monsignor Carlo Calori"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#001839', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Qualità per tutti
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
              Il fondatore:<br/>Monsignor<br/>Carlo Calori
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#001839', marginBottom: '40px' }}>
              Carlo Calori (1932-2006), sacerdote e docente milanese, ha fondato scuole, istituti culturali e associazioni educative, promuovendo attività culturali e formative.
            </p>
            <a
              href="/il-montini-ieri-e-oggi"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#001839',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              Scopri di più
              <span style={{ fontSize: '18px' }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* I nostri docenti */}
      <section style={{ backgroundColor: 'white', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
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

      <CinqueMilleBlock />
      <ContributiBlock />

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
