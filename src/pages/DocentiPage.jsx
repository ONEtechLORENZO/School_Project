import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function DocentiPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCardClick = (slug) => {
    navigate(`/docenti/${slug}`)
  }

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Decenti%20.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#8B0A2A', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>I docenti</span>
            dell'Istituto
          </h1>
          <h1 style={{ fontSize: '52px', marginTop: '4px' }}>
            Montini
          </h1>
        </div>
      </section>

      {/* DOCENTI GRID */}
      <section className="docenti-grid-section">
        <div className="docenti-grid">
          {/* DOCENTE 1 */}
          <div className="docenti-card">
            <div className="docenti-image-circle docenti-icon-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="docenti-name">Però Paolo</h3>
          </div>

          {/* DOCENTE 2 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('palmieri-irene')}>
            <div className="docenti-image-circle docenti-icon-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="docenti-name">Palmieri Irene</h3>
          </div>

          {/* DOCENTE 3 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('pelullo-andreina')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Pelullo.jpeg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Pelullo Andreina</h3>
          </div>

          {/* DOCENTE 4 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('palumbo-serena')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Palumbo.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Palumbo Serena</h3>
          </div>

          {/* DOCENTE 5 */}
          <div className="docenti-card">
            <div className="docenti-image-circle docenti-icon-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="docenti-name">Niccoli Chiara</h3>
          </div>

          {/* DOCENTE 6 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('mussi-luca')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Mussi.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Mussi Luca</h3>
          </div>

          {/* DOCENTE 7 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('mastropietro-gianluca')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Mastropietro.png)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Mastropietro Gianluca</h3>
          </div>

          {/* DOCENTE 8 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('marino-marco')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Marino-768x768.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Marino Marco</h3>
          </div>

          {/* DOCENTE 9 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('gerra-nicoletta')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Gerra-768x769.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Gerra Nicoletta</h3>
          </div>

          {/* DOCENTE 10 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('d-ambrosio-salvatore')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Dambrosio-768x768.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">D'Ambrosio Salvatore</h3>
          </div>

          {/* DOCENTE 11 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('cimbro-ilves')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Cimbro-682x1024.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Cimbro Ilves</h3>
          </div>

          {/* DOCENTE 12 */}
          <div className="docenti-card">
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Castioni-768x768.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Castioni Antonella</h3>
          </div>

          {/* DOCENTE 13 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('caccia-daniela')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Caccia.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Caccia Daniela</h3>
          </div>

          {/* DOCENTE 14 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('biondi-veronica')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Biondi.png)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Biondi Veronica</h3>
          </div>

          {/* DOCENTE 15 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('beretta-elena')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Beretta-768x768.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Beretta Elena</h3>
          </div>

          {/* DOCENTE 16 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('fabrizio-fassini')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Fasso.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Fabrizio Fassini</h3>
          </div>

          {/* DOCENTE 17 */}
          <div className="docenti-card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick('terry-costanzo')}>
            <div className="docenti-image-circle" style={{ backgroundImage: 'url(/Costanzo-768x768.jpg)', backgroundSize: '110%', backgroundPosition: 'center' }}></div>
            <h3 className="docenti-name">Terry Costanzo</h3>
          </div>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
