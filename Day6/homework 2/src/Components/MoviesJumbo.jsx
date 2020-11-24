/** @format */

import React from "react";
import { Jumbotron, Container, Image } from "react-bootstrap";

class MoviesJumbo extends React.Component {
  render() {
    return (
      <Jumbotron
        fluid
        className="p-0 mainJumbo"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <embed
          type="image/svg+xml"
          src="https://giphy.com/embed/RRzAuDEBvtv7Vw0Iel"
          style={{
            width: "100%",
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

export default MoviesJumbo;
