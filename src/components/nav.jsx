import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <>
      <div className="nav__container--upper">
        <img
          className="mcert"
          src="https://pictures.dealer.com/b/bmwgroup/1858/508a3c2f38c3287198e5d9ec1b764650x.jpg"
          alt=""
        />
        <p className="mcert__para">Certified Dealership</p>
      </div>
      <nav>
        <div className="nav__container">
          <Link className="logo__link" to="/">
            <img className="logo" src={logo} alt="" />
            <h4 className="logo__motto">
              <em>Sheer Driving Pleasure</em>
            </h4>
          </Link>
          <ul className="nav__links middle">
            <li className="nav__list">
              <Link to="/" className="nav__link">
                M5
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className="nav__link">
                X6
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className="nav__link">
                7 Series
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className="nav__link">
                8 Series 
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className="nav__link">
                X4
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className="nav__link">
                X3
              </Link>
            </li>
          </ul>

          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/" className="nav__link">
                Shop
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className="nav__link">
                Account
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className="nav__link">
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
