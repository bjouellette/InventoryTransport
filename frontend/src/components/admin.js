import logo from '../connectLogo.png';
import '../App.css';
import { Navbar, Container, Table, Nav, Button, ButtonGroup } from 'react-bootstrap';
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
        <Link to="/report">
          <Button className="button" style={{ fontSize: "15px", padding: "10px", width: "200px"}}><span>Reports</span></Button>
        </Link>
        </ButtonGroup>
        </Container>
        </Navbar>
        
        <h2 className="text-center fw-bold text-decoration-underline pb-2" style={{ color: "#14A062", paddingTop: "3rem"}}>SUBMISSIONS</h2>
        <Table striped bordered hover>
       
          <thead style={{backgroundColor:"#0099D8", color:"white"}}>
            <tr>
                <th scope="col">Driver Name</th>
                <th scope="col">Specific Trip</th>
                <th scope="col">Start Location</th>
                {/* <th scope="col">Other Location</th> */}
                <th scope="col">End Location</th>
                {/* <th scope="col">Other Location</th> */}
                <th scope="col">Key Tag Photo</th>
                <th scope="col">Stock Number</th>
                <th scope="col">Last 8</th>
                <th scope="col">Gas?</th>
                {/* <th scope="col">Gas Amount</th>
                <th scope="col">Receipt Photo</th> */}
                <th scope="col">Toll Amount</th>
                {/* <th scope="col">Toll Photo</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                {/* <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td> */}
            </tr>
        </tbody>
        </Table>

      </main>
    </div>
    );
  }
