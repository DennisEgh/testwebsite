import React, {useState} from "react";
import { Link } from "react-router-dom";
import invert from "../assets/logoinvert.png"
import Menu from "./subcomponents/Menu";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);


  const changeNav = () => {
    window.scrollY >= 20 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeNav);

const toggleModal = () =>{
  let element = document.querySelector(".modal__container")
  let transform = document.querySelector(".modal")
  let xmark = document.querySelector(".fa-xmark")
  let body = document.querySelector("body");

  element.classList.toggle("active")
  transform.classList.toggle("transform")
  xmark.classList.toggle("transform")
body.classList.toggle("overflowhide")


}
  return (
    
    <div className="navigation">

      <div className="nav__container--upper">
        <img
          className="mcert"
          src="https://pictures.dealer.com/b/bmwgroup/1858/508a3c2f38c3287198e5d9ec1b764650x.jpg"
          alt=""
          />
        <p className="mcert__para">Certified Center</p>
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
              <Link to="/Newcarmarket" className={navbar ? "nav__link active" : "nav__link"}>
                M5
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                M3
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                7 Series
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
               M8
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                IX
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className={navbar ? "nav__link active" : "nav__link"}>
                I4
              </Link>
            </li>
          </ul>

          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/Signin" className={navbar ? "nav__link active" : "nav__link"}>
                Account
              </Link>
            </li>
            <li className="nav__list">
              <Menu />
              <Link to="" onClick={toggleModal} className={navbar ? "nav__link active last" : "nav__link last"}>
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
          </div>
    
  );
}
