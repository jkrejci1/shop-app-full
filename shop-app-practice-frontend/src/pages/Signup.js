//The signup page
import { useState } from 'react';
//Impor the signup hook
import { useSignup } from '../hooks/useSignup';


const Signup = () => {
    //Use useState to keep track of what user is typing into the fields
    //[state, stateFunction] = useState(<initial value>)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Get access to the signup data, error, and loading
    const {signup, error, isLoading } = useSignup()
    //The handleSubmit function (use async as we're calling the backend)
    const handleSubmit = async (e) => {
        //When we submit the default behavior is to refresh the page, prevent it
        e.preventDefault()

        //Log the email and password to make sure it worked TEST
        //console.log(email, password)

        //Use the signup function
        await signup(email, password)
    }

    //Return the template
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

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

            {/* Have the button disappear during any loading */}
            <button disabled={isLoading}>Sign up</button>
             {/* Pass an error if there is one */}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

//Export the page to use in app
export default Signup