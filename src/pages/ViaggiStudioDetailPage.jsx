import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

const tripDetails = {
  'sicilia-2025': {
    title: 'Sicilia 2025',
    published: '04/02/2026',
    content: [
      'Il viaggio di istruzione delle classi IV del Liceo Classico in Sicilia è un\'esperienza intensa e significativa, pensata per intrecciare classicità e impegno civile, conoscenza del passato e responsabilità nel presente.',
      'La Sicilia, culla della civiltà greca in Occidente, offre agli studenti l\'occasione unica di confrontarsi dal vivo con i luoghi fondativi della cultura classica: templi, teatri, città antiche che ancora oggi parlano di bellezza, misura, senso del limite e della polis. Visitare Valle dei Templi, il Teatro Greco di Siracusa e le città storiche di Agrigento e Siracusa significa dare corpo e voce a ciò che viene studiato sui libri, rendendo la classicità un\'esperienza viva e attuale.',
      'Accanto al percorso storico e artistico, il viaggio propone un forte itinerario di educazione alla legalità, realizzato in collaborazione con Addio Pizzo. Attraverso incontri, testimonianze e percorsi sul territorio, gli studenti entrano in contatto con realtà che ogni giorno scelgono il coraggio, la giustizia e la responsabilità civile, opponendosi concretamente alla cultura mafiosa.',
      'Questo viaggio non è solo una visita guidata, ma un cammino di crescita personale e culturale: un\'occasione per scoprire come le domande della classicità – giustizia, legge, bene comune, libertà – trovino ancora oggi risposte e sfide concrete. Un\'esperienza che lascia il segno, perché unisce sapere, coscienza e futuro.'
    ]
  },
  'dublino-2025': {
    title: 'Dublino 2025',
    published: '28/01/2026',
    content: [
      'Una settimana a Dublino è un\'immersione totale nella lingua, nella cultura e nello spirito irlandese, pensata come un\'esperienza formativa coinvolgente che unisce apprendimento, scoperta e relazione.',
      'Il cuore del progetto è il percorso "How to be a tour guide", un\'esperienza laboratoriale che invita gli studenti a mettersi in gioco in prima persona: osservare la città, studiarne la storia e trasformare ciò che si apprende in racconto, spiegazione e comunicazione in lingua inglese. Dublino diventa così una vera e propria aula a cielo aperto, dove monumenti, quartieri e musei si trasformano in occasioni di apprendimento attivo.',
      'Passeggiando tra le strade di Dublino, dagli spazi storici del Trinity College ai quartieri più vivaci, gli studenti imparano a leggere una città europea nella sua complessità: storia, letteratura, identità nazionale e trasformazioni contemporanee. L\'uso costante dell\'inglese rafforza le competenze linguistiche in modo naturale e concreto, stimolando sicurezza e autonomia.',
      'La settimana è anche un\'esperienza intensa di vita di gruppo: condividere giornate, spostamenti, sfide e scoperte favorisce la nascita di legami, collaborazione e spirito di iniziativa. Un viaggio che unisce formazione linguistica, apertura culturale e amicizia, lasciando negli studenti non solo nuove competenze, ma uno sguardo più ampio sul mondo e su se stessi.'
    ]
  },
  'cammino-dante-2025': {
    title: 'Cammino di Dante 2025',
    published: '28/01/2026',
    content: [
      'Un viaggio di tre giorni nel Casentino sulle tappe dell\'esilio di Dante è molto più di un\'uscita didattica: è un\'esperienza che unisce cultura, ambiente e amicizia, lasciando un segno profondo nel percorso umano e scolastico degli studenti.',
      'In questi luoghi carichi di storia e silenzio, Dante Alighieri visse alcuni dei momenti più significativi del suo esilio, trovando accoglienza, protezione e ispirazione. Camminare tra castelli, abbazie e borghi medievali significa entrare nel cuore della Commedia, scoprendo come il paesaggio, l\'incontro e l\'ascolto della vita di gruppo e la condivisione quotidiana rendono questo viaggio anche un\'occasione preziosa di amicizia e crescita personale. Un percorso che educa allo sguardo, al pensiero e alla relazione, dove lo studio incontra la vita e la cultura diventa esperienza.',
      'Ad accompagnare il gruppo è Riccardo Starnotti, guida dantesca capace di rendere viva e accessibile la figura di Dante, intrecciando lettura dei testi, racconto storico e osservazione diretta dei luoghi. La parola poetica prende forma nel paesaggio, diventando esperienza concreta e condivisa.',
      'Il contatto con la natura del Casentino, i momenti di cammino e di ascolto, la vita di gruppo e la condivisione quotidiana rendono questo viaggio anche un\'occasione preziosa di amicizia e crescita personale. Un percorso che educa allo sguardo, al pensiero e alla relazione, dove lo studio incontra la vita e la cultura diventa esperienza.'
    ]
  },
  'antibes-2025': {
    title: 'Antibes 2025',
    published: '28/01/2026',
    content: [
      'Il soggiorno linguistico ad Antibes è un\'esperienza completa di immersione nella lingua e nella cultura francese, pensata per coniugare apprendimento, scoperta e vita quotidiana.',
      'Gli studenti sono accolti in famiglia, vivendo da vicino abitudini, ritmi e tradizioni locali: un contesto ideale per praticare il francese in modo naturale e continuo, sviluppando autonomia, responsabilità e apertura culturale. La mattina è dedicata alle lezioni presso una scuola di lingua francese, dove l\'insegnamento è dinamico e orientato alla comunicazione, con attività pensate per rafforzare comprensione, espressione e sicurezza nell\'uso della lingua.',
      'Il pomeriggio si apre invece alla scoperta del territorio: passeggiate nel centro storico di Antibes, visite culturali, momenti di relax sul mare e uscite nei luoghi simbolo della Costa Azzurra, come Nizza e Cannes. Il turismo diventa così parte integrante del percorso formativo, trasformando ogni uscita in un\'occasione per osservare, comprendere e comunicare.',
      'Un soggiorno che unisce studio e esperienza, lingua e relazione, offrendo agli studenti non solo un miglioramento concreto delle competenze linguistiche, ma anche un ricordo autentico di vita europea, fatto di incontri, scoperte e crescita personale.'
    ]
  },
  'assisi-2023': {
    title: 'Assisi 2023',
    published: '28/01/2026',
    content: [
      'Assisi, comunità di Bose (san Masseo). Quindici intrepidi avventurieri affrontano il caldo fiato delle campagne umbre per condividere con i monaci il lavoro negli oliveti, la preghiera nella chiesetta millenaria, e un lieto senso di gratitudine e fraternità.'
    ]
  },
  'viaggio-2026': {
    title: 'Viaggio 2026',
    published: '17/10/2025',
    content: [
      'Contenuto in aggiornamento. I dettagli del Viaggio 2026 saranno pubblicati a breve.'
    ]
  },
  'la-iv-classico-a-teatro': {
    title: 'La IV classico a Teatro',
    published: '17/10/2025',
    content: [
      'A cookie is a small text file stored via your browser onto your computer or mobile device. Each cookie is unique to your browser and can be used by a website to improve the user experience, such as your user preferences or the contents of your basket.',
      'The example below makes CSS remove underline from link by adding text-decoration:none;. We set text-decoration values for each of the link states with CSS: only active and hover states have underlines:',
      { heading: 'June design conferences' },
      'Happy to announce that we received a number of Gold, Silver and Bronze Clios for our work on Isle of Dogs, The Killing of a Sacred Deer, The Death of Stalin, and It. It was an exciting night, hosted by Carlton from Fresh Prince (yes he did the dance), and the team celebrated and danced all night. We are so proud of this honor and are looking forward to what\'s next.',
      'There are 4 link states: a:active, a:hover, a:visited, and a:link. To avoid behavior overlapping, these states should go in the following order: a:hover should go after a:link and a:visited. a:active should go after a:hover. To style link, many CSS styling properties can be applied (e.g. CSS backgrounds, CSS color, CSS font-family, CSS text decoration, etc.).',
      'If the floating element is taller than the element containing it, then the floating element steps out of its container. You can fix this issue with the overflow property. Paired with an auto value, it stretches the container to be big enough for the floating element.',
      { heading: 'February design conferences' },
      'While you may not be jet-setting to meet with fellow designers, that doesn\'t mean you won\'t explore or form meaningful connections in 2021. Unlike last year\'s on-the-fly iterations, the digital formats this year intentionally build community and increase inclusivity. For example, many conferences are integrating interactive elements—including live Q&A sessions and roundtables and chatrooms for mingling—as well as end-of-day extras, like post-conference Zoom yoga sessions.'
    ]
  },
  'viaggio-studio': {
    title: 'Viaggio Studio',
    published: '17/10/2025',
    content: [
      'A cookie is a small text file stored via your browser onto your computer or mobile device. Each cookie is unique to your browser and can be used by a website to improve the user experience, such as your user preferences or the contents of your basket.',
      'The example below makes CSS remove underline from link by adding text-decoration:none;. We set text-decoration values for each of the link states with CSS: only active and hover states have underlines:',
      'Happy to announce that we received a number of Gold, Silver and Bronze Clios for our work on Isle of Dogs, The Killing of a Sacred Deer, The Death of Stalin, and It. It was an exciting night, hosted by Carlton from Fresh Prince (yes he did the dance), and the team celebrated and danced all night. We are so proud of this honor and are looking forward to what\'s next.',
      { heading: 'Subtitle' },
      'There are 4 link states: a:active, a:hover, a:visited, and a:link. To avoid behavior overlapping, these states should go in the following order: a:hover should go after a:link and a:visited. a:active should go after a:hover. To style link, many CSS styling properties can be applied (e.g. CSS backgrounds, CSS color, CSS font-family, CSS text decoration, etc.).',
      'If the floating element is taller than the element containing it, then the floating element steps out of its container. You can fix this issue with the overflow property. Paired with an auto value, it stretches the container to be big enough for the floating element.',
      'While you may not be jet-setting to meet with fellow designers, that doesn\'t mean you won\'t explore or form meaningful connections in 2021. Unlike last year\'s on-the-fly iterations, the digital formats this year intentionally build community and increase inclusivity. For example, many conferences are integrating interactive elements—including live Q&A sessions and roundtables and chatrooms for mingling—as well as end-of-day extras, like post-conference Zoom yoga sessions.'
    ]
  }
}

export default function ViaggiStudioDetailPage() {
  const { slug } = useParams()
  const trip = tripDetails[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!trip) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Viaggio non trovato</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 900, color: '#001839', margin: '0 0 16px 0', lineHeight: 1.2 }}>
            {trip.title}
          </h1>

          <p style={{ fontSize: '14px', color: '#999', marginBottom: '40px' }}>
            Published<br />
            {trip.published}
          </p>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', maxWidth: '900px' }}>
            {trip.content.map((item, index) => (
              typeof item === 'object' && item.heading ? (
                <h2 key={index} style={{ fontSize: '28px', fontWeight: 900, color: '#001839', margin: '36px 0 16px 0' }}>
                  {item.heading}
                </h2>
              ) : (
                <p key={index} style={{ marginBottom: '24px' }}>
                  {item}
                </p>
              )
            ))}
          </div>
        </div>
      </div>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
