import React, {useState} from "react";
import { Link } from "react-router-dom";
import invert from "../assets/logoinvert.png"

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    window.scrollY >= 20 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeNav);
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
        <div className={navbar ? "nav__container active" : "nav__container"}>
          <Link className="logo__link" to="/">
            <img className="logo" src={invert}alt="" />
            <h4 className={navbar ? "logo__motto active" : "logo__motto"}>
              <em>Sheer Driving Pleasure</em>
            </h4>
          </Link>
          <ul className="nav__links middle">
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                M5
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                X6
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                7 Series
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                8 Series
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                X4
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                X3
              </Link>
            </li>
          </ul>

          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                Shop
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                Account
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
