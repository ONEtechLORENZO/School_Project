const departments = [
  { icon: 'fa-chart-pie',      name: 'Economics' },
  { icon: 'fa-scale-balanced', name: 'Law' },
  { icon: 'fa-leaf',           name: 'Environment' },
  { icon: 'fa-city',           name: 'Architecture' },
]

export default function Departments() {
  return (
    <section className="departments">
      <span className="eyebrow">Departments</span>
      <h2>Popular Departments</h2>
      <p>
        Far far away, behind the word mountains, far from the Consonantia,
        there live the blind texts. Separated they marks grove right at the coast
      </p>
      <div className="dept-grid">
        {departments.map((d) => (
          <div className="dept-item" key={d.name}>
            <i className={`fas ${d.icon}`}></i>
            <h4>{d.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
