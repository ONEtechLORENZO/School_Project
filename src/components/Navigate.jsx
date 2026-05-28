const cards = [
  { label: 'Campus Student Life',      bg: 'linear-gradient(135deg,#6a7a5a,#8a9a6a)' },
  { label: 'Arts & Cultural Program',  bg: 'linear-gradient(135deg,#8a6a5a,#aa8a7a)' },
  { label: 'Recreations & Wellness',   bg: 'linear-gradient(135deg,#7a8a6a,#9aaa8a)' },
  { label: 'Sports & Fitness',         bg: 'linear-gradient(135deg,#5a8a6a,#7aaa8a)' },
]

export default function Navigate() {
  return (
    <section className="navigate">
      <div className="navigate-left">
        <div className="book-icon"><i className="fas fa-book-open"></i></div>
        <h2>Navigate</h2>
        <p>
          Far far away, behind the word mountains, far from the Consonantia,
          there live the blind texts. Separated they marks grove right at the
          coast of the Semantics
        </p>
        <div className="arrow-area">
          <svg width="160" height="110" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15 C30 15, 50 90, 130 95" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M117 84 L130 95 L118 102" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="view-all-pill">View All Program</div>
        </div>
      </div>

      <div className="nav-grid">
        {cards.map((c) => (
          <div className="nav-card" key={c.label}>
            <div className="nav-card-bg img-placeholder" style={{ background: c.bg }}></div>
            <div className="nav-card-overlay">
              {c.label}
              <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
