import { useState } from "react"
import zevi from "../images/zevi.svg"
import { AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsStarHalf } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"

export default function SecondPage(props) {
const [ wishlist, setWishlist ] = useState(false)

function handleClick(id) {
    setWishlist(!wishlist)
}

const starFilled = <AiFillStar className="filled-star"/>
const starEmpty = <AiOutlineStar className="empty-star"/>

const mapped = props.filteredData.map(({ productId, productName, rating, ratingCount, searchImage,  mrp, price})=> 

        <ul className="result-product">
            <li className="product">
                <img src={searchImage} className="searched-image" />
                <div className="information">
                    <p className="product-name">{productName}</p>
                    <div className="wishlist" onClick={()=>handleClick(productId)}>
                    { wishlist? <AiFillHeart className="filled-heart"/> : <AiOutlineHeart className="empty-heart"/>}
                    </div>
                    <div className="mrp-price">
                        <p className="mrp"><s>Rs. {mrp}</s></p><p className="product-price">Rs. {price}</p>
                    </div>
                    <div className="rating-count">
                      <div>{starFilled}{starFilled}{starFilled}{starFilled}{starFilled}</div>
                      <div>({ratingCount})</div>
                    </div>
                </div>
                <div className="view-product">
                <p className="view-product-text" >View Product</p>
                </div> 
            </li>                                                                   
        </ul>
        )
    
    return (
        <div className="second-container">
            <div className="sidebar-container">
                <h1>Search Results</h1>
                <section className="sidebar-section">
                    <div className="brand">
                        <div className="brand-option">
                          <p>BRAND</p> <IoIosArrowDown/>
                        </div>
                        <label><input type="checkbox"/>Mango</label>
                        <label><input type="checkbox" />H&M</label>
                    </div>
                    <hr></hr>
                    <div className="price">
                        <div className="price-option">
                          <p>PRICE RANGE</p> <IoIosArrowDown/>
                        </div>
                        <label><input type="checkbox" />Under 500</label>
                        <label><input type="checkbox"/>1000 to 3000</label>
                    </div>
                    <hr></hr>
                    <div className="ratings">
                        <div className="rating-option">
                           <p>RATINGS</p> <IoIosArrowDown/>
                        </div>
                        <label>
                            <input type="checkbox"/>
                            {starFilled}{starFilled}{starFilled}{starFilled}{starFilled}
                        </label>
                        <label>
                            <input type="checkbox"/>
                            {starFilled}{starFilled}{starFilled}{starFilled}{starEmpty}
                        </label>
                        <label>
                            <input type="checkbox" />
                            {starFilled}{starFilled}{starFilled}{starEmpty}{starEmpty}
                        </label>
                        <label>
                            <input type="checkbox" />
                            {starFilled}{starFilled}{starEmpty}{starEmpty}{starEmpty}
                        </label>
                        <label>
                            <input type="checkbox" />
                            {starFilled}{starEmpty}{starEmpty}{starEmpty}{starEmpty}
                        </label>
                    </div>
                </section>
            </div> 
            <section className="product-container">
                {mapped}
            </section>
                          
        </div>
    )
}

// { productName, rating, ratingCount, searchImage,  mrp, price}