import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const logos = [logo1, logo2, logo3, logo4]

export default function LogoBar() {
  return (
    <div className="logo-bar">
      {logos.map((src, i) => (
        <div className="logo-bar-item" key={i}>
          <img src={src} alt={`partner-${i + 1}`} />
        </div>
      ))}
    </div>
  )
}
