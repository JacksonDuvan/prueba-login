import { useContext, useRef, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useHistory } from 'react-router-dom'

import '../assets/styles/components/FormLogin.css'

export const FormLogin = () => {
    const [error, setError] = useState(false)
    const form = useRef(null)
    const history = useHistory()
    const { state: { users }, user } = useContext(AppContext)

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(form.current)
        const findUser = users.filter(user => 
            user.email === formData.get('email') && user.password === formData.get('password')
        )
        if(findUser.length === 0){
            setError(true)
            return
        }
        user(findUser[0])
        history.push('/')
        
    }

    return (
        <div className="Container">
            <form className="FormLogin" ref={form} onSubmit={handleSubmit} >
                <h2>INGRESO</h2>
                {error ? <p className="error">Email o contraseña son incorrectos</p> : ''}
                <div className="FormLogin-container">
                    <label htmlFor="email">
                        <span>Correo</span>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                        />
                    </label>
                    <label htmlFor="password">
                        <span>Contraseña</span>
                        <input 
                            type="password" 
                            id="password"
                            name="password"  
                        />
                    </label>
                </div>
                <button type="submit" className="btn">INGRESAR</button>
            </form>
        </div>
            
    )
}