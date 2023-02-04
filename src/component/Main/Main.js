import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Service from "../Service/Service";

const Main = () => {
  return (
    <div>
      <Home />
      <Service />
      <AboutUs />
      <Contact/>
    </div>
  );
};

export default Main;
