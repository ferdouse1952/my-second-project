import React from "react";
import aboutUspage from "../../images/aboutUsImg.jpg";
import "./AboutUsCards.css";

const AboutUsCards = () => {
  return (
    <div>
      <div className="container">
        <div class="row about-us-row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card about-card h-100 text-center ">
              <div className="icon fs-1">
                <i class="fa-brands fa-joomla"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-2">SEO Consultancy</h5>
                <p class="card-text">
                  Delectus recteque has ne, no pro tation commodo. Ea libris
                  utamur vix, in sumo augue soluta vis.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card about-card h-100 text-center">
              <div className="icon fs-1">
                <i class="fa-solid fa-file-pen"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-2">Competitor Analysis</h5>
                <p class="card-text">
                  Per ea quod iusto. Te autem perti nax definitiones vel,
                  denique patrioque id per was be more.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card about-card h-100 text-center">
              <div className="icon fs-1">
                <i class="fa-solid fa-desktop"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-2">Social Media Marketing</h5>
                <p class="card-text">
                  Delenit signiferumque ei cum, te pertinax voluptatum sed,
                  ornatus nonumes explicari sit et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Boost section */}
      <div className="container pt-5 pb-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 col-md-6 col-12 about-us-text">
            <h3 className="fw-bold">Boosts Your Website Traffic!</h3>
            <p>
              Ad nec unum copiosae. Sea ex everti labores, ad option iuvaret qui
              muva. Ea pro tibique comprehensam, sed ea verear numquam molestie.
              Nam te omittam comprehensam. Ne nam nonumy putent fuisset, reque
              fabulas usu ne. Ex vel populo appellantur. Eos ne delenit admodum.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-us-img">
              <img src={aboutUspage} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* progress-bar */}
      <div className="container progress-container d-flex justify-content-center align-items-center">
        <div className="progress-card d-flex justify-content-center align-items-center">
          <div className="percent" style={{ "--num": 85 }}>
            <div id="dot1" className="dot dot-animation"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number d-flex justify-content-center align-items-center ">
              <h2 className="text-white">
                85<span>%</span>
              </h2>
            </div>
            <div className="prog-text text-white text-center">
              <h6>Creative Approach</h6>
            </div>
          </div>
        </div>
        <div className="progress-card d-flex justify-content-center align-items-center">
          <div className="percent" style={{ "--num": 75 }}>
            <div id="dot2" className="dot dot-animation"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number d-flex justify-content-center align-items-center text-white">
              <h2 className="">
                75<span>%</span>
              </h2>
            </div>
            <div className="prog-text text-white text-center text-white">
              <h6>Guaranteed Success</h6>
            </div>
          </div>
        </div>
        <div className="progress-card d-flex justify-content-center align-items-center">
          <div className="percent" style={{ "--num": 95 }}>
            <div id="dot3" className="dot dot-animation"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number d-flex justify-content-center align-items-center text-white ">
              <h2>
                95<span>%</span>
              </h2>
            </div>
            <div className="prog-text text-white text-center text-white">
              <h6>SEO Optimization</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCards;
