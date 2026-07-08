import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

const docentiData = {
  'pelullo-andreina': {
    name: 'Pelullo Andreina',
    image: '/Pelullo.jpeg',
    bio: [
      'Quaerite quod quaeritis, sed cum inveneritis, quaerite. Questa parafrasi della sensibilità agostiniana ha sempre animato la mia ricerca, sin dai sedici anni, quando ho letto le prime pagine di Filosofia; così dopo la maturità classica, presso il Liceo Manzoni di Milano, ho conseguito la laurea magistrale in Filosofia (110/110 con lode), presso l\'Università degli Studi, di Milano, dedicando la tesi a una lettura spirituale del Commento di Tommaso d\'Aquino ai "Nomi divini" dello Pseudo Dionigi Areopagita.',
      'Con il dulce pondus di colei che è ancilla Theologiae, ho varcato la soglia della Facoltà Teologica dell\'Italia Settentrionale, preparando la tesi di Baccellierato, sull\'azione e la passione del morire in Karl Rahner e la tesi di Licenza in Teologia morale, sulla mediazione culturale dell\'agire in Paul Ricoeur (30/30 Summa cum laude probatus).',
      'L\'insegnamento al Montini riflette la dinamica del Contemplata aliis tradere tomista. Collaboro inoltre con l\'Università Cattolica del Sacro Cuore di Milano, come cultrice della materia per gli esami di Teologia, con la Comunità Giovanni XXIII per le attività pastorali e con la Comunità Paolo VI per la segreteria amministrativa. Sono responsabile del SAE di Milano (Segretariato Attività Ecumeniche a partire dal dialogo ebraico cristiano).',
      'La passione per lo studio della Parola di Dio e la preghiera sono il cuore e il respiro (nel senso ebraico dei termini) del mio cammino.',
    ]
  },
  'palmieri-irene': {
    name: 'Palmieri Irene',
    image: '/Biondi.png',
    bio: [
      'Sono laureata magistrale in Lingue e letterature moderne europee e americane alla Sapienza di Roma, ma il momento che ha davvero fatto la differenza nel mio percorso è stato l\'Erasmus a Madrid. Vivere immersa nella lingua e nella cultura spagnola mi ha insegnato qualcosa che nessun manuale può trasmettere: una lingua è viva, è relazione, è scoperta continua.',
      'Oggi sono docente abilitata all\'insegnamento dello spagnolo ed esaminatrice presso l\'Istituto Cervantes di Milano. In questo ruolo valuto le competenze linguistiche degli studenti per le certificazioni ufficiali, un\'esperienza che mi permette di conoscere da vicino le sfide e i progressi di chi studia questa lingua.',
      'Il mio approccio all\'insegnamento unisce solidità metodologica e attenzione alla dimensione comunicativa. Credo che imparare lo spagnolo significhi acquisire uno strumento concreto per il proprio futuro professionale e personale, ma anche aprirsi a una ricchezza culturale che va dalla letteratura latinoamericana al cinema contemporaneo, dalle tradizioni alle dinamiche sociali del mondo ispanofono.',
    ]
  },
  'palumbo-serena': {
    name: 'Palumbo Serena',
    image: '/Palumbo.jpg',
    bio: [
      'Nata a Santa Margherita Ligure, nel 2011 conseguo la maturità scientifica e scelgo di cambiare ambito di studi per dedicarmi alle lingue, verso le quali ho sempre nutrito grande interesse. Durante la Laurea Triennale in Lingue e Letterature Straniere per l\'Impresa e il Turismo trascorro cinque mesi in Erasmus a Toulouse: un\'esperienza che mi permette di comprendere quanto sia fondamentale conoscere la lingua e la cultura dei Paesi che studio.',
      'Dopo la laurea decido di trasferirmi per otto mesi a Dunstable, come au pair, con l\'obiettivo di migliorare il mio inglese. Questa esperienza si rivela preziosa non solo dal punto di vista linguistico, ma anche per una maggiore consapevolezza personale: capisco quanto l\'insegnamento e l\'essere guida per qualcuno diano senso alle mie giornate.',
      'Nel 2015 mi trasferisco a Bologna per conseguire la Laurea Magistrale in Lingue e Letterature Straniere con specializzazione in Didattica dell\'italiano come L2. Dopo un tirocinio presso una scuola di lingue a Bologna e un\'esperienza nell\'insegnamento dell\'italiano a stranieri a Sestri Levante, nel 2019 mi trasferisco a Milano, dove divento docente di francese in una scuola media.',
      'L\'anno successivo mi viene proposto di entrare a far parte del Montini come docente di inglese: un\'opportunità che considero uno dei doni più belli che la vita mi abbia fatto!',
    ]
  },
  'mussi-luca': {
    name: 'Mussi Luca',
    image: '/Mussi.jpg',
    bio: [
      'Sono docente di fisica e matematica dal 2012, ma prima ancora sono uno che si fa molte domande (e non solo sugli esercizi). Dopo la laurea in Astrofisica ho iniziato a lavorare nella consulenza finanziaria, salvo capire in fretta che preferivo le leggi dell\'universo — e soprattutto le persone che cercano di capirle. Da qui nasce il mio modo di insegnare: rigoroso nei contenuti ma umano e leggero nell\'approccio, perché dietro ogni difficoltà c\'è quasi sempre più paura che mancanza di capacità.',
      'Nel mio percorso hanno avuto un ruolo importante anche diverse esperienze di volontariato in Africa. Dal 2015 collaboro con l\'associazione UnAltroMondo, con cui ho svolto due periodi di insegnamento in Mali: esperienze che continuano a influenzare il mio modo di stare in classe e di concepire la scuola come spazio di relazione, oltre che di apprendimento.',
      'Nel 2016 ho fondato PerCorsi, un centro di supporto allo studio. L\'esperienza extra-scolastica mi ha insegnato quanto contino la fiducia, l\'ascolto e la personalizzazione del percorso educativo. In classe e fuori cerco di trasmettere questo messaggio, alternando serietà e ironia, formule e metafore, calcoli e buon senso.',
      'Accanto ai contenuti disciplinari, considero centrale lo sviluppo di competenze trasversali, in particolare l\'uso consapevole della tecnologia e degli strumenti digitali. Credo che la scuola abbia il compito non solo di insegnare cosa usare, ma soprattutto come e perché farlo: aiutare gli studenti a orientarsi tra strumenti sempre più potenti, mantenendo spirito critico, autonomia e responsabilità, è per me una delle sfide educative più importanti per le generazioni future.',
    ]
  },
  'mastropietro-gianluca': {
    name: 'Mastropietro Gianluca',
    image: '/Mastropietro.png',
    bio: [
      'Dopo la maturità scientifica conseguita nel 2014 presso il liceo V. Sereni di Luino (Va), frequenta la facoltà di Lettere Classiche dell\'Università Cattolica del Sacro Cuore, che lo porta alla laurea triennale nel 2018.',
      'Seguirà due anni dopo, presso lo stesso ateneo, la laurea magistrale in Scienze dell\'Antichità (tesi finale: "Filippesi 2, 6 – l\'esegesi dei Padri greci dal I al IV secolo").',
      'Dopo una breve esperienza nella scuola statale (Liceo G. Parini di Seregno), approda al Liceo Montini, presso il quale insegna ininterrottamente dal settembre 2021.',
      'Negli anni ha unito allo studio e all\'insegnamento l\'impegno in oratorio e in parrocchia.',
    ]
  },
  'marino-marco': {
    name: 'Marino Marco',
    image: '/Marino-768x768.jpg',
    bio: [
      'Sono docente di Scienze Motorie e dello Sport presso l\'Istituto G.B. Montini di Milano, dove opero dal 2019. Dal 2024 affianco a questo incarico l\'attività di educazione motoria nella scuola dell\'infanzia Don Orione, contribuendo allo sviluppo motorio dei bambini in età prescolare.',
      'Dopo il diploma presso il liceo scientifico tecnologico Righi-Falcone, ho conseguito la laurea triennale in Scienze Motorie e dello Sport presso l\'Università Cattolica del Sacro Cuore, completando poi il mio percorso accademico con la laurea magistrale in Scienze dell\'attività fisica per il benessere presso l\'Università degli Studi di Milano.',
      'In precedenza ho lavorato come docente di Scienze Motorie nella scuola secondaria di primo grado Madre Bucchi e ho svolto attività di istruttore in diversi centri sportivi e riabilitativi, occupandomi di ginnastica posturale, riabilitazione funzionale, allenamento motorio e protocolli personalizzati.',
      'A partire dall\'anno accademico 2026–2027 avvierò una collaborazione presso il corso magistrale Elementi di pediatria e metodologie per l\'attività motoria nell\'infanzia dell\'Università Cattolica di Milano.',
    ]
  },
  'gerra-nicoletta': {
    name: 'Gerra Nicoletta',
    image: '/Gerra-768x769.jpg',
    bio: [
      'Fin da quando ho memoria, uno dei primi libri che ho letto è stata una raccolta di miti classici: trascorrevo ore immersa nelle storie di Teseo e il Minotauro, Achille ed Ettore, Pandora e il suo vaso, Giasone e la nave Argo. Questa passione infantile mi ha condotta naturalmente prima al Liceo classico Berchet e, dopo il conseguimento della maturità, alla Facoltà di Lettere Classiche dell\'Università degli Studi di Milano, dove ho ottenuto la laurea magistrale cum laude con una tesi in Antropologia del mondo antico dal titolo Circe e Simeta: magia divina e magia umana.',
      'Nel 2022 ho conseguito altresì l\'abilitazione all\'insegnamento delle Discipline letterarie, latino e greco. Negli anni successivi alla laurea ho avuto modo di coniugare l\'amore per le letterature classiche con la dimensione espressiva, frequentando il Laboratorio di Drammaturgia antica, guidato dal maestro Christian Poggioni e curato dalla prof.ssa Matelli, presso l\'associazione Kerkìs – Teatro Antico in Scena dell\'Università Cattolica del Sacro Cuore di Milano.',
      'L\'esperienza in ambito educativo, maturata grazie all\'adesione al movimento scoutistico AGESCI, insieme all\'attività di volontariato — dal Cantiere della Solidarietà in Moldavia con Caritas Ambrosiana all\'accompagnamento a Lourdes di persone con difficoltà fisiche e fragilità psicologiche con l\'associazione OFTAL Milano — ha contribuito ad avvicinarmi al mondo della formazione giovanile. In questo percorso, l\'insegnamento si è rivelato la naturale sintesi tra la mia passione per il mondo classico e l\'interesse per la dimensione pedagogica ed educativa.',
      'In classe cerco di trasmettere agli studenti il valore formativo del latino, del greco e della lingua italiana, che considero non solo strumenti di studio, ma vere e proprie occasioni di crescita intellettuale e personale. Credo fermamente che lo studio delle lingue classiche offra ai ragazzi non solo la possibilità di affinare il rigore logico e la sensibilità linguistica, ma soprattutto la capacità di interpretare testi e realtà con maggiore consapevolezza, in modo che tali discipline non siano considerate come un mero esercizio meccanico, ma come esperienza viva, capace di interrogare il nostro tempo e di stimolare domande autentiche su sé stessi e sul mondo, in un dialogo continuo tra il mondo antico e il presente. Accanto all\'insegnamento delle materie, considero fondamentale il rapporto educativo con gli studenti e la collaborazione con le famiglie, nella convinzione che la scuola, e soprattutto il Montini, sia una comunità in cui si cresce insieme attraverso la cultura, l\'ascolto e la responsabilità condivisa: accompagnare i ragazzi nel loro percorso liceale significa per me aiutarli a costruire strumenti culturali solidi, ma anche a sviluppare curiosità, responsabilità e fiducia nelle proprie capacità, grazie alla costruzione di un ambiente sereno e dialogante, in cui ciascuno possa sentirsi supportato nel proprio percorso di crescita.',
    ]
  },
  'd-ambrosio-salvatore': {
    name: 'D\'Ambrosio Salvatore',
    image: '/Dambrosio-768x768.jpg',
    bio: [
      'Nato a Milano nel 1967, insegna Storia e Filosofia al Liceo Montini dal 1999, e dal 2026 ricopre l\'incarico di Coordinatore Didattico dell\'Istituto (lo è stato dal 2021 al 2024 del Liceo Scientifico Paritario M.A. Cocchetti).',
      'In alcune occasioni è facilmente riconoscibile: in classe è tra i pochi (e invisi) insegnanti che "spiegano" anche l\'ultima ora dell\'ultimo giorno di scuola, illudendosi di non farlo per pedanteria ma perché ama trasmettere quello che pensa di aver capito di importante. In ufficio è quasi sempre accompagnato da qualche musica di sottofondo, dai violini irlandesi alle percussioni del Mali, perché davvero non saprebbe vivere senza musica. Nelle strade di Milano transita sempre rigorosamente in bicicletta o in cammino, dato che non sopporta la vita sedentaria.',
      'Ma nonostante a volte gli riesca difficile stabilire se lo entusiasmi di più la filosofia, la musica, la bicicletta o la poesia, quello che davvero lo appassiona, e nel quale sguazza come un pesce rosso nell\'acquario, è comprendere qualcosa e comunicarlo nel modo più chiaro possibile. Della sua difficoltà a costringersi in una sola casella reca indubbiamente traccia il suo percorso formativo e professionale: dopo essersi laureato in Filosofia nel 1994, ha conseguito nel 1995 il diploma triennale in Scienze Religiose, nel 2001 la laurea in Scienze dell\'educazione e nel 2003 ha concluso il biennio della Scuola Superiore per l\'Insegnamento Secondario (SSIS).',
      'Prima e parallelamente alla sua attività di insegnante e ai suoi studi, ha lavorato e lavora tuttora nel Terzo Settore, prima alla Cooperativa Lo Scrigno, di cui è socio fondatore, poi alla Cooperativa San Martino, confluita nella Cooperativa Farsi Prossimo dal 2011, della quale è stato consigliere di amministrazione dal 2011 al 2026. Da diversi anni svolge anche attività di insegnamento rivolte agli adulti, collaborando per la Dragan University Golden Age di Milano, l\'UTL di Gorgonzola (MI), l\'Associazione C. Maggi di Lesmo (MB), l\'UTE di Casatenovo (LC) e il Centro Culturale Carlo Calori, occupandosi prevalentemente di storia e di filosofia politica e morale. È sposato dal 1995 con Liliana ed è padre di Cosimo, Pietro e Carlo.',
    ]
  },
  'cimbro-ilves': {
    name: 'Cimbro Ilves',
    image: '/Cimbro-682x1024.jpg',
    bio: [
      'Laureato in Giurisprudenza all\'Università Statale di Milano e abilitato alla professione forense presso l\'Ordine degli Avvocati di Milano, ho maturato una solida esperienza negli uffici legali di istituti bancari e compagnie assicurative, occupandomi di attività di consulenza, gestione del contenzioso e analisi normativa.',
      'Questo percorso mi ha permesso di sviluppare un approccio rigoroso, analitico e orientato alla soluzione dei problemi, oltre a una conoscenza operativa delle dinamiche giuridiche nel settore finanziario e assicurativo.',
      'Dopo diversi anni in ambito aziendale, ho scelto di dedicarmi alla docenza nella scuola superiore, con l\'obiettivo di mettere a disposizione dei ragazzi competenze tecniche, metodo e senso critico.',
      'In classe porto un\'impostazione chiara del diritto, pratica e collegata alla realtà, cercando di trasformarlo in uno strumento di comprensione del mondo e di crescita personale.',
    ]
  },
  'caccia-daniela': {
    name: 'Caccia Daniela',
    image: '/Caccia.jpg',
    bio: [
      'Dopo aver conseguito il diploma di maturità classica presso il Liceo Classico A. Volta di Como, si è laureata con lode in Filosofia presso l\'Università Cattolica del Sacro Cuore di Milano.',
      'Dal 1991 sino al 2005 ha affiancato all\'attività di insegnante di Storia e filosofia quella concertistica in qualità di mezzosoprano-contralto nel Civico Coro da Camera di Milano, Civica Scuola di Musica, specializzato in musica da camera antica e contemporanea e diretto dal maestro Mino Bordignon.',
      'In qualità di responsabile del Centro Culturale don Carlo Calori, ha tenuto seminari in ambito storico-filosofico e conferenze e lezioni-concerto in collaborazione con la Gioventù musicale di Bergamo, biblioteche, centri culturali e istituzioni corali: Civico coro da Camera, Un Coro per Milano, Coro Filarmonico di Valle Seriana, Cantores Mundi di Borgosesia.',
      'Dal 1989 è docente di Storia e Filosofia presso il Liceo Classico G. B. Montini (Milano) e dall\'anno accademico 2012-2013 sino all\'anno accademico 2002-2021 ha tenuto un seminario presso la Dragan University Golden Age (Milano) dal titolo Protagonisti del pensiero occidentale. Dalla stagione teatrale 2016-2017 sino al 2019-2020 ha collaborato con il Teatro Carcano alla stesura di percorsi didattici e di approfondimento per gli spettacoli destinati alle scuole medie superiori.',
    ]
  },
  'biondi-veronica': {
    name: 'Biondi Veronica',
    image: '/Biondi.png',
    bio: [
      'Conoscere le lingue significa aprirsi al mondo, alle sue meravigliose possibilità e al prossimo. Dopo la laurea magistrale in lingue e letterature straniere presso l\'Università degli Studi di Milano e un master in Management for Performing Arts presso SDA Bocconi, lavoro per diversi anni nel settore educational ma in azienda – nell\'ambito del marketing e della comunicazione.',
      'Qualche anno fa mi ritrovo a un bivio e scelgo di mettermi in gioco, abilitarmi all\'insegnamento della lingua inglese e francese, seguendo la strada che sentivo essere l\'unica giusta per me. Da quel momento sono rinata e ogni giorno entro in aula ripensando a una bellissima lezione di filosofia vissuta al liceo, da studentessa. Spiegando Eraclito il mio adorato professore ci disse che "nessun uomo entra mai due volte nello stesso fiume, perché il fiume non è mai lo stesso, ed egli non è lo stesso uomo". Noi docenti, e i nostri ragazzi, siamo il frutto degli sguardi che ci hanno saputo cogliere e accogliere, delle parole e delle esperienze vissute…questo per me significa insegnare.',
      'Quando non sono in classe mi dedico alla mia famiglia, a mio marito, alle mie figlie, e allo stare il più possibile a contatto con la natura e l\'arte.',
    ]
  },
  'beretta-elena': {
    name: 'Beretta Elena',
    image: '/Beretta-768x768.jpg',
    bio: [
      'Dopo il diploma in lingue straniere è rimasta lontana dall\'istituto Montini per soli quattro anni, il tempo necessario per conseguire una Laurea in Lingue e Letterature Straniere presso l\'Università Cattolica di Milano, un master in sceneggiatura televisiva e capire, dopo una breve esperienza a Roma sul set di Don Matteo, che la sua strada non era lì ma tra i banchi della scuola in cui aveva studiato.',
      'Dopo aver frequentato la scuola di specializzazione per ottenere l\'abilitazione all\'insegnamento, e aver fatto qualche esperienza come educatrice presso centro estivi e in alcune scuole medie come supporto al docente di sostegno, prende servizio presso l\'istituto Montini, nel quale insegna, prima al liceo linguistico e poi al liceo classico, dal 2003, con qualche breve sosta forzata (3) causa maternità.',
      'Da sempre alla ricerca di modalità innovative e coinvolgenti per l\'insegnamento della lingua inglese, unisce un\'impostazione metodologica tradizionale per strutturare in modo solido le conoscenze grammaticali e lessicali a modalità di trasmissione di contenuti attuali e accattivanti, tecniche di insegnamento innovative, utilizzo di supporti video, audio, giochi interattivi on line e off line di vario tipo per agganciare gli studenti e alleggerire la fatica insita nel percorso di apprendimento.',
      'Fortemente convinta dell\'importanza dell\'incontro con il parlante nativo per favorire una reale acquisizione della lingua viva, nel corso degli anni ha dato vita a progetti di vario tipo: scambi culturali, progetti Erasmus ed è stata una delle prime docenti a organizzare viaggi studio a Londra e soggiorni in famiglia a Dublino.',
    ]
  },
  'fabrizio-fassini': {
    name: 'Fabrizio Fassini',
    image: '/Fasso.jpg',
    bio: [
      'Nato fisicamente a Milano il 4 febbraio del 1986, nato culturalmente al liceo classico Beccaria dove si innamora in ordine di Omero, di Leopardi, di De Andrè e di Dante. Non li lascerà più, come testimoniano la tesi per la laurea triennale (Incanto e disincanto nella poesia per musica di Fabrizio De Andrè, 108/110) e quella per la specialistica in Lettere Moderne (l\'Ulisse di Omero in Pascoli, un eroe moderno, 110 e lode/110). Si discosterà dalla classicità solo costretto, per la tesi per l\'Abilitazione all\'insegnamento (99/100 nel 2015) che lo porterà ad ammirare lo Stupor mundi Federico II.',
      'Il suo parroco dice spesso che in oratorio "gli manca solo di dir Messa". Negli anni è stato ed è tuttora animatore, educatore, membro del Consiglio Pastorale e d\'Oratorio, allenatore, direttore sportivo, responsabile dell\'oratorio estivo e tutor dei catechisti. Dal 2009 al 2013 ha curato il doposcuola presso l\'Istituto Madre Bucchi, dove ha avuto la fortuna e l\'onore di incontrare Jacopo, un bambino speciale che con la sua semplicità e il suo affetto gli ha cambiato la vita.',
      'Dopo qualche supplenza qua e là ha lavorato dal 2013 al 2023 presso l\'Istituto Zaccaria e dal 2013 ad oggi stabilmente presso l\'Istituto Montini, di cui oggi è Preside Vicario, dove insegna Italiano, Latino, Storia e (qualche volta) Geografia. Nel frattempo ha collaborato con testate giornalistiche online per scrivere di uno dei suoi grandi amori, il Milan, e con case editrici religiose per la redazione di sussidi per giovani e per adolescenti. Ha pubblicato nel 2022 con TAU editrice il suo primo romanzo, Madre ho imparato l\'amore.',
      'Se la cava con l\'inglese, molto meno con la matematica. Ama la storia greca, detesta la Juve. Potrebbe parlare per ore di Ulisse, di politica e di ciclismo. Nonostante i primi, molti, capelli bianchi gioca ancora a calcio nella squadra del suo quartiere ma non andate a vederlo perché non lo riconoscereste. Non sa nuotare, ma prima o poi imparerà. Non sa sciare e non imparerà. È felicemente sposato con Irene e ha due meravigliosi bambini.',
    ]
  },
  'terry-costanzo': {
    name: 'Terry Costanzo',
    image: '/Costanzo-768x768.jpg',
    bio: [
      'Toscana di origine nata a Prato nel 1975, milanese di adozione dal 2002. Terry Costanzo, docente di Scienze con una formazione scientifica e un percorso professionale che unisce scuola, ricerca e ambito farmaceutico. Dopo la laurea in Chimica e Tecnologia Farmaceutica presso l\'Università di Firenze, ho maturato un\'esperienza significativa nel mondo delle sperimentazioni cliniche, lavorando come CRA e CRA Coordinator sia in aziende strutturate come Novartis Pharma sia come freelance in contesti internazionali complessi.',
      'Nel corso di questi anni ho seguito numerosi trial clinici di fase 3 e 4 in ambito pediatrico, cardiovascolare, dermatologico e osteoarticolare, coordinando studi multicentrici, gestendo farmaci sperimentali, partecipando a teleconference internazionali e occupandomi della progettazione di strumenti operativi specifici per gli studi. Un lavoro rigoroso, preciso e ad alta responsabilità, che mi ha insegnato il valore dell\'organizzazione, del lavoro in team e dell\'attenzione al dettaglio.',
      'Dal 2013 ho scelto di portare questa esperienza nel mondo della scuola, diventando insegnante di Scienze e Chimica nella scuola secondaria. Dal 2014 insegno stabilmente presso l\'Istituto Montini di Milano, dove affianco alla didattica tradizionale un approccio pratico, laboratoriale e attento allo sviluppo del pensiero critico degli studenti. Ho partecipato anche alle commissioni per gli esami preliminari di Stato per la materia Chimica, consolidando ulteriormente il mio ruolo professionale in ambito educativo.',
      'Credo molto nella formazione continua: ho conseguito l\'abilitazione professionale come farmacista, una certificazione Good Clinical Practice in lingua inglese a Berlino, il certificato EIPASS per le competenze informatiche e, più recentemente, una formazione specifica sul debate matematico, che utilizzo per stimolare il confronto e l\'argomentazione in classe. Accanto al lavoro, coltivo da anni un forte impegno nel sociale: sono presidente dell\'associazione "Amici per crescere", che dal 2006 sostiene ragazzi affidati ai servizi sociali dal Tribunale dei Minori. Un\'esperienza che considero parte integrante del mio percorso umano e professionale. In sintesi, mi definisco una persona curiosa, affidabile e appassionata, con una formazione scientifica solida e una naturale vocazione educativa, capace di muoversi con competenza sia nei contesti accademici sia in quelli applicativi e relazionali.',
    ]
  },
}

export default function DocentiDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const docente = docentiData[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!docente) {
    return (
      <>
        <Navbar />
        <section style={{ padding: '100px 80px', minHeight: '600px', backgroundColor: 'var(--navy)', color: 'white', textAlign: 'center' }}>
          <h1>Docente non trovato</h1>
          <button onClick={() => navigate('/docenti')} style={{ marginTop: '20px', padding: '12px 24px', backgroundColor: '#001839', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
            Torna alla lista docenti
          </button>
        </section>
        <Footer />
        <ScrollTop />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <section style={{ backgroundColor: 'var(--navy)', padding: '100px 80px', minHeight: '800px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Top Section: Image + Name */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px', marginBottom: '60px' }}>
            {/* Image */}
            <div
              style={{
                width: '220px',
                height: '220px',
                minWidth: '220px',
                borderRadius: '50%',
                backgroundImage: `url(${docente.image})`,
                backgroundSize: '110%',
                backgroundPosition: 'center',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              }}
            ></div>

            {/* Name */}
            <h1 style={{ fontSize: '72px', fontWeight: 900, color: 'white', margin: 0, lineHeight: 1.2, paddingTop: '60px' }}>
              {docente.name}
            </h1>
          </div>

          {/* Bio Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '100%' }}>
            {docente.bio.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: 0,
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <button
            onClick={() => navigate('/docenti')}
            style={{
              marginTop: '50px',
              padding: '12px 32px',
              backgroundColor: '#001839',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            ← Torna alla lista
          </button>
        </div>
      </section>
      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
