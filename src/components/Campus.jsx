const features = [
  { icon: 'fa-wifi',     title: 'Smart Hostel',    desc: 'Behind the word mountains, far from the Conso there live the blind texts' },
  { icon: 'fa-person',   title: 'Student Life',    desc: 'Behind the word mountains, far from the Conso there live the blind texts' },
  { icon: 'fa-palette',  title: 'Arts & Clubs',    desc: 'Behind the word mountains, far from the Conso there live the blind texts' },
  { icon: 'fa-dumbbell', title: 'Sports & Fitness', desc: 'Behind the word mountains, far from the Conso there live the blind texts' },
]

export default function Campus() {
  return (
    <section className="campus">
      <div className="campus-img-wrap">
        <div className="campus-img img-placeholder"></div>
        <div className="campus-arc">
          <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="110" r="108" stroke="#f2c4c4" strokeWidth="1.5" strokeDasharray="6 4" />
          </svg>
        </div>
      </div>

      <div className="campus-content">
        <span className="eyebrow">Campus</span>
        <h2>Campus is your Dream Lifestyle</h2>
        {features.map((f) => (
          <div className="campus-feat" key={f.title}>
            <div className="feat-icon"><i className={`fas ${f.icon}`}></i></div>
            <div className="feat-text">
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
