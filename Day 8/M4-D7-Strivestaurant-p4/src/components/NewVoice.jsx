/** @format */

import React, { Component } from "react";
import { Button, Input, Icon, Dropdown, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import $ from "jquery";
import styles from "./Home.scss";
import Modal from "./Modal.jsx";
import MakeChannelModal from "./MakeChannelModal.jsx";

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    };
  }

  play() {
    this.setState({
      play: true,
      pause: false,
    });
    console.log(this.audio);
    this.audio.play();
  }

  pause() {
    this.setState({ play: false, pause: true });
    this.audio.pause();
  }

  render() {
    return (
      <div>
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
      </div>
    );
  }
}

export default Music;
