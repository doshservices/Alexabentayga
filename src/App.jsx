import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Routers>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Routers>
    </>
  );
}

export default App;
