import React, { useState, useEffect } from "react";

import Nav from "../components/nav";
import InputValueCar from "./ui/InputValueCar";


const Carlistlanding = ({ factorynew: initialfactorynew }) => {
  const [inputValue, setInputValue] = useState("");
  const [factorynew, setFactorynew] = useState(initialfactorynew);
  const [checkedM5, setCheckedM5] = useState(false);
  const [checkedM3, setCheckedM3] = useState(false);
  const [checked7Series, setChecked7Series] = useState(false);
  
  
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
    <section id="carsmarket">

    <div id="market">
      <div id="market__body">
        <Nav />
        <div className="market__main">
          <div className="market__container">
            <div className="row">
              <form id="search" action={null} autoComplete="off">
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

            <div className="checkboxes">
              <div className="checkbox">
                <label className="label" for="agreement">
                  M5
                </label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={checkedM5}
                  onChange={() => setCheckedM5(!checkedM5)}
                  />
              </div>
              <div className="checkbox">
                <label className="label" for="agreement">
                  M3
                </label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={checkedM3}
                  onChange={() => setCheckedM3(!checkedM3)}
                  />
              </div>
              <div className="checkbox">
                <label className="label" for="agreement">
                  7 Series
                </label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={checked7Series}
                  onChange={() => setChecked7Series(!checked7Series)}
                  />
              </div>
            </div>

         
              <InputValueCar factorynew={factorynew} inputValue={inputValue} 
              checkedM5={checkedM5} 
              checkedM3={checkedM3}
              checked7Series={checked7Series}
              />
           
          </div>
        </div>
      </div>
    </div>
              </section>
  );
};

export default Carlistlanding;
