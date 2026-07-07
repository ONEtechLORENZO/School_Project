import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

const initiativesData = {
  'lo-sport': {
    title: 'Lo sport',
    publishedDate: '28/01/2026',
    content: [
      "All'Istituto Montini lo sport è parte integrante del progetto educativo e rappresenta un autentico strumento di crescita personale e comunitaria. Non è solo attività motoria, ma occasione per imparare a conoscere se stessi, a mettersi alla prova, a rispettare le regole e a vivere il rapporto con gli altri.",
      "Accanto alle tradizionali ore in palestra, la scuola propone esperienze sportive diversificate: beach volley, arrampicata, nuoto, partecipazione a tornei interscolastici e attività pensate per coinvolgere tutti, valorizzando abilità diverse e spirito di squadra. Ogni proposta è vissuta come esperienza educativa, in cui cantano l'impegno, la lealtà, la collaborazione e la capacità di affrontare la sfida.",
      "Lo sport diventa così un linguaggio formativo che educa al corpo, alla relazione e alla responsabilità, contribuendo in modo concreto alla crescita equilibrata degli studenti e alla costruzione di una comunità scolastica viva e partecipata."
    ]
  },
  'montiniadi': {
    title: 'Montiniadi',
    publishedDate: '28/01/2026',
    content: [
      "Lo sport unisce vittorie, disciplina e crescita personale in ogni disciplina. Anche dal punto di vista sportivo il Montini si difende molto bene. Sapete qual è stata la squadra campione nell'ultimo torneo di calcio tra tutte le scuole superiori milanesi? Il Real Montini.",
      "Ma lo sport al Montini non è solo questo. È anche tornei con le scuole paritarie milanesi, basket, pallavolo, atletica, vela, arrampicata, giornate al Forum di Assago, pattinaggio sul ghiaccio e tanto altro.",
      "Nereo Rocco, storico allenatore di una squadra milanese, diceva che ciascuno di noi \"si comporta in campo come nella vita\". Noi del Montini crediamo fortemente nello sport come veicolo di educazione, come strumento per una crescita sana e corretta."
    ]
  },
  'esercizi-spirituali': {
    title: 'Esercizi spirituali',
    publishedDate: '28/01/2026',
    content: [
      "Gli esercizi spirituali per il triennio a Bose rappresentano un momento alto e significativo del percorso formativo degli studenti: un tempo di silenzio, ascolt e riflessione, vissuto in un luogo che invita naturalmente all'essenziale.",
      "Il Monastero di Bose offre un contesto unico, in cui la bellezza dell'ambiente, il ritmo della vita comunitaria e la sobrietà degli spazi favoriscono l'interiorità e la domanda di senso. Lontani dalla frenesia quotidiana, gli studenti hanno l'occasione di fermarsi, ascoltarsi e guardare con maggiore profondità alla propria vita.",
      "A guidare il percorso è Don Paolo Alliata, che accompagna i ragazzi con parole profonde e accessibili, capaci di intrecciare Bibbia, letteratura ed esperienza personale. Le sue meditazioni offrono spunti concreti per leggere la propria storia, riconoscere le domande decisive e aprirsi con libertà al confronto. Gli esercizi spirituali a Bose diventano così un'esperienza intensa di crescita personale e comunitaria, un tempo prezioso per imparare a dare spazio al silenzio e alla parola autentica, lasciandosi interrogare da ciò che conta davvero nella formazione umana e spirituale degli studenti nel momento più decisivo della loro adolescenza."
    ]
  },
  'incontri-formazione': {
    title: 'Incontri di formazione per studenti e genitori',
    publishedDate: '28/01/2026',
    content: [
      "Nel corso dell'anno scolastico, l'Istituto Montini propone incontri di formazione rivolti a studenti e genitori, pensati come momenti di dialogo e crescita attorno ai temi dell'anno.",
      "Per quest'anno, il filo conduttore è \"La vita nelle parole\": un invito a riscoprire il valore del linguaggio come strumento capace di esprimere l'esperienza, dare senso al vissuto e aprire alla comprensione di sé e della realtà.",
      "Cuore di questi incontri è l'incontro con veri e propri testimoni: persone che, attraverso la loro esperienza personale, culturale o professionale, mostrano come le parole possono diventare carne, scelta, responsabilità. Ascoltare una testimonianza autentica significa confrontarsi con una vita reale, con domande vere e risposte non astratte, capaci di interpellare in profondità. Questi momenti formativi non sono semplici conferenze, ma occasioni preziose di ascolto e confronto, che rafforzano il patto educativo tra scuola e famiglia e aiutano studenti e adulti a riconoscere il potere delle parole quando nascono dall'esperienza e tornano a parlare alla vita."
    ]
  },
  'volontariato': {
    title: 'Volontariato durante l\'anno',
    publishedDate: '28/01/2026',
    content: [
      "Iniziative solidali e di supporto per gli altri, cuore della proposta educativa del Montini. Una delle nostre alunne durante una delle esperienze di volontariato.",
      "Assistenza ai disabili e agli anziani presso la Sacra Famiglia di Cesano Boscone, aiuto ai senzatetto della nostra città, sostegno degli studenti più grandi nei confronti dei più piccoli in appositi pomeriggi di studio. Queste sono solo alcune delle iniziative che il Montini propone ai suoi ragazzi.",
      "Il servizio e il volontariato sono parte integrante della formazione montini, occasioni concrete per mettere in pratica i valori di solidarietà e responsabilità verso il prossimo."
    ]
  },
  'esperienze-diocesane': {
    title: 'Esperienze diocesane',
    publishedDate: '28/01/2026',
    content: [
      "L'unica scuola milanese sempre presente alle iniziative della Diocesi e della Fondazione Oratori Milanesi.",
      "Il Montini è l'unica scuola milanese ad aderire come istituto scolastico alle iniziative della Diocesi e della Fondazione Oratori Milanesi. Animazione per l'incontro del vescovo con i cresimandi? Notte dei Santi? Notte bianca della fede in giro per l'Italia? Pellegrinaggio per l'ostensione della Sindone? Il Montini non manca mai!",
      "Questa partecipazione attiva alle esperienze diocesane rappresenta una scelta educativa consapevole, che radica gli studenti nella comunità ecclesiale e li coinvolge in un progetto di fede più ampio e significativo."
    ]
  },
  'giornate-scuola-fuori': {
    title: 'Giornate di scuola fuori',
    publishedDate: '28/01/2026',
    content: [
      "Un'esperienza residenziale che guida ogni classe del Montini in un percorso di crescita personale, spirituale e relazionale. Le giornate di \"Scuola Fuori\" sono uno dei momenti più caratterizzanti della proposta educativa dell'Istituto Montini: esperienze vissute nelle realtà cittadine, che cambiano ogni anno, in cui la scuola esce dalle aule per incontrare il mondo reale.",
      "Gli studenti vengono coinvolti e \"ingaggiati\" direttamente dal Rettore e dai docenti intorno al tema dell'anno, chiamati a guardare la città come luogo di domande, esperienze e significati. Musei, spazi culturali, associazioni, luoghi di lavoro e di vita diventano così occasioni concrete di apprendimento, riflessione e confronto.",
      "Queste giornate sono profonde, perché aiutano a leggere la realtà e a metterla in dialogo con ciò che si studia, ma sono anche giornate di gioco, condivisione e amicizia, in cui si rafforzano i legami e il senso di appartenenza. Vivere la scuola fuori significa crescere insieme, formare la classe e costruire, passo dopo passo, la comunità del Montini, dove lo studio incontra la vita e diventa esperienza comune."
    ]
  },
  'aiuto-metodologico': {
    title: 'Aiuto Metodologico',
    publishedDate: '28/01/2026',
    content: [
      "Ogni studente riceve supporto personalizzato per trovare metodo e successo nello studio.",
      "Non sei capace di studiare? Alle medie non hai trovato un metodo di apprendimento e una strategia di lavoro adeguati? I tuoi risultati non corrispondono al tuo sforzo? Al Montini non hai che da alzare la mano e chiedere aiuto. Ogni docente si rende infatti disponibile per sportelli singoli o per ore con tutta la classe destinate ad un aiuto metodologico. In pomeriggi definiti dalla scuola i ragazzi sono accompagnati nello studio delle varie materie con l'obiettivo di eliminare le difficoltà nello studio e di affinare le modalità di apprendimento.",
      "Non ci sono sconti, c'è sempre una mano tesa. È questa la politica da sogno del Montini. Il supporto metodologico rappresenta un impegno concreto della scuola nel riconoscere le difficoltà individuali e accompagnare ogni studente verso l'autonomia e il successo scolastico."
    ]
  },
  'concorsi-letterari': {
    title: 'Concorsi Letterari',
    publishedDate: '28/01/2026',
    content: [
      "Gli studenti brillano anche nei concorsi letterari, conquistando premi e riconoscimenti.",
      "L'Istituto Montini promuove e sostiene la partecipazione ai concorsi letterari proposti dalle realtà culturali e dai vicini, come occasione preziosa per valorizzare il talento e la voce degli studenti. Scrivere per un concorso significa mettersi in gioco in modo autentico: confrontarsi con un tema, dare forma alle proprie idee, misurarsi con criteri di qualità e con un pubblico reale.",
      "È un'esperienza che rafforza il rapporto con la parola scritta, stimola creatività e rigore e incoraggia un'espressione personale consapevole. Attraverso questi concorsi, la scuola apre un dialogo vivo con il territorio e accompagna gli studenti a scoprire la scrittura come spazio di libertà, responsabilità e crescita culturale, dove le parole diventano strumento per comprendere e raccontare il mondo."
    ]
  },
  'laboratorio-teatrale': {
    title: 'Laboratorio Teatrale',
    publishedDate: '28/01/2026',
    content: [
      "Il teatro aiuta a scoprire se stessi, superare la timidezza e vivere la passione del palcoscenico.",
      "Un pezzo del cast dello spettacolo Le smanie per la villeggiatura di Carlo Goldoni. Ogni anno i nostri ragazzi, aiutati dal mitico maestro Carlo D'Adda, accettano la sfida sempre avvincente del palcoscenico. Mettersi in gioco non è mai facile, ma la nostra esperienza ci fa dire con sicurezza che attraverso il teatro è meraviglioso andare alla ricerca della propria identità. Senza vergogna, senza timore, senza voti, con la libertà di essere se stessi recitando il ruolo di qualcun altro. Alcuni ragazzi sono letteralmente nati, altri sono entrati a far parte di compagnie professionistiche, altri si sono semplicemente divertiti in mondo. Ma è solo un gioco? No! Ogni anno, a maggio, i nostri attori vanno in scena davanti a tutta la scuola.",
      "\"Cosa significa fare teatro al Montini? Per me ha significato sciogliere i miei blocchi, superare la timidezza, imparare a fare un discorso chiaro e scorrevole davanti a molte persone, saper comunicare attraverso parole, tono e movimenti. Ma teatro per me è stato anche divertimento, svago e tanta passione. In questi cinque anni ho imparato a leggere tra le righe di un copione, a conoscermi anche attraverso personaggi che erano diversi dalla vera me e allo stesso tempo a conoscere gli altri. Soprattutto, per me, fare teatro al Montini ha significato trovare degli amici, sentire ancora di più quell'unità forte con i miei compagni anche quando ci siamo trovati in difficoltà, anche negli istanti di panico prima che si aprisse il tendone, al mio primo spettacolo. Mi sono sentita parte di un gruppo.\" - Giada, Il classico."
    ]
  },
  'gran-gala': {
    title: 'Gran Galà',
    publishedDate: '28/01/2026',
    content: [
      "Il talento diventa spettacolo: tutti protagonisti al Gran Galà della scuola.",
      "Al termine di ogni anno scolastico i nostri ragazzi scelgono di mettere i propri talenti al servizio della comunità per una serata di alto spettacolo: quella che da tanti anni è la serata del GRAN GALà del Montini. Ballerini, cantanti, fotografi, attori, atleti e tanto altro...",
      "Il Gran Galà rappresenta il momento culmine in cui la comunità scolastica celebra i propri talenti e si riunisce in festa. È un'occasione in cui ogni studente, a prescindere dalle proprie abilità, ha l'opportunità di esprimere se stesso e di contribuire alla costruzione di una comunità inclusiva e festosa, dove il talento viene valorizzato e la diversità diventa ricchezza condivisa."
    ]
  }
}

export default function InitiativeDetailPage() {
  const { slug } = useParams()
  const initiative = initiativesData[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!initiative) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '80px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Iniziativa non trovata</p>
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
            {initiative.title}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)' }}>
            Published<br /><strong>{initiative.publishedDate}</strong>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ backgroundColor: '#0078bd', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {initiative.content.map((paragraph, index) => (
            <p
              key={index}
              style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'white',
                marginBottom: '30px',
                margin: index === initiative.content.length - 1 ? 0 : '0 0 30px 0'
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Only Footer - No CinqueMilleBlock or ContributiBlock */}
      <Footer />
      <ScrollTop />
    </>
  )
}
