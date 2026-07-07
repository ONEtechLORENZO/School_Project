import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function EccellenzaSperimentazioniPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const items = [
    { title: 'Hackathon', slug: 'hackathon' },
    { title: 'IMUN', slug: 'imun' },
    { title: 'Certamina di traduzione', slug: 'certamina-di-traduzione' },
    { title: 'Olimpiadi dell\'Italiano', slug: 'olimpiadi-italiano' },
    { title: 'Gran Premio della Matematica', slug: 'gran-premio-matematica' },
    { title: 'Collaborazione con l\'Accademia dei Filodrammatici', slug: 'accademia-filodrammatici' },
    { title: 'Corso di Public Speaking', slug: 'corso-public-speaking' }
  ]

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="certificazioni" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Eccellenza e sperimentazione
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {items.map((item, index) => (
              <Link
                key={index}
                to={`/eccellenza-e-sperimentazioni/${item.slug}`}
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
                    backgroundImage: `url(/${encodeURIComponent(item.title)}.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div style={{ height: '80px', marginBottom: '20px' }}></div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, margin: 0, color: 'white' }}>
                      {item.title}
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
