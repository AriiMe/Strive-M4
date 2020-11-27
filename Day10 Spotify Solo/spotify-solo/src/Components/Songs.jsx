/** @format */

import React from "react";
import { Container, Row, Spinner, Col } from "react-bootstrap";
import "./Main.css";

class Songs extends React.Component {
  state = {
    songs: [],
    album: [],
    song: [],
    cover_medium: [],
    loading: true,
  };

  // componentWillUnmount fires an instant before unmounting

  //lifecycle method that is going to be triggered just once after initial loading
  componentDidMount = async () => {
    if (this.props.songs) {
      this.fetchSongs(this.props.songs);
    }
    this.fetchSongs();
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.songs !== prevProps.songs) {
      this.fetchSongs(this.props.songs);
    }
  }

  fetchSongs = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "f6abc76e86msh0c55a0862923be9p160c62jsnbd2eafb35dfd",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      let songs = await response.json();

      console.log(songs);
      this.setState({ songs: songs.data.slice(0, 4), loading: false });
    } catch (e) {
      console.log("error happened, that's life", e);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container id="whatever" style={{ width: "100%" }}>
        <Row className="d-flex" style={{ width: "100%" }}>
          <h2>#Throwback</h2>
        </Row>
        <Row className="d-flex mr-5 mb-5" style={{ width: "100%" }}>
          {this.state.loading && (
            <div className="font-bold d-flex justify-content-center">
              <span>Feching Albums</span>
              <Spinner animation="border" variant="success" />
            </div>
          )}

          {this.state.songs.length > 0 &&
            this.state.songs.map((song, index) => (
              <Col xs={3} className="itemsContainer" style={{ width: "150px" }}>
                <img src={song.album.cover_medium} className="image-card" />

                <p class="album-text">{song.title}</p>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default Songs;
