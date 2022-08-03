import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

const SignIn = () => {
  return (
    <section id="sign-in">
      <Nav />
      <div className="sign-in__container">
        <div className="sign-in__content">
          <h1 className="sign-in__title">Sign In</h1>
          <div className="sign-in__column">
            <div className="email__container">
              <p className="sign-in__para">Email Address</p>
              <div className="input__wrap">
                <input
                  type="text"
                  className="login__input"
                  spellCheck="false"
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
                />
              </div>
            </div>
          </div>
          <div className="button__wrapper">
            <button className="sign-in__button">Sign In</button>
          </div>
          <p className="need__help">
            <Link className="need__help--link" to="">
            Forgot email?
            </Link>
            <span className="seperator">|</span>
            <Link className="need__help--link" to="">
            Forgot password?
            </Link>
        
          </p>
          <span className="or">OR</span>
          <div className="button__wrapper">
            <button className="sign-in__button create">CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
