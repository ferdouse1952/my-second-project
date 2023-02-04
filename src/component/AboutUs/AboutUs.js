import React from "react";
import AboutUsCards from "../AboutUsCards/AboutUsCards";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-bg">
        <div class="containertwo">
          <h2 className="about-us-text d-flex justify-content-center fw-bold">
            About Us
          </h2>
        </div>
        <AboutUsCards />
        <div className="container">
          <div className="timeline-section">
            <div className="timelinetext text-center">
              <h3 className="fw-bold">The Story of Ewebot</h3>
              <p className="fw-normal">
                Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case
                regione signiferumque vim te.
              </p>
            </div>
            <div className="timeline-items container d-flex flex-wrap">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2015</div>
                <div className="timeline-content text-white">
                  <h3 className="fs-4 pb-4">Timeline Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore nesciunt tempore eum dolore, cumque consequuntur
                    maiores quidem? Eius, saepe eaque.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2016</div>
                <div className="timeline-content text-white">
                  <h3 className="fs-4 pb-4">Timeline Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore nesciunt tempore eum dolore, cumque consequuntur
                    maiores quidem? Eius, saepe eaque.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2017</div>
                <div className="timeline-content text-white">
                  <h3 className="fs-4 pb-4">Timeline Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore nesciunt tempore eum dolore, cumque consequuntur
                    maiores quidem? Eius, saepe eaque.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2018</div>
                <div className="timeline-content text-white">
                  <h3 className="fs-4 pb-4">Timeline Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore nesciunt tempore eum dolore, cumque consequuntur
                    maiores quidem? Eius, saepe eaque.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2019</div>
                <div className="timeline-content text-white">
                  <h3 className="fs-4 pb-4">Timeline Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore nesciunt tempore eum dolore, cumque consequuntur
                    maiores quidem? Eius, saepe eaque.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2020</div>
                <div className="timeline-content text-white">
                  <h3 className="fs-4 pb-4">Timeline Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore nesciunt tempore eum dolore, cumque consequuntur
                    maiores quidem? Eius, saepe eaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
