import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHdd,
  faComments,
  faPlus,
  faCog,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
// import { UserContext } from "../../../App";
import './Sidebar.css'; 
import { HashLink } from "react-router-hash-link";
import { UserContext } from "../../../../App";



const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState();

// useEffect(() => {
//   fetch("https://polar-springs-72792.herokuapp.com/isAdmin", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({ email: loggedInUser.email }),
//   })
//     .then((res) => res.json())
//     .then((data) => setIsAdmin(data));
// }, []);


  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      
      <ul className="list-unstyled">
        <Link to="/">
          <img className="sd-logo" style={{ marginBottom: 30 }} src={logo} alt="" />
        </Link>

        <li>
          <Link to="/dashboard" className="text-white" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>

     
          <div>
            <li>
              <Link to="/addService" className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>

            <li>
              <Link to="/addAdmin" className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add An Admin</span>
              </Link>
            </li>
          </div>

  
          <div>

            <li>
              <Link to="/serviceList" className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
              </Link>
            </li>
          </div>



          <div>
            <li>
              <HashLink to="/#services" className="text-dark" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
              </HashLink>
            </li>

            <li>
              <Link to="/serviceList" className="text-dark" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
              </Link>
            </li>

            <li>
              <Link to="/postReview" className="text-dark" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faComments} /> <span>Review</span>
              </Link>
            </li>
          </div> 


      </ul>

      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;
