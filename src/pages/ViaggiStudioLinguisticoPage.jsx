import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function ViaggiStudioLinguisticoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="linguistico" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Viaggi Studio – Linguistico economico giuridico
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {[
              { title: 'Antibes 2025', slug: 'antibes-2025' },
              { title: 'Dublino 2025', slug: 'dublino-2025' },
              { title: 'Assisi 2023', slug: 'assisi-2023' }
            ].map((trip, index) => (
              <Link
                key={index}
                to={`/viaggi-studio-linguistico/${trip.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    backgroundColor: '#001839',
                    borderRadius: '12px',
                    padding: '40px 20px',
                    minHeight: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    color: 'white',
                    height: '100%',
                    backgroundImage: `url(/${encodeURIComponent(trip.title)}.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div style={{ height: '80px', marginBottom: '20px' }}></div>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, margin: 0, color: 'white' }}>
                      {trip.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
