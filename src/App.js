import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Home, Features, Cta, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <Features />
      <Cta />
      <Footer />
    </Router>
  );
};

export default App;
