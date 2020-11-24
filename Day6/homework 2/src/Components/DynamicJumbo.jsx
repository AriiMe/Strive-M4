/** @format */

import React from "react";
import { Jumbotron, Container, Image } from "react-bootstrap";

class DynamicJumbo extends React.Component {
  render() {
    return (
      <Jumbotron
        fluid
        className="p-0 mainJumbo"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <embed
          type="image/svg+xml"
          src="https://giphy.com/embed/Qs75BqLW44RrP0x6qL"
          style={{
            width: "80%",
            height: "100%",
            objectFit: "cover",

            float: "right",
          }}
        />
        <div
          className="gradientOnJumbo"
          style={{
            position: "absolute",

            height: "100%",
            width: "100%",
          }}
        ></div>
      </Jumbotron>
    );
  }
}

export default DynamicJumbo;
