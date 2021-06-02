import React from 'react';
import './NavbarRB.css';
import logo from '../../../../images/logos/logo.png'
// import { Link } from 'react-router-dom';
import { Nav, Navbar} from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const NavbarRB = () => {
    return (
        <div className="container mb-2">
        <Navbar bg="transparent" expand="lg">


        <Navbar.Brand href="#home" style={{marginRight:"62px"}}>
          <Link to="/home">
          <img style={{ width: "100px" }} src={logo} alt=""/>
          </Link>
        </Navbar.Brand>

      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">


            <Nav.Item className='navBarSpacing'>
              <Link className="nav-link mr-5" to="/">
                Home
              </Link>
            </Nav.Item>

            <Nav.Item className='navBarSpacing'>
              <Link className="nav-link mr-5" to="/#services">
               Services
              </Link>
            </Nav.Item>

            <Nav.Item className='navBarSpacing'>
              <Link className="nav-link mr-5" to="/#achievements">
                Achievements
              </Link>
            </Nav.Item>


            <Nav.Item className='navBarSpacing'>
              <Link className="nav-link mr-5" to="/#offers">
                Offers
              </Link>
            </Nav.Item>


            <Nav.Item className='navBarSpacing'>
              <Link className="nav-link mr-5" to="/#footer">
                Contacts
              </Link>
            </Nav.Item>



            <Nav.Item className='navBarSpacing'>
              <Link className="nav-link mr-5" to="/dashboard">
                Dashboard
              </Link>
            </Nav.Item>


            <Nav.Item className='navBarSpacing resLogBtn'>
              <Link className="nav-link mr-5 text-white" to="/dashboard">
                <button className="btn btn-brand text-white btnLogin px-4 h-75">Sign In</button>
              </Link>
            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
};

export default NavbarRB;