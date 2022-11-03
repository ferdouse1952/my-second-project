import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css';

const Service = () => {
    const serviceItems = [
        { id: 1, title: 'Web Development', body: 'consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam.' },
        { id: 2, title: 'Web Development', body: 'consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam.' },
        { id: 3, title: 'Web Development', body: 'consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam.' },
        { id: 4, title: 'Web Development', body: 'consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam.' },
        { id: 5, title: 'Web Development', body: 'consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam.' },
        { id: 6, title: 'Web Development', body: 'consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam.' }

    ];
    return (
        <div>
            <div className='service-section'>
                <div className="service-text text-center pt-5 pb-5">
                    <h3>We are offering best services</h3>
                    
                </div>
                <div className="container">
                    <div className="service-div mx-auto">
                        <div className="container">
                            <div class="row service-row row-cols-1 row-cols-md-3 pb-5 g-0">
                                {
                                    serviceItems.map(serviceItem => <ServiceCard
                                        key={serviceItem.id}
                                        serviceItem={serviceItem}
                                    >

                                    </ServiceCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;