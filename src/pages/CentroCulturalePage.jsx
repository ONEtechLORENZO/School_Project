import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function CentroCulturalePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* HEADER SECTION */}
      <section className="intervista-container">
        <div className="intervista-image" style={{ background: 'url(/don%20Carlo%20Calori.png) center / cover no-repeat' }}>
          {/* Don Carlo Calori image */}
        </div>
        <div className="intervista-content">
          <p className="intervista-eyebrow">Centro culturale</p>
          <h1 className="intervista-name">Don Carlo Calori</h1>
          <p className="intervista-subtitle">Sacerdote, educatore e fondatore dell'Istituto G. B. Montini</p>

          <p className="intervista-description">
            Carlo Calori è nato a Milano l'8 giugno 1932. Ha svolto studi classici conseguendo il diploma di maturità presso il Liceo Classico "Cesare Beccaria" e ha completato la formazione teologica presso il Seminario Arcivescovile di Milano. Ordinato sacerdote il 26 giugno 1955 da monsignor Giovanni Battista Montini (futuro Papa Paolo VI), ha proseguito i suoi studi ottenendo diverse qualifiche: abilitazione all'insegnamento della Religione Cattolica, diploma in giornalismo, laurea in Giornalismo e Scienze della Comunicazione, oltre a corsi di psico-pedagogia, cultura missionaria e soccorso sanitario.
          </p>
        </div>
      </section>

      {/* BIOGRAPHY + CENTRO SECTIONS */}
      <section className="intervista-qa">
        <div className="qa-block" style={{ background: 'linear-gradient(rgba(52,184,254,0.5), rgba(52,184,254,0.5)), url(/School.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="qa-icon">
            <i className="fas fa-church"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Il servizio pastorale e l'insegnamento</h3>
            <p className="qa-answer">
              Ha prestato servizio pastorale in varie parrocchie di Milano, ricoprendo anche incarichi di vicariato e parrocchia. È stato attivo nell'Azione Cattolica come consulente ecclesiastico e collaboratore di associazioni giovanili.
            </p>
            <p className="qa-answer">
              Come docente, ha insegnato Religione Cattolica e Lingua e Letteratura Italiana in numerose scuole milanesi, dal 1956 in poi, partecipando anche a consigli d'istituto e consigli scolastici distrettuali. Ha svolto attività di formazione e insegnamento in ambito teologico e catechetico per l'abilitazione degli insegnanti.
            </p>
          </div>
        </div>

        <div className="qa-block qa-block-qualita-navy">
          <div className="qa-icon">
            <i className="fas fa-palette"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Le iniziative culturali e le fondazioni</h3>
            <p className="qa-answer">
              Calori ha promosso e organizzato molte iniziative culturali: mostre d'arte, concorsi musicali e letterari, spettacoli teatrali, conferenze e dibattiti.
            </p>
            <p className="qa-answer">
              Nel 1961, insieme alla professoressa Rina Bassi, ha fondato il Rifugio Alpino a Premia e successivamente la Comunità di Gesù Divin Maestro e l'Associazione di Volontariato "Presenza Educativa". Nel 1976 ha fondato l'Istituto Superiore Milanese di Educazione e Cultura Cattolica (ISMECC), seguito dalla creazione del Ginnasio-Liceo Classico e del Liceo Linguistico "G. B. Montini", scuole paritarie legalmente riconosciute. È stato Rettore di queste istituzioni fino al 2005, quando è diventato Rettore Emerito.
            </p>
          </div>
        </div>

        <div className="qa-block qa-block-family" style={{ background: 'linear-gradient(rgba(52,184,254,0.5), rgba(52,184,254,0.5)), url(/Family.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="qa-icon">
            <i className="fas fa-award"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Accademie, giornalismo e gli ultimi anni</h3>
            <p className="qa-answer">
              È stato membro di numerose accademie culturali italiane e internazionali, come l'Accademia Latinitatae Excolendae, l'Accademia Tiberina, l'Accademia dei 500, e ha fatto parte di istituti e associazioni culturali negli Stati Uniti, in Svizzera e altrove.
            </p>
            <p className="qa-answer">
              Dal 1971 era iscritto all'Albo Professionale dei Giornalisti come pubblicista e nel 1993 è stato accolto nell'Ordine Nazionale Autori e Scrittori.
            </p>
            <p className="qa-answer">
              Carlo Calori è mancato il 30 giugno 2006 a Premia, frazione Chioso, dove è sepolto.
            </p>
          </div>
        </div>

        <div className="qa-block qa-block-navy qa-block-sacerdote">
          <div className="qa-icon">
            <i className="fas fa-comments"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Il Centro Culturale Don Carlo Calori oggi</h3>
            <p className="qa-answer">
              Il Centro Culturale Don Carlo Calori, in dialogo costante con l'Istituto Montini, rappresenta da anni un punto di riferimento culturale vivo e dinamico nel panorama educativo e sociale di Milano.
            </p>
            <p className="qa-answer">
              Non si tratta solo di un luogo, ma di uno spazio di incontro, confronto e crescita, capace di mettere in relazione studenti, famiglie, docenti e realtà del territorio. Attraverso conferenze, incontri con testimoni, percorsi di approfondimento culturale e momenti di dialogo aperto, il Centro promuove una cultura attenta alla persona, al senso critico e alle grandi domande del presente.
            </p>
          </div>
        </div>

        <div className="qa-block qa-block-futuro" style={{ background: 'linear-gradient(rgba(52,184,254,0.5), rgba(52,184,254,0.5)), url(/Guardando%20al%20futuro.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="qa-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Uno sguardo al futuro</h3>
            <p className="qa-answer">
              Il prossimo anno scolastico si annuncia ricco di grandi iniziative: progetti innovativi, ospiti di rilievo, nuove collaborazioni e occasioni stimolanti per allargare lo sguardo e accendere la curiosità. Un programma pensato per coinvolgere, provocare e accompagnare i ragazzi nel loro percorso di crescita, dentro e fuori l'aula.
            </p>
            <p className="qa-answer">
              Il Centro Culturale Don Carlo Calori continua così la sua missione: essere un motore culturale sul territorio milanese e un laboratorio di idee, dove la scuola diventa luogo vivo di esperienza, dialogo e futuro.
            </p>
          </div>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
