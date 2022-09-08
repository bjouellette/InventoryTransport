import {React, useState} from 'react';
import './form.css'
import { useForm } from 'react-hook-form';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../connectLogo.png';

export default function App() {
  const { register} = useForm();
  const DriverForm = props => {
    const [driver, setDriver] = useState(props.driver)
  const submit = (e) => {
    e.preventDefault();
  fetch('http://localhost:3001/submissions', {
    method: "Post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(driver)
  }) 
  .then(res => res.json())
  .then(json => setDriver(json.driver))
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
    <form className="form" onSubmit={submit}>
      <input type="text"  value={driver.name} name="driver[name]" placeholder="Driver Name" onChange={e => setDriver({ ...driver, name: e.target.value })} {...register("Driver Name", {})} />
      <input type="text"  value={driver.trip} name="driver[trip]" placeholder="Trip Name" onChange={e => setDriver({ ...driver, trip: e.target.value })} {...register("Trip Name", {})} />
      <input type="text"  value={driver.start} name="driver[start]" placeholder="Start Location" onChange={e => setDriver({ ...driver, start: e.target.value })} {...register("Start Location", {})} />
      <input type="text"  value={driver.end} name="driver[end]" placeholder="End Location" onChange={e => setDriver({ ...driver, end: e.target.value })} {...register("End Location", {})} />
      <input type="text"  value={driver.tag} name="driver[tag]" placeholder="Key Tag" onChange={e => setDriver({ ...driver, tag: e.target.value })} {...register("Key Tag", {})} />
      <input type="text"  value={driver.stock} name="driver[stock]" placeholder="Stock Number" onChange={e => setDriver({ ...driver, stock: e.target.value })} {...register("Stock Number", {})} />
      <input type="text"  value={driver.vin} name="driver[vin]" placeholder="Last 8 of VIN" onChange={e => setDriver({ ...driver, vin: e.target.value })} {...register("Last 8 of VIN", {})} />    
            <select className="Gas" value={driver.gas} name="driver[gas] " onChange={e => setDriver({ ...driver, gas: e.target.value })}{...register("Did you get gas on this trip?", { required: true })}>
                <option value="default" hidden >Did you get gas?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <select value={driver.gas} name="driver[gas] " onChange={e => setDriver({ ...driver, gas: e.target.value })} {...register("If applicable, how much was the toll?", { required: true })}>
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
}
  