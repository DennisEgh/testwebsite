import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown, faXmark);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
