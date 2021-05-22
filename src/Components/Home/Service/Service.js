import React from 'react';
import pic1 from '../../../logos/pic1.png';
import pic2 from '../../../logos/pic2.png';
import pic3 from '../../../logos/pic3.png';
import pic4 from '../../../logos/pic4.png';

const Service = () => {
    return (
        <div className="container mb-5" id="review">
            <h3 align="center" className="text-dark"><b> What we do </b></h3>
            <h6 className="text-secondary text-center">Our main focus is make to make the User Experience very simple and easy. Simplicity is our Strength.</h6>
            
            <div className="d-flex justify-content-center mt-3">
                <div className="mx-auto w-100 row mt-2 pt-4">

                    <div className="col-md-3 servicePart">
                        <div className="d-flex justify-content-center">
                            <img style={{ width: "100px" }} src={pic1} alt="" />
                        </div>
                        <div style={{ borderRadius: '5px' }} className="m-1 text-center">
                            <h5>Experience Design</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="col-md-3 servicePart">
                        <div className="d-flex justify-content-center">
                            <img style={{ width: "100px" }} src={pic2} alt="" />
                        </div>
                        <div style={{ borderRadius: '5px' }} className="m-1 text-center">
                            <h5>Interface Design</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="col-md-3 servicePart">
                        <div className="d-flex justify-content-center">
                            <img style={{ width: "100px" }} src={pic3} alt="" />
                        </div>
                        <div style={{ borderRadius: '5px' }} className="m-1 text-center">
                            <h5>Prototyping</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="col-md-3 servicePart">
                        <div className="d-flex justify-content-center">
                            <img style={{ width: "100px" }} src={pic4} alt="" />
                        </div>
                        <div style={{ borderRadius: '5px' }} className="m-1 text-center">
                            <h5>Illustration</h5>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;