import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

const estateData = {
  'cracovia-2016': {
    title: 'Cracovia 2016',
    subtitle: 'GMG (Giornata Mondiale della Gioventù)',
    content: [
      "le due milioni di candele accese durante la veglia con il Papa",
      "In una fresca sera polacca abbiamo esultato come dei matti all'invito del Papa che, durante la notte di festa degli italiani, ci ha detto \"fate il vostro dovere, che è fare chiasso tutta la notte\". Quella notte abbiamo fatto chiasso, abbiamo ballato e cantato che \"voglio vivere, ma sulla pelle mia\", ma tutti noi sapevamo che la vita, quella vera, sarebbe stata negli undici mesi che ci aspettavano. E lì che dobbiamo metterci in gioco. Eravamo testimoni di ciò che stavamo vivendo, non potevamo più \"tirarci indietro\". Ci era stato fatto il dono di quell'esperienza, piena di incontri, di zaini in spalla e bandiere diverse e tutte verso quello stesso cielo polacco, di cori, canti ma anche di silenzio. Il silenzio di quei due milioni di giovani che si tenevano per mano e pregavano.",
      "\"Costruendo ponti e abbattendo muri\", consapevoli della verità delle parole di Papa Francesco durante la veglia del sabato al Campus Misericordiae, davanti a una marea di candele accese: \"la risposta siete voi, il mondo vi guarda.\" Francesca, V ginnasio"
    ]
  },
  'cammino-santiago-2017': {
    title: 'Cammino di Santiago 2017',
    subtitle: 'La "M" del Montini sui gradini della Cattedrale di Santiago',
    content: [
      "La \"M\" del Montini sui gradini della Cattedrale di Santiago, dopo 160 chilometri di cammino.",
      "\"A chi mi chiedera del Cammino di Santiago non rispondero descrivendo le varie tappe. A chi mi chiedera del bagaglio da portare dirò che si deve partire con un carico minimo ma che potrebbe aumentare. Potrebbe riempirsi di tutto ciò che si vive e si vede lungo la strada, tutto ciò che abbiamo dentro e che il Cammino ti fa tirar fuori: la sopportazione, il coraggio di andare avanti anche se stanchi e doloranti, l'affrontare la fatica e i disagi. A chi mi chiedera del percorso dirà che questo viaggio non comincia a Roncisvalle o a O'Cebreiro, ma da molto prima e in un luogo dentro di sé. Raccontero, piuttosto, dei giorni facili, dove sembra che qualcuno ti sollevi lo zaino dalla schiena e di quelli difficili, in cui il sole era troppo caldo e la strada troppo lunga. Raccontero di Rolf, un ragazzo olandese incontrato per strada, in cammino da un mese per ritrovare se stesso dopo uno smarrimento, che ci ha accompagnato fino all'imponente cattedrale di Santiago. Parlero del ritorno, quando tutto ciò che ti circonda appare privo di colori, quando le gambe non vogliono saperne di stare ferme.",
      "Raccontero che alla vista dell'oceano dal faro di Finisterre, ai confini del mondo, ho capito di essere solo all'inizio e non alla fine del mio percorso, e che tutta quella meraviglia era un invito ad andare per strade diverse, tutte interiori. Per questo è un viaggio che ti porti dentro, quello del cammino di Santiago, perché è un viaggio del cuore. Francesca, I classico"
    ]
  },
  'bogliasco-2018': {
    title: 'Bogliasco 2018',
    subtitle: 'Volontariato nel quartiere Zen',
    content: [
      "I nostri ragazzi e i ragazzi di strada del quartiere Zen",
      "\"A luglio ho avuto l'opportunità di fare volontariato a Bogliasco in due strutture: una casa per anziani e una per disabili mentali. E' stato davvero toccante. Ascoltare le loro parole, leggere la gratitudine nei loro occhi o semplicemente incontrarli nei piccoli gesti mi ha accarezzato il cuore con emozioni mai provate. In pochi giorni è cambiato il mio modo di guardare chi mi sta intorno. Alla partenza mi sono commossa e una parte di cuore è restata là.\" Teresa, I linguistico"
    ]
  },
  'palermo-2018': {
    title: 'Palermo 2018',
    subtitle: 'Volontariato nel quartiere Zen',
    content: [
      "Volontariato nel quartiere Zen",
      "Conosciamo bene il cielo azzurro che sta sopra di noi, ma non sappiamo che dietro l'angolo vi è un acquazzone...ma alla fine cosa ci interessa? L'importante è avere un paio di Nike ai piedi, una felpa alla moda e l'ultimo cellulare della Apple...perché senza non valiamo niente. Nell'andare al quartiere Zen, e far giocare i bambini di strada, far di loro persone più oneste e in grado di rispettarsi vicendevolmente, non troviamo l'utilità pratica, in fondo in soli 7 giorni come si può cambiare una realtà così rovinata? E invece non ti rendi conto che attraverso un semplice gioco di strada, un pomeriggio al mare, un disegno o un momento di tenerezza, stai portando sul palmo della mano la vita di una piccola creatura, quasi come un eroe. Una piccola creatura che non ha la libertà di vivere i propri sogni e combattere per ottenere il suo piccolo posto nel mondo perché non gli vengono offerti i mezzi per farlo. Minuto dopo minuto, ora dopo ora, giorno dopo giorno ti rendi anche conto che il dono più grande,non è quello che hai dedicato loro, ma quello che essi hanno dedicato alla tua crescita e poche parole che ti abbracciavano dolcemente l'anima ti rendi conto di quali sono i valori autentici nella vita. E allora pur sapventata nell'affrontare una nuova esperienza, con l'impressione di essere costantemente in procinto di tufarmi in nuove acque senza saper bene come notare, mi sono lanciata col paracadute.",
      "\"Occasioni come quelle che offre il Montini non si hanno spesso nella vita. In qualsiasi altro liceo classico o linguistico insegnano il greco, il latino, il francese, l'inglese, lo spagnolo, la filosofia, l'italiano...ma solo al Montini, e solo attraverso esperienze come questa si impara ad essere uomini e donne, si impara ad amare la vita e soprattutto si impara a condividere l'ombrello con il prossimo.\" Aurora, V ginnasio"
    ]
  },
  'terrasanta-2018': {
    title: 'Terrasanta 2018',
    subtitle: 'Pellegrinaggio e volontariato',
    content: [
      "Il Montini sulla Scala dei Franchi, alle porte della Basilica del Santo Sepolcro",
      "\"È difficile riassumere in poche righe l'esperienza del pellegrinaggio in Terra Santa. A volte le parole sono di troppo: vorrei poter lasciare parlare per me il silenzio del deserto, il sorriso dei bambini, il bianco e l'oro di Gerusalemme, gli occhi di persone innamorate della propria terra... ci sono stati diversi momenti che mi hanno toccato in maniera particolare; il più emozionante è stato sicuramente quello in cui due minuscole marine hanno stretto nei loro pugni la stoffa della mia maglietta. Non avrei mai immaginato che la risata di una bambina tanto piccola mi avrebbe scatenato nel cuore una commozione tanto grande. Le persone che sono partite insieme a me e quelle che ho incontrato hanno lasciato un segno indelebile dentro di me: i momenti di divertimento, le cantate al chiaro di luna, i momenti di riflessione e di profonda comunione; il meraviglioso modo in cui ho visto fiorire i miei compagni di viaggio mi hanno aiutata a cogliere la bellezza di un mondo tanto diverso dal nostro ma non per questo meno bisognoso d'amore.\" Francesca, II classico"
    ]
  },
  'palermo-2019': {
    title: 'Palermo 2019',
    subtitle: 'Volontariato con i ragazzi del Quartiere Zen',
    content: [
      "Volontariato con i ragazzi del Quartiere Zen",
      "Posso dire con certezza che non ho mai vissuto sei giorni così intensi in vita mia. Non ci fermavamo mai, erano un'esperienza dopo l'altra. Abbiamo visitato Palermo con l'associazione Addio Pizzo, visto il museo Falcone-Borsellino e ci siamo recati a Brancaccio, il quartiere dove lavorava e dov'è stato ucciso Don Pino Puglisi. Devo dire che ho capito molto meglio come funziona il mondo della mafia e chi ha contribuito a lottare contro di essa. Abbiamo intrattenuto e servito il pranzo ad un simpaticissimo gruppo di disabili ed è stata dura, ma verderli felici di averci intorno è veramente appagante e meraviglioso. Infine abbiamo fatto da animatori ad uno scalmanato gruppo di bambini del quartiere Zen. Da dove iniziare, hanno tutti una situazione familiare difficile e magari non è facilissimo gestire alcuni di loro, nonostante ciò sono tutti super affettuosi e più abbracci e baci gli dai più sono felici. Di solito stavo con loro nel quartiere Zen e non mancavano gli sguardi curiosi ma anche sospettosi dei genitori. Due volte invece siamo andati con loro al mare, che fatica!!! Non stavamo fermi un secondo e guai a te se non facevi come dicevano loro, bisogna essere determinati per tenere testa a quei piccoletti.",
      "\"L'addio è stata sicuramente la parte peggiore, ti affezzioni a quelle piccole pesti in un modo in cui non mi sarei mai immaginata. Saltature gli animatori del luogo e i bambini sapendo che non li rivedrai preso è straziante. Formata a casa mi sono sentita vuota, ma allo stesso tempo arricchita da questa nuova esperienza che mi ha dato tanto, ho imparato ad essere più paziente, più coraggiosa e di sicuro più intraprendente.\" Maya, II linguistico"
    ]
  },
  'chiavenna-2019': {
    title: 'Chiavenna 2019',
    subtitle: 'Volontariato',
    content: [
      "Volontariato",
      "Abbiamo svolto diverse attività in compagnia di ragazzi disabili e di anziani. Tra queste attività abbiamo raccolto mirtilli, lamponi... nell'orto situato nel giardino all'esterno della struttura. Io insieme ad altri tre ragazzi abbiamo accompagnato alcuni ragazzi disabili a fare una passeggiata nel giardino e sono rimasta davvero colpita dall'entusiasmo dei ragazzi nel fare un'attività così semplice e banale come può essere un giro in giardino. Inoltre, io e altri ragazzi abbiamo avuto anche la possibilità di pranzare insieme ai ragazzi disabili e devo ammettere che non è stato affatto semplice: c'era un ragazzo che poteva nutrirsi solo per mezzo di un tubo nello stomaco, un altro uomo era sordo, muto e cieco e comunicava facendo gesti sul suo corpo. Anche un semplice pranzo in loro compagnia mi ha insegnato tanto perché noi spesso tendiamo a dispersi per i problemi che abbiamo ma mi sono resa conto che i nostri problemi non sono nulla a confronto a ciò che devono subire questi ragazzi. Una delle ragazze che lavora insieme ai disabili mi ha detto che davvero dobbiam renderci fortunati ed essere grati a Dio per avercei dato tutto ciò che abbiamo. Un altro giorno siamo andati a cantare in una casa di riposo e mi ha colpito l'entusiasmo degli anziani e i loro sorrisi che ci hanno accolto al nostro arrivo alla struttura. Questa esperienza mi ha insegnato tanto e consiglio a tutti di viverla almeno una volta perché ti permette di vedere realtà alle quali non si è abituati ma che possono davvero cambiarti la vita.\"",
      "\"Bogliasco è un esempio di luogo che fa da sfondo alla famiglia costruita insieme ai nostri amici Aldo, Francesco, Antonio perché la famiglia non è questione di sangue o di tempo bensi di volersi bene reciprocamente. Questo è quello che ho imparato in queste due settimane.\" Annalisa, figlia della mitica Patrizia"
    ]
  },
  'bogliasco-2019': {
    title: 'Bogliasco 2019',
    subtitle: 'Volontariato con anziani e disabili',
    content: [
      "Volontariato con anziani e disabili",
      "La parola volontariato nel dizionario acquisisce il significato di prestazione di lavoro, gratuita o semigratuita, fatta al fine di imparare la pratica necessaria allo svolgimento di un'attività professionale o di un lavoro e il relativo titolo di riconoscimento. Letteralmente è giusto identificarlo in questa maniera ma personalmente è tutt'altro. Durante le esperienze proposte dal Montini si perde la mania del protagonismo cui noi giovani d'oggi siamo soggetti. Si creano rapporti che vanno oltre l'ambito scolastico e si sorge la mano a chi ne ha più bisogno. Si matura inconscapevolmente ed è meraviglioso poter percepire dopo che siamo cresciuti. Spesso viene detto che dare è meglio di ricevere ma fidatevi, ho recepito più emozioni in volontariato che nella quotidianità.",
      "\"Bogliasco è un esempio di luogo che fa da sfondo alla famiglia costruita insieme ai nostri amici Aldo, Francesco, Antonio perché la famiglia non è questione di sangue o di tempo bensi di volersi bene reciprocamente. Questo è quello che ho imparato in queste due settimane.\" Annalisa, figlia della mitica Patrizia"
    ]
  },
  'summerlife': {
    title: 'Summerlife',
    subtitle: 'Un\'inedita estate in movimento col Montini',
    content: [
      "Caccia ai tesori della Lombardia! Un'inedita estate in movimento col Montini",
      "BERGAMO: Venerdì 12 giugno IL TESORO DELLA CARITÀ - Ritorno ore 7.15 a Crescenzago. Prova dell'orienteering. Esperienza di servizio con la Caritas. Merenda con gorgonzola. Poi sempre con la ciabattela lungo la Martesana fino al fiume e anche al sacco sul fiume. Ritorno, un pezzo in bici e uno con la MM, per le 21.00. Dare subito il nome Classroom per chi participa lunedi ore 16,30 nella classe di Fassini\n\nLECCO: martedi 16 giugno IL TESORO DELLE PIEVI - In treno fino a Civate e salita a piedi di monastero benedettino di San Pietro in Civate, con panorama e pic nic\n\nMONZA giovedi 25 giugno BRIANZA IL TESORO DELLE VOCAZIONI - In treno fino a Monza e poi pista cicliabile nel Parco di Monza con testimonianze (il tesoro della missione il tesoro del silenzio, il tesoro della fraternità)\n\nPAVIA Venerdì 3 luglio IL TESORO DEL MONACHESIMO - Biciclettata lungo il naviglio Pavese fino alla Certosa di Pavia\n\nCOMO Giovedi 9 luglio IL TESORO DELL'ACCOGLIENZA - In treno fino a Como → funzionare a Brunate → testimonianza Ammi → passeggiata in quota e gita al faro\n\nMILANO Martedi 14 luglio IL TESORO DELL'ARTE - Caccia al tesoro per le strade di Milano e incontro all'Abbazia di Chiaravalle e Nocetum\n\nSONDRIO Mercoledi 22 e giovedi 23 luglio IL TESORO DELLA CREAZIONE - In treno in Valtellina a Chiavenna e poi a piedi alle Cascate Acqua Fraggia. Ostello testimonianza Mondo e Famiglia, gastronomia valtellnese al Crotto Quartino (2 giorni, compresa la notte)\n\nIn standy:\n\nBRESCIA IL TESORO DELLA SANTITA' - In treno fino a Brescia e visita del Museo Santa Giulia e dei luoghi di Papa Montini\n\nVARESE IL TESORO DELLA PIETA' POPOLARE - In pullman fino a piedi del Sacro Monte + testimonianza dalle Suore di clausura\n\nCREMONA. IL TESORO DI CORAGGIO - In auto fino a Bozzolo, incontro e visita ai luoghi di don Primo Mazzolari\n\nLODI IL TESORO DELLA CURA - In auto fino a Codogno e incontro con il Sindaco e i primi contagiati Covid d'Italia. Pranzo in villa con grigliata da una famiglia del posto\n\nMANTOVA IL TESORO DELLA STORIA - In auto fino a Simione e gita con visita dei resti romani sul lago di Garda e alla Madonna del Frassino\n\nINOLTRE: IMBIANCATURA NEL GIARDINO DELLE SUORE DI CLAUSURA DI GORLA\n\nNonnostante il periodo assunto il Montini non si è fermato e, raccogliendo la proposta dell'Arcivescovo, ha messo in campo una serie di giornate alla scoperta del territorio e delle vocazioni della nostra meravigliosa terra."
    ]
  },
  'assisi-2023': {
    title: 'Assisi 2023',
    subtitle: 'Assisi, comunità di Bose',
    content: [
      "Assisi, comunità di Bose (san Masseo). Quindici intrepidi avventurieri affrontano il caldo fiato delle campagne umbre per condividere con i monaci il lavoro negli oliveti, la preghiera nella chiesetta millenaria, e un lieto senso di gratitudine e fraternità."
    ]
  },
  'val-formazza-2023': {
    title: 'Val Formazza 2023',
    subtitle: 'Val Formazza, rifugio Claudio e Bruno',
    content: [
      "Val Formazza, rifugio Claudio e Bruno (m 2710): una settimana di lavoro per aiutare la gestione del rifugio, e di contemplazione dell'opera del Creatore tra la stabilità delle montagne, il canto dei torrenti, il respiro dell'erba. Dio è grande, e noi vogliamo crescere riconoscendo il Suo amore!"
    ]
  },
  'bogliasco-2023': {
    title: 'Bogliasco 2023',
    subtitle: 'Casa Moresco di don Orione',
    content: [
      "Un'occasione di vicinanza agli ospiti di Casa Moresco di don Orione. Volontariato con persone disabili adulte e anche occasione per vivere intensamente le relazioni, apprezzando la bellezza della natura"
    ]
  }
}

export default function LEstatedelMontiniDetailPage() {
  const { slug } = useParams()
  const estate = estateData[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!estate) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '80px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Estate non trovata</p>
        </div>
        <Footer />
        <ScrollTop />
      </>
    )
  }

  return (
    <>
      <Navbar />

      {/* Hero/Header Section */}
      <section style={{ backgroundColor: '#0078bd', padding: '80px', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <h1 style={{ fontSize: '64px', fontWeight: 900, color: 'white', margin: 0, marginBottom: '30px' }}>
            {estate.title}
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '20px' }}>
            {estate.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ backgroundColor: '#0078bd', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {estate.content.map((paragraph, index) => (
            <p
              key={index}
              style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'white',
                marginBottom: index === estate.content.length - 1 ? 0 : '30px',
                whiteSpace: 'pre-line'
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  )
}
