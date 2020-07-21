import React from "react";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/pages/home/home";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HomePage />
    </React.Fragment>
  );
};

export default App;
