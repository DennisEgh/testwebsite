import React from 'react';
import Carsnew from './Carsnew';

const InputValueCar = ({factorynew, inputValue}) => {
    return (
       <>
             {factorynew
              .filter((factorynew) => {
                if (inputValue === "") {
                  return factorynew;
                } else if (
                  factorynew.title
                    .toLowerCase()
                    .includes(inputValue.toLocaleLowerCase())
                ) {
                  return factorynew;
                }

                return false;
              })
              .map((factorynew) => (
                <Carsnew factorynew={factorynew} key={factorynew.id} />
              ))}
       </>
    );
}

export default InputValueCar;
