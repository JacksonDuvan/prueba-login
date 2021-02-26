import { FormLogin } from '../components/FormLogin'
import { LogoProtege } from '../components/LogoProtege'
import { Link } from 'react-router-dom'
import '../assets/styles/pages/Login.css'

export const Login = () => {
    return(
        <section className="Login">
            <LogoProtege/>
            <FormLogin />
            <p className="Login-p">¿Aún no estás registrado? <Link to="/register">Registrarme</Link></p>
            <p className="Login-p">¿Aún no estás registrado? <Link to="#">Recuperar contraseña</Link> </p>
        </section>
    )
}