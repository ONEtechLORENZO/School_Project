import phoneMockup from '../assets/phone-mockup.png'

export default function InstagramSection() {
  return (
    <section className="instagram-section">
      <img src={phoneMockup} alt="Seguici su Instagram" className="phone-mockup" />
      <div className="instagram-actions">
        <a href="#" className="insta-btn-navy">Carica altro</a>
        <a href="#" className="insta-btn-blue">
          <i className="fab fa-instagram"></i> Seguici su Instagram
        </a>
      </div>
    </section>
  )
}
