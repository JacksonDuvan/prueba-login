import logo from '../assets/images/logo-protege.jpeg'
import '../assets/styles/components/Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="Header">
                <img src={logo} alt="Este es el logo de la empresa"/>
                <ul>
                    <li><Link to="/login">Ingresar</Link></li>
                    <li><Link to="/register">Registrarse</Link></li>
                </ul>
        </header>
    )
}