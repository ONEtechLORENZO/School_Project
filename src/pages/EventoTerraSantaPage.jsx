import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

const EVENT_TITLE = 'Esperienza estiva in Terra Santa'
const calendarLinks = [
  {
    label: 'Google Calendar',
    href: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(EVENT_TITLE)}&dates=20260726/20260808`,
  },
  {
    label: 'iCalendar',
    // Live feed from the school's events calendar. webcal:// hands the URL to the
    // visitor's calendar app, so the event stays in sync if it is edited at source.
    href: 'webcal://www.istitutomontini.it/event/esperienza-estiva-in-terra-santa/?ical=1',
    sameTab: true,
  },
  {
    label: 'Outlook 365',
    href: `https://outlook.office.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(EVENT_TITLE)}&startdt=2026-07-26&enddt=2026-08-08&allday=true`,
  },
  {
    label: 'Outlook Live',
    href: `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(EVENT_TITLE)}&startdt=2026-07-26&enddt=2026-08-08&allday=true`,
  },
]

export default function EventoTerraSantaPage() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      <section style={{ backgroundColor: '#001839', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Link to="/calendario" style={{ color: 'white', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
            « Tutti gli Eventi
          </Link>

          <h1 style={{ fontSize: '48px', fontWeight: 900, color: 'white', margin: '30px 0 12px 0', lineHeight: 1.2 }}>
            Esperienza estiva in Terra Santa
          </h1>

          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', margin: '0 0 40px 0' }}>
            Luglio 26 - Agosto 7
          </p>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              onClick={() => setOpen((o) => !o)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#34b8fe',
                color: '#001839',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              <i className="far fa-calendar-plus"></i>
              Salva nel tuo calendario
              <i className="fas fa-chevron-down" style={{ fontSize: '12px' }}></i>
            </button>

            {open && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                minWidth: '260px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                zIndex: 50,
                overflow: 'hidden'
              }}>
                {calendarLinks.map((opt) => (
                  <a
                    key={opt.label}
                    href={opt.href}
                    target={opt.download || opt.sameTab ? undefined : '_blank'}
                    rel="noreferrer"
                    download={opt.download}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      padding: '14px 20px',
                      color: '#0078bd',
                      textDecoration: 'none',
                      fontSize: '15px',
                      borderBottom: '1px solid #f0f0f0',
                      transition: 'background .15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* DETTAGLI */}
          <div style={{ marginTop: '50px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', color: 'white', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
              Dettagli
            </p>
            <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>
              <p style={{ margin: 0 }}><strong>Inizio:</strong></p>
              <p style={{ margin: '0 0 16px 0', color: '#34b8fe' }}>Luglio 26</p>
              <p style={{ margin: 0 }}><strong>Fine:</strong></p>
              <p style={{ margin: 0, color: '#34b8fe' }}>Agosto 7</p>
            </div>
          </div>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
