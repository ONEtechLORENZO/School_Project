import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function CalendarioPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const events = [
    {
      date: 'Lug',
      day: '26',
      title: 'Esperienza estiva in Terra Santa',
      allDay: true,
      link: '#'
    }
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section with Background Image */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/calender.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Calendario &</span> Notizie
          </h1>
        </div>
      </section>

      {/* Events Section */}
      <section style={{ backgroundColor: 'white', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', marginBottom: '60px', marginTop: 0, textTransform: 'uppercase' }}>
            Prossimi eventi
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {events.map((event, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '40px',
                  alignItems: 'center',
                  backgroundColor: '#f8f9fa',
                  padding: '30px 40px',
                  borderRadius: '12px',
                }}
              >
                {/* Date Box */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#0078bd', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {event.date}
                  </div>
                  <div style={{ fontSize: '48px', fontWeight: 900, color: '#001839' }}>
                    {event.day}
                  </div>
                </div>

                {/* Event Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    <svg style={{ width: '20px', height: '20px', color: '#0078bd' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.293.707l-.001.003a1 1 0 101.414 1.414L10.414 9.5a1 1 0 00.293-.707V6z" clipRule="evenodd" />
                    </svg>
                    <span style={{ fontSize: '14px', color: '#666', fontWeight: 600 }}>
                      {event.allDay ? 'Tutto il giorno' : event.time}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#001839', margin: '0 0 16px 0' }}>
                    {event.title}
                  </h3>
                  <a
                    href={event.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#0078bd',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '14px',
                      cursor: 'pointer'
                    }}
                  >
                    Scopri di più
                    <span style={{ fontSize: '18px' }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notizie Section */}
      <section style={{ backgroundColor: '#001839', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'white', margin: 0, textTransform: 'uppercase' }}>
              Notizie
            </h2>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a
                href="/categoria/notizie"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#34b8fe', color: '#001839', padding: '14px 36px', borderRadius: '24px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}
              >
                Vedi tutte
                <span style={{ fontSize: '20px' }}>→</span>
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {[
              { title: 'Montiniadi 2026', date: '08/04/2026', readTime: '1 min read', image: 'Montiniadi 2026.png', link: '/montiniadi-2026' },
              { title: 'Centro Culturale Don Carlo Calori - 50 Anni di Montini', date: '08/04/2026', readTime: '1 min read', image: 'Centro Culturale Don Carlo Calori - 50 Anni di Montini.png', link: '/centro-culturale-50-anni' },
            ].map((article, index) => (
              <Link key={index} to={article.link} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div style={{ cursor: 'pointer' }}>
                  <div
                    style={{
                      height: '480px',
                      backgroundImage: `url(/${encodeURIComponent(article.image).replace(/%20/g, '%20')})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '12px',
                      marginBottom: '20px'
                    }}
                  ></div>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
                    {article.date} · {article.readTime}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: 'white', margin: 0, lineHeight: 1.4 }}>
                    {article.title}
                  </h3>
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
