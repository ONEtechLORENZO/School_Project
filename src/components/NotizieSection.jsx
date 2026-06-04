const news = [
  {
    title: 'Montiniadi 2026',
    subtitle: "LE OLIMPIADI DELL'ISTITUTO G.B. MONTINI",
    subtitleUppercase: true,
  },
  {
    title: 'Centro Culturale Don Carlo Calori',
    subtitle: '50 Anni di Montini',
    subtitleUppercase: false,
  },
]

export default function NotizieSection() {
  return (
    <section className="notizie">
      <h2 className="notizie-title">Notizie in Evidenza</h2>
      <div className="notizie-grid">
        {news.map((item) => (
          <a href="#" className="notizie-card" key={item.title}>
            <h3 className="notizie-card-title">{item.title}</h3>
            <div className="notizie-card-bottom">
              <p className={item.subtitleUppercase ? 'notizie-sub-upper' : 'notizie-sub'}>
                {item.subtitle}
              </p>
              <i className="fas fa-arrow-right notizie-arrow-icon"></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
