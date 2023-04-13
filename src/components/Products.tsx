import React, { useState, FunctionComponent } from "react";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ProductData } from "./../types";

const Products: FunctionComponent<ProductData> = ({
  name,
  img,
  ratingCount,
  mrp,
  price,
}) => {
  const [wishlist, setWishlist] = useState(false);

  function handleClick(): void {
    setWishlist(!wishlist);
  }

  const starFilledIcon = <AiFillStar className="filled-star" />;

  return (
    <div className="product-list">
      <ul>
        <li className="product">
          <img
            src={img}
            className="searched-image"
            alt="product that was searched"
          />
          <div className="information">
            <p className="product-name">{name}</p>
            <div className="wishlist" onClick={handleClick}>
              {wishlist ? (
                <AiFillHeart className="filled-heart" />
              ) : (
                <AiOutlineHeart className="empty-heart" />
              )}
            </div>
            <div className="mrp-price">
              <p className="mrp">
                <s>Rs. {mrp}</s>
              </p>
              <p className="product-price">Rs. {price}</p>
            </div>
            <div className="rating-count">
              <div>
                {starFilledIcon}
                {starFilledIcon}
                {starFilledIcon}
                {starFilledIcon}
                {starFilledIcon}
              </div>
              <div>({ratingCount})</div>
            </div>
          </div>
          <div className="view-product">
            <p className="view-product-text">View Product</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Products;
