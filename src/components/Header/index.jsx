import Logo from '../../assets/LOGO-CORES-SF.webp'
import './Header.css'

export default function Header() {
  return (
    <div className='container'>
      <img src={Logo} alt="Logo VoxCity" />
    </div>
  )
}