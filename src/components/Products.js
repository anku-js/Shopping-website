
import { useState } from "react"
import {
    AiFillStar,
    AiFillHeart,
    AiOutlineHeart,
  } from "react-icons/ai";

export default function Products({ id, name, img, ratingCount, mrp, price }) {
    const [wishlist, setWishlist] = useState(false);

    function handleClick() {
        setWishlist(!wishlist);
    }

    const starFilled = <AiFillStar className="filled-star" />;

    return (
       <div  className="product-container">
            <ul>
                <li className="product">
                    <img src={img} className="searched-image" />
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
                            {starFilled}
                            {starFilled}
                            {starFilled}
                            {starFilled}
                            {starFilled}
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
         
    )
}