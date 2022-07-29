import React from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <Nav />
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
            <Link to="">
              <div className="custom__order">
                <p className="order__selection--para order">CUSTOM ORDER</p>
              </div>
            </Link>

            <Link to="">
              <div className="existing__inventory">
                <p className="order__selection--para existing">
                  EXISTING INVENTORY
                </p>
              </div>
            </Link>
          </div>
          <div className="scroll__down">
          <FontAwesomeIcon icon="fa-solid fa-angle-down" className="angle--down" />
          </div>
        </div>
      </header>
    </section>
  );
}
