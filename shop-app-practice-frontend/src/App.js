//Main App
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';

import { useAuthContext } from './hooks/useAuthContext';
//Pages and components
import Navbar from './components/Navbar';
import Login from './pages/login';
import Signup from './pages/Signup';

function App() {
  //Grab a possible user
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route 
                path="/"
                element={<Home />}
            />
            {/* Routes for logging in and signing up */}
            <Route
                /* Use the path here route to return the login element */
                path="/login"
                element={!user ? <Login /> : <Navigate to="/"/>} /* If we have a user logged in, navigate to home */
              />
              <Route 
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/"/>}
              />
            {/* Then create a page for shopping for our item types */}
            <Route 
                path="/fishing"
                element={<Shop />}
              />
              <Route 
                path="/tools"
                element={<Shop />}
              />
              <Route 
                path="/kitchen"
                element={<Shop />}
              />
              <Route 
                path="/gardening"
                element={<Shop />}
              />   
   
            {/* Create a page for a user cart (protected route for users only) */}

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
