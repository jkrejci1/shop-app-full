//Component for the navbar 
//Use the Link property to create links in navbar
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

//Component for the navbar
const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    //Function for handeling logout click
    const handleClick = () => {
        //Call the logout function
        logout()
    }
    

    return (
        <header>
            <div className="navbar">
                {/* Title which is also a button to the home page */}

                {/* WELCOME USER HERE WHEN THEY'RE LOGGED IN */}

                <div className="titleSection">
                    <Link to="/">
                        <h1 className="titleHeader">The Shop</h1>
                    </Link>
                    {user && (
                        <h3 className="welcomeMsg">Welcome {user.email}</h3>
                    )}
                </div>
                {/* Makes sure this only shows when there is no user logged in */}
                {/* Routes need to match the routes from app.js */}
                <div className="logSearchSection">
                    <div className="userData">
                        {!user && (
                            <div>
                                <Link className="login" to="/login">Login</Link>
                                <Link className="signup" to="/signup">Signup</Link>
                            </div>
                        )}
                        {/* Makes sure we only output this html if we have a user logged in */}
                        {user && (
                            <div>
                                <button onClick={handleClick}>Log out</button>
                            </div>
                        )}

                    </div>



                
                </div>
            </div>
        </header>
    )
}

//Export the navbar
export default Navbar
