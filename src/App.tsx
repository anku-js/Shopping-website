import React, { useState, useEffect, ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";
import LatestTrends from "./components/LatestTrends";
import SecondPage from "./components/SecondPage";
import "./App.scss";
import { ProductData, Trend } from "./types";

const App = () => {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [filteredData, setFilteredData] = useState<ProductData[]>([]);
  const [trends, setTrends] = useState<Trend[]>([]);
  const [searched, setSearched] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  function handleOnFocus() {
    setIsInputFocused(true);
  }

  const searchedProduct = (event: ChangeEvent<HTMLInputElement>) => {
    const searchedValue = event.target.value;
    setSearched(searchedValue);
    if (searched !== "") {
      const results = productData.filter((product) => {
        return product.name.toLowerCase().includes(searchedValue.toLowerCase());
      });
      setFilteredData(results);
    } else {
      setFilteredData(productData);
    }
  };

  useEffect(function () {
    fetch(
      "https://my-json-server.typicode.com/anku-js/Zevi/db.json/db/products"
    )
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  useEffect(function () {
    fetch("https://my-json-server.typicode.com/anku-js/Zevi/latestTrends")
      .then((res) => res.json())
      .then((data) => setTrends(data));
  }, []);

  return (
    <section className={`wrapping-box ${!!searched ? "searching" : ""}`}>
      <div className="container">
        <img
          src="https://ik.imagekit.io/ankujs/zevi_logo.svg"
          className="zevi-logo"
          alt="zevi's logo"
        />
        <form className="input-form">
          <label className="search-label">
            <input
              type="text"
              name="searched-product"
              className="search-input"
              placeholder="Search"
              onChange={searchedProduct}
              onFocus={handleOnFocus}
            />
          </label>
          <CiSearch className="searchIcon" />
        </form>
        {isInputFocused && searched.length === 0 ? (
          <LatestTrends trends={trends} />
        ) : null}
        {searched !== "" ? <SecondPage filteredData={filteredData} /> : null}
      </div>
    </section>
  );
};

export default App;
