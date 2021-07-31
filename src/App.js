import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Home, Features, Cta, Footer } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
