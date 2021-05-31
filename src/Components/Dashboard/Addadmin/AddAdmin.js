import React, { useState } from "react";
import Sidebar from "../../Dashboard/Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const AddAdmin = () => {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
      const newInfo = { ...info };
      newInfo.email = e.target.value;
  
      setInfo(newInfo);
    };
  
  
    const handleSubmit = (event) => {
  
  
      const formData = new FormData();
      formData.append("email", info.email);
  
      fetch("https://polar-cove-69023.herokuapp.com/addAdmin", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("New Admin Added Successfully");
          }
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
            <h1 className="mt-5">Make New Admin</h1>
        </div>

        <form className="col-md-10" onSubmit={handleSubmit}>


          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              placeholder="Email address to be added as admin"
              className={`form-control`}
            />
          </div>


          <button className="btn btn-success text-white" type="submit">
            Submit
          </button>


        </form>


      </div>
    </div>
  );
};

export default AddAdmin;