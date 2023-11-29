//Context file for authentication

import { createContext, useEffect, useReducer } from 'react'

//Export to use in other files later
export const AuthContext = createContext() //Create the context

//Export the reducer to use elsewhere function takes in the previous state and an action
export const authReducer = (state, action) => { //Action has a type and a payload which is given from the server (frontend)
    //Cases to handle are logins and logouts (action.type describes the action)
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload } //We get that user from the server -> payload
        
        case 'LOGOUT':
            return { user: null } //What we return would be the new state
        default:
            return state //If none of these just return the original state -> if no changes then
    }
}
//Create a component that is gonna wrap our entire app and provide a value for the context
//children -> Whatever the context is wrapping
export const AuthContextProvider = ({ children }) => {
    //Register the stae using the useReducer hook
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    //Check if we have a user logged in using useEffect (if there is a user make sure that they're logged in (like when a page refreshes or you go in and out of the page etc like exiting or whatever))
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) //Get what our current local storage is for user

        //If there is a user present it will be stored in user
        if (user) {
            //If we have a user in local storage make sure they're logged in
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    console.log('AuthContext state:', state) //We'll see the state here to keep track

    //Return the template (where we wrap the root app component to provide the state value to the entire application)
    return (
        <AuthContext.Provider value={{...state, dispatch}}> {/* Makes available all the current state data and the dispatch function */}
            { children }
        </AuthContext.Provider>
    )
}