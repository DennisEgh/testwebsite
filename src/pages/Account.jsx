import React from "react";
import { auth } from "../firebase/init";
import house from "../assets/housesvg.png";
import { signOut } from "firebase/auth";
import Nav from "../components/nav";
import logout from "../assets/logout.svg"
import { Link } from "react-router-dom";

const Account = ({ user, setUser, setUserExists }) => {
  function logOut() {
    signOut(auth);
    setUser({});
    setUserExists(false);
  }
  


  return (

    <section id="account">
        

      <Nav />
      <div className="account__container">
        <ul className="account__lists">
          <li className="account__list">
            <Link className="account__link" to="/Account">
              <div className="image__bg">
                <img className="account__img" src={house} alt="" />
              </div>
              <h1 className="account__para">Dashboard</h1>
            </Link>
          </li>
          <li className="account__list">
            <Link className="account__link" to="/Profilesettings">
              <div className="image__bg inactive">
                <img className="account__img" src={house} alt="" />
              </div>
              <h1 className="account__para">Profile Settings</h1>
            </Link>
          </li>
          <li className="account__list">
            <Link onClick={logOut} className="account__link" to="">
              <div className="image__bg inactive">
                <img className="account__img" src={logout} alt="" />
              </div>
              <h1 className="account__para">Sign Out</h1>
            </Link>
          </li>
        </ul>
        <div className="account__content--container">
            <h1 className="content__title">Dashboard</h1>
            <h2 className="content__greeting">Welcome back, {user.email}</h2>
        </div>
      </div>
        
    </section>
  );
};

export default Account;
