import React from "react";
import { auth } from "../firebase/init";
import { deleteUser } from "firebase/auth";
import house from "../assets/housesvg.png";
import { signOut } from "firebase/auth";
import Nav from "../components/nav";
import logout from "../assets/logout.svg";
import { Link } from "react-router-dom";
import userlogo from "../assets/user.png"

const Profilesettings = ({ user, setUser, setUserExists }) => {
  function logOut() {
    signOut(auth);
    setUser({});
    setUserExists(false);
  }

  function deleteAccount() {
    deleteUser(user)
      .then(() => {
        console.log("deleted");
        window.location.reload();
      })
      .catch((error) => {
        
      });
  }
  console.log(user);

  return (
    <section id="account">
      <Nav />
      <div className="account__container">
        <ul className="account__lists">
          <li className="account__list">
            <Link className="account__link" to="/Account">
              <div className="image__bg inactive">
                <img className="account__img" src={house} alt="" />
              </div>
              <h1 className="account__para">Dashboard</h1>
            </Link>
          </li>
          <li className="account__list">
            <Link className="account__link" to="/Profilesettings">
              <div className="image__bg ">
                <img className="account__img" src={userlogo} alt="" />
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
          <h1 className="content__title">Profile Settings</h1>
          <div className="profile__settings">
            <div className="settings__container">
              <p className="settings__para">Email</p>
              <p className="setting__para">{user.email || "Anonymous@email.com"}</p>
              <p className="edit--btn__para">Edit</p>
            </div>
            <div className="settings__container">
              <p className="settings__para">Password</p>
              <p className="setting__para">* * * * * * * * * * * *</p>
              <p className="edit--btn__para">Edit</p>
            </div>
          </div>
          <p onClick={deleteAccount} className="delete__account">
            Delete Account
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profilesettings;
