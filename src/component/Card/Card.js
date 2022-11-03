import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="card-section">
            <div className="container cards-div">
                <div className="d-flex mx-auto text-center">
                    <div className="row text-white mx-auto three-row-div">
                        <div className="col-4 verticle-border">
                            <div className="text-div">
                                <h5>Fully Responsive</h5>
                                <p><small>Vestibulum ante ipsum primis sit amet justo elit faucibus orci luctus ultrices posuere cubilia Curae</small></p>
                            </div>
                        </div>
                        <div className="col-4 verticle-border">
                            <div className="text-div">
                                <h5>Fully Responsive</h5>
                                <p><small>Vestibulum ante ipsum primis sit amet justo elit faucibus orci luctus ultrices posuere cubilia Curae</small></p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="text-div">
                                <h5>Fully Responsive</h5>
                                <p><small>Vestibulum ante ipsum primis sit amet justo elit faucibus orci luctus ultrices posuere cubilia Curae</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;