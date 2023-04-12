import { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Products from "./Products";

export default function SecondPage(props) {

  const starFilled = <AiFillStar className="filled-star" />;
  const starEmpty = <AiOutlineStar className="empty-star" />;

  const productsToBeShown = props.filteredData.map(
    (products => 
        <Products 
            key={products.id}
            name={products.name}
            img={products.img}
            ratingCount={products.ratingCount}
            mrp={products.mrp}
            price={products.price}
        />)
     )

  return (
    <div className="second-container">
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
              {starFilled}
              {starFilled}
              {starFilled}
              {starFilled}
              {starFilled}
            </label>
            <label>
              <input type="checkbox" />
              {starFilled}
              {starFilled}
              {starFilled}
              {starFilled}
              {starEmpty}
            </label>
            <label>
              <input type="checkbox" />
              {starFilled}
              {starFilled}
              {starFilled}
              {starEmpty}
              {starEmpty}
            </label>
            <label>
              <input type="checkbox" />
              {starFilled}
              {starFilled}
              {starEmpty}
              {starEmpty}
              {starEmpty}
            </label>
            <label>
              <input type="checkbox" />
              {starFilled}
              {starEmpty}
              {starEmpty}
              {starEmpty}
              {starEmpty}
            </label>
          </div>
        </section>
      </div>
      <section className="products-section">
         {productsToBeShown}
      </section>

    </div>
  );
}

// { productName, rating, ratingCount, searchImage,  mrp, price}
