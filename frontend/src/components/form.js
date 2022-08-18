import React, { useState } from 'react';
import './form.css'
import { useForm } from 'react-hook-form';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../connectLogo.png';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(errors);
  
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
            alignContent="left"
            /></Nav.Link>
             </Nav>
        </Navbar.Brand>
        </Container>
        </Navbar>
        
        
    <div className = "form-box">
        <h1 className = "form-title">Inventory Transport Form</h1>
        <form className = "form" onSubmit={handleSubmit(onSubmit)}>
            <p className="required" >Driver Name:</p>
            <select defaultValue={value} onChange={handleChange} {...register("Driver Name:", { required: true })}>
                <option value="default" disabled hidden>Choose your Name</option>
                <option value="Ouellette, George">Ouellette, George</option>
                <option value="Abbott, Jeff">Abbott, Jeff</option>
                <option value="Adams, Issac">Adams, Issac</option>
                <option value="Armstrong, Rahn">Armstrong, Rahn</option>
                <option value="Burt, Jace">Burt, Jace</option>
                <option value="Caby, Tom">Caby, Tom</option>
                <option value="Campbell, Gilbert">Campbell, Gilbert</option>
                <option value="Campbell, Sierra">Campbell, Sierra</option>
                <option value="Cook-Watts, Tangela">Cook-Watts, Tangela</option>
                <option value="Corbitt, Kenneth">Corbitt, Kenneth</option>
                <option value="Crosby, John">Crosby, John</option>
                <option value="Depper, Tina">Depper, Tina</option>
                <option value="Doustou, Joseph">Doustou, Joseph</option>
                <option value="Draskovich, Nicholas">Draskovich, Nicholas</option>
                <option value="Dunn, Danny">Dunn, Danny</option>
                <option value="Erickson, Scott">Erickson, Scott</option>
                <option value="Ferguson, Taylor">Ferguson, Taylor</option>
                <option value="Gambino, Heather">Gambino, Heather</option>
                <option value="Gilson, Danny">Gilson, Danny</option>
                <option value="Gormly, Albert">Gormly, Albert</option>
                <option value="Gourley, Douglas">Gourley, Douglas</option>
                <option value="Griffin, Thomas">Griffin, Thomas</option>
                <option value="Heavener, Ronald">Heavener, Ronald</option>
                <option value="Holmberg, Herbert">Holmberg, Herbert</option>
                <option value="Jackson, Scott">Jackson, Scott</option>
                <option value="Johnson, Jeffrey">Johnson, Jeffrey</option>
                <option value="Johnson, Roger">Johnson, Roger</option>
                <option value="Kaplan, Robert">Kaplan, Robert</option>
                <option value="Keever, Felicia">Keever, Felicia</option>
                <option value="Klinac, Meridijana">Klinac, Meridijana</option>
                <option value="Kloppenberg, Ryan">Kloppenberg, Ryan</option>
                <option value="Laster, Gary">Laster, Gary</option>
                <option value="Lofton, Tina">Lofton, Tina</option>
                <option value="Mansingh, Ania">Mansingh, Ania</option>
                <option value="Mistretta, Leonard">Mistretta, Leonard</option>
                <option value="Mitchell, Sharina">Mitchell, Sharina</option>
                <option value="Pedersen, Daniel">Pedersen, Daniel</option>
                <option value="Ream, Robert">Ream, Robert</option>
                <option value="Rindels, Thomas">Rindels, Thomas</option>
                <option value="Rippey, Cedric">Rippey, Cedric</option>
                <option value="Robinson, Alan">Robinson, Alan</option>
                <option value="Scott, Kenneth">Scott, Kenneth</option>
                <option value="Spears, John">Spears, John</option>
                <option value="Starkweather, Daniel">Starkweather, Daniel</option>
                <option value="Sutton, Michael">Sutton, Michael</option>
                <option value="Tipton, Harold">Tipton, Harold</option>
                <option value="Trammell, Walter">Trammell, Walter</option>
                <option value="Weida, Bryant">Weida, Bryant</option>
                <option value="Wood, Michael">Wood, Michael</option>
            </select>
            <p>Is this trip for someone specific?</p>
            <input type="text" placeholder="ex: Dillon, Ryan, etc." {...register("Is the trip for someone specific?", {maxLength: 100})} />
            <p className="required" >Where are you right now?</p>
            <select defaultValue={value} onChange={handleChange} {...register("Where are you right now?", { required: true })}>
                <option value="default" disabled hidden>Choose your Location</option>
                <option value="Kia of Lee's Summit">Kia of Lee's Summit</option>
                <option value="Kia of Lee's Summit Sales">Kia of Lee's Summit Sales</option>
                <option value="Kia of Lee's Summit Service">Kia of Lee's Summit Service</option>
                <option value="Independence Chevrolet">Independence Chevrolet</option>
                <option value="Independence Chevrolet Service">Independence Chevrolet Service</option>
                <option value="Independence Chevrolet Sales">Independence Chevrolet Sales</option>
                <option value="Kansas City Chevrolet">Kansas City Chevrolet</option>
                <option value="Kansas City Chevrolet Service">Kansas City Chevrolet Service</option>
                <option value="Kansas City Chevrolet Sales">Kansas City Chevrolet Sales</option>
                <option value="Cadillac of Kansas City">Cadillac of Kansas City</option>
                <option value="Cadillac of Kansas City Sales">Cadillac of Kansas City Sales</option>
                <option value="BGMC of Independence">BGMC of Independence</option>
                <option value="BGMC of Independence Sales">BGMC of Independence Sales</option>
                <option value="BGMC of Independence Service">BGMC of Independence Service</option>
                <option value="BGMC of Kansas City Service">BGMC of Kansas City Service</option>
                <option value="BGMC of Kansas City Sales">BGMC of Kansas City Sales</option>
                <option value="Topeka Sales">Topeka Sales</option>
                <option value="Topeka Service">Topeka Service</option>
                <option value="Martin City">Martin City</option>
                <option value="Diamond Muffler">Diamond Muffler</option>
                <option value="Bob Sight Ford">Bob Sight Ford</option>
                <option value="Dodge of Lee's Summit">Dodge of Lee's Summit</option>
                <option value="Infiniti of Kansas City">Infiniti of Kansas City</option>
                <option value="Volkswagen of Kansas City">Volkswagen of Kansas City</option>
                <option value="40 HWY">40 HWY</option>
                <option value="BGI Collision">BGI Collision</option>
                <option value="Airport">Airport</option>
                <option value="Volkswagen of Lee's Summit">Volkswagen of Lee's Summit</option>
                <option value="Other">Other</option>
            </select>
            <p className="required" >Where are you headed to?</p>
            <select defaultValue={value} onChange={handleChange} {...register("Where are you headed to?", { required: true })}>
                <option value="default" disabled hidden>Choose a Location</option>
                <option value="Kia of Lee's Summit">Kia of Lee's Summit</option>
                <option value="Kia of Lee's Summit Sales">Kia of Lee's Summit Sales</option>
                <option value="Kia of Lee's Summit Service">Kia of Lee's Summit Service</option>
                <option value="Independence Chevrolet">Independence Chevrolet</option>
                <option value="Independence Chevrolet Service">Independence Chevrolet Service</option>
                <option value="Independence Chevrolet Sales">Independence Chevrolet Sales</option>
                <option value="Kansas City Chevrolet">Kansas City Chevrolet</option>
                <option value="Kansas City Chevrolet Service">Kansas City Chevrolet Service</option>
                <option value="Kansas City Chevrolet Sales">Kansas City Chevrolet Sales</option>
                <option value="Cadillac of Kansas City">Cadillac of Kansas City</option>
                <option value="Cadillac of Kansas City Sales">Cadillac of Kansas City Sales</option>
                <option value="BGMC of Independence">BGMC of Independence</option>
                <option value="BGMC of Independence Sales">BGMC of Independence Sales</option>
                <option value="BGMC of Independence Service">BGMC of Independence Service</option>
                <option value="BGMC of Kansas City Service">BGMC of Kansas City Service</option>
                <option value="BGMC of Kansas City Sales">BGMC of Kansas City Sales</option>
                <option value="Topeka Sales">Topeka Sales</option>
                <option value="Topeka Service">Topeka Service</option>
                <option value="Martin City">Martin City</option>
                <option value="Diamond Muffler">Diamond Muffler</option>
                <option value="Bob Sight Ford">Bob Sight Ford</option>
                <option value="Dodge of Lee's Summit">Dodge of Lee's Summit</option>
                <option value="Infiniti of Kansas City">Infiniti of Kansas City</option>
                <option value="Volkswagen of Kansas City">Volkswagen of Kansas City</option>
                <option value="40 HWY">40 HWY</option>
                <option value="BGI Collision">BGI Collision</option>
                <option value="Airport">Airport</option>
                <option value="Volkswagen of Lee's Summit">Volkswagen of Lee's Summit</option>
                <option value="Other">Other</option>
            </select>
            <p className="required" >Key Tag Photo</p>
            <input type="url" placeholder="Photo Link" {...register("Key Tag Photo", {required: true})} />
            <p className="required" >Stock Number:</p>
            <input type="text" placeholder="ex. BX3746" {...register("Stock Number", {required: true})} />
            <p className="required" >Last Eight of the VIN number:</p>
            <input type="number" placeholder="Last 8 on VIN" {...register("Last Eight of the VIN number:", {required: true})} />
            <p className="required" >Did you get gas on this trip?</p>
            <select className="Gas" defaultValue={value} onChange={handleChange}{...register("Did you get gas on this trip?", { required: true })}>
                <option value="default" disabled hidden>Choose One</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <p>If applicable, how much was the toll?</p>
            <select defaultValue={value} onChange={handleChange}{...register("If applicable, how much was the toll?", { required: true })}>
                <option value="default" disabled hidden>Choose One</option>
                <option value="1.75">$1.75</option>
                <option value="4.00">$4.00</option>
            </select>
            <input className="submit" type="submit" />
        </form>
        </div> 
        </main>
    </div>

  );
    
};