import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

const details = {
  'hackathon': {
    title: 'Hackathon',
    published: '28/01/2026',
    content: [
      'L\'Istituto Montini propone la partecipazione agli hackathon come esperienza formativa ad alto contenuto innovativo. Gli studenti lavorano in team per risolvere problemi reali, mettendo in gioco creatività, competenze digitali e capacità di collaborazione. Il tempo limitato stimola decisione, flessibilità e pensiero critico. È un\'occasione per imparare facendo e confrontarsi con sfide concrete. Un\'esperienza che allena all\'innovazione e al lavoro di squadra.'
    ]
  },
  'imun': {
    title: 'IMUN',
    published: '28/01/2026',
    content: [
      'L\'Istituto Montini partecipa all\'esperienza di eccellenza IMUN, un progetto che avvicina gli studenti alla diplomazia e alle relazioni internazionali. Attraverso simulazioni in lingua inglese, i ragazzi sviluppano capacità di argomentazione, negoziazione e public speaking. È un\'occasione per confrontarsi con coetanei da tutta Italia e dal mondo. IMUN valorizza spirito critico, responsabilità e lavoro di squadra. Un\'esperienza formativa di alto livello, che allarga lo sguardo sul presente globale.'
    ]
  },
  'certamina-di-traduzione': {
    title: 'Certamina di traduzione',
    published: '28/01/2026',
    content: [
      'L\'Istituto Montini partecipa ai certamina di traduzione latina, competizioni che valorizzano lo studio rigoroso della lingua e della cultura classica. Gli studenti si confrontano con testi complessi, mettendo in gioco competenze linguistiche, capacità interpretativa e sensibilità stilistica. È un\'esperienza di alto profilo culturale che premia metodo, precisione e profondità di pensiero. La traduzione diventa esercizio critico e creativo. Un\'occasione per eccellere nello studio del latino.'
    ]
  },
  'olimpiadi-italiano': {
    title: 'Olimpiadi dell\'Italiano',
    published: '28/01/2026',
    content: [
      'L\'Istituto Montini partecipa alle Olimpiadi di Italiano, una competizione nazionale che valorizza le competenze linguistiche, espressive e argomentative degli studenti. La gara stimola attenzione alla lingua, precisione lessicale e capacità di comprensione e scrittura. È un\'occasione per mettersi alla prova in modo serio e motivante. L\'italiano diventa strumento vivo di pensiero e comunicazione. Un\'esperienza che promuove eccellenza e passione per la parola.'
    ]
  },
  'gran-premio-matematica': {
    title: 'Gran Premio della Matematica',
    published: '28/01/2026',
    content: [
      'L\'Istituto Montini partecipa al Gran Premio della Matematica, un\'iniziativa che valorizza il talento logico e la capacità di problem solving degli studenti. La competizione stimola rigore, intuizione e lavoro mentale, andando oltre il semplice calcolo. È un\'occasione per mettersi alla prova in modo sfidante e motivante. La matematica diventa così esercizio di pensiero critico e creatività. Un\'esperienza che premia impegno, passione e curiosità intellettuale.'
    ]
  },
  'accademia-filodrammatici': {
    title: 'Collaborazione con l\'Accademia dei Filodrammatici',
    published: '28/01/2026',
    content: [
      'L\'Istituto Montini è orgoglioso di collaborare con la prestigiosa Accademia dei Filodrammatici di Milano per offrire agli studenti un percorso dedicato allo sviluppo delle competenze relazionali. Fondata nel 1796, l\'Accademia è una delle istituzioni teatrali più antiche d\'Europa e un centro d\'eccellenza nella formazione alle arti sceniche e alla comunicazione.',
      'Attraverso un progetto costruito in sinergia con docenti e professionisti del teatro, gli studenti sono guidati in laboratori esperienziali che utilizzano tecniche teatrali per potenziare la capacità di relazione, ascolto, cooperazione e presenza. Questo percorso – spesso definito "Cassetta degli attrezzi" – nasce proprio dall\'idea che il teatro sia uno strumento unico per esplorare le dinamiche del gruppo, scoprire sé stessi e migliorare la qualità delle proprie interazioni.',
      'L\'obiettivo è far emergere fiducia, consapevolezza ed efficacia relazionale: competenze che non solo arricchiscono la vita quotidiana in classe, ma diventano risorse fondamentali per il futuro, nelle relazioni, nello studio e nel lavoro. Un progetto che coniuga cultura, movimento, emozione e regia delle parole, apprendendo alla scoperta di sé e degli altri in un contesto creativo, stimolante e pieno di senso.'
    ]
  },
  'corso-public-speaking': {
    title: 'Corso di Public Speaking',
    published: '28/01/2026',
    content: [
      'Un corso di public speaking rappresenta oggi uno strumento formativo essenziale, capace di incidere in modo profondo sulla crescita personale, scolastica e futura degli studenti.',
      'Saper parlare in pubblico non significa solo "esporre bene", ma organizzare il pensiero, argomentare con chiarezza, usare la voce e il corpo in modo consapevole, gestire le emozioni e il confronto con gli altri. Competenze trasversali che rafforzano lo studio quotidiano, migliorano le interrogazioni, le presentazioni, i dibattiti in classe e la partecipazione attiva alla vita scolastica.',
      'Un percorso strutturato di public speaking aiuta gli studenti a prendere fiducia in sé, a trasformare la timidezza in presenza e l\'ansia in energia comunicativa. Imparare a parlare davanti a un pubblico educa all\'ascolto, al rispetto dei tempi, alla responsabilità della parola e alla capacità di adattare il messaggio al contesto e all\'interlocutore.',
      'Nel mondo universitario e professionale, la capacità di comunicare in modo efficace è sempre più decisiva: presentare un progetto, sostenere un esame orale, intervenire in una riunione o difendere le proprie idee richiede competenze che non si improvvisano. Un corso di public speaking offre dunque agli studenti un vantaggio reale e duraturo, perché insegna a dare voce alle proprie idee e a farle arrivare con forza, chiarezza e autenticità.',
      'Educare alla parola significa educare al pensiero e alla relazione. Per questo il public speaking non è un\'attività accessoria, ma una parte fondamentale della formazione della persona.'
    ]
  }
}

export default function EccellenzaDetailPage() {
  const { slug } = useParams()
  const item = details[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!item) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Pagina non trovata</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="certificazioni" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#001839', margin: '0 0 16px 0', lineHeight: 1.2 }}>
            {item.title}
          </h1>

          <p style={{ fontSize: '14px', color: '#999', marginBottom: '40px' }}>
            Published<br />
            {item.published}
          </p>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', maxWidth: '900px' }}>
            {item.content.map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '24px' }}>
                {paragraph}
              </p>
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
