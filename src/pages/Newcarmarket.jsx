import React from 'react';
import Carsnew from '../components/ui/Carsnew';

const Newcarmarket = ({factorynew}) => {

    
    return (
      
      <div className="card__container">

      {factorynew.map((factorynew) =>
      
      <Carsnew factorynew={factorynew} key={factorynew.id}/>
      )}
      </div>
    
    );
}

export default Newcarmarket;
