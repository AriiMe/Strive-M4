import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Button, Navbar} from "react-bootstrap";
import NavBar from './Components/NavBar'
import Home from './Components/Home'

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="Strivesturant" />
        <Home />
      </>
    );
  }
}

export default App;