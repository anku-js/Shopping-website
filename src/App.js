import { useState, useRef } from "react"
import zevi from "./images/zevi.svg"
import { CiSearch } from "react-icons/ci"
import LatestTrends from "./components/LatestTrends"
import SecondPage from "./components/SecondPage"
import "./App.css"


function App() {

  const [ searched, setSearched] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false)


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

 const styles = {
  position: "relative",
  right: searched == "" ? "10%" : "8%",
  fontSize: searched == "" ? "40px" : "30px"
 }

 
 

  return (
    <section className={`container ${!!searched ? "searching" : ""}`}>
        <div className="first-page">
          <img src={zevi} className="zevi-logo" alt="zevi's logo"/>
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
            <CiSearch style={styles}/>
          </label>
          { (isInputFocused && searched.length === 0) ? <LatestTrends /> : null}
          { searched !== "" ?  <SecondPage />  : null}
        </div>   
    </section>
    
  );
}

export default App;
