import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navs() {
    return (


      <Nav defaultActiveKey="/home" className="flex-column" bg="light" expand="lg">
        {/* <Navbar bg="light" expand="lg" className="flex-column"> */}
        <Container>
        <Navbar.Brand href="/home">DashBoard</Navbar.Brand>
        <Nav.Link eventKey="link-1">Class</Nav.Link>
        <Nav.Link eventKey="link-2">Attendance</Nav.Link>
        {/* <Nav.Link eventKey="link-2"></Nav.Link> */}

            <NavDropdown title="Test" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Discipline" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
        <Nav.Link eventKey="link-2">Doubts</Nav.Link>
        <Nav.Link eventKey="link-2">Messages</Nav.Link>
        <Nav.Link eventKey="link-2">Schedule</Nav.Link>
        <Nav.Link eventKey="link-2">Notify</Nav.Link>
        {/* <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link> */}
        </Container>
        {/* </Navbar> */}
      </Nav>
    );
  }
  
  export default Navs;