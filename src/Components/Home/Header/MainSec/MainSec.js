import React from 'react';
import './MainSec.css'
import frame from '../../../../images/logos/Frame.png'
const MainSec = () => {
    return (
        <div className="container headMain mb-2">

        <div className="row d-flex align-items-center">
            <div className="col-md-4 mr-5 p-4">
                <h1><strong> Florence <br/> Agency </strong></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatum ullam velit eligendi facilis.</p>
                <button className="btn text-light w-50 btnHire">See Pricing</button>
            </div>

            <div className="col-md-6 offset-md-1 p-3 headMainImg">
            <img  className="w-100 img-fluid" src={frame} alt=""/>
            </div>

        </div>
        </div>
    );
};

export default MainSec;