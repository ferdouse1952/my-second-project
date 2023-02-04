import React from "react";
import Circle from "../CircleSection/Circle";
import SecondCircle from "../secondCircle/SecondCircle";
import "./NavTabs.css";

const NavTabs = () => {
  return (
    <div className="NavTabSection">
      <h3 className="fw-bold mt-5">The Best Solutions for Our Clients</h3>
      <ul
        className="nav nav-pills nav-pills-button rounded-pill mb-5 mt-5"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item monthly-button" role="presentation">
          <button
            className="nav-link active rounded-pill"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Plan
          </button>
        </li>
        <li className="nav-item yearly-button" role="presentation">
          <button
            className="nav-link rounded-pill"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Plan
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <Circle />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <SecondCircle />
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
