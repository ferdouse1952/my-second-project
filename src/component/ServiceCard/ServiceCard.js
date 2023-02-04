import React from "react";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { title, body } = props.serviceItem;
  return (
    <div>
      <div className="col">
        <div className="card cards h-100 border-0">
          <div className="card-body service-card-body text-center">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">
              <small>{body}</small>
            </p>
          </div>
          <div className="hover-strip"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
