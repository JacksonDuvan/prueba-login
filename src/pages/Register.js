import { FormRegister } from '../components/FormRegister'
import { LogoProtege } from '../components/LogoProtege'
import { Link } from 'react-router-dom'
import '../assets/styles/pages/Register.css'

export const Register = () => {
    return(
        <section className="Register">
            <LogoProtege/>
            <FormRegister />
            <p className="Register-p">¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
        </section>
    )
}