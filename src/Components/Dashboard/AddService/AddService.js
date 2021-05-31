import React, { useState } from 'react';

import Sidebar from '../Dashboard/Sidebar/Sidebar';

    const AddService = () => {
      const [info, setInfo] = useState({});
      const [file, setFile] = useState(null);
    
      const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
      };
    
      const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
      };
    
    
      
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
    
        formData.append("file", file);
        formData.append("name", info.name);
        formData.append("description", info.description);
        // formData.append("price", info.price);
    
        fetch("https://polar-cove-69023.herokuapp.com/addService", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            alert("New Service Added Successfully");
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
            <h1 className="mt-5">Add Services</h1>
        </div>
  
        <form onSubmit={handleSubmit}>
  
          <div className="form-group mb-3">
            <label htmlFor="name">Service Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Title"
            />
          </div>
  
  
          <div className="form-group mb-3">
            <label htmlFor="description">Service description in brief</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Description"
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

export default AddService;