import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Menu() {
  const toggleModal = () => {
    let element = document.querySelector(".modal__container");
    let transform = document.querySelector(".modal");
    let xmark = document.querySelector(".fa-xmark");
    let body = document.querySelector("body");

    element.classList.toggle("active");
    transform.classList.toggle("transform");
    xmark.classList.toggle("transform");
    body.classList.toggle("overflowhide");
  };

  const alertNotImplemented = () =>{
    alert("Not implemented yet :)")
  }
  return (
    <div className="modal__container">
      <div className="modal__backdrop" onClick={toggleModal}></div>
      <FontAwesomeIcon
        icon="fa-solid fa-xmark"
        className="xmark"
        onClick={toggleModal}
      />
      <div className="modal">
        <div className="modal__list--container">
          <ul className="modal__lists">
            <li className="modal__list">
              <Link to="/Newcarmarket" className="modal__link">
                <p className="modal__para">M5</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="/Newcarmarket" className="modal__link">
                <p className="modal__para">M3</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="/Newcarmarket" className="modal__link">
                <p className="modal__para">7 Series</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="/" className="modal__link nostock" onClick={alertNotImplemented} >
                <p className="modal__para">8 Series</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="/" className="modal__link nostock" onClick={alertNotImplemented}>
                <p className="modal__para">IX</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="/" className="modal__link nostock" onClick={alertNotImplemented}>
                <p className="modal__para">I4</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link onClick={toggleModal} to="/Account" className="modal__link">
                <p className="modal__para">Account</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link nostock" onClick={alertNotImplemented}>
                <p className="modal__para">FAQ</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link nostock" onClick={alertNotImplemented}>
                <p className="modal__para">News</p>
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
