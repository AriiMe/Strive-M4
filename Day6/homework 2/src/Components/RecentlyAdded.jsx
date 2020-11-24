/** @format */

import React from "react";
import PropTypes from "prop-types";
import CarouselItem from "./CarouselItem";
import Comments from "./Comments";
import { Container } from "react-bootstrap";
import DynamicJumbo from "./DynamicJumbo";
class Movies extends React.Component {
  state = {
    movie: [],
    loading: false,
  };

  movie_keys = ["Lord of the rings"];
  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <>
        <DynamicJumbo></DynamicJumbo>
        <Container>
          {this.movie_keys.map((movie) => (
            <CarouselItem Title={movie}></CarouselItem>
          ))}
        </Container>
      </>
    );
  }
}

export default Movies;
