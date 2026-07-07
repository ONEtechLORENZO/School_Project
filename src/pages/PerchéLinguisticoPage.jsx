import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function PerchéLinguisticoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="linguistico" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 40px 0', lineHeight: 1.2 }}>
            Perché il Liceo Linguistico economico giuridico?
          </h1>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', maxWidth: '900px' }}>
            <p style={{ marginBottom: '12px' }}>
              Il Liceo Linguistico intende:
            </p>

            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Guidare gli studenti ad approfondire e sviluppare conoscenze, competenze e abilità per una solida preparazione volta all'accesso a tutte le facoltà universitarie.</li>
              <li>Maturare le competenze necessarie per acquisire la padronanza comunicativa di tre lingue straniere e per comprendere criticamente l'identità storica e culturale di tradizioni e civiltà diverse, integrata con la conoscenza delle origini classiche e cristiane della nostra cultura.</li>
            </ul>

            <p style={{ marginBottom: '24px' }}>
              Le singole discipline umanistiche, linguistiche e scientifiche saranno affrontate con rigore ed ampiezza di spettro, al fine di favorire l'integrale formazione umana dei soggetti d'educazione.
            </p>

            <p style={{ marginBottom: '12px' }}>
              Al termine del quinquennio lo studente avrà:
            </p>

            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Acquisito in due lingue moderne strutture, modalità e competenze comunicative corrispondenti al Livello B2 del Quadro Comune Europeo di Riferimento e in una terza lingua moderna strutture, modalità e competenze comunicative corrispondenti almeno al Livello B1 del Quadro Comune Europeo di Riferimento.</li>
              <li style={{ marginBottom: '12px' }}>Appreso le modalità comunicative in tre lingue moderne in vari contesti sociali e in situazioni professionali utilizzando diverse forme testuali.</li>
              <li style={{ marginBottom: '12px' }}>Saputo riconoscere in un'ottica comparativa gli elementi strutturali caratterizzanti le lingue studiate ed essere in grado di passare agevolmente da un sistema linguistico all'altro.</li>
              <li>Acquisito la conoscenza delle principali caratteristiche culturali dei paesi di cui si è studiata la lingua, attraverso lo studio e l'analisi di opere letterarie, estetiche, visive, musicali, cinematografiche, delle linee fondamentali della loro storia e delle loro tradizioni; tale conoscenza, intesa come atto di relazione e reciproco dono tra le culture, consente poi il confronto con la cultura degli altri popoli, anche avvalendosi delle occasioni di contatto e di scambio oltre che poter conoscere linguaggi specifici (scientifici, tecnici, logici).</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#001839', margin: '40px 0 20px 0' }}>
              Potenziamento economico giuridico
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Liceo Linguistico con Potenziamento Economico-Giuridico. Il nostro Liceo Linguistico non solo offre una solida preparazione nelle lingue straniere, indispensabile per orientarsi in un mondo sempre più globale, ma si arricchisce di un percorso innovativo e distintivo: il potenziamento economico-giuridico.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Grazie a tre ore settimanali curricolari di Diritto ed Economia per l'intero quinquennio, gli studenti acquisiscono competenze preziose per comprendere a fondo i meccanismi che regolano la società, le istituzioni, i mercati e le relazioni internazionali.
            </p>

            <p style={{ marginBottom: '12px' }}>
              Il progetto consente di:
            </p>

            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Integrare le lingue con le scienze giuridiche ed economiche, sviluppando un profilo di studente capace di muoversi in contesti multiculturali e istituzionali.</li>
              <li style={{ marginBottom: '12px' }}>Approfondire tematiche di cittadinanza attiva, educazione civica, diritto europeo e internazionale, sviluppando senso critico e consapevolezza sociale.</li>
              <li style={{ marginBottom: '12px' }}>Prepararsi a percorsi universitari in ambito linguistico, giuridico, economico, politico e delle relazioni internazionali.</li>
              <li>Collegare teoria e pratica, attraverso simulazioni, progetti interdisciplinari, partecipazione a concorsi e incontri con esperti del settore.</li>
            </ul>

            <p style={{ marginBottom: '24px' }}>
              Il Liceo Linguistico con potenziamento economico-giuridico si presenta dunque come una scelta moderna, completa e orientata al futuro, capace di formare cittadini e professionisti in grado di leggere il mondo nelle sue diverse lingue, regole e dinamiche economiche.
            </p>

            <p style={{ marginBottom: '12px' }}>
              Il potenziamento dell'offerta linguistica al Liceo Linguistico avviene attraverso le seguenti modalità:
            </p>

            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Dal primo anno del secondo biennio è previsto l'insegnamento in lingua straniera di alcuni moduli di una disciplina non linguistica (CLIL), compresa nell'area delle attività e degli insegnamenti obbligatori per tutti gli studenti o nell'area degli insegnamenti attivabili dalle istituzioni scolastiche nei limiti del contingente di organico ad esse assegnato, tenuto conto delle richieste degli studenti e delle loro famiglie.</li>
              <li style={{ marginBottom: '12px' }}>Dal secondo anno del secondo biennio è previsto inoltre l'insegnamento, in una diversa lingua straniera, di una disciplina non linguistica (CLIL), compresa nell'area delle attività e degli insegnamenti obbligatori per tutti gli studenti o nell'area degli insegnamenti attivabili dalle istituzioni scolastiche.</li>
              <li style={{ marginBottom: '12px' }}>Per l'attività didattica l'Istituto dispone di un laboratorio linguistico e di un laboratorio informatico. L'insegnamento delle lingue straniere porta anche all'acquisizione di una certificazione di competenza linguistica rilasciata da un Ente accreditato FIRST CERTIFICATE IN ENGLISH (quarto/quinto anno) – DELE ESCOLAR B2 (quarto/quinto anno) – B1 DELF Diplôme d'Études en Langue Française (quarto/quinto anno)</li>
              <li style={{ marginBottom: '12px' }}>Le unità didattiche affidate ai docenti madrelingua sono finalizzate al conseguimento, nel corso del quinquennio.</li>
              <li style={{ marginBottom: '12px' }}>Il First Certificate (quarto anno) di cui il Liceo Montini è sede d'esame.</li>
              <li style={{ marginBottom: '12px' }}>Il Diplôme d'Etude en Langue Française (B1 al quarto anno – B2 al quinto anno), rilasciato dal Centre Culturel Français;</li>
              <li>Il Diploma de Español como Lengua Extranjera (B1 al quarto anno – B2 al quinto anno), rilasciato dall'Instituto Cervantes.</li>
            </ul>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #e0e0e0' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#666', margin: 0 }}>
              Qui puoi scaricare il Piano dell'Offerta Formativa completo: <a href="https://docs.google.com/document/d/1GmMQM4AB1TjXbA06W6cauzvIMb_RQ3nB/edit?usp=sharing&ouid=104508161892343363028&rtpof=true&sd=true" target="_blank" rel="noreferrer" style={{ color: '#0078bd', textDecoration: 'none', fontWeight: 600, wordBreak: 'break-all' }}>https://docs.google.com/document/d/1GmMQM4AB1TjXbA06W6cauzvIMb_RQ3nB/edit</a>
            </p>
          </div>
        </div>
      </div>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
