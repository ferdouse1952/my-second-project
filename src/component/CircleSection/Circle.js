import React from "react";
import "./Circle.css";

const Circle = () => {
  return (
    <div className="container pb-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 align-items-center pt-5 pb-5">
            <div className="circle fw-bold d-flex justify-content-center align-items-center">
              <span className="price-item-doller text-white">$</span>
              <span className="price-item-prefix text-white fs-1">24</span>
              <span className="price-item-suffix text-white fs-4 pb-4">50</span>
              <span className="inner-circle"></span>
              <span className="innerTwoCircle"></span>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Basic Plan</h5>
              <p class="card-text card-text-two">
                Strategy & Research Business & Finance Analysing SEO
                Optimization
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 align-items-center pt-5 pb-5">
            <div className="circle fw-bold d-flex justify-content-center align-items-center">
              <span className="price-item-doller text-white">$</span>
              <span className="price-item-prefix text-white fs-1">30</span>
              <span className="price-item-suffix text-white fs-4 pb-4">60</span>
              <span className="inner-circle"></span>
              <span className="innerTwoCircle"></span>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Basic Plan</h5>
              <p class="card-text card-text-two">
                Strategy & Research Business & Finance Analysing SEO
                Optimization
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 align-items-center pt-5 pb-5">
            <div className="circle fw-bold d-flex justify-content-center align-items-center">
              <span className="price-item-doller text-white">$</span>
              <span className="price-item-prefix text-white fs-1">40</span>
              <span className="price-item-suffix text-white fs-4 pb-4">90</span>
              <span className="inner-circle"></span>
              <span className="innerTwoCircle"></span>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Basic Plan</h5>
              <p class="card-text card-text-two">
                Strategy & Research Business & Finance Analysing SEO
                Optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
