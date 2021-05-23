import React, { useContext } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import logo from "../../../src/images/logos/logo.png";
import googleIcon from "../../../src/images/logos/Group 573.png";
import './Login.css';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "@material-ui/core";
import loginPhoto from '../../image/Illustration/graphics-design.jpg';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
        };

        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        // Handle Errors here.
      });
  };

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {

        //now store the token in session storage
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div>

      <div className="row">

        <div className="col-md-6">

          <center className="mt-2">
            <Link to="/">
              <img src={logo} alt='logo' className='logoSize ' />
            </Link>
          </center>

          <center>
            <div className='loginBox mt-5'>
              <h2> Login With</h2>
              <div className='googleBox' onClick={handleGoogleSignIn}>
                <img src={googleIcon} alt='googleLogo' className='googleLogo' />
                <span className='writing'>Continue with Google</span>
              </div>
            </div>
          </center>


        </div>


        <center className='col-md-6'>
          <div style={{ height: '100%' }}>
            <img src={loginPhoto} alt="loginPhoto" style={{ maxWidth: '100%', maxHeight: '100vh', marginTop:"126px" }} />
          </div>
        </center>


      </div>



    </div>
  );
};

export default Login;