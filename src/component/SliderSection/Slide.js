import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { umbrellaSlider } from "../../umbrella";
import "./Slide.css";
import SlideCard from "../SlideCard/SlideCard";

const Slide = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "45px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container slider-container">
      <div className="row">
        <Slider {...settings}>
          {umbrellaSlider.map((item) => (
            <SlideCard key={item.id} item={item}></SlideCard>
          ))}
        </Slider>

        <div className="frame-div"></div>
      </div>
    </div>
  );
};

export default Slide;
