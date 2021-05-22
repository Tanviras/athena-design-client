import React, { useContext } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import logo from "../../../src/images/logos/logo.png";
import googleIcon from "../../../src/images/logos/Group 573.png";

import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./Login.css";

const socialStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const classes = useStyles();
  const socialClasses = socialStyles();

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL  } = result.user;
        const signedInUser = { name: displayName, email, image: photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div>
      <Container className="loginContainer" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            style={{ width: "100px", paddingTop: "10px" }}
            src={logo}
            alt=""
            srcSet=""
          />
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <center>
            <button onClick={handleGoogleSignIn} className="socialButton">
              <div className={socialClasses.root}>
                <Grid
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  container
                  spacing={1}
                >
                  <Grid item xs={1}>
                    <img
                      className="socailIcon"
                      src={googleIcon}
                      alt=""
                      srcSet=""
                    />{" "}
                  </Grid>
                  <Grid item xs={11}>
                    Continue with Google
                  </Grid>
                </Grid>
              </div>
            </button>
          </center>
        </div>
      </Container>
    </div>
  );
};

export default Login;