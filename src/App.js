import { useState, useEffect } from "react"
import zevi from "./images/zevi.svg"
import { CiSearch } from "react-icons/ci"
import LatestTrends from "./components/LatestTrends"
import SecondPage from "./components/SecondPage"
import "./App.css"

function App() {
  const [ productData, setProductData] = useState({})
  const [filteredData, setFilteredData] = useState([])
  const [ suggestionData, setSuggestionData] = useState({})
  const [ searched, setSearched] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(true)


  function handleOnFocus() {
    setIsInputFocused(true)
  }

  function handleBlur() {
    setIsInputFocused(false)
  }

    const searchedProduct = (event) => {
      setSearched(event.target.value)
    
      if (searched !== '') {
        const results = productData.filter((search) => {
          return search.productName.toLowerCase().includes(searched.toLowerCase());   
        });
        setFilteredData(results);
      } else {
        setFilteredData(productData); 
      } 
    }
  
  useEffect(function() {  
  fetch("https://my-json-server.typicode.com/anku-js/Zevi/db.json/db/products")
  .then(res => res.json())
  .then(data => setProductData(data))
 
}, [])

console.log(filteredData)

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
                onChange={searchedProduct}
                onFocus={handleOnFocus}
                onBlur={handleBlur}
              />
              <CiSearch className="searchIcon"/>
            </label>
          </form>         
          { (isInputFocused && searched.length === 0) ? <LatestTrends /> : null}
          { searched !== "" ?  <SecondPage filteredData={filteredData}/>  : null}
        </div>   
    </section>
    
  );
}

export default App;
