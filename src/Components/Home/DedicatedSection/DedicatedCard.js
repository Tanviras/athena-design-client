import React from 'react';
import './DedicatedCard.css';

const DedicatedCard = ({ service }) => {
    return (
        <div className="col-lg-3 text-center box-style-price mb-2 p-5">
            <div>
                <h1>{service.price}</h1>
                <p>{service.for}</p>
                <hr />
                <p>{service.homepage}</p>
                <p>{service.inner}</p>
                <p>{service.asset}</p>
                <p>{service.source}</p>
                <p>{service.stock}</p>
                <p>{service.support}</p>
                <p>{service.time}</p>
                <br />
                <button className="button-style">Order Now</button>
            </div>
        </div>
    );
};

export default DedicatedCard;