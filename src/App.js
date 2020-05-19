import React from "react";
import FilterList from "./containers/FilterList.js";
import Footer from "./components/Footer.js";
// import AddItem from "./containers/AddItemContainer";
import AddItem from "./containers/AddItemContainer";

function App() {
  return (
    <div className="App">
      <AddItem></AddItem>
      <FilterList></FilterList>
      <Footer></Footer>
    </div>
  );
}

export default App;
