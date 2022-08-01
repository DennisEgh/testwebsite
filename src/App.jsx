import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { factorynew } from "./factorynew.js"
import Newcarmarket from "./pages/Newcarmarket";
import Nav from "./components/nav";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home factorynew={factorynew}/>}/>
          <Route path="/Newcarmarket" element={<Newcarmarket factorynew={factorynew}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
