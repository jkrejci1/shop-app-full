//The signup page
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    //Use useState to keep track of what user is typing into the fields
    //[state, stateFunction] = useState(<initial value>)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    //The handleSubmit function (use async as we're calling the backend)
    const handleSubmit = async (e) => {
        //When we submit the default behavior is to refresh the page, prevent it
        e.preventDefault()

        //Log the email and password to make sure it worked 
        await login(email, password)
    }
    //Return the template
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)} //When value of this changes, update the email state
                value={email} //If change email outside, do this to reflect that change
            />

            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)} //When value of this changes, update the email state
                value={password} //If change password outside, do this to reflect that change -> Two way data-binding
            />

            <button>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

//Export the page to use in app
export default Login