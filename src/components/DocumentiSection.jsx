export default function DocumentiSection() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Regolamento-Scolastico-Istituto-G.B.-Montini_DEF.pdf'
    link.download = 'Regolamento-Scolastico-Istituto-G.B.-Montini_DEF.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="documenti-section">
      <h2>Documenti</h2>
      <button className="documenti-button" onClick={handleDownload}>
        <i className="fas fa-file-pdf"></i>
        Regolamento D'Istituto
      </button>
    </section>
  )
}
