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
              <Link to="" className="modal__link">
                <p className="modal__para">M5</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">X6</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">7 Series</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">8 Series</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">IX</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">X3</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">Factory New</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">Pre-Owned</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">Trade-In</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">Test Drive</p>
              </Link>
            </li>
            <li className="modal__list">
              <Link to="" className="modal__link">
                <p className="modal__para">Insurance</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
