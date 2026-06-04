import heroBg from '../assets/hero-bg.png'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-content">
        <p className="hero-eyebrow">Knowledge is Power</p>
        <h1>
          <span>Dove il sapere</span><br />
          prende forma
        </h1>
        <p className="hero-sub">
          La tua formazione, la nostra missione: verso un futuro brillante.
        </p>
        <a href="#" className="btn-crimson" style={{ fontSize: '17px', padding: '16px 34px' }}>
          View Our Program &nbsp;<i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '13px' }}></i>
        </a>
      </div>
    </section>
  )
}
