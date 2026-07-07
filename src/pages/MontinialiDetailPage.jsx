import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function MontinialiDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* Content Section */}
      <section style={{ backgroundColor: '#001839', padding: '80px', minHeight: '600px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center' }}>
          {/* Left Column */}
          <div>
            <h1 style={{ fontSize: '48px', fontWeight: 900, color: 'white', margin: '0 0 30px 0', lineHeight: 1.2 }}>
              Montiniadi 2026
            </h1>
            <div style={{ fontSize: '14px', color: '#999' }}>
              <p style={{ margin: '0 0 8px 0' }}>Published</p>
              <p style={{ margin: 0, fontSize: '16px', color: 'white', fontWeight: 600 }}>08/04/2026</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0078bd', margin: '0 0 40px 0', lineHeight: 1.3, textTransform: 'uppercase' }}>
              Le Olimpiadi dell'Istituto G.B. Montini
            </h2>

            <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'white' }}>
              <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
                Tornano anche quest'anno le attesissime <strong>Montiniadi 2026</strong>, l'evento sportivo e formativo che coinvolge tutti gli studenti dell'Istituto G.B. Montini in un'esperienza unica di gioco, crescita e condivisione.
              </p>

              <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
                Le Montiniadi rappresentano molto più di una semplice competizione: sono un'occasione per valorizzare lo spirito di squadra, il rispetto reciproco e la sana rivalità sportiva. Attraverso diverse discipline, gli studenti si mettono alla prova non solo sul piano atletico, ma anche su quello umano.
              </p>

              <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
                L'edizione 2026 si preannuncia ricca di emozioni, con nuove sfide, momenti di aggregazione e un'organizzazione pensata per coinvolgere tutte le classi. L'obiettivo non è solo vincere, ma partecipare e vivere insieme un'esperienza indimenticabile.
              </p>

              <hr style={{ borderColor: 'rgba(255,255,255,0.3)', margin: '40px 0' }} />

              <h2 style={{ fontSize: '24px', fontWeight: 900, color: 'white', margin: '40px 0 20px 0' }}>
                📍 Informazioni evento
              </h2>

              <ul style={{ fontSize: '16px', lineHeight: 2 }}>
                <li><strong>Data:</strong> 05 maggio 2026</li>
                <li><strong>Orario:</strong> 08:30</li>
                <li><strong>Luogo:</strong> Campo Giuriati, Milano</li>
              </ul>

              <hr style={{ borderColor: 'rgba(255,255,255,0.3)', margin: '40px 0' }} />

              <h3 style={{ fontSize: '20px', fontWeight: 900, color: 'white', margin: '30px 0 20px 0' }}>
                📌 Dove si trova
              </h3>

              <div style={{ marginBottom: '30px', borderRadius: '12px', overflow: 'hidden', height: '400px' }}>
                <iframe
                  title="Campo Giuriati Milano"
                  style={{ border: 0, width: '100%', height: '100%' }}
                  src="https://www.google.com/maps?q=Campo%20Giuriati%20Milano&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <hr style={{ borderColor: 'rgba(255,255,255,0.3)', margin: '40px 0' }} />

              <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>
                Montiniadi 2026: sport, passione e spirito di squadra.
              </p>
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
