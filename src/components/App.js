import Navs from "./links";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Information from "./Information";
import TopNav from "./TopNav";

function App() {
  return (

  

    <div className="App">
      <header className="App-header">

      <TopNav/>
      <Row>
              <Col xs={2} style={{}}>
              <Navs/>
              </Col>

              <Col xs={10}>
                <div style={{padding:"15px",wordSpacing:"3px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries

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
