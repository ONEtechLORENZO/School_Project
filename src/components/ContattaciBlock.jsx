import { useState } from 'react'
import emailjs from '@emailjs/browser'

// Fallback recipients if EmailJS isn't configured (opens the visitor's mail app).
const RECIPIENTS = 'segreteria@istitutomontini.it,fabrizio.fassini@istitutomontini.it'

// ─────────────────────────────────────────────────────────────
//  EMAILJS CONFIG — paste your 3 IDs from https://emailjs.com here.
//  Until these are filled, the form falls back to opening the mail app.
//  Get them at: Email Services (Service ID), Email Templates (Template ID),
//  Account → API Keys (Public Key).
// ─────────────────────────────────────────────────────────────
const EMAILJS = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
}
const emailjsReady =
  !EMAILJS.serviceId.startsWith('YOUR_') &&
  !EMAILJS.templateId.startsWith('YOUR_') &&
  !EMAILJS.publicKey.startsWith('YOUR_')

export default function ContattaciBlock() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    spam: ''
  })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (error) setError('')
  }

  const resetForm = () =>
    setFormData({ nome: '', email: '', telefono: '', messaggio: '', spam: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Anti-spam: must be exactly 5, otherwise do NOT send.
    if (formData.spam.trim() !== '5') {
      setError('Verifica anti-spam non corretta: la risposta a 3+2 è 5.')
      return
    }
    setError('')

    // Preferred path: EmailJS delivers straight to the inbox (once configured).
    if (emailjsReady) {
      setSending(true)
      try {
        await emailjs.send(
          EMAILJS.serviceId,
          EMAILJS.templateId,
          {
            nome: formData.nome,
            email: formData.email,
            telefono: formData.telefono || '—',
            messaggio: formData.messaggio,
            reply_to: formData.email,
            recipients: RECIPIENTS,
          },
          { publicKey: EMAILJS.publicKey }
        )
        setSubmitted(true)
        resetForm()
      } catch (err) {
        console.error('EmailJS error:', err)
        setError('Si è verificato un errore durante l\'invio. Riprova o scrivici via email.')
      } finally {
        setSending(false)
      }
      return
    }

    // Fallback (EmailJS not yet configured): open the visitor's mail app.
    const subject = `Richiesta di contatto dal sito - ${formData.nome || 'Sito web'}`
    const body =
      `Nome e Cognome: ${formData.nome}\n` +
      `Email: ${formData.email}\n` +
      `Telefono: ${formData.telefono || '—'}\n\n` +
      `Messaggio:\n${formData.messaggio}\n`
    window.location.href =
      `mailto:${RECIPIENTS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    resetForm()
  }

  return (
    <>
      {/* CONTATTACI INFO BLOCK */}
      <div className="contattaci-info-block">
        <h3 className="contattaci-main-title">Restiamo in contatto</h3>

        <div className="contattaci-info">
          <div className="contattaci-column">
            <div className="contattaci-item">
              <h4 className="contattaci-label">Numero di telefono</h4>
              <p className="contattaci-value">+39 025453975</p>
            </div>

            <div className="contattaci-item">
              <h4 className="contattaci-label">Lunedì-Sabato:</h4>
              <p className="contattaci-value">8:00 – 16:00</p>
            </div>

            <div className="contattaci-item">
              <h3 className="contattaci-section-title">Indirizzo</h3>
              <p className="contattaci-address">C.so di Porta Romana, 105 20122 Milano</p>
            </div>

            <div className="contattaci-item">
              <h3 className="contattaci-section-title">Social media</h3>
              <p className="contattaci-social">Instagram: @istitutomontini</p>
            </div>
          </div>

          <div className="contattaci-column">
            <div className="contattaci-item">
              <h4 className="contattaci-label">E-mail</h4>
              <a href="mailto:segreteria@istitutomontini.it" className="contattaci-value">segreteria@istitutomontini.it</a>
            </div>

            <div className="contattaci-item">
              <p className="contattaci-subtitle">Coordinatore didattico</p>
              <a href="mailto:salvatore.dambrosio@istitutomontini.it" className="contattaci-value">salvatore.dambrosio@istitutomontini.it</a>
            </div>

            <div className="contattaci-item">
              <p className="contattaci-subtitle">Preside Vicario (delegato ai nuovi inserimenti)</p>
              <a href="mailto:fabrizio.fassini@istitutomontini.it" className="contattaci-value">fabrizio.fassini@istitutomontini.it</a>
            </div>

            <div className="contattaci-item">
              <p className="contattaci-subtitle">Vicepreside Giussani (responsabile educativo)</p>
              <a href="mailto:barbara.giussani@istitutomontini.it" className="contattaci-value">barbara.giussani@istitutomontini.it</a>
            </div>
          </div>
        </div>
      </div>

      {/* CONTATTACI FORM BLOCK */}
      <div className="contattaci-form-block">
        <div className="contattaci-form-wrapper">
          {submitted ? (
            <div className="contattaci-thankyou" style={{ textAlign: 'center', padding: '40px 20px', color: 'white' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                <i className="fas fa-circle-check" style={{ color: '#34b8fe' }}></i>
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: 900, margin: '0 0 12px 0', color: 'white' }}>
                Grazie per averci contattato!
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, margin: '0 auto 28px', maxWidth: '520px', color: 'rgba(255,255,255,0.85)' }}>
                Abbiamo ricevuto la tua richiesta. Ti risponderemo il prima possibile.
                Se la tua app di posta si è aperta, ricordati di premere <strong>Invia</strong> per completare l'invio.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{ backgroundColor: '#34b8fe', color: '#001839', border: 'none', padding: '12px 28px', borderRadius: '30px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}
              >
                Invia un altro messaggio
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="contattaci-form">
            <div className="form-row-two">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Numero di telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome e Cognome*"
                value={formData.nome}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                id="messaggio"
                name="messaggio"
                placeholder="Messaggio*"
                value={formData.messaggio}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-group">
              <p className="form-question">Verifica anti-spam: Quanto fa 3+2?*</p>
              <input
                type="text"
                name="spam"
                placeholder="La tua risposta"
                value={formData.spam}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            {error && (
              <p style={{ color: '#ffd2d2', backgroundColor: 'rgba(220,0,0,0.25)', padding: '10px 14px', borderRadius: '8px', fontSize: '14px', margin: '0 0 8px 0' }}>
                {error}
              </p>
            )}

            <button type="submit" className="form-button" disabled={sending}>
              {sending ? 'Invio in corso…' : 'Invia'}
            </button>
          </form>
          )}
        </div>
      </div>
    </>
  )
}
