import logo from './connectLogo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";

function App() {
   
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
      
        <ButtonGroup size="lg" className="mb-2">
        <Button className="button" href="#"><span>Driver</span></Button>{' '}

        <Link to="/admin">
          <Button className="button"><span>Admin Login </span></Button>
        </Link>
      </ButtonGroup>
     
      </header>
    </div>
  );
}

export default App;
