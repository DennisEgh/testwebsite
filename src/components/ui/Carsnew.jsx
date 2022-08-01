import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carprice from "./Carprice";

const Carsnew = ({ factorynew }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = factorynew.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
  });

  return (
    <div className="card__row">

    <Link className="card__link" to={`/Newcarmarket/${factorynew.id}`} >
      <div className="card">
        {img ? (
            <>
            <div className="card__container">
              <figure className="card__figure">
                <img src={factorynew.url} alt="" />
              </figure>
              <div className="card__info">
                <h1 className="card__title">{factorynew.title}</h1>
                <ul className="card__info--lists">
                  <li className="card__list">{factorynew.model_year}</li>
                  <li className="card__list">{factorynew.fuel}</li>
                  <li className="card__list">{factorynew.mileage} miles</li>
                  <li className="card__list">{factorynew.transmission}</li>
                </ul>
                <h1 className="card__price">
                  <Carprice price={factorynew.price} />
                </h1>
              </div>
            </div>
          </>
        ) : (
            <>
            <div className="skeleton__card"></div>
          </>
        )}
      </div>
    </Link>
        </div>
  );
};

export default Carsnew;
