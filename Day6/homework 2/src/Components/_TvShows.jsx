/** @format */

import React from "react";
import PropTypes from "prop-types";
import Comments from "./Comments";
import { Container } from "react-bootstrap";
import tvShows from "./TvShows";

class Yeet extends React.Component {
  state = {
    movie: [],
    loading: false,
  };

  movie_keys = [];
  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <Container>
        {this.movie_keys.map((movie) => (
          <tvShows Title={movie} />
        ))}
      </Container>
    );
  }
}

export default Yeet;
