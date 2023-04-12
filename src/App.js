import { useState, useEffect } from "react"
import zevi from "./images/zevi.svg"
import { CiSearch } from "react-icons/ci"
import LatestTrends from "./components/LatestTrends"
import SecondPage from "./components/SecondPage"
import "./App.css"


function App() {
  const [ productData, setProductData] = useState({})
  const [ suggestionData, setSuggestionData] = useState({})
  const [ searched, setSearched] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(true)


  function handleOnFocus() {
    setIsInputFocused(true)
  }

  function handleBlur() {
    setIsInputFocused(false)
  }

  function handleChange(event) {
    const { value } = event.target
    setSearched(value)
  }

console.log(productData)

  useEffect(function() {  
  fetch("https://my-json-server.typicode.com/anku-js/Zevi/db.json/db/products")
  .then(res => res.json())
  .then(data => setProductData(data))
}, [])


  return (
    <section className={`container ${!!searched ? "searching" : ""}`}>
        <div className="first-page">
          <img src={zevi} className="zevi-logo" alt="zevi's logo"/>
          <form>
            <label className='search-label'>
              <input 
                type="text"
                name="first-search"
                className="search-input"
                placeholder="Search"
                onChange={handleChange}
                onFocus={handleOnFocus}
                onBlur={handleBlur}
              />
              <CiSearch className="searchIcon"/>
            </label>
          </form>         
          { (isInputFocused && searched.length === 0) ? <LatestTrends /> : null}
          { searched !== "" ?  <SecondPage productData={productData}/>  : null}
        </div>   
    </section>
    
  );
}

export default App;
