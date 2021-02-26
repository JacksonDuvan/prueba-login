import { useState } from 'react'

const initialState = {
    users: [],
    findUser: []
}

export const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addUser = payload => {
        setState({
            ...state,
            users: [...state.users, payload]
        })
    }
    const user = payload => {
        setState({
            ...state,
            findUser: [...state.findUser, payload]
        })
    }

    return {
        addUser,
        user,
        state
    }
}