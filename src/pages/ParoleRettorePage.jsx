import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'

export default function ParoleRettorePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="hero parole-rettore-hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 100%), url(/Book122.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content parole-rettore-content">
          <h2 className="parole-rettore-title">Le parole del rettore</h2>
          <p className="hero-eyebrow" style={{ marginTop: '40px' }}>In preparazione alla Pasqua</p>
          <h1 style={{ marginTop: '60px', fontSize: '72px', fontWeight: 900, lineHeight: 1.1 }}>
            RESPIRARE <span style={{ backgroundColor: '#8B0A2A', color: 'white', padding: '12px 24px', display: 'inline-block' }}>IN DIO</span>
          </h1>
          <p className="hero-sub">Francesco e le Laudi di Dio altissimo</p>
        </div>
      </section>

      {/* CONTENT BLOCK */}
      <section className="parole-content-block">
        <div className="parole-text-content">
          <p className="parole-quote">
            "Un tale chiese al Rabbi: "Che strana maledizione è quella con cui Dio ha maledetto il serpente: mangerai la polvere!
          </p>

          <p className="parole-text">
            Se Dio gli ha dato la natura di potersi cibare di questa, mi sembra piuttosto una benedizione che esso possa trovare dappertutto ciò di cui ha bisogno per vivere!" Rispose il Rabbi: "All'uomo Dio ha detto che avrebbe mangiato il pane col sudore della sua fronte e che se gli fosse mancato si rivolgesse a Dio per aiuto; alla donna ha detto che avrebbe partorito con dolore e che, se l'ora le fosse stata troppo grave, pregasse Dio di concederle sollievo. Così ambedue sono legati a Lui e trovano la strada verso lui. Al serpente, invece, Dio ha dato tutto ciò di cui ha bisogno, perché non abbia alcuna preghiera da rivolgerGli. Così Dio provvede talora i cattivi di grandi ricchezze".
          </p>

          <p className="parole-attribution">
            (M. Buber, I racconti dei Chassidim)
          </p>
        </div>

        <div className="parole-image">
          {/* Tu sei santo image */}
        </div>
      </section>

      {/* SECOND CONTENT BLOCK */}
      <section className="parole-content-block-navy">
        <div className="parole-image-left">
          {/* Un tale chiese image */}
        </div>

        <div className="parole-text-content-right">
          <p className="parole-text-italic">
            Tu sei santo, Signore solo Dio, che compi meraviglie.<br />
            Tu sei forte, Tu sei grande, Tu sei altissimo,<br />
            Tu sei onnipotente, Tu, Padre santo, re del cielo e della terra.<br />
            Tu sei trino ed uno, Signore Dio degli dèi,<br />
            Tu sei il bene, ogni bene, il sommo bene,<br />
            Signore Dio vivo e vero.<br />
            Tu sei amore e carità, Tu sei sapienza,<br />
            Tu sei umiltà, Tu sei pazienza,<br />
            Tu sei bellezza, Tu sei sicurezza, Tu sei quiete,<br />
            Tu sei gaudio e letizia, Tu sei la nostra speranza,<br />
            Tu sei giustizia e temperanza,<br />
            Tu sei tutto, ricchezza nostra a sufficienza.
          </p>

          <div className="parole-divider">
            <i className="fas fa-cross"></i>
          </div>

          <p className="parole-text-lower">
            Il Signore ti benedica e ti custodisca,mostri a te il suo volto e abbia misericordia di te. Rivolga verso di te il suo sguardo e ti dia pace.<br />
            Il Signore benedica te, frate Leone.
          </p>

          <p className="parole-attribution">
            (Fonti Francescane 261-262)
          </p>
        </div>
      </section>

      {/* THIRD CONTENT BLOCK - PER IL BISOGNO DI LEONE */}
      <section className="parole-leone-block">
        <div className="parole-leone-content">
          <div className="parole-leone-quote-wrapper">
            <div className="parole-leone-text-block">
              <h3 className="parole-leone-title">PER IL BISOGNO DI LEONE</h3>

              <p className="parole-leone-text">
                Mentre il Santo era sul monte della Verna, chiuso nella sua cella, un confratello desiderava ardentemente di avere a sua consolazione uno scritto contenente parole del Signore con brevi note scritte di proprio pugno da san Francesco. Era infatti convinto che avrebbe potuto superare o almeno sopportare più facilmente la grave tentazione, non della carne ma dello spirito, da cui si sentiva oppresso. Pur avendo un vivissimo desiderio, non osava confidarsi col Padre santissimo ma ciò che non di disse la creatura, allora rivelò lo Spirito. Un giorno Francesco lo chiama: «Portami carta e calamaio, perché voglio scrivere le parole e i lodi del Signore, come le ho meditate nel mio cuore». Subito gli portò quanto aveva chiesto, ed egli, di sua mano, scrisse le Lodi di Dio e le parole che aveva in animo. Alla fine aggiunse la benedizione del frate e gli disse: «Prenditi questa piccola carta e custodiscila con cura sino al giorno della tua morte». Immediatamente fu liberato da ogni tentazione, e lo scritto, conservato, ha operato in seguito cose meravigliose.
              </p>

              <p className="parole-leone-attribution">
                (2 Cel 49: FF 635)
              </p>
            </div>
          </div>
        </div>

        <div className="parole-leone-image">
          {/* Saint Francis image */}
        </div>
      </section>

      {/* FOURTH CONTENT BLOCK - LA SAPIENZA DI UN POVERO */}
      <section className="parole-sapienza-block">
        <h2 className="parole-sapienza-title">Da E. Leclerc, La sapienza di un povero</h2>

        <div className="parole-sapienza-container">
          <div className="parole-sapienza-left">
            <p>
              Saltando dall'una all'altra pietra, Leone si affrettò ad attraversare il torrente Francesco gli tenne dietro, ma ci impiegò più tempo. Leone, che lo aspettava in piedi sull'altra riva, guardava l'acqua limpida che sgorgava dal sole fra le rocce grigie. Quando Francesco si tolse raggiunto, Leone stava ancora nella sua attitudine contemplativa. Percuò che non poteva più allontanarsi di parte, si sedette. Francesco lo guardò e sorrise trise.
            </p>

            <p>
              Hai l'aria pensosa – gli disse Francesco.
            </p>

            <p>
              Se mi potessimo dispone di un po' di questa purezza – rispose Leone – potremmo conoscere anche noi la gioia folle de esuberante della nostra sorella acqua, nonché il suo slancio irresistibile.
            </p>

            <p>
              Trasparire in queste parole una profonda nostalgia. E lo sguardo di Leone fissava, colmo di tristezza, il ruscello che continuava a scorrere nella sua inarestabile purezza.
            </p>

            <p>
              Vieni – disse Francesco, tirandolo per un braccio.
            </p>

            <p>
              E risposero entrami il cammino. Dopo una pausa di silenzio, Francesco chiese a Leone.
            </p>

            <p>
              Sai tu, fratello, in che cosa consiste la purezza del cuore?
            </p>

            <p>
              Nel non aver nessuna colpa da rimproverarsi – rispose Leone senza esitare.
            </p>

            <p>
              Allora comprenda la tua tristezza – sogghignse Francesco – giacché abbiamo sempre qualcosa da rimproverarsi.
            </p>

            <p>
              Si – sogghignse Leone – ed è questo pensiero che mi fa disperate d'attingere un giorno la purezza del cuore.
            </p>

            <p>
              Ah, frate Leone, credimi – ribattè Francesco – non ti preoccupare tanto della purezza dell'anima tua. Volgi lo sguardo a Dio. Ammiralo. Rallegrali di Lui che è tutto è soltanto santità. Renditi grazie per Lui stesso. Questo, apunto, significa avere il cuore puro.
            </p>

            <p>
              E quando ti rivoli a Dio, cos. guardali bene dal torrents a ripetargli su te stesso. Non chiedere mai a che punto sei tu stesso in importanza e a pescare con un sentimento umano. Dopo umana. Bisogna guardare più in alto, molto più in alto. Cè Dio, l'immenisità di Dio ed il suo Signore vivo è vero.
            </p>
          </div>

          <div className="parole-sapienza-image">
            {/* La sapienza image */}
          </div>

          <div className="parole-sapienza-right">
            <p>
              Il cuore puro non si interessa che alla esistenza stessa di Dio, ed è capace, pur in mezzo alle miserie e alle pene, di conservare una gioia genuina della gloia di Dio. Un cuore affetto al tempo stesso sgombro e ricolmo. Dà baste che perseveri a confidare la pace, e tutti la sua gioia. Dio stesso diventa allora la sua santità.
            </p>

            <p>
              Dio, nondimeno, esige da noi che ci sforzi d'essegui fedeli – face osservare Leone.
            </p>

            <p>
              Si, senza dubbio – sogghignse Francesco – Ma la santità non consiste in un compimento del proprio essere è essa stessa il fondamentale. In uno stato che si scoperchiare in noi et s'accella, e che Dio ricima di sé nella misura in cui noi ci apriamo verso la misteriosissima.
            </p>

            <p>
              La nostra miseria, allorcché viene accettata, diventa lo spazio libero dove Dio puó ancora agire. Il Signore non consente al nessere di foggliargli la gloria. Egli è il Signore, l'unico. Solito Santo. Ma vuole il povero per mano, ve lo conduce verso la destra della gloria. Dio diventa la tal quale azzurro dell'anima sua.
            </p>

            <p>
              Contempla la gloria di Dio, frate Leone, scoptire che Dio è Dio, e che per sempre, ben oltre la nostra condizione umana, rallegrärsi dell'essere di Dio. Che etema giovamza, renderai grazie per Lui stesso e per la sua misericordia che non vera mai meno, tutto ciò costituisce la preghiera e l'abitutto. che l'avvenga lo Spirito di Dio non esserre differenziare nei nostri cuori. In città, appianto, consacrate per noi l'avere il cuore puro.
            </p>

            <p>
              Ma questa purezza non si ottiene con la forza di pugni tesi nel con lo spasimo che sillè – chiese Leone.
            </p>

            <p>
              Bisogna semplicemente sporliarci di tutto. Far piazza pulita. Accettare la nostra poverta. Rinunciare a tutto ciò che pesa perfino al passo del nostri peccati. Non esiste alto che la gloria di Signore irradiante. Ci basta la Dio estea. Allora il cuore si fa piú leggero et non aspira più ad atteso, come l'alisolla imbriata nello spazio d'azzurro. Libero da ogni cosa e preoccupazione, il cuore non aspira se non ad una perfezione che coincide con la pura e semplice volonta divina.
            </p>
          </div>
        </div>
      </section>

      {/* FIFTH CONTENT BLOCK - PER IL BISOGNO DI FRANCESCO */}
      <section className="parole-francesco-block">
        <div className="parole-francesco-content">
          <h2 className="parole-francesco-title">PER IL BISOGNO DI FRANCESCO</h2>

          <p className="parole-francesco-text">
            Il beato Francesco due anni prima della sua morte fece nel luogo de La Verna una quaresima a onore della Beata Vergine Madre di Dio e del beato Michele Arcangelo, dalla festa dell'Assunzione al santa Maria Vergine fino alla festa di san Michele di settembre; e scese su di lui la mano del Signore donò la visione e le parole del Serafino e l'impressione delle stimmate di Cristo nel suo corpo, fece questi doti scritte all'altro lato della pergamena e le scrisse di sua mano, rendendo grazie a Dio per il beneficio a lui fatto.
          </p>

          <p className="parole-francesco-quote">
            "Il beato Francesco scrisse di suo pugno questa benedizione a me, frate Leone."
          </p>

          <p className="parole-francesco-quote">
            "Allo stesso modo fece lui, di sua mano, questo segno del Tau col capo."
          </p>

          <p className="parole-francesco-attribution">
            (FF 262)
          </p>
        </div>
      </section>

      {/* SIXTH CONTENT BLOCK - AUTOBIOGRAPHY BLOCK */}
      <section
        className="parole-autobiography-block"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 27, 62, 0.7), rgba(13, 27, 62, 0.7)), url(/Saint%20Francis.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="parole-autobiography-content">
          <p className="parole-autobiography-text">
            Dalle pagine autobiografiche di Eloi Leclerc, frate francescano internato nei lager nazisti e sopravvissuto allo sterminio (in E. Leclerc, Francesco. Un sogno da Assisi)
          </p>

          <p className="parole-autobiography-text">
            Andavo col pensiero alla mia Bretagna, alla città di Landernau, alla mia casa, agli anni della mia infanzia trascorsi nella gioia e nella spensieratezza... Come tutto sembrava lontano! Lontano e irreale, come un sogno. Mi dicevo: se i miei genitori mi vedessero nello stato in cui ora mi trovo, nemmeno mi riconoscerebbero.
          </p>

          <p className="parole-autobiography-text">
            Eravamo sfigurati, spaventosamente scheletriti, neri di sporcizia, con gli occhi sconvolti. Ah, che cosa strana è il destino umano! con i miei compagni nel cortile della scuola, o a casa con i miei fratelli e le mie sorelle, come potevo immaginare che un giorno mi sarei trovato prigioniero, affamato, agonizzante, in un treno che procedeva tra le montagne della Boemia? Quale mano invisibile e misteriosa ha potuto portarmi fino a qui? E perché?
          </p>

          <p className="parole-autobiography-text">
            Mi veniva in mente la canzone che una volta avevamo imparato a scuola:<br />
            Raccontaci, ruscello che nasci tra i giunchi<br />
            per gli uccelli raccontaci, ruscello<br />
            dalle fresche acque perché inizi il tuo corso?
          </p>

          <p className="parole-autobiography-text">
            Il ruscello aveva iniziato il suo corso, ma non sapeva dove andava né ciò che l'aspettava. Sognava «pianure bionde» e sospiri blu» dalle acque tranquille e trasparenti. La realtà era ben diversa. La realtà era davanti ai nostri occhi. Migliaia di uomini, giovani in maggioranza, morivano nel pio assoluto abbandono, nella più tremenda solitudine, e un capo che stava morendo, si trovava da solo. Poteva smarrirsi la mano. La mano si tendeva, e la speranza nel vuoto. Nessuno l'afferrava. Per colmo di sventura la pioggia si era messa a cadere, fredda, persistente. Nel nostro vagone a cielo aperto eravamo intirizziti dal freddo. Non c'erano bevande calde per riscaldarci. Ma d'altronde, si può riscaldare uno scheletro? E i morti? Ce n'erano sempre di più. La maggior parte morivano di stenti. Alcuni di dissenteria; altri di ensispela. Questi erano orribili da vedersi. In una notte, in un giorno, diventavano irriconoscibili. I loro volti tumefatti, in fiamme, erano completamente sfigurati. Deliranti per la febbre, questi infelici urlávano durante la notte: volevano da bere. Le SS ti facevano tacere a colpi di fucile. E al mattino trovavamo i loro corpi irrigiditi dalla morte.
          </p>

          <p className="parole-autobiography-text">
            Annegavamo in un mare di sofferenza. Il senso di abbandono alla ferocia degli uomini e del destino era più forte che mai. Accadde allora un fatto straordinario, per quanto di valore peculiarmente interiore.
          </p>
        </div>
      </section>

      {/* SEVENTH CONTENT BLOCK - CANTICO BLOCK */}
      <section
        className="parole-cantico-block"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 10, 42, 0.75), rgba(139, 10, 42, 0.75)), url(/ww2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 63%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="parole-cantico-content">
          <p className="parole-cantico-text">
            Nel nostro vagone eravamo in quattro frati francescani. Uno di noi era in fin di vita. Già i suoi occhi si stavano spegnendo e ci aveva quasi lasciati. Ora, mentre lui moriva, il Cantico di frate Sole di Francesco d'Assisi ci levava un poco sull'in modo spontaneo, e lo cantavamo. Sembrava un comportamento dispersato! Come potevamo cantare un canto simile in un simile momento?
          </p>

          <p className="parole-cantico-text">
            Eppure era l'unico linguaggio che ci appariva adeguato alla dismisura di ciò che vivevamo. Le nostre voci fioche si levavano come un soffio fragile. Non era che un fil di voce, schiacciato dal scorrere del treno e del destino. Ma era il canto dell'universo. Cantavamo lo splendore della creazione, la luce, la vita, la grande fraternità cosmica e umana.
          </p>

          <p className="parole-cantico-text">
            Laudato sie, mi Signore, cun tutte le tue creature,<br />
            spezialmente messer lo frate Sole,<br />
            lo quale è iorno, e allumini noi per lui.<br />
            Ed ello è bello e radiante cun grande splendore:<br />
            de te, Altissimo, porta significazione [...]
          </p>

          <p className="parole-cantico-text">
            Sì, come potevamo cantare un simile canto di luce in situazione di tenebre in cui l'uomo non era nient'altro che un giocattolo del destino? E – cosa ancor più sorprendente – nessuno ci obbligava! Eravamo trasportati da una forza invisibile. Era lei che cantava in noi. Non si trattava di una sfida stoica o eroica, lanciata al destino. Non era la disperata affermazione dell'uomo e della sua grandezza di fronte a un mondo che lo ignora e lo schiaccia. Non era nemmeno un'evasione mistica in un retromondo di sogno. Era tutt'altra cosa. La forza invisibile che si esprimeva in quel canto di faceva vivere il nostro destino. In quel preciso momento, come mistero. Vivere il proprio destino come mistero e scoprire in esso una densità di senso che oltrepassa gli stessi avvenimenti. Ci si sente improvvisamente come portati da una mano onnipotente. Vive in pienezza, chi vive il proprio destino come mistero. Fu un momento unico. Una sorta di visitazione dall'alto. Un raggio di sole tra la nebbia. Poi, di nuovo tutto si spense. Eravamo stati vittime di un'illusione? No, c'era una presenza nascosta nello svolgersi della nostra vita. La domanda, tuttavia, rimàneva aperta: perché questa tragedia dell'uomo? E, in questa tragedia, perché d'improvviso il Cantico di frate Sole di Francesco d'Assisi? Questa domanda mi avrebbe accompagnato per tutta la vita.
          </p>
        </div>
      </section>

      {/* EIGHTH CONTENT BLOCK - CONCLUSIONE */}
      <section className="parole-conclusione-block">
        <div className="parole-conclusione-image">
          {/* Il respiro del povero image */}
        </div>

        <div className="parole-conclusione-content">
          <h2 className="parole-conclusione-title">Conclusione – Il respiro del povero</h2>

          <p className="parole-conclusione-text">
            Dall' "Io" al "Tu": La guarigione di Leone non nasce da uno sforzo di volontà, ma da un cambio di prospettiva. Francesco lo invita a smettere di misurare la propria purezza e a iniziare a misurare la bellezza di Dio. Le Laudi sono il diario di questo spostamento: un elenco di "Tu sei" che libera l'uomo dal peso del proprio ego.
          </p>

          <p className="parole-conclusione-text">
            La ferita è una feritoia: Le stigmate di Francesco e le miserie di Leone non sono segni di fallimento, ma luoghi di comunione. La santità non è purezza di sé, ma un "vuoto accolto" che permette a Dio di diventare, come dice Leclerc, "l'azzurro dell'anima".
          </p>

          <p className="parole-conclusione-text">
            Cantare nell'abisso: L'esperienza dei frati nei lager ci insegna che la lode non è un sentimento per tempi sereni, ma un atto di resistenza spirituale. Cantare il Cantico delle Creature nel fango significa riconoscere che, se Dio è Dio, allora il senso della vita abita anche nel dolore più muto.
          </p>

          <p className="parole-conclusione-text">
            Per "respirare in Dio" non serve essere integri, ma essere aperti.
          </p>

          <p className="parole-conclusione-text">
            "Ci basta che Dio esista. Allora il cuore si fa più leggero e non sente più sé stesso, come l'allodola inebriata di spazio e d'azzurro." (E. Leclerc, La sapienza di un povero)
          </p>
        </div>
      </section>

      {/* NINTH SECTION - ASCOLTA GLI AUDIO */}
      <section className="ascolta-audio-section">
        <h2 className="ascolta-audio-title">ASCOLTA GLI AUDIO</h2>

        <div className="audio-players-container">
          {/* AUDIO PLAYER 1 */}
          <div className="audio-player-card">
            <div className="audio-header">
              <span className="audio-institute">ISTITUTO G.B. MONTINI</span>
              <div className="audio-menu">
                <button className="menu-btn" onClick={(e) => {
                  const menu = e.currentTarget.nextElementSibling;
                  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                }}>⋮</button>
                <div className="menu-dropdown">
                  <a href="/Incontro-pasquale-con-i-genitori.mp3" download>Scarica</a>
                  <button className="speed-btn">Velocità di riproduzione</button>
                </div>
              </div>
            </div>

            <h3 className="audio-title">Incontro pasquale con i genitori</h3>

            <audio className="audio-player" controls>
              <source src="/Incontro-pasquale-con-i-genitori.mp3" type="audio/mpeg" />
              Il tuo browser non supporta l'elemento audio.
            </audio>
          </div>

          {/* AUDIO PLAYER 2 */}
          <div className="audio-player-card">
            <div className="audio-header">
              <span className="audio-institute">ISTITUTO G.B. MONTINI</span>
              <div className="audio-menu">
                <button className="menu-btn" onClick={(e) => {
                  const menu = e.currentTarget.nextElementSibling;
                  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                }}>⋮</button>
                <div className="menu-dropdown">
                  <a href="/Omelia-Santa-Messa-di-Pasqua.mp3" download>Scarica</a>
                  <button className="speed-btn">Velocità di riproduzione</button>
                </div>
              </div>
            </div>

            <h3 className="audio-title">Omelia Santa Messa di Pasqua</h3>

            <audio className="audio-player" controls>
              <source src="/Omelia-Santa-Messa-di-Pasqua.mp3" type="audio/mpeg" />
              Il tuo browser non supporta l'elemento audio.
            </audio>
          </div>
        </div>
      </section>

      <VideoTour />
      <Footer />
      <ScrollTop />
    </>
  )
}
