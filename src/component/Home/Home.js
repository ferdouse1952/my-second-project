import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Card from "../Card/Card";
import NavTabs from "../NavTabs/NavTabs";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homeSection">
        <div className="homeText container text-center">
          <h1>
            Entrepreneurial Success: Essential Factors for Growing and
            Sustaining a Thriving Business
          </h1>
          <p className="pb-3">
            Business is a vital aspect of the economy, offering opportunities
            for entrepreneurship, innovation, and job creation. A successful
            business requires strategic planning, effective management, and a
            commitment to growth and customer satisfaction.
          </p>
          <Link to="" className="text-white homeBtn rounded">
            Button
          </Link>
        </div>
        <Card />
        <Service />
        <NavTabs />
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
