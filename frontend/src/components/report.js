import logo from '../connectLogo.png';
import '../App.css';
import { Navbar, Container, Button, ButtonGroup, Card, CardGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Admin() {
    return (
    <div className="App m-3">
      <main style={{ padding: "1rem 0" }}>
      <Navbar bg="dark" fixed="top">
        <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="Connect Logo"
            alignContent="left"
            />
        </Navbar.Brand>
        <ButtonGroup size="lg" className="mb-2">
        <Link to="/admin">
          <Button className="button" style={{ fontSize: "15px", padding: "10px", width: "200px"}}><span>Admin</span></Button>
        </Link>
        </ButtonGroup>
        </Container>
        </Navbar>
        <h2 className="text-center fw-bold text-decoration-underline pb-2" style={{ color: "#14A062", paddingTop: "3rem"}}>REPORTS</h2>
        {/* https://react-bootstrap.github.io/components/cards/ */}
        <CardGroup >
      <Card border="dark">
      <u style={{color:"#0099D8"}}><Card.Title style={{color:"#0099D8", fontWeight:"bold", fontSize:"3rem"}}>TRIPS TODAY</Card.Title></u>
          <Card.Body style={{fontSize: "6rem", fontWeight:"bold"}}>
            50
          </Card.Body>
      </Card>
      <Card border="dark">
      <u style={{color:"#0099D8"}}><Card.Title style={{color:"#0099D8", fontWeight:"bold", fontSize:"3rem"}}>MTD TRIPS</Card.Title></u>
          <Card.Body style={{fontSize: "6rem", fontWeight:"bold"}}>
            1,598
          </Card.Body>
      </Card>
      <Card border="dark">
      <u style={{color:"#0099D8"}}><Card.Title style={{color:"#0099D8", fontWeight:"bold", fontSize:"3rem"}}>YTD TRIPS</Card.Title></u>
          <Card.Body style={{fontSize: "6rem", fontWeight:"bold"}}>
            16,156
          </Card.Body>
      </Card>
    </CardGroup>
    <br></br>
    <CardGroup>
    <Card border="dark">
      <u style={{color:"#0099D8"}}><Card.Title style={{color:"#0099D8", fontWeight:"bold", fontSize:"3rem"}}>TOLL AMOUNT SPENT</Card.Title></u>
          <Card.Body style={{fontSize: "6rem", fontWeight:"bold"}}>
           $320.00
          </Card.Body>
      </Card>
      <Card border="dark">
      <u style={{color:"#0099D8"}}><Card.Title style={{color:"#0099D8", fontWeight:"bold", fontSize:"3rem"}}>GAS AMOUNT SPENT</Card.Title></u>
          <Card.Body style={{fontSize: "6rem", fontWeight:"bold"}}>
          $900.81
          </Card.Body>
      </Card>
      <Card border="dark">
      <u style={{color:"#0099D8"}}><Card.Title style={{color:"#0099D8", fontWeight:"bold", fontSize:"3rem"}}>TOTAL ACTIVE DRIVERS</Card.Title></u>
          <Card.Body style={{fontSize: "6rem", fontWeight:"bold"}}>
          49
          </Card.Body>
      </Card>
    </CardGroup>
    <br></br>
    
      </main>
    </div>
    );
  }
