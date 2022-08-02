import React, { useState } from "react";

import Nav from "../components/nav";
import Carsnew from "./ui/Carsnew";

const Carlistlanding = ({ factorynew: initialfactorynew }) => {
  const [inputValue, setInputValue] = useState("");
  const [factorynew, setFactorynew] = useState(initialfactorynew);
  const newArr = [];

  function filterCars(filter) {
    if (filter === "2020") {
      setFactorynew(
        factorynew.slice().sort((a, b) => a.model_year - b.model_year)
      );
    }
    if (filter === "2022") {
      setFactorynew(
        factorynew.slice().sort((a, b) => b.model_year - a.model_year)
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setFactorynew(factorynew.slice().sort((a, b) => b.price - a.price));
    }
    if (filter === "LOW_TO_HIGH") {
      setFactorynew(factorynew.slice().sort((a, b) => a.price - b.price));
    }
    if (filter === "FACTORY_NEW") {
      setFactorynew(factorynew.slice().sort((a, b) => a.mileage - b.mileage));
    }
  }

  return (
    <div id="market">
      <div id="market__body">
        <Nav />
        <div className="market__main">
          <div className="market__container">
            <div className="row">
              <form id="search" action="search" autoComplete="off">
                <input
                  className="market__input"
                  type="text"
                  placeholder="Find your car..."
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
              </form>
              <select
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => filterCars(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="2022">Date, Latest</option>
                <option value="2020">Date, Oldest</option>
                <option value="HIGH_TO_LOW">Price, High to Low </option>
                <option value="LOW_TO_HIGH">Price, Low to High </option>
                <option value="FACTORY_NEW">Mileage, Factory New </option>
              </select>
            </div>

            {factorynew
              .filter((factorynew) => {
                if (inputValue === "") {
                  return factorynew;
                } else if (
                  factorynew.title
                    .toLowerCase()
                    .includes(inputValue.toLocaleLowerCase())
                ) {
                  return factorynew;
                }else if(factorynew.model_year === 2022){
                  newArr.push(factorynew)
                return newArr

                }
                return false;
              })
              .map((factorynew) => (
                <Carsnew factorynew={factorynew} key={factorynew.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carlistlanding;
