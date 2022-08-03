import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { factorynew } from "./factorynew.js";
import Newcarmarket from "./pages/Newcarmarket";
import Marketspecific from "./pages/Marketspecific";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Account from "./pages/Account";
import { auth } from "./firebase/init";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user.email);
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
            path="/Signin"
            element={<SignIn user={user} setUser={setUser} />}
          />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Account"
            element={<Account user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
