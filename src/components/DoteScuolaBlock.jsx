export default function DoteScuolaBlock() {
  return (
    <div className="dote-scuola-block">
      <div className="dote-scuola-left">
        <img src="/Dote-scuola.png" alt="Dote Scuola" className="dote-scuola-image" />
        <div className="dote-scuola-left-overlay">
          <h2 className="dote-scuola-left-title">Dote scuola</h2>
          <div className="dote-scuola-left-content">
            <p>Tutte le famiglie degli alunni in sede di iscrizione devono valutare i propri requisiti per l'accesso alla dote scuola della regione Lombardia.</p>
            <p>Questa è un contributo della regione per la frequenza alle scuole paritarie che la regione mette a disposizione di tutti i nuclei familiari con un (oggi) Isee inferiore ai 40.000 euro.</p>
          </div>
        </div>
      </div>

      <div className="dote-scuola-right">
        <div className="dote-scuola-item">
          <div className="dote-scuola-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <p className="dote-scuola-text">Tale contributo va richiesto in una finestra temporale molto ristretta verso la fine dell'anno solare e, se assegnato, versato direttamente alla scuola dalla regione a fronte della avvenuta iscrizione e frequenza dell'alunno.</p>
        </div>

        <div className="dote-scuola-item">
          <div className="dote-scuola-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
              <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"></path>
            </svg>
          </div>
          <p className="dote-scuola-text">A tal fine si richiede alle famiglie con il modulo di iscrizione di: verificare i propri requisiti (Isee e Spid attivo e funzionante) che vi verranno richiesti in sede di iscrizione dichiarare la disponibilità ad effettuare la richiesta quando la finestra per la stessa viene aperta dalla Regione in particolare se le promesse sono al di sotto del contributo standard.</p>
        </div>

        <div className="dote-scuola-item">
          <div className="dote-scuola-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <circle cx="9" cy="10" r="1"></circle>
              <circle cx="12" cy="10" r="1"></circle>
              <circle cx="15" cy="10" r="1"></circle>
            </svg>
          </div>
          <p className="dote-scuola-text">Nel periodo di apertura delle richieste (tipicamente tra novembre e dicembre) la scuola si impegna a: contattare tutte le famiglie che hanno dato la disponibilità e quelles che sulla base delle promesse potrebbero essere nella posizione di richiederla apire uno sportello di assistenza per «abilitarsi alla richiesta», owero verificando il possesso del requisito Isee e il possesso di uno spid per accesso al portale per la richiesta supportare le famiglie nella corretta interazione con il portale al fine di completare le richieste in modo corretto e nei tempi richiesti</p>
        </div>

        <div className="dote-scuola-item">
          <div className="dote-scuola-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div>
            <p className="dote-scuola-text">Sarà inoltre necessario indicare in quante rate si intende erogare e con che mezzo di pagamento. Aderire ad una delle formule proposte (1-2 o 3 rate con RID) aiuterà la nostra segreteria nel proprio lavoro.</p>
            <p className="dote-scuola-text">Formule diverse di pagamento sono altresì accettate (carte di credito o bonifici) così come schemi di dilazione dei pagamenti più frequenti, ma sono da concordare con la segreteria amministrativa.</p>
          </div>
        </div>

        <p className="dote-scuola-footer">Responsabile della assistenza è Roberto Verdino raggiungibile ai contatti della scuola</p>
      </div>
    </div>
  )
}
