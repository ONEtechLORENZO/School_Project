import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function LEstatedelMontiniPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/L%27estate%20del%20Montini.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>L'estate del</span> Montini
          </h1>
        </div>
      </section>

      {/* Summer Activities Cards */}
      <section style={{ backgroundColor: 'white', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#001839', marginBottom: '60px', marginTop: 0, textTransform: 'uppercase' }}>
            Le nostre estati
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {[
              { title: 'Cracovia 2016', slug: 'cracovia-2016', image: 'Cracovia 2016 (2) copy.png', subtitle: 'GMG (Giornata Mondiale della Gioventù)' },
              { title: 'Cammino di Santiago 2017', slug: 'cammino-santiago-2017', subtitle: 'La "M" del Montini sui gradini della Cattedrale di Santiago, dopo 160 chilometri di cammino.' },
              { title: 'Bogliasco 2018', slug: 'bogliasco-2018', subtitle: 'Volontariato nel quartiere Zen' },
              { title: 'Palermo 2018', slug: 'palermo-2018', image: 'Palermo 2018.png', subtitle: 'Volontariato nel quartiere Zen' },
              { title: 'Terrasanta 2018', slug: 'terrasanta-2018', subtitle: 'Pellegrinaggio e volontariato con "i bambini che non esistono", con le suore di Ortaz e con i ragazzi disabili di Don Guanella' },
              { title: 'Palermo 2019', slug: 'palermo-2019', subtitle: 'Volontariato con i ragazzi del Quartiere Zen' },
              { title: 'Chiavenna 2019', slug: 'chiavenna-2019', subtitle: 'Volontariato' },
              { title: 'Bogliasco 2019', slug: 'bogliasco-2019', subtitle: 'Volontariato con anziani e disabili' },
              { title: 'Summerlife', slug: 'summerlife', subtitle: 'Un\'inedita estate in movimento col Montini' },
              { title: 'Assisi 2023', slug: 'assisi-2023', subtitle: 'Assisi, comunità di Bose (san Masseo). Quindici intrepidi avventurieri affrontano il caldo fiato delle campagne umbre per condividere con i monaci il lavoro negli oliveti.' },
              { title: 'Val Formazza 2023', slug: 'val-formazza-2023', subtitle: 'Val Formazza, rifugio Claudio e Bruno (m 2710): una settimana di lavoro per aiutare la gestione del rifugio, e di contemplazione dell\'opera del Creatore.' },
              { title: 'Bogliasco 2023', slug: 'bogliasco-2023', subtitle: 'Un\'occasione di vicinanza agli ospiti di Casa Moresco di don Orione. Volontariato con persone disabili adulte.' }
            ].map((card, index) => (
              <Link
                key={index}
                to={`/l-estate-del-montini/${card.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{ backgroundColor: '#001839', borderRadius: '12px', padding: '40px 20px', minHeight: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'transform 0.2s', color: 'white', height: '100%', backgroundImage: card.slug === 'cracovia-2016' ? 'url(/Cracovia%202016%20%282%29%20copy.png)' : (card.image ? `url(/${encodeURIComponent(card.image)})` : `url(/${encodeURIComponent(card.title)}.png)`), backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                  <div style={{ height: '80px', marginBottom: '20px' }}></div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 12px 0', color: 'white' }}>{card.title}</h3>
                    <p style={{ fontSize: '12px', fontWeight: 600, margin: 0, color: 'white', textTransform: 'uppercase', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{card.subtitle}</p>
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
