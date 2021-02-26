import { useContext } from 'react'
import { Header } from '../components/Header'
import { AppContext } from '../context/AppContext'

export const Home = () => {
    const { state: { findUser } } = useContext(AppContext)
    console.log(findUser)
    return (
        <section>
            <Header />
            <section>
                {
                    findUser.length === 0 
                        ? <h1>Aún no has iniciado sesión :(</h1>
                        : <h1>Hola {findUser[0].name}</h1>
                }
                
            </section>
        </section>
    )
}