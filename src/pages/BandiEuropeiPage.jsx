import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function BandiEuropeiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const bands = [
    {
      title: 'Competenze STEM e multilinguistiche nelle scuole paritarie non commerciali (D.M. 65/2023)',
      description: 'Scarica il resoconto sul bando Competenze STEM e multilinguistiche nelle scuole paritarie non commerciali (D.M. 65/2023)',
      documentTitle: 'Competenze STEM',
      documentLink: 'https://www.istitutomontini.it/wp-content/uploads/2026/03/Competenze-STEM.docx'
    },
    {
      title: 'Riduzione dei divari negli apprendimenti e contrasto alla dispersione scolastica',
      description: 'Scarica il resoconto sul bando Riduzione dei divari negli apprendimenti e contrasto alla dispersione scolastica',
      documentTitle: 'Riduzione dei divari',
      documentLink: 'https://www.istitutomontini.it/wp-content/uploads/2026/03/Riduzione-dei-divari-negli-apprendimenti.docx'
    }
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Bandi%20Europei.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Bandi</span> Europei
          </h1>
        </div>
      </section>

      {/* Content Blocks - Stacked */}
      {bands.map((band, index) => (
        <section key={index} style={{ backgroundColor: index === 0 ? 'white' : '#001839', padding: '80px' }}>
          <div style={{ maxWidth: '100%' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: index === 0 ? '#001839' : 'white', margin: '0 0 40px 0', lineHeight: 1.2 }}>
              {band.title}
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: index === 0 ? '#333' : 'white', marginBottom: '40px' }}>
              {band.description}
            </p>

            <h3 style={{ fontSize: '24px', fontWeight: 900, color: index === 0 ? '#001839' : 'white', margin: '40px 0 20px 0' }}>
              Documenti
            </h3>

            <a
              href={band.documentLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                padding: '14px 36px',
                borderRadius: '24px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              📄 {band.documentTitle}
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>
        </section>
      ))}

      <CinqueMilleBlock />
      <ContributiBlock />

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
