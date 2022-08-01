import React from "react";
import Carsnew from "../components/ui/Carsnew";

const Newcarmarket = ({ factorynew }) => {
  return (
    <div id="market__body">

        
      {factorynew.slice(0, 1).map((factorynew) => (
        <Carsnew factorynew={factorynew} key={factorynew.id} />
      ))}
    </div>
  );
};

export default Newcarmarket;
