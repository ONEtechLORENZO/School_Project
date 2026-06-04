import { Link } from 'react-router-dom'

export default function VideoTour() {
  return (
    <>
      <section className="video-section">
        <p className="video-eyebrow">RIMANI IN CONTATTO CON NOI</p>
        <h2>Parla con noi</h2>
        <Link to="/contattaci" className="video-contact-btn">Contattaci →</Link>
      </section>

      <div className="contact-bar">
        <div className="contact-info">
          <small>Indirizzo</small>
          <strong>C.so di Porta Romana, 105 – 20122 Milano</strong>
        </div>
        <div className="contact-divider"></div>
        <div className="contact-info">
          <small>Telefono</small>
          <strong>+39 025453975</strong>
        </div>
        <div className="contact-divider"></div>
        <div className="contact-info">
          <small>E-mail</small>
          <strong>segreteria@istitutomontini.it</strong>
        </div>
        <div className="contact-divider"></div>
        <div className="contact-info">
          <small>Instagram</small>
          <strong>@istitutomontini</strong>
        </div>
      </div>
    </>
  )
}
