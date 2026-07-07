import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function LeNostreIniziativePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Le%20nostre%20iniziative.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Le nostre</span> iniziative
          </h1>
        </div>
      </section>

      {/* Eccellenza e Sperimentazioni Cards */}
      <section style={{ backgroundColor: 'white', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', marginBottom: '60px', marginTop: 0, textTransform: 'uppercase' }}>
            Eccellenza e sperimentazioni
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            {[
              { title: 'Lo sport', slug: 'lo-sport', subtitle: 'Le nostre iniziative' },
              { title: 'Montiniadi', slug: 'montiniadi', subtitle: 'Le nostre iniziative' },
              { title: 'Esercizi spirituali', slug: 'esercizi-spirituali', subtitle: 'Le nostre iniziative' },
              { title: 'Incontri di formazione per studenti e genitori', slug: 'incontri-formazione', subtitle: 'Le nostre iniziative' },
              { title: 'Volontariato durante l\'anno', slug: 'volontariato', subtitle: 'Le nostre iniziative\nAttività extra scolastiche' },
              { title: 'Esperienze diocesane', slug: 'esperienze-diocesane', subtitle: 'Le nostre iniziative\nAttività extra scolastiche' },
              { title: 'Esercizi spirituali', slug: 'esercizi-spirituali', subtitle: 'Le nostre iniziative\nAttività extra scolastiche' },
              { title: 'Aiuto Metodologico', slug: 'aiuto-metodologico', subtitle: 'Le nostre iniziative\nAttività extra scolastiche' },
              { title: 'Montiniadi', slug: 'montiniadi', subtitle: 'Le nostre iniziative' },
              { title: 'Concorsi Letterari', slug: 'concorsi-letterari', subtitle: 'Le nostre iniziative' },
              { title: 'Laboratorio Teatrale', slug: 'laboratorio-teatrale', subtitle: 'Le nostre iniziative' },
              { title: 'Gran Galà', slug: 'gran-gala', subtitle: 'Le nostre iniziative' }
            ].map((card, index) => (
              <Link
                key={index}
                to={`/iniziative/${card.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ backgroundColor: '#001839', borderRadius: '12px', padding: '40px 20px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'transform 0.2s', color: 'white', height: '100%', backgroundImage: `url(/${encodeURIComponent(card.title)}.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                  <div style={{ height: '100px', marginBottom: '20px' }}></div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 12px 0', color: 'white' }}>{card.title}</h3>
                    <p style={{ fontSize: '12px', fontWeight: 600, margin: 0, color: 'white', textTransform: 'uppercase', whiteSpace: 'pre-line' }}>{card.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
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
