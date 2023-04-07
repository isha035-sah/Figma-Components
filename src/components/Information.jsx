import React from "react";
import { Navbar } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Card(props){
    return <div>
        <Row>
            <Col xs={4}>
                <div style={{}}>
                    <div className="picStyle">
                         Photos

                     </div>
                     <div style={{display:"inline-block",position:"relative",top:"70px",padding:"2px"}}>
                       <p style={{fontSize:"30px"}}>{props.name}</p>
                       <p style={{color:"grey"}}>{props.age}</p>
                       <p style={{color:"green"}}>{props.assignment}</p>
                      
                     </div>
                </div>
                    
            </Col>

            <Col xs={4}>

            </Col>
            <Col xs={4}>
            <Button variant="success" size="lg" style={{borderRadius:"5px",padding:"5px 20px",marginTop:"80px",float:"right",marginRight:"9px"}}>Grade</Button>{' '}
            </Col>
        </Row>
    </div>
}

function Information() {
    return(

        <>
        <Navbar>
          <Button variant="success">Non-Graded</Button>{' '}
          <Button variant="light">Graded</Button>{' '}
          <Form className="d-flex" style={{Float:"right"}}>
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            </Form>

            
            </Navbar>

            <div>
                    <Card 
                    name="abc"
                    age="12"
                    assignment="compeleted"
                   
                    />
                     <Card
                         name="xyz"
                         age="20"
                         assignment="compeleted"
                     />
                     {/* <Card/>    */}
            </div>
            {/* <div>
                <Card/>
            </div> */}
        </>
    );
  }
  
export default Information;