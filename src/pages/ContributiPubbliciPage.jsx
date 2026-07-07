import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function ContributiPubbliciPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const documents = [
    { title: 'Sintesi aiuti Pubblica Amministrazione', link: '/', isHome: true },
    { title: 'Bilancio Cooperativa Milano 15', link: 'https://drive.google.com/file/d/1B_AMhMkgpPxQcfqwbdJBx9ex7iCSyucs/view?usp=sharing' },
    { title: 'Contributi pubblici Montini  2019 2022', link: 'https://www.istitutomontini.it/wp-content/uploads/2026/03/Contributi-MILANO-15-enti-PA-2019-2025.xlsx', download: true }
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Contributi%20pubblici.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Contributi</span> pubblici
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ backgroundColor: '#001839', padding: '80px', minHeight: '600px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
          {/* Left Column - Image */}
          <div
            style={{
              height: '500px',
              backgroundImage: `url(/La%20legge%201242017%20.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px'
            }}
          ></div>

          {/* Right Column - Content */}
          <div style={{ color: 'white', fontSize: '16px', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
              La legge 124/2017 prevede, a decorrere dal 2018, specifici obblighi di trasparenza a carico di imprese ed associazioni beneficiarie di contributi e sovvenzioni dalle pubbliche amministrazioni.
            </p>

            <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
              Comunichiamo, in allegato, le competenze dell'istituto Montini.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 900, margin: '40px 0 20px 0' }}>
              Documenti
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.link}
                  target={doc.isHome ? undefined : '_blank'}
                  rel={doc.isHome ? undefined : 'noreferrer'}
                  download={doc.download}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    padding: '16px 20px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>📄</span>
                  {doc.title}
                </a>
              ))}
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
