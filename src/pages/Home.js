import { useContext } from 'react'
import { Header } from '../components/Header'
import { AppContext } from '../context/AppContext'

import '../assets/styles/pages/Home.css'

export const Home = () => {
    const { state: { findUser } } = useContext(AppContext)
    return (
        <section>
            <Header />
            <section className="section">
                {
                    findUser.length === 0 
                        ? <p>Aún no has iniciado sesión :(</p>
                        : <div>
                            <p>Hola <b>{findUser[0].name} {findUser[0].surname}</b></p>
                            <p>Tus datos son estos:</p>
                            <ul>
                                <li>Correo: {findUser[0].email}</li>
                                <li>{findUser[0].IDType}: {findUser[0].IDNumber}</li>
                                <li>Celular: {findUser[0].phone}</li>
                            </ul>
                        </div>
                }
                
            </section>
        </section>
    )
}

