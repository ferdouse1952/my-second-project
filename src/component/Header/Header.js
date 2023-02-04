import React from "react";
import "./Header.css";
import Home from "../Home/Home";

const Header = () => {
  return (
    <>
      <nav class="navbar navber navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand text-white" href="#">
            LOGO
          </a>
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon bg-white"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Home />
    </>
  );
};

export default Header;
