import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaUserFriends} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import {FaRegFileAlt} from "react-icons/fa";
import {FaRegCommentDots} from "react-icons/fa";
import {FaRegComments} from "react-icons/fa";
import {FaRegCalendar} from "react-icons/fa";
import {FaVolumeOff} from "react-icons/fa";

function Navs() {
    return (


      <Nav defaultActiveKey="/home" className="flex-column" bg="light" expand="lg">
        {/* <Navbar bg="light" expand="lg" className="flex-column"> */}
        <Container>
        <Nav.Link eventKey="link-1" className="linkstyle"><FaUserFriends className="fontStyle"/> Class</Nav.Link>
        <Nav.Link eventKey="link-2" className="linkstyle"><FaUserAlt className="fontStyle"/>Attendance</Nav.Link>
        {/* <Nav.Link eventKey="link-2"></Nav.Link> */}

            <NavDropdown  title="Test" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            {/* <NavDropdown title="Report" id="basic-nav-dropdown" className="linkstyle">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}
        <Nav.Link eventKey="link-2" className="linkstyle"><FaRegComments className="fontStyle"/> Doubts</Nav.Link>
        <Nav.Link eventKey="link-2" className="linkstyle"><FaRegCommentDots className="fontStyle"/>Messages</Nav.Link>
        <Nav.Link eventKey="link-2" className="linkstyle"><FaRegCalendar className="fontStyle"/>Schedule</Nav.Link>
        <Nav.Link eventKey="link-2" className="linkstyle"><FaVolumeOff className="fontStyle"/> Notify</Nav.Link>
        {/* <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link> */}
        </Container>
        {/* </Navbar> */}
      </Nav>
    );
  }
  
  export default Navs;