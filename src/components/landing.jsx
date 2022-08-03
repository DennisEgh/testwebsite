import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./nav";


export default function Landing({user, setUser}) {

 

  return (
    
    <section id="landing">
      <Nav user={user} setUser={setUser} />
      <header>
       
        <div className="header__container--upper">
          <div className="header__description">
            <h1 className="header__title">M5</h1>
            <p className="header__para">
              Order online for{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>
        </div>
        <div className="header__container--lower">
          <div className="order__selection">
            <Link to="/Newcarmarket">
              <div className="custom__order">
                <p className="order__selection--para order">FACTORY NEW</p>
              </div>
            </Link>

            <Link to="/Newcarmarket">
              <div className="existing__inventory">
                <p className="order__selection--para existing">PRE-OWNED</p>
              </div>
            </Link>
          </div>
          <div className="scroll__down">
            <FontAwesomeIcon
              icon="fa-solid fa-angle-down"
              className="angle--down"
              />
          </div>
        </div>
      </header>
    </section>
              
  );
}
