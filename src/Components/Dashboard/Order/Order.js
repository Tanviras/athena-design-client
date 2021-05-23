import React , { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from '../../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Order = () => {
    let { serviceId } = useParams();//params theke serviceId nilam jeta diye selected service milano hobe
    const history = useHistory();
    const [services, setServices] = useState({});
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => {
    
            const service = data.find(
              (srvc) => srvc._id.toString() === serviceId.toString()//ei je milano hocche
            );
            setServices(service);
          });
      }, []);

      const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        newInfo.name=`${loggedInUser.name}`;
        newInfo.email=`${loggedInUser.email}`;
        newInfo.selectedService=`${services.name}`;
        
        setInfo(newInfo);
        console.log(info);
      };
    
      const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
      };

      const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
    
        
        formData.append("name", info.name);
        formData.append("email", info.email);
        formData.append("selectedService", info.selectedService);
        formData.append("description", info.description);
        formData.append("price", info.price);
        formData.append("file", file);
    
        fetch("http://localhost:5000/addOrder", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            alert("Order placed Successfully");
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      const containerStyle = {
        // backgroundColor: "#F4F7FC",
        border: "none",
      };
    
    return (
        <div style={containerStyle} className="row">

        <div className='col-md-2'>
        <Sidebar></Sidebar>
        </div>
    
        <div className="col-md-10 p-4 pr-5 ml-auto">
    
          <div className="row mb-5 justify-content-md-center">
              <h1 className="mt-5">Order</h1>
          </div>
    
          <form onSubmit={handleSubmit}>
    
            <div className="form-group mb-3">
              <label htmlFor="name">Title</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter Title"
                defaultValue={loggedInUser.name}
              />
            </div>
    
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Email"
                defaultValue={loggedInUser.email}
              />
            </div>
    
            <div className="form-group mb-3">
              <label htmlFor="selectedService">Selected Service</label>
              <input
                type="text"
                className="form-control"
                name="selectedService"
                defaultValue={services.name}
              />
            </div>
    
    
            <div className="form-group mb-3">
              <label htmlFor="description">Project Details</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="description"
                placeholder="Enter Description"
              />
            </div>
    
            <div className="form-group mb-3">
              <label htmlFor="price">Price</label>
              <input
                onBlur={handleBlur}
                name="price"
                type="text"
                className="form-control"
                placeholder="Enter Price"
              />
            </div>
    
    
    
    
            <div className="form-group mb-3">
              <label htmlFor="file">Upload icon for service</label>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control"
                placeholder="Upload Image"
              />
            </div>
    
    
    
            <button type="submit" className="btn btn-success">
              Submit
            </button>
    
    
          </form>
    
        </div>
    
    
      </div>
    );
};

export default Order;