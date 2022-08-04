import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import { auth } from "../firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  let registerfail = document.querySelector(".registerfail");
let registerbtn = document.querySelector(".sign-in__button")

  function register() {
    createUserWithEmailAndPassword(auth, inputValueEmail, inputValuePassword)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        
        registerfail.classList.add("display");
        registerbtn.classList.add("pointernone")
        setTimeout(() => {
          registerfail.classList.remove("display");
          registerbtn.classList.remove("pointernone")
        }, 3000);
      });
  }

  return (
    <section id="sign-in">
      <Nav />
      <div className="sign-in__container">
        <div className="sign-in__content">
          <h1 className="sign-in__title">Register</h1>
          <div className="registerfail">
            Invalid email or password. Please use a real email and make sure the
            password is at least 6 characters.
          </div>
          <div className="sign-in__column">
            <div className="email__container">
              <p className="sign-in__para">Email Address</p>
              <div className="input__wrap">
                <input
                  type="email"
                  className="login__input"
                  spellCheck="false"
                  onChange={(e) => setInputValueEmail(e.target.value)}
                  value={inputValueEmail}
                  required
                />
              </div>
            </div>
          </div>
          <div className="sign-in__column">
            <div className="email__container">
              <p className="sign-in__para">Password</p>
              <div className="input__wrap">
                <input
                  type="password"
                  className="login__input"
                  spellCheck="false"
                  onChange={(e) => setInputValuePassword(e.target.value)}
                  value={inputValuePassword}
                  required
                />
              </div>
            </div>
          </div>
          <div className="button__wrapper">
            <button onClick={register} className="sign-in__button">
              Register
            </button>
          </div>

          <span className="or">OR</span>
          <div className="button__wrapper">
            <Link className="register__link" to="/Signin">
              <button className="sign-in__button create">SIGN IN</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
