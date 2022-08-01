import React, { useState } from "react";

import Nav from "../components/nav";
import Carsnew from "./ui/Carsnew";

const Carlistlanding = ({factorynew}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div id="market">
      <div id="market__body">
        <Nav />
        <div className="market__main">
          <div className="market__container">
            <div className="row">
              <form id="search" action="search" autoComplete="off">
                <input
                  className="market__input"
                  type="text"
                  placeholder="Find your car..."
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
              </form>
             
            </div>
           

            {factorynew
              
              .map((factorynew) => (
                  <Carsnew factorynew={factorynew} key={factorynew.id} />
                  ))}
                  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carlistlanding;
