import { useAuthContext } from "./useAuthContext"

//Hook to use when logging out a user
export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        //We can change the global state and delete jwt then technically we're logged out because that's what we need to stay logged in

        //Remove user from storage
        localStorage.removeItem('user') //As that's what we called it in the useSignup hook
    
        //Dispatch a logout action
        dispatch({type: 'LOGOUT'}) //Don't have a payload as it gets set to null in contexy
    }

    return{logout}
}