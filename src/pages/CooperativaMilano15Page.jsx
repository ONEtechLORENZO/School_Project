import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import CinqueMilleBlock from '../components/CinqueMilleBlock'
import ContributiBlock from '../components/ContributiBlock'

export default function CooperativaMilano15Page() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.35) 100%), url(/Cooperativa%20Milano%2015.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content" style={{ maxWidth: '900px' }}>
          <p className="hero-eyebrow">Istituto G.B. Montini</p>
          <h1 style={{ fontSize: '52px' }}>
            <span style={{ backgroundColor: '#001839', color: 'white', padding: '12px 24px', display: 'inline-block', marginRight: '8px' }}>Cooperativa</span> Milano 15
          </h1>
        </div>
      </section>

      {/* Chi siamo Section - Dark Blue */}
      <section style={{ backgroundColor: '#001839', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Chi siamo?
          </h2>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            La Cooperativa, fondata il 5 novembre 1976, ha lo scopo di perseguire l'interesse generale della comunità alla promozione umana e all'integrazione sociale attraverso la gestione di servizi educativi.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '32px' }}>
            Per il raggiungimento del proprio scopo sociale ha la possibilità di svolgere le particolari le seguenti attività:
          </p>

          <ul style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '32px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '16px' }}>la promozione, l'organizzazione e la realizzazione di attività culturali di tipo umanistico, artistico, scientifico e ricreativo;</li>
            <li style={{ marginBottom: '16px' }}>la gestione di attività editoriali, librerie, pubblicitiche e relative ad articoli annessi, fatte salve in ogni caso le limitazioni di legge;</li>
            <li style={{ marginBottom: '16px' }}>la produzione, la gestione e la commercializzazione di opere discografiche e di registrazioni audio-visive in genere;</li>
            <li style={{ marginBottom: '16px' }}>la promozione, l'organizzazione e la gestione di strutture scolastiche, culturali, formative ed educative in genere;</li>
            <li style={{ marginBottom: '16px' }}>la promozione e l'esecuzione di indagini, studi e ricerche, specie psico-pedagogiche e Socio-economiche.</li>
          </ul>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            Inoltre, la Cooperativa potrà gestire – in modo del tutto sussidiario e finalizzato ad agevolare il proprio finanziamento – attività commerciali diverse, nei confronti dei propri Soci. La Società potrà accettare anche donazioni, lasciti, eredità e contributi di ogni genere nonché accettare finanziamenti dai propri Soci, nei limiti della legge e dei regolamenti in materia. La Società potrà inoltre compiere tutte quelle operazioni di carattere immobiliare e mobiliare che siano opportune, utili o necessarie per il raggiungimento del proprio scopo sociale, fatta espressa esclusione della raccolta di risparmio fra il pubblico.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            Fondata la Cooperativa Milano 15, composta di soci appartenenti al più disparati ceti sociali, hanno preso via le varie strutture, che oggi costituiscono il complesso delle attività scolastico-educativo-culturali gestite dalla Cooperativa stessa.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            La prima struttura realizzata fu quella dell' Istituto Superiore Milanese di Educazione e Cultura Cattolica, che iniziò a funzionare durante l'anno accademico 1976-77 e venne riconosciuta dall'Assessorato all'Istruzione della Regione Lombardia con deliberazione della giunta regionale in data 2 aprile 1980.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white', marginBottom: '24px' }}>
            Il secondo passo compiuto dalla Cooperativa, per realizzare le finalità e gli scopi che ci si era prefissi, fu quello di dare vita al Liceo-ginnasio "G. B. Montini", la cui attività iniziò a partire dall'anno scolastico 1977-78, e del Liceo Linguistico "G.B. Montini", nato con l'anno scolastico 1987-88, entrambe scuole paritarie dall'anno scolastico 2001/02. Caratteristica tipica dei due Licei fu ed è quella di offrire agli studenti una lunga serie di sperimentazioni didattiche di cultura integrativa, avvalendosi dell'attività didattica dei docenti dell'istituto superiore. Vi si accede mediante il versamento di una tassa d'iscrizione modicamente e accessibile per ogni tasca. È lasciato poi alla libera iniziativa delle singole famiglie di definire l'entità di un contributo gestionale, da versarsi a proprio piacimento e con attenzione alle reali possibilità economiche di ogni gruppo familiare.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'white' }}>
            La Cooperativa Milano 15 ha realizzato e gestisce – ed è il terzo passo – il Centro culturale ISMECC, voluto e attuato come servizio alla comunità e finalizzato a fornire una forte sensibilizzazione culturale e un'educ azione permanente fra i vari strati di popolazione, di qualsiasi età e condizione.
          </p>
        </div>
      </section>

      {/* Documenti Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 60px 0', lineHeight: 1.2 }}>
            Documenti
          </h2>

          <a
            href="https://drive.google.com/file/d/1-JHGkkUbByX9BS6XZsrEmz2KXJy1vd8X/view"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#34b8fe',
              color: '#001839',
              padding: '14px 36px',
              borderRadius: '24px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '15px',
              cursor: 'pointer'
            }}
          >
            📄 Scarica lo Statuto della Cooperativa Milano 15
          </a>
        </div>
      </section>

      {/* Visura Cooperativa Section - Sky Blue */}
      <section style={{ backgroundColor: '#34b8fe', padding: '80px' }}>
        <div style={{ maxWidth: '100%', paddingLeft: '60px', paddingRight: '60px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Visura Cooperativa
          </h2>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#001839', marginBottom: '40px' }}>
            La Cooperativa Milano 15, fondata nel 1976, promuove integrazione sociale e sviluppo culturale attraverso servizi educativi, scuole paritarie, attività artistiche ed editoriali.
          </p>

          <Link
            to="/visura-cooperativa"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#001839',
              color: 'white',
              padding: '14px 36px',
              borderRadius: '24px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '15px',
              cursor: 'pointer'
            }}
          >
            Scopri di più
            <span style={{ fontSize: '20px' }}>→</span>
          </Link>
        </div>
      </section>

      <CinqueMilleBlock />
      <ContributiBlock />

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
