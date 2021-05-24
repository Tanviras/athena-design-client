import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHdd,
  faPlus,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'; 
import { HashLink } from "react-router-hash-link";
import { UserContext } from "../../../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../Login/firebase.config";



const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState();

useEffect(() => {
  fetch("http://localhost:5000/isAdmin", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: loggedInUser.email }),
  })
    .then((res) => res.json())
    .then((data) => setIsAdmin(data));
}, []);

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const handleSignOut = () => {
  return firebase.auth().signOut()
  .then(res => {
    const signedOutUser = {
      name: '',
      email: '',
    }
   setLoggedInUser(signedOutUser);//loggedInUser change korlam
   sessionStorage.removeItem('token');//sessionStorage khali korlam, duitai korlam karon jekono ekta thaklei seta diye dhuke jawa jabe onno page a without re-login
  }).catch(err => {
    // An error happened.
  });
}


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


        {isAdmin ? (
     
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

            <li>
              <Link to="/serviceListAdmin" className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
              </Link>
            </li>
          </div>

           ) : (

          <div>
            <li>
              <HashLink to="/#services" className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order service</span>
              </HashLink>
            </li>

            <li>
              <Link to="/serviceList" className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
              </Link>
            </li>
          </div> 

           )
          }
      </ul>

      <div>
        <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={handleSignOut}>Logout</span>
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;
