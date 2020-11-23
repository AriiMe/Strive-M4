import React from 'react';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';
import Comments from './Comments';
import { Container } from 'react-bootstrap';
import Searchfetch from "./searchfetch";

class Main extends React.Component {
    state = {
        movie: [],
        loading: false,
    }

    movie_keys = ['Avengers', 'Spider-man', 'Batman']
    render() {
        
        const { movie } = this.state;
        console.log(movie)
        return <Container>
            <Searchfetch />
            {this.movie_keys.map((movie) => <CarouselItem Title={movie} ></CarouselItem>)}
        </Container>
    }
}

export default Main;


