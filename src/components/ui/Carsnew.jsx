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
      }, 300);
    };
  });

  return (
    <div className="card">
      {img ? (
        <>
        
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
