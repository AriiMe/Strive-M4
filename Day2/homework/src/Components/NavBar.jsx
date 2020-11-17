import React from "react";
import Home from "./Home"
import fantasyBooks from '../data/fantasy.json'
import historyBooks from '../data/history.json'
import horrorBooks from '../data/horror.json'
import romanceBooks from '../data/romance.json'
import scifiBooks from '../data/scifi.json'
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from "react-bootstrap";

const NavBar = (props) => {
    

  return (
    <div>
      <Navbar id="navbaru" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>

    <NavDropdown title="Genres" id="collasible-nav-dropdown">
        <NavDropdown.Item href="" value="Fantasy">Fantasy</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">SciFi</NavDropdown.Item>
      </NavDropdown>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    
  </Navbar>
    </div>
  );
};

export default NavBar;