import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../../App";
import Sidebar from "../Sidebar/Sidebar";
import ServiceListCard from "./ServiceListCard/ServiceListCard";

const ServiceList = () => {
  const [servicesList, setServicesList] = useState([]);//email diye data ene ekhane rakhbo
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 //from collection of 'orders'
 useEffect(() => {
  fetch(
    "http://localhost:5000/servicesOrdered?email=" +
      loggedInUser.email
  )
    .then((res) => res.json())
    .then((data) => setServicesList(data));//data niye eshe "servicesList" a rakhlam
});

console.log(servicesList);

const containerStyle = {
  // backgroundColor: "#F4F7FC",
  border: "none",
};

  return (
    <section style={containerStyle} className="row">

    <div className='col-md-2'>
    <Sidebar></Sidebar>
    </div>


    <div className="col-md-10 p-4 pr-5 ml-auto">

    <div className="row mb-5 justify-content-md-center">
        <h1 className="mt-5">Ordered Services</h1>
    </div>


    <div className="row">
      {
      servicesList.map(srvcList => 
      (<ServiceListCard key={srvcList._id} service={srvcList}></ServiceListCard>)
      )
      }
    </div>



    </div>
  </section>
  );
};

export default ServiceList;
