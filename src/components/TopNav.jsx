import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import logo from "./images/logo.jpg"


function TopNav(){
    return(
        <>
             <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Bhavani Infotech
          </Navbar.Brand>

          <div style={{backgroundColor:"#F7C8E0", height:"50px",width:"50px", borderRadius:"50%"}}>
           <center> Pp</center> 
           {/* <div> fifty thousand</div>  */}
          </div>
         
        </Container>
      </Navbar>
        </>
    );
}

export default TopNav;