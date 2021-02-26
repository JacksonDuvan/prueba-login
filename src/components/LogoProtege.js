import logo from '../assets/images/logo-protege.jpeg'
import '../assets/styles/components/Logo.css'
import { Link } from 'react-router-dom'

export const LogoProtege = () => {
    return <Link to="/"><img className="Logo" src={logo} alt="Este es el logo de la empresa"/></Link>
}