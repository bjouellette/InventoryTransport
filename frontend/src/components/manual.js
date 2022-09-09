import {React, useState} from 'react';
import './form.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../connectLogo.png';

export default function App() {
  const navigate = useNavigate()
  const [driver, setDriver] = useState({
    name: '',
    trip: '',
    start: '',
    end: '',
    keytag: '',
    stock: '',
    last8: '',
    gas: '',
    toll: ''
  })

async function handleSubmit(e) {
    e.preventDefault();
  await fetch('/submissions', {
    method: "Post",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(driver)
  }) 
  // .then(res => res.json())
  // .then(json => setDriver(json.driver))
  navigate.pushState(`/`)
  }


  return (
    <div className="App m-3">
      <main style={{ padding: "1rem 0" }}>
        <Navbar bg="dark" fixed="top" >
        <Container>
        <Navbar.Brand>
          <Nav className="me-auto">
        
          <Nav.Link href="/">
          <img
            src={logo}
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="Connect Logo"
            /></Nav.Link>
             </Nav>
        </Navbar.Brand>
        </Container>
        </Navbar>
        <div className = "form-box">
        <h1 className = "form-title">Add a New Trip Below</h1>
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" id="name"  value={driver.name} name="driver[name]" placeholder="Driver Name" onChange={e => setDriver({ ...driver, name: e.target.value })}/>
      <input type="text" id="trip"  value={driver.trip} name="driver[trip]" placeholder="Trip Name" onChange={e => setDriver({ ...driver, trip: e.target.value })}/>
      <input type="text" id="start" value={driver.start} name="driver[start]" placeholder="Start Location" onChange={e => setDriver({ ...driver, start: e.target.value })}/>
      <input type="text" id="end" value={driver.end} name="driver[end]" placeholder="End Location" onChange={e => setDriver({ ...driver, end: e.target.value })}/>
      <input type="text" id="keytag" value={driver.keytag} name="driver[keytag]" placeholder="Key Tag" onChange={e => setDriver({ ...driver, keytag: e.target.value })}/>
      <input type="text" id="stock" value={driver.stock} name="driver[stock]" placeholder="Stock Number" onChange={e => setDriver({ ...driver, stock: e.target.value })}/>
      <input type="text" id="last8" value={driver.last8} name="driver[last8]" placeholder="Last 8 of VIN" onChange={e => setDriver({ ...driver, last8: e.target.value })}/>    
            <select id="gas" className="Gas" value={driver.gas} name="driver[gas] " onChange={e => setDriver({ ...driver, gas: e.target.value })}>
                <option value="default" hidden >Did you get gas?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <select id="toll" value={driver.toll} name="driver[toll] " onChange={e => setDriver({ ...driver, toll: e.target.value })}>
                <option value="default"  hidden>How much was the toll?</option>
                <option value="1.75">$1.75</option>
                <option value="4.00">$4.00</option>
            </select>
          
      <input type="submit" className="submit"/>
      <input className="reset" type="reset"/>
      </form>
        </div> 
        <br></br>
        </main>
    </div>
    
  );
}

  