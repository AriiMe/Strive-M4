/** @format */

import React from "react";
import PropTypes from "prop-types";
import CarouselItem from "./CarouselItem";
import Comments from "./Comments";
import { Container } from "react-bootstrap";

class myList extends React.Component {
  state = {
    movie: [],
    loading: false,
  };

  movie_keys = ["Gay Batman"];
  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <Container>
        {this.movie_keys.map((movie) => (
          <CarouselItem Title={movie}></CarouselItem>
        ))}
      </Container>
    );
  }
}

export default myList;
