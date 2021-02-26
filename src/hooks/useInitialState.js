import { useState } from 'react'

const initialState = {
    users: [],
    findUser: [],
}

export const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addUser = payload => {
        setState({
            ...state,
            users: [...state.users, payload]
        })
    }
    const logIn = payload => {
        setState({
            ...state,
            findUser: [...state.findUser, payload]
        })
    }

    const signOut = () => {
        setState({
            ...state,
            findUser: []
        })
    }

    return {
        addUser,
        logIn,
        signOut,
        state
    }
}