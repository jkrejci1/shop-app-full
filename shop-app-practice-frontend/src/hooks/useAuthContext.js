//Import the hooks we need
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

//Used to consume the context and return the context to make sure we are in the scope of that context and we're not outside of the root app component
//So if we want any context values in the future in front end, use this hook
//So every time we want to use our workouts data, invoke this useWorkoutsContext hook to get that context back
    //So we would invoke this hook and destructure the user from the context object; Also we still have the dispatch function to that we can use in other components to update the state
export const useAuthContext = () => {
    const context = useContext(AuthContext) //This hook returns the value of the WorkoutsContext -> what we passed in provider comp of WorkContxt

    //Check if we are within the scope of the context we're using
    //If its being outisde the component tree, it would return null, so throw an error
    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }
    return context
}