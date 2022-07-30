import React from "react";
import { Link } from "react-router-dom";

export default function Thirdcar() {
  return (
    <section id="third__car">
      <header>
     

        <div className="header__container--upper">
          <div className="header__description">
            <h1 className="header__title">7 Series</h1>
            <p className="header__para">
              Order online for{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>
        </div>
       

        <div className="header__container--lower">
          <div className="order__selection ">
            <Link to="">
              <div className="custom__order">
                <p className="order__selection--para order">FACTORY NEW</p>
              </div>
            </Link>

            <Link to="">
              <div className="existing__inventory">
                <p className="order__selection--para existing">PRE-OWNED</p>
              </div>
            </Link>
          </div>
        </div>
 
      </header>
    </section>
  );
}
