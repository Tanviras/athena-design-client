import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  const containerStyle = {
    border: "none",
    overflow: "hidden",
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  return (
    <div style={containerStyle} className="row">

      <div className='col-md-2 col-sm-2'>
      <Sidebar></Sidebar>
      </div>
      

      <div className="col-md-10 p-4 pr-5 ml-auto col-sm-10">
        <div>
          <center>
            <p
              style={{ fontSize: 60, fontWeight: 700 }}
              className="text-center dashboardText"
            >
              Hello {loggedInUser.name}
            </p>
            <p className="text-center">Take a tour to sidebar to explore your dashboard</p>
          </center>
        </div>
      </div>


    </div>
  );
};

export default Dashboard;