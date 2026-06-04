import { useState } from 'react'

export default function ContattaciBlock() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    spam: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.spam !== '5') {
      alert('Risposta anti-spam non corretta. La risposta corretta è 5.')
      return
    }
    console.log('Form submitted:', formData)
    alert('Messaggio inviato con successo!')
    setFormData({ nome: '', email: '', telefono: '', messaggio: '', spam: '' })
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

            <button type="submit" className="form-button">Invia</button>
          </form>
        </div>
      </div>
    </>
  )
}
