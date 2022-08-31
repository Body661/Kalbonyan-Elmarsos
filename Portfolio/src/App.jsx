import React from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import Nav from "./components/Nav/Nav";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
