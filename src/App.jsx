import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import { factorynew } from "./factorynew.js";
import Newcarmarket from "./pages/Newcarmarket";
import Marketspecific from "./pages/Marketspecific";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Account from "./pages/Account";
import { auth } from "./firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "./components/Footer";
import Profilesettings from "./pages/Profilesettings";

function App() {
  const [user, setUser] = useState({});
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserExists(true);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home user={user} setUser={setUser} factorynew={factorynew} />
            }
          />
          <Route
            path="/Newcarmarket"
            element={<Newcarmarket factorynew={factorynew} />}
          />
          <Route
            path="/Newcarmarket/:id"
            element={<Marketspecific factorynew={factorynew} />}
          />
          <Route
        
            path="/SignIn"
            element={
              userExists ? (
                <Navigate replace to="/Account" />
              ) : (
                <SignIn
                  user={user}
                  setUser={setUser}
                  setUserExists={setUserExists}
                />
              )
            }
          />
          <Route
            path="/Register"
            element={userExists ? <Navigate replace to="/" /> : <Register />}
          />
          <Route
            path="/Account"
            element={
              userExists ? (
                <Account
                  user={user}
                  setUser={setUser}
                  setUserExists={setUserExists}
                  userExists={userExists}
                />
              ) : (
                <Navigate replace to={"/SignIn"} />
              )
            }
          />
          <Route
            path="/Profilesettings"
            element={
              userExists ? (
                <Profilesettings
                  user={user}
                  setUser={setUser}
                  setUserExists={setUserExists}
                />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
