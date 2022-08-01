import React from 'react';
import { useParams } from "react-router-dom"

const Marketspecific = ({factorynew}) => {
    const { id } = useParams();
    const factory = factorynew.find((factorynew) => +factorynew.id === +id)
    return (
        <div>
        <img src={factory.url} alt="" />    
        </div>
    );
}

export default Marketspecific;
