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
            5×1000 to Montini
          </h1>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
            <p style={{ marginBottom: '24px' }}>
              As you know, our school, unique in Italy, is supported by "free contributions according to conscience" from families. The only contribution we receive from the state is the 5×1000 income tax (IRPEF), which is earmarked for non-profit organizations. This is a real help, enabling us to continue the educational work that the "GB Montini" high school has been carrying out for 43 years.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Therefore, we invite you, and everyone you know, to donate your 5×1000 to our educational and teaching cooperative, knowing that this will not entail any financial burden for you.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Over the years, this contribution has allowed us to increasingly focus on the less well-off (and, therefore, to increasingly be a school for all), to provide families and students with more adequate material and human resources for an "educational teaching" that is attentive to the needs of each individual. We thank you for all that you will be able to do to support our school through this path permitted by state law.
            </p>

            <p style={{ margin: 0, fontWeight: 700, color: '#001839' }}>
              The code to indicate is 03546070156
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
