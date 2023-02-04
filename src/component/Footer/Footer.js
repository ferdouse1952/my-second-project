import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-sec">
        <div className="main">
          <div className="logo row">
            <div className="footer-header">LOGO</div>
            <div className="logo-des">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>

              <Link to="/" href="#" className="btn-know">
                Know More
              </Link>
            </div>
          </div>

          <div className="office row">
            <div className="footer-header">
              <h3>Office</h3>
            </div>
            <div className="office-des">
              <p>
                here are <br /> many variations of passages
                <br />
                of Lorem Ipsum
                <br />
                available
              </p>

              <Link to="/" href="#">
                abc.@gmail.com
              </Link>

              <p className="num">+880 012345896</p>
            </div>
          </div>

          <div className="link row">
            <div className="footer-header">
              <h3>Links</h3>
            </div>

            <div className="link-des">
              <Link to="/" href="#" className="footer-links">
                Home
              </Link>
              <Link to="/" href="#" className="footer-links">
                About
              </Link>
              <Link to="/" href="#" className="footer-links">
                Services
              </Link>
              <Link to="/" href="#" className="footer-links">
                Galary
              </Link>
              <Link to="/" href="#" className="footer-links">
                Contact
              </Link>
            </div>
          </div>

          <div className="newsletter row">
            <div className="footer-header">
              <h3>Newsletter</h3>
            </div>
            <div className="newsletter-des">
              <div className="subcribe">
                <i className="sub-icon ri-mail-check-fill"></i>
                <input type="mail" placeholder="Enter Email ID" required />
                <i className="sub-icon ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />

          <p>© Copyright 2022 Manik Maity.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
