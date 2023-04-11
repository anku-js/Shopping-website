

import zevi from "./images/zevi.svg"
import { CiSearch } from "react-icons/ci"
import LatestTrends from "./components/LatestTrends"
import Sidebar from "./components/Sidebar"
import "./App.css"



function App() {
 const styles = {
  position: "relative",
  right: "10%",
  fontSize: "40px"

 }

  return (
    <div className="container">
      <img src={zevi} className="zevi-logo" alt="zevi's logo"/>
      <div className='search-label'>
      <input 
        className='search-input'
        type="text"
        placeholder='Search'
      />
      <CiSearch style={styles}/>
      </div>
      
      <LatestTrends />
    </div>
  );
}

export default App;
