import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CinqueMillePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      <section style={{ backgroundColor: 'white', padding: '80px', minHeight: 'auto' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 900, color: '#001839', margin: '0 0 50px 0', lineHeight: 1.1 }}>
            5×1000 al Montini
          </h1>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
            <p style={{ marginBottom: '24px' }}>
              Come sapete la nostra scuola, unica in Italia, si regge sulla “libera contribuzione secondo coscienza” da parte delle famiglie. L’unico contributo che ci giunge dallo Stato è legato al 5×1000 dell’Irpef, che è destinato agli enti che operano senza scopo di lucro. E’ un vero aiuto che ci viene offerto, per continuare l’opera educativa che da 43 anni il Liceo “G. B. Montini” va svolgendo.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Di conseguenza invitiamo voi, e quanti voi conoscete, a destinare il proprio 5×1000 alla nostra cooperativa educativa e didattica, sapendo che ciò non comporta un aggravio economico per voi.
            </p>

            <p style={{ marginBottom: '24px' }}>
              In questi anni tale contributo ci ha consentito di essere sempre più attenti ai ceti meno abbienti (e, dunque, di essere sempre di più una scuola per tutti), di mettere a disposizione delle famiglie e degli studenti risorse materiali ed umane più adeguate ad una “didattica educativa” attenta alle esigenze della persona. Vi ringraziamo per ciò che, attraverso questa strada che la legge dello Stato ci consente, riuscirete a fare per il sostegno della nostra scuola.
            </p>

            <p style={{ margin: 0, fontWeight: 700, color: '#001839' }}>
              Il codice da indicare è 03546070156
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
