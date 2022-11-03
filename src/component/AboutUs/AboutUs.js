import React from 'react';
import AboutUsCards from '../AboutUsCards/AboutUsCards';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className='about-us-bg'>
                <div class='containertwo'>
                    <div class="bubbles">
                        <span style={{ "--i": 28 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 25 }}></span>
                        <span style={{ "--i": 11 }}></span>
                        <span style={{ "--i": 23 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 21 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 24 }}></span>
                        <span style={{ "--i": 10 }}></span>
                        <span style={{ "--i": 14 }}></span>
                        <span style={{ "--i": 23 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 26 }}></span>
                        <span style={{ "--i": 19 }}></span>
                        <span style={{ "--i": 22 }}></span>
                        <span style={{ "--i": 28 }}></span>
                        <span style={{ "--i": 25 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 21 }}></span>
                        <span style={{ "--i": 15 }}></span>
                        <span style={{ "--i": 23 }}></span>
                        <span style={{ "--i": 26 }}></span>
                        <span style={{ "--i": 17 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 28 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 26 }}></span>
                        <span style={{ "--i": 17 }}></span>
                        <span style={{ "--i": 25 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 21 }}></span>
                        <span style={{ "--i": 15 }}></span>
                        <span style={{ "--i": 28 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 25 }}></span>
                        <span style={{ "--i": 11 }}></span>
                        <span style={{ "--i": 23 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 13 }}></span>
                    </div>
                    <h2 className='about-us-text text-white d-flex justify-content-center pt-5 fs-1'>About Us</h2>
                </div>
                <AboutUsCards />
                <div className="container">
                    <div className="timeline-section">
                        <div className='text-center'>
                            <h3 className='fs-1'>The Story of Ewebot</h3>
                            <p className='fw-normal fs-6'>Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te.</p>
                        </div>
                        <div className="timeline-items m-auto d-flex flex-wrap">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">2015</div>
                                <div className="timeline-content text-white">
                                    <h3 className='fs-4 pb-4'>Timeline Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt tempore eum dolore, cumque consequuntur maiores quidem? Eius, saepe eaque.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">2016</div>
                                <div className="timeline-content text-white">
                                    <h3 className='fs-4 pb-4'>Timeline Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt tempore eum dolore, cumque consequuntur maiores quidem? Eius, saepe eaque.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">2017</div>
                                <div className="timeline-content text-white">
                                    <h3 className='fs-4 pb-4'>Timeline Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt tempore eum dolore, cumque consequuntur maiores quidem? Eius, saepe eaque.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">2018</div>
                                <div className="timeline-content text-white">
                                    <h3 className='fs-4 pb-4'>Timeline Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt tempore eum dolore, cumque consequuntur maiores quidem? Eius, saepe eaque.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">2019</div>
                                <div className="timeline-content text-white">
                                    <h3 className='fs-4 pb-4'>Timeline Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt tempore eum dolore, cumque consequuntur maiores quidem? Eius, saepe eaque.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">2020</div>
                                <div className="timeline-content text-white">
                                    <h3 className='fs-4 pb-4'>Timeline Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt tempore eum dolore, cumque consequuntur maiores quidem? Eius, saepe eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;