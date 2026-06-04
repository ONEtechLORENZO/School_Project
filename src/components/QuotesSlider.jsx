import { useState, useEffect } from 'react'

const quotes = [
  {
    role: 'Ex Allieva',
    icon: 'fa-quote-left',
    text: '"Il Montini è un luogo di volti che mi hanno formata, e l\'eredità più bella di una vita spesa per educare i giovani. Grazie don Carlo!"',
  },
  {
    role: 'Ex Allieva',
    icon: 'fa-heart',
    text: '"Il Montini una casa dove puoi sempre tornare, dove sei guardato e voluto bene per quello che sei, un posto dove crescere e imparare, dove puoi amare ciò che studi."',
  },
  {
    role: 'Ex Allieva',
    icon: 'fa-book-open',
    text: '"Il Montini è... una adolescenza serena nella mia città che mi manca, don Carlo che leggeva nei cuori, la scoperta della filosofia... in una parola un ricordo felice"',
  },
  {
    role: 'Ex Allievo',
    icon: 'fa-people-group',
    text: '"Il Montini è un piccolo mondo in cui conta ogni relazione; ci si conoscere tutti e si può fare tanto"',
  },
  {
    role: 'Ex Allieva',
    icon: 'fa-star',
    text: '"Il Montini è... uno splendido ricordo fatto di professori meravigliosi e di don Carlo che ha amato tantissimo la sua scuola."',
  },
]

export default function QuotesSlider() {
  const [start, setStart] = useState(0)
  const visible = 4

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const visibleQuotes = [...quotes, ...quotes].slice(start, start + visible)

  return (
    <section className="quotes-cards-section">
      <div className="quotes-cards-grid">
        {visibleQuotes.map((q, i) => (
          <div className="quote-card" key={i}>
            <div className="quote-card-icon">
              <i className={`fas ${q.icon}`}></i>
            </div>
            <h4 className="quote-card-role">{q.role}</h4>
            <p className="quote-card-text">{q.text}</p>
          </div>
        ))}
      </div>
      <div className="quotes-cards-nav">
        {quotes.map((_, i) => (
          <button
            key={i}
            className={`qc-dot ${i === start % quotes.length ? 'active' : ''}`}
            onClick={() => setStart(i)}
          />
        ))}
      </div>
    </section>
  )
}
