import logo from '../connectLogo.png';
import '../App.css';
import Table from 'react-bootstrap/Table';
import { Navbar } from 'react-bootstrap';

export default function Admin() {
    return (
    <div className="App m-3">
      <main style={{ padding: "1rem 0" }}>

        <h2 className="text-center fw-bold text-decoration-underline pb-2" style={{ color: "#13a061"}}>SUBMISSIONS</h2>

        <Table striped bordered hover>
          <thead className="bg-info">
            <tr>
                <th scope="col">Driver Name</th>
                <th scope="col">Specific Trip</th>
                <th scope="col">Start Location</th>
                <th scope="col">Other Location</th>
                <th scope="col">End Location</th>
                <th scope="col">Other Location</th>
                <th scope="col">Key Tag Photo</th>
                <th scope="col">Stock Number</th>
                <th scope="col">Last 8</th>
                <th scope="col">Gas?</th>
                <th scope="col">Gas Amount</th>
                <th scope="col">Receipt Photo</th>
                <th scope="col">Toll Amount</th>
                <th scope="col">Toll Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Mark</td>
                <td>Yes</td>
                <td>Lawrence</td>
                <td>Shawnee</td>
                <td>Olathe</td>
                <td></td>
                <td></td>
                <td>T29876</td>
                <td>89763789</td>
                <td>Yes</td>
                <td>$45.00</td>
                <td></td>
                <td>$4.00</td>
                <td></td>
            </tr>
        </tbody>
        </Table>


      </main>
    </div>
    );
  }
