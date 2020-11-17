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
    <div id="nav">
      <Navbar bg="black" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://i.pinimg.com/originals/9b/d8/8c/9bd88c8e74d666fed60487f95f419c12.png"
        width="60"
        height="50"
        className="d-inline-block align-top"
      />{' '}
      AAAAAAAAAAA
    </Navbar.Brand>
    <Nav className="mr-auto">
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