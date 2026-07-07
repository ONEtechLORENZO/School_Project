import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function IntervistaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* INTERVISTA SECTION */}
      <section className="intervista-container">
        <div className="intervista-image">
          {/* Don Paolo image */}
        </div>
        <div className="intervista-content">
          <p className="intervista-eyebrow">Intervista a</p>
          <h1 className="intervista-name">Don Paolo Alliata</h1>
          <p className="intervista-subtitle">Quando la cultura e la letteratura si uniscono alla religione</p>

          <h2 className="intervista-heading">
            Don Paolo, lei è rettore del Liceo Montini da quattro anni. Ci racconti brevemente com'è nata questa scuola e quale sia il suo carisma specifico, quel "fuoco" che la anima fin dalle origini.
          </h2>

          <p className="intervista-description">
            Il Montini nasce nel 1977 da un'intuizione coraggiosa: don Carlo Calori e di un gruppo di genitori e docenti vollero creare una scuola cattolica, di qualità e aperta a tutti, nella periferia sud di Milano. Non si trattava solo di aprire un liceo, ma di fondare una comunità educante, una cooperativa – la Milano 15 – in cui genitori, insegnanti e studenti collaborassero "nello spirito di libertà e carità". Il carisma si può sintetizzare in un'icona che usiamo spesso: un tavolo che poggia su tre gambe. La prima è essere scuola cattolica, cioè radicata nel modo che Gesù di Nazaret ha di vedere le cose, e aperta alla ricerca della verità, quale che sia il significato di questa espressione; la seconda è essere scuola popolare, cioè accessibile, attenta alle persone nella concretezza della loro vita, alle loro storie e alle loro possibilità; la terza è essere scuola di qualità, cioè esigente sul piano culturale e metodologico. Queste tre gambe si sostengono a vicenda. La fede sollecita la ragione e la rende più grata e lieta; l'apertura a tutti vuole valorizzare ciascuno; la qualità è un servizio che vuole accogliere, non selezionare. È un equilibrio dinamico, a volte faticoso, ma è la nostra identità e noi ci proviamo sempre di nuovo.
          </p>
        </div>
      </section>

      {/* Q&A SECTIONS */}
      <section className="intervista-qa">
        {/* QUESTION 1 */}
        <div className="qa-block" style={{ background: 'linear-gradient(rgba(52,184,254,0.5), rgba(52,184,254,0.5)), url(/School.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="qa-icon">
            <i className="fas fa-building"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">In che cosa il Montini può essere una realtà significativa per il territorio milanese oggi?</h3>
            <p className="qa-answer">
              Milano è una città sempre molto ricca di opportunità, e quindi anche di disuguaglianze, di velocità e di solitudini. Il Montini vuole essere una realtà educativa che offra agli elementi una proposta che sia chiara e una comunità accogliente. Chiara nel senso che affermiamo apertamente la nostra ispirazione cristiana: la proponiamo come un luce per leggere la realtà, per dare senso allo studio e gusto alla vita. Accoglienti perché la scuola vuole essere un luogo di relazione. I nostri genitori, i nostri insegnanti sono coinvolti non come clienti ma come corresponsabili. Nel nostro contesto metropolitano spesso prevalgono l'anonimato e la frammentazione, noi cerchiamo di costruire legami. Lo facciamo attraverso la didattica, come anche con le esperienze di volontariato, con le attività di servizio all'orientamento, con le celebrazioni e le occasioni di meditazione, che coinvolgono studenti, genitori e docenti. Siamo un piccolo laboratorio di umanità integrale, che cerca di rispondere alla domanda di significato di tutti – giovani e adulti – che portiamo dentro.
            </p>
          </div>
        </div>

        {/* QUESTION 2 */}
        <div className="qa-block qa-block-qualita-navy">
          <div className="qa-icon">
            <i className="fas fa-book"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Passiamo agli studenti. In che cosa il Montini può essere d'aiuto a loro, dal punto di vista didattico ed educativo?</h3>
            <p className="qa-answer">
              Partiamo da un principio ovvio: ogni studente è una storia unica. La didattica non può mai essere un trasferimento standardizzato di contenuti. Come ogni buona scuola, noi cerchiamo di partire dalla persona, dai suoi punti di forza e dalla sua fragilitá. Sull'piano didattico, questo significa curare il metodo di studio, offrire percorsi personalizzati di recupero e d'eccellenza, usare strumenti moderni senza perdere la relazione diretta. I nostri quadri orari, sia al Classico che al Linguistico, sono potenziati: più ore di lingua con madrelingua, più attenzione alle discipline umanistiche. Accanto ai percorsi scuola-lavoro e ai percorsi scuola-estero. Ma il terreno in cui tutto questo si radica è l'impegno educativo: cerchiamo di accompagnare i ragazzi in un cammino di crescita che tocca tutte le dimensioni. Proponiamo esperienze spirituali, momenti di ritiro, volontariato: non sono elementi accessori, sono occasioni che danno respiro alla vita e alle domande profonde. Vogliamo camminare accanto a persone capaci di pensare con la propria testa, di argomentare, di affrontare la complessità, ma anche di scegliere secondo prospettive di valore, di dialogare e spendersí per il bene comune.
            </p>
          </div>
        </div>

        {/* QUESTION 3 */}
        <div className="qa-block qa-block-family" style={{ background: 'linear-gradient(rgba(52,184,254,0.5), rgba(52,184,254,0.5)), url(/Family.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="qa-icon">
            <i className="fas fa-hands-helping"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Un aspetto molto particolare del Montini è il suo modello economico: non c'è una retta fissa, ma le famiglie contribuiscono liberamente (e segretamente) in base alle loro possibilità. Che valore ha oggi questo patto di corresponsabilità?</h3>
            <p className="qa-answer">
              Questo è uno degli aspetti più belli e più radicali della nostra scuola. Non è un "prezzo calmierato" o una formula di sconto. È un patto di fiducia e di responsabilità. La famiglia non paga un servizio, ma partecipa alla vita e alla missione della scuola, in modo libero e consapevole. Questo cambia radicalmente il rapporto da consumatore-fornitore ad alleanza educativa. Le famiglie sanno che la scuola è anche loro, e questo le ispinge a impegnarsi, a condividere tempo, competenze e risorse. Dal punto di vista economico, è una sfida: richiede una grande trasparenza, una gestione oculata, una continua comunicazione. Ma è anche una profezia: dimostra che si può fare scuola di qualità senza mercificare l'educazione, che si può contare sulla generosità delle persone quando credono in un progetto. È cosa che vale anche per i docenti: diversi di loro hanno rinunciato alla possibilità della scuola statale per rimanere con noi, perché credono nel progetto e vogliono farne parte. In un'epoca in cui tutto si vende, non proviamo a testimoniare che si sono beni – come l'educazione – che nascono dalla libertà e dalla reciprocità.
            </p>
          </div>
        </div>

        {/* QUESTION 4 */}
        <div className="qa-block qa-block-navy qa-block-sacerdote">
          <div className="qa-icon">
            <i className="fas fa-pen"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Lei, don Paolo, ha un percorso personale di sacerdote e autore. Perché ha desiderato entrare in questa avventura come Rettore?</h3>
            <p className="qa-answer">
              Sono sempre stato molto grato al mondo della scuola. La mia vocazione sacerdotale è maturata grazie alla formazione che ho ricevuto negli anni del Liceo. Sono stato insegnante di religione, ho collaborato con l'Ufficio catechistico, ho scritto per ragazzi sulla proposta di diventare rettore del Montini, ho visto convergere due passioni: quella dell'educazione e quella della Parola di Dio. Qui non sono solo un amministratore o un coordinatore; sono un sacerdote in mezzo a una comunità che educa. Il mio servizio è quello di custodire e alimentare il carisma della scuola, di garantire che le nostre scelte fedeli alla sua vocazione e allo stile carismatico della scuola, di garantire che le nostre scelte fedeli alla sua vocazione orizionale. Ma è anche una profezia: carcere di sostenere le famiglie nei loro compito educativo, spesso faticoso. La mia piccola esperienza di scrittore e di divulgatore mi aiuta a tessere collegamenti tra la Bibbia, la letteratura, la vita quotidiana. Che è poi uno dei nostri obiettivi: mostrare che il Vangelo non è un mondo a parte, ma rispia per inclinare la cultura non è un'asciutto, ma una visione sapiente per incominciare la cultura non è un asciutto, ma una ricchezza e per incominciare le domande dei ragazzi e degli adulti, e nelle sfide del presente.
            </p>
          </div>
        </div>

        {/* QUESTION 5 */}
        <div className="qa-block qa-block-futuro" style={{ background: 'linear-gradient(rgba(52,184,254,0.5), rgba(52,184,254,0.5)), url(/Guardando%20al%20futuro.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="qa-icon">
            <i className="fas fa-cross"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Guardando al futuro, quali sono le sfide più grandi che il Montini si trova ad affrontare?</h3>
            <p className="qa-answer">
              La prima sfida è culturale: viviamo in un tempo di smarcamento dei fini, di disorientante frammentazione del sapere. La scuola è chiamata a offrire non solo competenze, ma un orizzonte di significato. Per noi essere cristiani significa avere il coraggio di proporre una visione integrale dell'uomo, che respiri fede e ragione e sollecitazioni quotidiane. Non è sempre facile, soprattutto quando si incontra con la mentalità diffuse e con la fatica di comunicare la bellezza della fede ai più giovani. La seconda sfida è sociale: Milano cambia velocemente, le famiglie sono sotto pressione, le disuguaglianze economiche e culturali pesano. Mantenere la nostra vocazione di scuola popolare, accessibile a tutti, richiede sforzo organizzativo ed economico non indifferente, oltre alla sfida educativa in senso stretto: i ragazzi sono sempre più immersi nel digitale, hanno tempi di attenzione più brevi, a volte faticano a impegnarsi in percorsi lunghi e rigorosi. Siamo tutti impegnati a cercare il giusto equilibrio tra tradizione e innovazione, tra disciplina e creatività. Infine, c'è la sfida della comunità: il nostro modello si regge sulla partecipazione. Vogliamo e dobbiamo continuamente rigenerare la passione educativa tra genitori, docenti e studenti, perché non diventi routine o delega. Questo è molto sfidante.
            </p>
          </div>
        </div>

        {/* QUESTION 6 */}
        <div className="qa-block qa-block-navy qa-block-sogno">
          <div className="qa-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="qa-content">
            <h3 className="qa-question">Per concludere, qual è il suo sogno per il Montini dei prossimi anni?</h3>
            <p className="qa-answer">
              Che possiamo essere sempre più un luogo dove si respira la gioia di imparare. È attribuita a Chesterton quella splendida definizione della vita: "La vita è la più bella delle avventure, ma solo l'avventuriero se ne accorge". Ecco, se sapessimo diventare sempre un po' di più un contesto dove accompagnare i nostri ragazzi a scoprire se stessi e a diventare avventurieri e aventurieri della vita, senza stessi, è loro con noi, vi per davvero. Perché è solo modo, una scuola dove ragazzi siamo impegnati a scoprire se stessi e il mondo, inclinando maestri appassionati, per stringere amicizie vere. Sogno che le famiglie trovino non un servizio, ma una sorta di comunità, dove sentirsi sostenuti nel compito più importante e impegnativo: far fiorire i propri figli. E che il nostro esempio di cooperativa, di libera contribuzione, di corresponsabilità, possa essere un piccolo segno di speranza per il sistema scolastico italiano, mostrando che è più bene educazione di qualità con un'anima, senza cedere alla logica del mercato. E sogno che i nostri studenti, uscendo da liceo, portino con sé una preparazione per l'università, ma quella "spina dorsale" di cui parlava don Carlo: la capacità di impegnarsi, di scegliere il bene, di rendere il mondo migliore, con generosità e con amore profondo per i singoli. Perché, in fondo, è di questo che abbiamo bisogno: di donne e uomini liberi, competenti e con il cuore ampio dell'avventuriero.
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
