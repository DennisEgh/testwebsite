import React from "react";
import { Link } from "react-router-dom";

export default function Sixthcar() {
  return (
    <section id="sixth__car">
      <header>
        <div data-aos="fade-up" className="header__container--upper">
          <div className="header__description ">
            <h1 className="header__title">I4</h1>
            <p className="header__para">
              Order online for{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="header__container--lower">
          <div className="order__selection">
            <Link to="" className="nostock">
              <div className="custom__order">
                <p className="order__selection--para order">OUT OF STOCK</p>
              </div>
            </Link>

           
          </div>
        </div>
      </header>
    </section>
  );
}
