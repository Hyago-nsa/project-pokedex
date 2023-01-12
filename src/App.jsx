import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
      </div>
    </div>
  );
};

export default App;
