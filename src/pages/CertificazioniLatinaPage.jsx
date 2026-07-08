import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import VideoTour from '../components/VideoTour'
import SidebarNavigation from '../components/SidebarNavigation'

export default function CertificazioniLatinaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', minHeight: 'auto' }}>
        <SidebarNavigation category="certificazioni" />

        <div style={{ flex: 1, padding: '60px 80px', backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '44px', fontWeight: 900, color: '#001839', margin: '0 0 10px 0', lineHeight: 1.2 }}>
            Certificazioni Lingua Latina (CLL)
          </h1>

          <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#555', margin: '0 0 40px 0' }}>
            Al Montini il latino diventa competenza certificata, con un ruolo di primo piano a livello regionale e nazionale.
          </p>

          {/* Center image */}
          <div style={{ margin: '0 0 40px 0', overflow: 'hidden', borderRadius: '16px', height: '460px', backgroundImage: 'url(/Certificazionilingua%20latina.jfif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
            <p style={{ marginBottom: '24px' }}>
              Alcuni anni fa su sollecitazione di due docenti universitari (prof. Guido Milanese dell'Università Cattolica e prof. Massimo Gioseffi dell'Università Statale) alcuni insegnanti si incontrarono per proporre a livello lombardo una certificazione della lingua latina, in continuazione di quanto già sperimentato in Liguria.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Essa, fin dall'inizio, non voleva essere uno dei numerosi e pregevoli concorsi di traduzione che si trovano nella nostra penisola per gli studenti eccellenti ma, sul modello delle lingue straniere, voleva testare le competenze linguistiche in latino degli studenti della secondaria di secondo grado nei livelli A1, A2, B1 e B2. Da allora strada se ne è fatta: l'ente certificatore, la CUSL (Consulta Universitaria di Studi Latini), ha adottato a livello nazionale il modello lombardo.
            </p>

            <p style={{ margin: 0 }}>
              L'Istituto Montini, fin dall'inizio, ha fatto parte di questo progetto, come membro del tavolo di lavoro presso l'Ufficio Scolastico Regionale (USR). Da tre anni, inoltre, è l'unico istituto paritario in Lombardia sede di svolgimento della prova, assieme all'Università Statale di Pavia, all'Università Cattolica di Brescia e ai più rinomati licei statali lombardi. Il nostro contributo a livello regionale alla riflessione sulla didattica delle lingue classiche si è ulteriormente arricchito dall'anno scorso, quando è stata creata una Rete dei Licei Classici Lombardi, con progetti sulla didattica della lingua greca: anche in questo caso il nostro liceo è al momento l'unica scuola paritaria a far parte di questo importante progetto.
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
