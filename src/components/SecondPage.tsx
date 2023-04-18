import React, { FunctionComponent } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import Products from "./Products";
import { ProductData } from "./../types";

interface Props {
  filteredData: ProductData[];
}

const SecondPage: FunctionComponent<Props> = ({ filteredData }) => {
  const starFilledIcon = <AiFillStar className="filled-star" />;
  const starEmpty = <AiOutlineStar className="empty-star" />;

  return (
    <div className="searched-page-container">
     
      <div className="sidebar-container">
        <h1>Search Results</h1>
        <section className="sidebar-section">
          <div className="brand">
            <div className="brand-option">
              <p>BRAND</p> <IoIosArrowDown />
            </div>
            <label>
              <input type="checkbox" />
              Mango
            </label>
            <label>
              <input type="checkbox" />
              H&M
            </label>
          </div>
          <hr></hr>
          <div className="price">
            <div className="price-option">
              <p>PRICE RANGE</p> <IoIosArrowDown />
            </div>
            <label>
              <input type="checkbox" />
              Under 500
            </label>
            <label>
              <input type="checkbox" />
              1000 to 3000
            </label>
          </div>
          <hr></hr>
          <div className="ratings">
            <div className="rating-option">
              <p>RATINGS</p> <IoIosArrowDown />
            </div>
            <label>
              <input type="checkbox" />
              {starFilledIcon}
              {starFilledIcon}
              {starFilledIcon}
              {starFilledIcon}
              {starFilledIcon}
            </label>
            <label>
              <input type="checkbox" />
              {starFilledIcon}
              {starFilledIcon}
              {starFilledIcon}
              {starFilledIcon}
              {starEmpty}
            </label>
            <label>
              <input type="checkbox" />
              {starFilledIcon}
              {starFilledIcon}
              {starFilledIcon}
              {starEmpty}
              {starEmpty}
            </label>
            <label>
              <input type="checkbox" />
              {starFilledIcon}
              {starFilledIcon}
              {starEmpty}
              {starEmpty}
              {starEmpty}
            </label>
            <label>
              <input type="checkbox" />
              {starFilledIcon}
              {starEmpty}
              {starEmpty}
              {starEmpty}
              {starEmpty}
            </label>
          </div>
        </section>
      </div>
     
      <section className="products-container">
        {filteredData.map(({ id, name, img, ratingCount, mrp, price }) => (
          <Products
            key={id}
            name={name}
            img={img}
            ratingCount={ratingCount}
            mrp={mrp}
            price={price}
          />
        ))}
        {filteredData.length === 0 && (
          <p className="no-data">No results found</p>
        )}
      </section>
    </div>
  );
};

export default SecondPage;
