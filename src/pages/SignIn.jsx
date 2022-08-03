import React, { useState} from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import { auth } from "../firebase/init";
import { signInWithEmailAndPassword} from "firebase/auth";

const SignIn = ({user, setUser, setUserExists}) => {
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  
 
  

  function login() {
    signInWithEmailAndPassword(auth, inputValueEmail, inputValuePassword)
      .then(({ user }) => {
       
        setUser(user);
        setUserExists(true);
      })
      .catch((error) => {
        console.log(error);
      });
    }

   
  return (
    <section id="sign-in">
      <Nav user={user} setUser={setUser} />
      <div className="sign-in__container">
        <div className="sign-in__content">
          <h1 className="sign-in__title">Sign In</h1>
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
            <button onClick={login} className="sign-in__button">
              Sign In
            </button>
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
            <Link className="register__link" to="/Register">
              <button className="sign-in__button create">CREATE ACCOUNT</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
