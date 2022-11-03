import React from 'react';
import './SecondCircle.css';

const SecondCircle = () => {
    return (
        <div className="container pb-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 align-items-center pt-5 pb-5">
                        <div className="second-circle fw-bold d-flex justify-content-center align-items-center">
                            <span className='second-price-item-doller text-white'>$</span>
                            <span className='second-price-item-prefix text-white fs-1'>24</span>
                            <span className="second-price-item-suffix text-white fs-4 pb-4">50</span>
                            <span className="second-inner-circle"></span>
                            <span className="second-innerTwoCircle"></span>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">Basic Plan</h5>
                            <p class="card-text card-text-two">Strategy & Research Business & Finance Analysing SEO Optimization</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 align-items-center pt-5 pb-5">
                        <div className="second-circle fw-bold d-flex justify-content-center align-items-center">
                            <span className='second-price-item-doller text-white'>$</span>
                            <span className='second-price-item-prefix text-white fs-1'>24</span>
                            <span className="second-price-item-suffix text-white fs-4 pb-4">50</span>
                            <span className="second-inner-circle"></span>
                            <span className="second-innerTwoCircle"></span>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">Basic Plan</h5>
                            <p class="card-text card-text-two">Strategy & Research Business & Finance Analysing SEO Optimization</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 align-items-center pt-5 pb-5">
                        <div className="second-circle fw-bold d-flex justify-content-center align-items-center">
                            <span className='second-price-item-doller text-white'>$</span>
                            <span className='second-price-item-prefix text-white fs-1'>24</span>
                            <span className="second-price-item-suffix text-white fs-4 pb-4">50</span>
                            <span className="second-inner-circle"></span>
                            <span className="second-innerTwoCircle"></span>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">Basic Plan</h5>
                            <p class="card-text card-text-two">Strategy & Research Business & Finance Analysing SEO Optimization</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>

                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default SecondCircle;