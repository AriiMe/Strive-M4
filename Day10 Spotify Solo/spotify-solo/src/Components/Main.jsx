/** @format */

import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Main.css";
import Nav from "./Nav";
import HomePage from "./Playlists";
import Songs from "./Songs";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <Songs />
        <HomePage />
      </>
    );
  }
}

export default Main;
