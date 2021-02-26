import { useContext } from 'react'
import logo from '../assets/images/logo-protege.jpeg'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

import '../assets/styles/components/Header.css'

export const Header = () => {
    const { signOut, state: { findUser } } = useContext(AppContext)
    return (
        <header className="Header">
                <img src={logo} alt="Este es el logo de la empresa"/>
                {
                    findUser.length === 0 
                     ? <ul>
                        <li><Link to="/login">Ingresar</Link></li>
                        <li><Link to="/register">Registrarse</Link></li>
                    </ul>
                    : <ul>
                        <li><Link to="/" onClick={() => signOut()}>Cerrar Sesión</Link></li>
                    </ul>
                }
        </header>
    )
}