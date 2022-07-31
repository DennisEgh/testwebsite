import React from 'react';

const Carprice = ({price}) => {
    return (
    <>
    ${price.toFixed(3).replaceAll(".", ",")}
    </>
    );
}

export default Carprice;
