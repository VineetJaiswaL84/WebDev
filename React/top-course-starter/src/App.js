import React from "react";
import {apiUrl,filterData} from "./data"
import { Navbar } from "./Components/Navbar";
import { Filter } from "./Components/Filter"; 
import { Cards } from "./Components/Cards"; 

const App = () => {
  const data = []
  return(
    <div>
      <Navbar/>

      <Filter
      filterData={filterData}
      />

      <Cards/>

    </div>
  );

};

export default App;
