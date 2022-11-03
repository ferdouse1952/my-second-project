import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { umbrellaSlider } from '../../umbrella';
import './Slide.css';

const Slide = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        speed: 500
      

    };

    return (
        <div className="container slider-container mb-5">

            <Slider {...settings}>
                {umbrellaSlider.map((item) => (

                    <div className='img-div'>
                        <img src={item.img} alt="" />
                    </div>
                ))}

            </Slider>

            {/* <img className='frame-img' src={photoFrame} alt="" /> */}
            <div className='frame-div'></div>
        </div>
    );
};

export default Slide;