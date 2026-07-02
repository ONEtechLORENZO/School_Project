import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

const tabs = [
  { label: 'Classico', target: 'classico' },
  { label: 'Linguistico economico giuridico', target: 'linguistico' },
  { label: 'Documenti comuni', target: 'comuni' },
  { label: 'Documenti Maturità 2026', target: 'maturita' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function MaterialiScolasticiPage() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      tabs.forEach((tab, i) => {
        const el = document.getElementById(tab.target)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 120) setActiveTab(i)
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabClick = (i) => {
    setActiveTab(i)
    scrollTo(tabs[i].target)
  }

  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Materiali%20Scolastici.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Materiali</span> Scolastici
          </h1>
        </div>
      </section>

      {/* Sticky Tab Bar */}
      <section style={{ backgroundColor: '#001839', padding: '40px 80px', minHeight: 'auto', position: 'sticky', top: '80px', zIndex: 50 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(i)}
              style={{
                backgroundColor: activeTab === i ? '#0078bd' : 'transparent',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Classico Section */}
      <section id="classico" style={{ backgroundColor: 'white', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#001839', lineHeight: 1.2, marginBottom: '40px', marginTop: 0 }}>
              Materiali scolastici liceo classico a.s. 2026-2027
            </h2>
            <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#100f2c' }}>
              <p style={{ fontWeight: 600, marginBottom: '16px' }}>Qui saranno scaricabili</p>
              <p style={{ margin: '0 0 12px 0' }}>– Gli <strong>elenchi dei libri di testo</strong> per l'anno scolastico 2026-2027</p>
              <p style={{ margin: 0 }}>– Gli <strong>orari</strong> delle <strong>lezioni</strong> per l'anno scolastico 2026-2027</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="/Libri-A.S.-2026_2027-1_A-Classico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 1ª A Classico</a>
            <a href="/Libri-A.S.-2026_2027-2_A-Classico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 2ª A Classico</a>
            <a href="/Libri-A.S.-2026_2027-3_A-Classico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 3ª A Classico</a>
            <a href="/Libri-A.S.-2026_2027-4_A-Classico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 4ª A Classico</a>
            <a href="/Libri-A.S.-2026_2027-5_A-Classico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 5ª A Classico</a>
            <a href="/Libri-A.S.-2026_2027-5_B-Classico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 5ª B Classico</a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Orario scolastico 2026-2027</a>
          </div>
        </div>
      </section>

      {/* Linguistico Section */}
      <section id="linguistico" style={{ backgroundColor: '#001839', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '40px', marginTop: 0 }}>
              Materiali scolastici liceo linguistico economico giuridico a.s. 2026-2027
            </h2>
            <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'white' }}>
              <p style={{ fontWeight: 600, marginBottom: '16px' }}>Qui saranno scaricabili</p>
              <p style={{ margin: '0 0 12px 0' }}>– Gli <strong>elenchi dei libri di testo</strong> per l'anno scolastico 2026-2027</p>
              <p style={{ margin: 0 }}>– Gli <strong>orari</strong> delle <strong>lezioni</strong> per l'anno scolastico 2026-2027</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="/Libri-A.S.-2026_2027-1_A-Linguistico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 1ª A Linguistico</a>
            <a href="/Libri-A.S.-2026_2027-2_A-Linguistico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 2ª A Linguistico</a>
            <a href="/Libri-A.S.-2026_2027-3_A-Linguistico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 3ª A Linguistico</a>
            <a href="/Libri-A.S.-2026_2027-4_A-Linguistico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 4ª A Linguistico</a>
            <a href="/Libri-A.S.-2026_2027-5_A-Linguistico.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Libri di testo 5ª A Linguistico</a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Orario scolastico 2026-2027</a>
          </div>
        </div>
      </section>

      {/* Documenti Comuni Section */}
      <section id="comuni" style={{ backgroundColor: 'white', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#001839', lineHeight: 1.2, marginBottom: '16px', marginTop: 0 }}>
              Documenti scolastici
            </h2>
            <p style={{ fontSize: '16px', color: '#100f2c', margin: 0 }}>Qui sono scaricabili</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div>
              <p style={{ fontSize: '16px', color: '#100f2c', margin: '0 0 12px 0' }}>Il calendario scolastico annuale per l'anno 2025/2026</p>
              <a href="https://drive.google.com/file/d/1AxJSGF-DJ-RfM4308EBdElsTSZQdL7Eo/view" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Calendario scolastico</a>
            </div>
            <div>
              <p style={{ fontSize: '16px', color: '#100f2c', margin: '0 0 12px 0' }}>Il RAV (Rapporto di Autovalutazione) per l'anno scolastico 2025/2026</p>
              <a href="https://drive.google.com/file/d/1i0M6vq9BPT-8Wvc-ePjP5KFlr8097rEb/view" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>RAV</a>
            </div>
            <div>
              <p style={{ fontSize: '16px', color: '#100f2c', margin: '0 0 12px 0' }}>Il PTOF (Piano Triennale dell'Offerta Formativa)</p>
              <a href="https://drive.google.com/file/d/12Rke74A-c_EiurVYHH3h83axiO2g8xnS/view" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>PTOF</a>
            </div>
            <div>
              <p style={{ fontSize: '16px', color: '#100f2c', margin: '0 0 12px 0' }}>Il Patto di corresponsabilità</p>
              <a href="https://docs.google.com/document/d/1YEa8EPlgOqyJA2uwyvGjnCsau3nvlSWg/edit" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Patto di corresponsabilità</a>
            </div>
          </div>
        </div>
      </section>

      {/* Documenti Maturità 2026 Section */}
      <section id="maturita" style={{ backgroundColor: '#001839', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '40px', marginTop: 0 }}>
              Documenti Maturità 2026
            </h2>
            <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'white' }}>
              <p style={{ fontWeight: 600, marginBottom: '16px' }}>Di seguito i documenti scaricabili:</p>
              <p style={{ margin: '0 0 8px 0' }}>1. Documento finale 2025-2026 5 LL.docx</p>
              <p style={{ margin: '0 0 8px 0' }}>2. Documento finale 2025-2026 classe VB LC.pdf</p>
              <p style={{ margin: 0 }}>3. Documento di classe V classico A.pdf</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="/Documento-finale-2025-2026-5-LL.docx" download style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Documento finale 2025–2026 5 LL.docx</a>
            <a href="/Documento-finale-2025-2026-classe-VB-LC.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Documento finale 2025–2026 classe VB LC.pdf</a>
            <a href="/Documento-di-classe-V-classico-A.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0078bd', color: 'white', padding: '16px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>Documento di classe V classico A.pdf</a>
          </div>
        </div>
      </section>

      {/* Documenti Iscrizione Block */}
      <section style={{ backgroundColor: 'white', padding: '120px 80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '56px', fontWeight: 900, color: '#001839', lineHeight: 1.2, margin: 0 }}>
              Documenti iscrizione
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#100f2c', marginBottom: '40px', margin: '0 0 40px 0' }}>
              Consulta tutti i documenti per l'iscrizione
            </p>
            <a href="/iscrizioni" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: '#34b8fe', color: '#000', padding: '14px 36px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
              Scopri di più
              <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </div>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
