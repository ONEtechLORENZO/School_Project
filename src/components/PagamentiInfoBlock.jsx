import { Link } from 'react-router-dom'

export default function PagamentiInfoBlock() {
  return (
    <div className="pagamenti-info-block">
      <div className="pagamenti-info-container">
        <div className="pagamenti-info-header">
          <div>
            <p className="pagamenti-info-label">INFO BANCARIE</p>
            <h2 className="pagamenti-info-title">IBAN e pagamenti</h2>
          </div>
          <Link to="/contattaci" className="pagamenti-info-button">
            Contattaci <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="pagamenti-info-content">
          <p>
            Di seguito Vi segnaliamo le istruzioni con le quali dovranno essere effettuati tutti i <strong>pagamenti intestati alla COOPERATIVA MILANO 15</strong>, per evitare errori o disguidi:
          </p>

          <p>
            La modalità preferibile è <strong>addebito bancario</strong>, noto come SDD. La domiciliazione bancaria garantisce puntualità e automazione. È <strong>riservata alle rate di contribuzione</strong>. Al momento della compilazione del format dell'iscrizione, Vi richiediamo di indicare il nominativo dell'intestatario del conto bancario, sul quale si dovrà appoggiare l'addebito diretto e le coordinate bancarie (IBAN).
          </p>

          <p>
            La seconda modalità preferibile è il <strong>bonifico bancario</strong> sempre intestato alla Cooperativa Milano 15 con la corretta specifica della causale, che è fondamentale per identificare il pagamento.
          </p>

          <p className="pagamenti-info-highlight">
            Vi riportiamo le coordinate bancarie della Cooperativa Milano 15 : <strong>BANCA INTESA SAN PAOLO : IBAN IT45D0306909606100000193456</strong>.
          </p>

          <p>
            Con questa modalità si può effettuare il pagamento della <strong>tassa di iscrizione</strong> a inizio anno e di <strong>tutte le iniziative</strong> didattiche ed educative proposte durante l'anno scolastico.
          </p>

          <p>
            Per altre modalità di pagamento Vi preghiamo di contattare direttamente la segreteria.
          </p>
        </div>
      </div>
    </div>
  )
}
