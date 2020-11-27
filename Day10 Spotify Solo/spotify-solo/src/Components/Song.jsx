/** @format */

import React, { Component } from "react";
import { Image } from "react-bootstrap";
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
      <div className="col text-center">
        <a href="/album">
          <Link to={"/album/" + this.props.song.album.id} className="nav-link">
            <Image
              className="img-fluid"
              src={this.props.song.album.cover_medium}
              alt={this.props.song.artist.name}
            />
          </Link>
        </a>
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
      </div>
    );
  }
}

export default withRouter(Song);
