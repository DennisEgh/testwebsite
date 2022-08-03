import React from 'react';
import Carsnew from './Carsnew';

const M5Filter = ({factorynew}) => {
    return (
        <>
        {factorynew
            .filter((factorynew) => {
                
                return factorynew.model == "BMW M5";
                
            })
            .map((factorynew) => (
                <Carsnew factorynew={factorynew} key={factorynew.id} />
                ))}
                </>

    );
}

export default M5Filter;
