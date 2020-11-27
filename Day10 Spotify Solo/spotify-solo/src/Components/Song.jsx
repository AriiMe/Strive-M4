/** @format */

import React, { Component } from "react";
import { Image, Container, Row, Spinner, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

  render() {
    return (
      <Container>
        <Image
          className="img-fluid"
          src={this.props.song.album.cover_medium}
          alt={this.props.song.artist.name}
        />

        <p>
          <Link to={"/album/" + this.props.song.album.id} className="nav-link">
            {this.props.song.album.title}
          </Link>

          <Link
            to={"/artistPage/" + this.props.song.artist.id}
            className="nav-link"
          >
            {this.props.song.artist.name}
          </Link>
        </p>
      </Container>
    );
  }
}

export default withRouter(Song);
