import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { factorynew } from "./factorynew.js"
import Newcarmarket from "./pages/Newcarmarket";
import Marketspecific from "./pages/Marketspecific";
import SignIn from "./pages/SignIn";




function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home factorynew={factorynew}/>}/>
          <Route path="/Newcarmarket" element={<Newcarmarket factorynew={factorynew}/>} />
          <Route path="/Newcarmarket/:id" element={<Marketspecific factorynew={factorynew} />}/>
          <Route path="/Signin" element={<SignIn />} />
   
        </Routes>
      </div>
    </Router>
  );
}


export default App;
