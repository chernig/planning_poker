import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Jumbotron, Card, CardDeck } from 'react-bootstrap'
import axios from 'axios'
import './App.css';



function App() {
  const [data, setData] = useState<any[]>([])

  useEffect(()=> {
    axios.get('http://127.0.0.1:8000/poker/storys/')
      .then(response => {
        setData(response.data)
        console.log(response.data)
        // console.log(data)
      })
  }, [])

  return (
    <div className="App">
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron>
      <CardDeck>
      {data.map((fields) => (
                        <Card key={fields.id}>
                        <Card.Body>
                          <Card.Title>{fields.id}</Card.Title>
                        </Card.Body>
                        </Card>
                    ))}
      </CardDeck>
      </Jumbotron>
      </div>
    </div>
  );
}

export default App;


