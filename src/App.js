import React from "react";
import { Analytic } from "./components/Analytic";
import { Cards } from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { NewsLetter } from "./components/NewsLetter";

function App() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Analytic/>
        <NewsLetter/>
        <Cards/>
        <Footer/>
    </div>
  );
}

export default App;
