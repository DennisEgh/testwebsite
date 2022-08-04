import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/nav";
import Carprice from "../components/ui/Carprice";
import fuel from "../assets/fuelpump.svg";
import transmission from "../assets/transmission.svg";
import mileage from "../assets/mileage.svg";
import model from "../assets/modelyear.svg";
import types from "../assets/type.svg";
import drivetrain from "../assets/drivetrain.svg";
import hp from "../assets/hp.svg";
import motorsize from "../assets/motorsize.svg";

const Marketspecific = ({ factorynew }) => {
  const { id } = useParams();
  const factory = factorynew.find((factorynew) => +factorynew.id === +id);

  return (
    <section className="carsmarket">
      <div id="market">
        <div id="market__body" className="market__specific">
          <Nav />
          <div className="market__main">
            <div className="market__container">
              <div className="row">
                <div className="market__specific--content">
                  <div className="content__wrapper">
                    <Link to="/Newcarmarket">
                      <FontAwesomeIcon icon="fa-solid fa-x" />
                    </Link>
                    <figure className="market__specific--figure">
                      <img
                        className="market__specific--img"
                        src={factory.url}
                        alt=""
                      />
                    </figure>
                    <div className="market__specific--info">
                      <h1 className="market__specific--title">
                        {factory.title}
                      </h1>
                      <div className="market__specific--price">
                        <Carprice price={factory.price} />
                      </div>
                      <div className="market__specific--facts">
                        <h1 className="facts__title">Facts</h1>
                        <div className="facts">
                          <div className="icon__container">
                            <img src={fuel} alt="" className="icon" />
                            <div className="icon__para--container">
                              <p className="icon__para">Fuel</p>

                              <p className="icon__para datainfo">
                                {factory.fuel}
                              </p>
                            </div>
                          </div>
                          <div className="icon__container">
                            <img src={transmission} alt="" className="icon" />
                            <div className="icon__para--container">
                              <p className="icon__para">Transmission</p>

                              <p className="icon__para datainfo">
                                {factory.transmission}
                              </p>
                            </div>
                          </div>
                          <div className="icon__container">
                            <img src={mileage} alt="" className="icon" />
                            <div className="icon__para--container">
                              <p className="icon__para">Mileage</p>

                              <p className="icon__para datainfo">
                                {factory.mileage}
                              </p>
                            </div>
                          </div>
                          <div className="icon__container">
                            <img src={model} alt="" className="icon" />
                            <div className="icon__para--container">
                              <p className="icon__para">Model</p>

                              <p className="icon__para datainfo">
                                {factory.model_year}
                              </p>
                            </div>
                          </div>
                          <div className="icon__container">
                            <img src={types} alt="" className="icon" />
                            <div className="icon__para--container">
                              <p className="icon__para">Type</p>

                              <p className="icon__para datainfo">
                                {factory.type}
                              </p>
                            </div>
                          </div>
                          <div className="icon__container">
                            <img src={drivetrain} alt="" className="icon" />
                            <div className="icon__para--container">
                              <p className="icon__para">Drivetrain</p>

                              <p className="icon__para datainfo">
                                {factory.drivetrain}
                              </p>
                            </div>
                          </div>
                          <div className="icon__container">
                            <img src={hp} alt="" className="icon" />
                            <div className="icon__para--container">
                              <p className="icon__para">Horsepower</p>

                              <p className="icon__para datainfo">
                                {factory.horsepower} HP
                              </p>
                            </div>
                          </div>
                          <div className="icon__container">
                            <img src={motorsize} alt="" className="icon" />
                            <div className="icon__para--container">
                              <p className="icon__para">Motorsize</p>

                              <p className="icon__para datainfo">
                                {factory.motorsize} cc
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contact">Contact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketspecific;
