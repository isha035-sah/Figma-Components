import Navs from "./links";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Information from "./Information";

function App() {
  return (

  

    <div className="App">
      <header className="App-header">
      <Row>
              <Col xs={2} style={{}}>
              <Navs/>
              </Col>

              <Col xs={10}>
                <div>
                  Header and components

                </div>

                <div style={{backgroundColor:"#FEFCF3" , marginTop:"50px"}}>
                 <Information/>
                </div>
              </Col>
       </Row>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        
         
        
        
      </header>
    </div>
  );
}

export default App;
