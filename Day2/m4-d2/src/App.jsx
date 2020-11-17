import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Button} from "react-bootstrap";
import NavBar from './Components/NavBar'
import Home from './Components/Home'

class App extends React.Component {
  //----------------OLD WAY------------
  // constructor(props){
  //   super(props)

  //   this.state = {}
  // this.handleClick = this.handleClick.bind(this)
  // }
  //----------------Same but NEW WAY----
  state = {}


  handleClick = () => {}

  render(){
  return (
    <React.Fragment>
    <div className="App">
      <Container>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={6} xl={10}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </React.Fragment>
  );
}
}

export default App;
