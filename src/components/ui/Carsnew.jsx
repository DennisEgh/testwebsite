import React, { useEffect, useState } from "react";
import Carprice from "./Carprice";

const Carsnew = ({ factorynew }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = factorynew.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 3000);
    };
  });

 
  return (
    <div className="card">
      
      {img ? (
        <>
          <img className="imgnew" src={factorynew.url} alt="" />
          <h3 className="card__title">{factorynew.title}</h3>
          <ul>
            <li>
                <p>Maker: {factorynew.maker}</p>
                <p>Fuel: {factorynew.fuel}</p>
                <p>Transmission: {factorynew.transmission}</p>
                <p>Milage: {factorynew.mileage} miles</p>
                <p>Model year: {factorynew.model_year}</p>
                <p>Model: {factorynew.model}</p>
                <p>Type: {factorynew.type}</p>
                <p>Drive: {factorynew.drive}</p>
                <p>Price: <Carprice price={factorynew.price} /></p>
                <p>{factorynew.motorsize} cc</p>
                <p>{factorynew.horsepower} HP</p>
                
             
            </li>
          </ul>
        </>
      ) : (
        <>
          <div className="skeleton__img"></div>
        </>
      )}
    </div>
  );
};

export default Carsnew;
