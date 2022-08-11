import logo from './connectLogo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
   
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
      
        <ButtonGroup size="lg" className="mb-2">
        <Button className="button" href="#"><span>Driver</span></Button>{' '}

        <Button className="button" href="#"><span>Admin Login </span></Button>
      </ButtonGroup>
     
      </header>
    </div>
  );
}

export default App;
