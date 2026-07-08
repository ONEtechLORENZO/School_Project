import phoneMockup from '../assets/phone-mockup.png'

export default function InstagramSection() {
  return (
    <section className="instagram-section">
      <img src={phoneMockup} alt="Seguici su Instagram" className="phone-mockup" />
      <div className="instagram-actions">
        <a href="https://www.instagram.com/istitutomontini/" target="_blank" rel="noreferrer" className="insta-btn-blue">
          <i className="fab fa-instagram"></i> Seguici su Instagram
        </a>
      </div>
    </section>
  )
}
