/** @format */

import React from "react";
import PropTypes from "prop-types";
import CarouselItem from "./CarouselItem";
import Comments from "./Comments";
import { Container } from "react-bootstrap";
import SearchFetch from "./_SearchFetch";

class Main extends React.Component {
  state = {
    movie: [],
    loading: false,
  };

  movie_keys = ["Harry Potter", "Spider-man", "Serbian film"];
  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <Container>
        <SearchFetch />
        {this.movie_keys.map((movie) => (
          <CarouselItem Title={movie}></CarouselItem>
        ))}
      </Container>
    );
  }
}

export default Main;
