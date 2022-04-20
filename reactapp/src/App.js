import React from "react"
import './App.css';
import Profile from "./Component/Profile";

function App() {
  return (
    <div className="App">
 <Profile/>
 <select name="cars" id="cars" multiple>
  <option value="1">Audi</option>
  <option selected value="2">BMW</option>
  <option selected value="3">Mercedes</option>
  <option value="4">Volvo</option>
  <option value="5">Lexus</option>
  <option value="6">Tesla</option>
</select>
    </div>
  );
}

export default App;
