import React, { useState, useEffect, ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { TbLetterA, TbLetterN, TbLetterK, TbLetterU } from "react-icons/tb";
import { BsHandbag } from "react-icons/bs";
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
        <div className="header-box">
          {searched ? (
            <div>
              <div className="shopping-categories">
                <a href="#" className="men-section">
                  Men
                </a>
                <a href="#" className="women-section">
                  Women
                </a>
                <a href="#" className="kids-section">
                  Kids
                </a>
                <a href="#" className="cosmetics-section">
                  Cosmetics
                </a>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="search-action">
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
            {!!searched ? (
              <div className="actions">
                <a className="wishlist">
                  <AiOutlineHeart className="wishlist-icon" />
                  <p>Wishlist</p>
                </a>
                <a className="cart">
                  <BsHandbag className="cart-icon" />
                  <p>Bag</p>
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {isInputFocused && searched.length === 0 ? (
        <LatestTrends trends={trends} />
      ) : null}
      {searched !== "" ? <SecondPage filteredData={filteredData} /> : null}
    </section>
  );
};

export default App;
