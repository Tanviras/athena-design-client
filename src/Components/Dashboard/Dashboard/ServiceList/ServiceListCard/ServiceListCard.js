import React from "react";
import "./ServiceListCard.css";

const ServiceListCard = (props) => {
  const { image, selectedService, description } = props.service;
  return (
    <div style={{ marginTop: 50 }} className="col-md-6">

      <div style={{ padding: 30 }} className="card serviceList-card">

        <div className="d-flex justify-content-between">
          <img className="service-image" style={{paddingLeft:"19px",width:"100px"}} src={`data:image/png;base64,${image.img}`} alt="" />
         
         <div style={{paddingRight:"35px",paddingTop:"15px"}}>
         <button className="btn btn-brand bg-success text-white" style={{height:"50px"}}>
            On Going
          </button>
         </div>
        
        </div>

        <div className="card-body">
          <h5 className="card-title"> {selectedService} </h5>
          <p className="card-text">{description}</p>
        </div>

      </div>

    </div>
  );
};

export default ServiceListCard;