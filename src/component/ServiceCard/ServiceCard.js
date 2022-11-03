import React from 'react';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const { title, body } = props.serviceItem;
    return (
        <div>
            <div class="col">
                <div className="container">
                    <div class="card cards h-100 border-0">
                        <div class="card-body service-card-body text-center">
                            <h6 class="card-title">{title}</h6>
                            <p class="card-text"><small>{body}</small></p>
                        </div>
                        <div className="hover-strip"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;