import React from "react";
import Nav from "../components/nav";
import Carsnew from "../components/ui/Carsnew";

const Newcarmarket = ({ factorynew }) => {
  return (
    <div id="market">

    <div id="market__body">
    <Nav />
      <div className="market__main">
        <div className="market__container">
            <div className="row">


        {factorynew.slice(0, 1).map((factorynew) => (
            <Carsnew factorynew={factorynew} key={factorynew.id} />
            ))}
            </div>
            </div>
      </div>
    </div>
        
  </div>
  );
};

export default Newcarmarket;
