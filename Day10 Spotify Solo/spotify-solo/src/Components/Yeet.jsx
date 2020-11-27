/** @format */

import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Song from "./Song";
function Yeet({ songs, loading }) {
  return (
    <div>
      <h4>{}</h4>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4   text-center">
        {loading
          ? [0, 1, 2, 3].map((i) => (
              <Col key={i}>
                <Spinner animation="grow" role="status" variant="success">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
            ))
          : songs.map((song) => <Song key={song.id} song={song} />)}
      </Row>
    </div>
  );
}

export default Yeet;
