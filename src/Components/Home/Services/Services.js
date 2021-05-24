import React, { useEffect, useState } from 'react';
import pic1 from '../../../logos/pic1.png';
import pic2 from '../../../logos/pic2.png';
import pic3 from '../../../logos/pic3.png';
import pic4 from '../../../logos/pic4.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);


    return (
        <div className="container mb-5" id="review">
            <h3 align="center" className="text-dark"><b>Our services</b></h3>
            <h6 className="text-secondary text-center">Select our services while ordering from dashboard</h6>

            <div className="d-flex justify-content-center mt-3">
                <div className="row mx-auto w-100 mt-2 pt-4">

                    {
                    services.map(service =>
                    <ServiceCard key={service._id} service={service}></ServiceCard>
                    )
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;