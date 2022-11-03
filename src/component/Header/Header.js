import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Service from '../Service/Service';
import Slide from '../SliderSection/Slide';
import NavTabs from '../NavTabs/NavTabs';
import AboutUs from '../AboutUs/AboutUs';
import { useState } from 'react';


const Header = () => {
    const [navBar, setNavBar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavBar(true);

        } else {
            setNavBar(false);
        }

    };
    window.addEventListener('scroll', changeBackground);
    return (
        <div>
            <div className="background">
                <div className='containertwo'>
                    <nav className={navBar ? 'navbar-two active navbar navbar-expand-lg' : 'navbar navbar-expand-lg'}>
                        <div className="container">
                            <Link to='/home' className="navbar-brand fw-bold fs-1 text-white" href="#">LOGO</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navbar-collapse-two" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold fs-5">
                                    <li className="nav-item">
                                        <Link to='/home' className="nav-link text-white" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/card' className="nav-link text-white" href="#">Card</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/blog' className="nav-link text-white" href="#">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contact' className="nav-link text-white" href="#">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="bubbles">
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
                    <div className="container">
                        <div className="hero-section text">
                            <div className="text-white animate__animated animate__fadeInDownBig ">
                                <h1>This is Business Website</h1>
                                <p className='fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus distinctio sunt labore accusantium officiis illum tempore, eum similique deleniti!</p>
                                <button className='first-btn border-0 p-3 text-white bg-primary rounded'>Get started now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <Card />
                <Service />
                <Slide />
                <NavTabs />
                <AboutUs />

            </div>


        </div>

    );
};

export default Header;