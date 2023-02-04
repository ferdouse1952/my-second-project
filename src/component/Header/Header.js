import React from "react";
import "./Header.css";
import Home from "../Home/Home";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Header = () => {
  return (
    <>
      <nav className="navbar navber navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link as={Link} to="/" className="navbar-brand text-white" href="#">
            LOGO
          </Link>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    as={Link}
                    to="/"
                    className="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    <h6>Home</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    as={Link}
                    to="/service"
                    className="nav-link text-white"
                    href="#"
                  >
                    <h6>Service</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    as={Link}
                    to="/about"
                    className="nav-link text-white"
                    href="#"
                  >
                    <h6>About Us</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    as={Link}
                    to="/contact"
                    className="nav-link text-white"
                    href="#"
                  >
                    <h6>Contact</h6>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
