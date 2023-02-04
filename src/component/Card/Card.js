import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row cardRow text-center text-white">
          <div className="col-lg-4 col-sm-4 cardCol verticle-border">
            <h5>Fully Responsive</h5>
            <p>
              Vestibulum ante ipsum primis sit amet justo elit faucibus orci
              luctus ultrices posuere cubilia Curae
            </p>
          </div>
          <div className="col-lg-4 col-sm-4 cardCol verticle-border">
            <h5>Fully Responsive</h5>
            <p>
              Vestibulum ante ipsum primis sit amet justo elit faucibus orci
              luctus ultrices posuere cubilia Curae
            </p>
          </div>
          <div className="col-lg-4 col-sm-4 cardCol">
            <h5>Fully Responsive</h5>
            <p>
              Vestibulum ante ipsum primis sit amet justo elit faucibus orci
              luctus ultrices posuere cubilia Curae
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
