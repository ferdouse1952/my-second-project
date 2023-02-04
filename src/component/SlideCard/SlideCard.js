import React from "react";

const SlideCard = (props) => {
  const { img } = props.item;
  return (
    <div className="col">
      <div className="img-div">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default SlideCard;
