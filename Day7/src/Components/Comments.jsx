/** @format */

import React from "react";
import { ListGroup, Spinner, Col, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class Comments extends React.Component {
  state = {
    comments: [],
    loading: true,
  };

  // componentWillUnmount fires an instant before unmounting

  //lifecycle method that is going to be triggered just once after initial loading
  componentDidMount = async () => {
    if (this.props.movie) {
      this.fetchMovieComments(this.props.movie.imdbID);
    }
  };
  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.props.movie !== prevProps.movie) {
  //       this.fetchMovieComments(this.props.movie.imdbID);
  //     }
  //   }

  fetchMovieComments = async (imdbID) => {
    // this.setState({ loading: true });
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + imdbID,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmJkMWI1YTQ5NmM2NTAwMTc1NTBjMjMiLCJpYXQiOjE2MDYyMjg4MjYsImV4cCI6MTYwNzQzODQyNn0.kvzRYtgawI_yVIXXwI_xn4uHardXccjI7TseopevONM",
        },
      }
    );
    console.log("fetching", response);
    let comments = await response.json();

    console.log(comments);
    this.setState({ comments: comments, loading: false });
  };

  render() {
    return (
      <div className="mb-5">
        <h2>Comments</h2>
        {this.state.loading && (
          <div className="font-bold d-flex justify-content-center">
            <span>Feching comments</span>
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <CommentArea
          fetchComments={this.fetchMovieComments}
          book={this.props.movie}
        />
        {this.state.comments.map((comments, index) => (
          <ListGroup key={index}>
            <ListGroup.Item>
              Name: {comments.author}, Message: {comments.comment}, at{" "}
              {comments.updatedAt}
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    );
  }
}

export default Comments;
