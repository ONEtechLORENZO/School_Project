import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// Searchable index of the whole site: pages, tabs and their keywords.
const searchIndex = [
  { label: 'Home', path: '/', keywords: 'home principale montini istituto' },
  { label: 'Iscrizioni al Montini', path: '/iscrizioni', keywords: 'iscrizione iscriversi ingresso immatricolazione primo anno domanda' },
  { label: 'Contributi economici', path: '/contributi-economici', keywords: 'contributi tasse rette quota famiglie pagamento economico' },
  { label: 'Regolamento istituto', path: '/regolamento', keywords: 'regolamento regole norme patto corresponsabilità disciplina' },
  { label: 'Pagamenti, IBAN e info bancarie', path: '/pagamenti', keywords: 'pagamenti iban banca bonifico' },
  { label: 'Contattaci', path: '/contattaci', keywords: 'contatti contattaci telefono email indirizzo segreteria' },
  { label: 'Colloqui con i genitori', path: '/colloqui-con-i-genitori', keywords: 'colloqui genitori incontri ricevimento docenti' },
  { label: 'Calendario & Notizie', path: '/calendario', keywords: 'calendario eventi notizie prossimi appuntamenti' },
  { label: 'Montiniadi 2026', path: '/montiniadi-2026', keywords: 'montiniadi olimpiadi sport 2026 gara' },
  { label: 'Centro Culturale - 50 Anni di Montini', path: '/centro-culturale-50-anni', keywords: 'centro culturale 50 anni don carlo calori eventi' },
  { label: 'Documentazione obbligatoria', path: '/documentazione-obbligatoria', keywords: 'documentazione obbligatoria trasparenza organigramma documenti' },
  { label: 'DL 73/2021 e sostegni bis', path: '/dl-73-2021-e-sostegni-bis', keywords: 'dl 73 2021 sostegni bis decreto trasparenza cooperativa milano 15' },
  { label: 'Contributi pubblici', path: '/contributi-pubblici', keywords: 'contributi pubblici legge 124 trasparenza sovvenzioni' },
  { label: 'Bandi Europei', path: '/bandi-europei', keywords: 'bandi europei fondi progetti europa' },
  { label: 'Cooperativa Milano 15', path: '/cooperativa-milano-15', keywords: 'cooperativa milano 15 soci' },
  { label: 'Visura cooperativa', path: '/visura-cooperativa', keywords: 'visura cooperativa documento camerale' },
  { label: 'IBAN e pagamenti', path: '/iban-e-pagamenti', keywords: 'iban pagamenti banca cooperativa' },
  { label: 'Regolamento soci e cooperativa', path: '/regolamento-cooperativa', keywords: 'regolamento soci cooperativa statuto' },
  { label: 'Chi siamo', path: '/chi-siamo', keywords: 'chi siamo scuola cattolica storia identità' },
  { label: 'Il Montini ieri e oggi', path: '/il-montini-ieri-e-oggi', keywords: 'montini ieri oggi storia fondazione' },
  { label: 'Intervista a Don Paolo Alliata', path: '/intervista-don-paolo-alliata', keywords: 'intervista don paolo alliata rettore' },
  { label: 'Le parole del rettore', path: '/le-parole-del-rettore', keywords: 'parole rettore respirare in dio francesco laudi' },
  { label: 'Centro culturale don Carlo Calori', path: '/centro-culturale-don-carlo-calori', keywords: 'centro culturale don carlo calori fondatore biografia' },
  { label: 'I docenti', path: '/docenti', keywords: 'docenti insegnanti professori corpo docente' },
  { label: 'Liceo Classico', path: '/liceo-classico-montini', keywords: 'liceo classico latino greco studiare per capire' },
  { label: 'Perché il Classico Montini', path: '/perche-il-classico-montini', keywords: 'perché classico montini piano offerta formativa' },
  { label: 'Liceo classico nuovi linguaggi', path: '/liceo-classico-nuovi-linguaggi', keywords: 'nuovi linguaggi media comunicazione dal mito ai media' },
  { label: 'Viaggi Studio – Classico', path: '/viaggi-studio-classico', keywords: 'viaggi studio classico sicilia dublino cammino dante teatro' },
  { label: 'Linguistico economico giuridico', path: '/linguistico-economico-giuridico', keywords: 'linguistico economico giuridico lingue diritto economia' },
  { label: 'Perché il Linguistico economico giuridico', path: '/perche-il-linguistico', keywords: 'perché linguistico economico giuridico potenziamento delf dele' },
  { label: 'Viaggio Studio – Linguistico', path: '/viaggi-studio-linguistico', keywords: 'viaggi studio linguistico antibes dublino assisi' },
  { label: 'Cambridge Exam Center', path: '/cambridge-exam-center', keywords: 'cambridge exam center certificazioni inglese first c1 esame' },
  { label: 'Materiali scolastici', path: '/materiali-scolastici', keywords: 'materiali scolastici libri di testo' },
  { label: 'Certificazioni e sperimentazioni', path: '/certificazioni-e-sperimentazioni', keywords: 'certificazioni sperimentazioni eccellenza' },
  { label: 'Certificazioni Liceo Classico', path: '/certificazioni-linguistiche-classico', keywords: 'certificazioni classico first latino cambridge' },
  { label: 'Certificazioni Liceo Linguistico', path: '/certificazioni-linguistiche-linguistico', keywords: 'certificazioni linguistico first delf dele' },
  { label: 'Certificazioni lingua latina', path: '/certificazioni-lingua-latina', keywords: 'certificazioni lingua latina cll cusl latino' },
  { label: 'Eccellenza e sperimentazioni', path: '/eccellenza-e-sperimentazioni', keywords: 'eccellenza sperimentazioni hackathon imun olimpiadi matematica public speaking teatro' },
  { label: 'Formazione scuola/lavoro (PCTO)', path: '/formazione-scuola-lavoro', keywords: 'formazione scuola lavoro pcto orientamento stage' },
  { label: 'Progetto CONI/Miur', path: '/progetto-coni-miur', keywords: 'coni miur atleti sport studenti-atleti' },
  { label: 'Le nostre iniziative', path: '/le-nostre-iniziative', keywords: 'iniziative volontariato esercizi spirituali esperienze concorsi' },
  { label: 'Supporto agli studenti', path: '/supporto-agli-studenti', keywords: 'supporto studenti sportello aiuto sostegno' },
  { label: "L'estate del Montini", path: '/l-estate-del-montini', keywords: 'estate montini cracovia assisi bogliasco volontariato' },
  { label: '5×1000 al Montini', path: '/5x1000', keywords: '5x1000 5 per mille donazione irpef codice fiscale' },
]

export default function SearchWidget() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const q = query.trim().toLowerCase()
  const results = q
    ? searchIndex
        .map((item) => {
          const label = item.label.toLowerCase()
          const hay = label + ' ' + item.keywords.toLowerCase()
          let score = -1
          if (label.startsWith(q)) score = 3
          else if (label.includes(q)) score = 2
          else if (hay.includes(q)) score = 1
          return { item, score }
        })
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map((r) => r.item)
    : []

  const go = (path) => {
    setOpen(false)
    setQuery('')
    navigate(path)
  }

  return (
    <>
      {/* Floating search button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Cerca"
        className="fab-search"
        style={{
          position: 'fixed',
          bottom: '140px',
          right: '28px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: '#34b8fe',
          color: '#001839',
          border: 'none',
          fontSize: '16px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          zIndex: 1000,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="fas fa-search"></i>
      </button>

      {/* Search overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,24,57,0.55)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '12vh'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(90vw, 640px)',
              backgroundColor: 'white',
              borderRadius: '14px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '18px 22px', borderBottom: '1px solid #eee' }}>
              <i className="fas fa-search" style={{ color: '#0078bd', fontSize: '18px' }}></i>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && results[0]) go(results[0].path) }}
                placeholder="Cerca pagine, sezioni, argomenti…"
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '18px', color: '#001839', background: 'transparent' }}
              />
              <button onClick={() => setOpen(false)} aria-label="Chiudi" style={{ border: 'none', background: 'transparent', fontSize: '22px', color: '#999', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
              {q && results.length === 0 && (
                <p style={{ padding: '24px', color: '#888', margin: 0, fontSize: '15px' }}>Nessun risultato per “{query}”.</p>
              )}
              {!q && (
                <p style={{ padding: '24px', color: '#888', margin: 0, fontSize: '15px' }}>Inizia a digitare per cercare in tutto il sito…</p>
              )}
              {results.map((item) => (
                <button
                  key={item.path}
                  onClick={() => go(item.path)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    width: '100%',
                    padding: '14px 22px',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #f2f2f2',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '15px',
                    color: '#001839'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f9ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <i className="fas fa-arrow-right" style={{ color: '#34b8fe', fontSize: '13px' }}></i>
                  <span style={{ fontWeight: 600 }}>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
