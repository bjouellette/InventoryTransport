import logo from '../connectLogo.png';
import '../App.css';
import { Navbar, Container, Nav, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import BasicTable from "./basicTable";

 
export default function Admin() {
  const [submissions, setSubmissions] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const response = await fetch ('/submissions')
    const data = await response.json()
    console.log(response)
    setSubmissions(data);
  }
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id" 
      },
      {
        Header: "Driver Name",
        accessor: "name"
      },
      {
        Header: "Requested By",
        accessor: "trip"
      },
      {
        Header: "Start Location",
        accessor: "start" 
      },
      {
        Header: "End Location",
        accessor: "end"
      },
      {
        Header: "KeyTag #",
        accessor: "keytag" 
      },
      {
        Header: "Stock #",
        accessor: "stock"
      },
      {
        Header: "Last 8 of VIN",
        accessor: "last 8" 
      },
      {
        Header: "Gas?",
        accessor: "gas"
      },
      {
        Header: "Toll $",
        accessor: "toll"
      }
    ],
    []
  );
  // const data = React.useMemo(() => submissions, []);
// console.log(data)
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
            />
        </Navbar.Brand>
        {/* <ButtonGroup size="lg" className="mb-2">
        <Link to="/report">
          <Button className="button" style={{ fontSize: "15px", padding: "10px", width: "200px"}}><span>Reports</span></Button>
        </Link>
        </ButtonGroup> */}
        </Container>
        </Navbar>
        
        <h2 className="text-center fw-bold pb-2" style={{ color: "#14A062", paddingTop: "3rem"}}>Add a Trip</h2>
      <Link to="/manual"><Button className="button_plus" title='Add a Trip Manually'> </Button></Link> <br></br><br></br> 
        
        <>{submissions && <BasicTable columns={columns} data={submissions}/>}</>


      </main>
    </div>
    );
  }
