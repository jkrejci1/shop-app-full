//Hook for the login process
//The hook for signing up so when we submit the form we submit the POST request to the server to handle the signup
import { useState } from 'react'
//Need authContext for user property data and dispatch function
import { useAuthContext } from './useAuthContext'


//Send request to signup, if successful update authContext for the current user
export const useLogin = () => {
    //Error state to show if there is one and update any 
    const [error, setError] = useState(null)

    //Loading state to be true when we start the request if you wanted some loading state or disabled state on the button when we send the request
    const [isLoading, setIsLoading] = useState(null)

    //The authContext hook to use when signing in the user and updating the state
    const { dispatch } = useAuthContext() //Grabs the dispatch function from useAuthContext to update the state

    //Function to signup attempt
    const login = async (email, password) => {
        //Set loading to true as we started a request
        setIsLoading(true)
        setError(null) //Set true every time we make a new request to reset any past errors

        //Make the POST req (proxy in json gets rid of cross errors in the servers)
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password}) //Pass the email and password in JSON format
        })

        //When we get a response to get the json data use json method
        const json = await response.json() //Will return info with the JWT if success, if not it will return an error

        //If there was a problem do this
        if (!response.ok) {
            //We got a response so we're no longer loading
            setIsLoading(false)
            setError(json.error) //Set error to error if there was one
        }

        //If response was ok, we need to update the authContext with email using a 'LOGIN' dispatch, and we also need to update the loading state to false, and also take the JWT we get back and store it in the browser so if the browser is closed and opened we still they still have that JWT stored
            //We do the above by saving to local storage
        if (response.ok) {
            //Save to local storage so you can stay logged in for a period of time
            localStorage.setItem('user', JSON.stringify(json)) //('the item', what it is) //Remember the JSON we returned from the backend here is the email and the token from the controller
        
            //Update the authContext using the authContext hook
            dispatch({type: 'LOGIN', payload: json}) //Gets set up in the authContext's reducer
            
            setIsLoading(false) //After all that the loading is done

            //Redirect to home page on successful sign up
            //window.location.href = '/'

        }

    }

    //Return signup isLoading and any errors
    return { login, isLoading, error }
}