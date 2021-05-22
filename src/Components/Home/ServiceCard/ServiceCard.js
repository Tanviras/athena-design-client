import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";


const ServiceCard = (props) => {

    const { image, name, description, _id } = props.service;
    return (
    //     <Link style={{ textDecoration: "none", color: "black" }} to={"/serviceRegister/" + _id}>
    //     </Link>


    <div className="col-md-3">  
    
    <div className="d-flex justify-content-center">
        <img style={{ width: "100px" }} src={`data:image/png;base64,${image.img}`} alt="" />
    </div>

    <div style={{ borderRadius: '5px' }} className="m-1 text-center">
        <h5>{name}</h5>
        <p className="text-secondary">{description}</p>
    </div>

    </div>



    );
};

export default ServiceCard;


