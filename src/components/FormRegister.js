import { useRef, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useHistory } from 'react-router-dom'

import '../assets/styles/components/FormRegister.css'

export const FormRegister = () => {
    const [error, setError] = useState(false)
    const history = useHistory()
    const { addUser } = useContext(AppContext)
    const form = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(form.current)
        const newUser = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            IDType: formData.get('IDType'),
            IDNumber: formData.get('IDNumber'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        }
        if(formData.get('password') !== formData.get('confirmPassword')){
            setError(true)
            return
        }
        addUser(newUser)
        history.push('/login')
    }
    return (
        <div className="Container">
            <form className="FormRegister" ref={form} onSubmit={handleSubmit}>
                <h2>REGISTRO</h2>
                <div className="FormRegister-container">
                    <label htmlFor="name">
                        <span>Nombre</span>
                        <input 
                            required
                            type="text" 
                            id="name"
                            name="name"
                        />
                    </label>
                    <label htmlFor="surname">
                        <span>Apellido</span>
                        <input 
                            required
                            type="text" 
                            id="surname"
                            name="surname"  
                        />
                    </label>
                </div>
                <div className="FormRegister-container">
                    <label htmlFor="phone">
                        <span>Teléfono</span>
                        <input 
                            required
                            type="tel" 
                            id="phone" 
                            name="phone" 
                        />
                    </label>
                    <label htmlFor="email">
                        <span>Correo</span>
                        <input 
                            required
                            type="email" 
                            id="email"
                            name="email"
                        />
                    </label>
                </div>
                <div className="FormRegister-container">
                    <label htmlFor="IDType">
                        <span>Tipo de identificacion</span>
                        <select required name="IDType" id="IDType" style={{color: '#A7A7A7'}}>
                            <option value="Seleccion" selected>--Seleccione--</option>
                            <option value="Cédula">Cédula</option>
                            <option value="Cédula de extranjeria">Cédula de extranjeria</option>
                            <option value="Targeta de identidad">Targeta de identidad</option>
                        </select>
                    </label>
                    <label htmlFor="IDNumber">
                        <span>Nro de identificacion</span>
                        <input 
                            required
                            type="number" 
                            id="IDNumber"
                            name="IDNumber"
                        />
                    </label>
                </div>
                {error ? <p className="error">Contraseñas incorrectas</p> : ''}
                <div className="FormRegister-container">
                    <label htmlFor="password">
                        <span>Contraseña</span>
                        <input 
                            required
                            type="password" 
                            id="password" 
                            name="password" 
                        />
                    </label>
                    <label htmlFor="confirmPassword">
                        <span>Confirmar contraseña</span>
                        <input 
                            required
                            type="password" 
                            id="confirmPassword"
                            name="confirmPassword"
                        />
                    </label>
                </div>
                <button type="submit" className="btn">REGISTRARME</button>
            </form>
        </div>
            
    )
}