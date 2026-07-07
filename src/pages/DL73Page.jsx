import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function DL73Page() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const documents = [
    { title: 'Decreto Legge 73 2021 - 1) La Cooperativa Milano 15', link: 'https://drive.google.com/file/d/1tej2nmat11il0LlqTYODSPFJSkBpXKyX/view?usp=drive_link' },
    { title: 'Decreto Legge 73 2021 - 2) Adempimenti normativi', link: 'https://drive.google.com/file/d/1_HLNg37UGeM_kfO38HgYWCxCNdNsSNeV/view?usp=drive_link' }
  ]

  const details = [
    { label: 'a)', text: 'l\'organizzazione interna, con particolare riferimento all\'articolazione degli uffici e all\'organigramma;', link: 'https://drive.google.com/file/d/1leS0vvYNLkFn9FGKN04Dldzxyf4tuRxb/view?usp=drive_link' },
    { label: 'b)', text: 'le informazioni relative ai titolari di incarichi di collaborazione o consulenza compresi gli estremi dell\'atto di conferimento dell\'incarico, il curriculum vitae e il compenso erogato;', link: 'https://liceo.istitutomontini.it/informazioni-titolari-di-incarichi-di-collaborazione-o-consulenza' },
    { label: 'c)', text: 'il conto annuale del personale e delle relative spese sostenute;', link: 'https://drive.google.com/file/d/1fD8HqIFvZoh3U4TxeGlhj3jX1x8wXOY9/view?usp=drive_link' },
    { label: 'd)', text: 'i dati relativi al personale in servizio con contratto di lavoro non a tempo indeterminato;', link: 'https://liceo.istitutomontini.it/dati-personale-con-contratto-di-lavoro-non-tempo-indeterminato' },
    { label: 'e)', text: 'i documenti e gli allegati del bilancio preventivo e del conto consuntivo;', link: 'https://drive.google.com/file/d/1JkWZc7PDHo84iWtq4j2ijWOKOHAZARxZ/view?usp=drive_link' },
    { label: 'f)', text: 'le informazioni relative ai beni immobili e agli atti di gestione del patrimonio.', link: 'https://drive.google.com/file/d/169upIiB0j3EMPiKiq9AlwPzhPl7-q4Al/view?usp=drive_link' }
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/DL%20732021%20e%20sostegni%20bis.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>DL 73/2021</span> e sostegni bis
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
              backgroundImage: `url(/In%20questa%20sezione%20%C3%A8%20possibile.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px'
            }}
          ></div>

          {/* Right Column - Content */}
          <div style={{ color: 'white', fontSize: '16px', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
              In questa sezione è possibile trovare le seguenti informazioni della Milano 15 – Società Cooperativa Sociale per i punti previsti dal DL 73 2021.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 900, margin: '40px 0 20px 0' }}>
              Documenti
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px', marginBottom: '40px' }}>
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.link}
                  target="_blank"
                  rel="noreferrer"
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

            <h2 style={{ fontSize: '24px', fontWeight: 900, margin: '40px 0 20px 0' }}>
              In particolare:
            </h2>

            <ul style={{ fontSize: '14px', lineHeight: 1.8, paddingLeft: '20px' }}>
              {details.map((detail, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <strong>{detail.label}</strong> <a href={detail.link} target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>{detail.text}</a>
                </li>
              ))}
            </ul>
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
