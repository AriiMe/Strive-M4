/** @format */

import React, { useState } from "react";
import "../App.css";
import Searchmf from "./searchmf";
import axios from "axios";
import Result from "./Result";
import Results from "./Results";
import Popup from "./Popup";
import "./card.css";
import { ListGroup, Spinner } from "react-bootstrap";

export default class SearchFetch extends React.Component {
  state = {
    input: "",
    results: [],
    selected: {},
    loading: true,
  };

  apiurl = "http://www.omdbapi.com/?apikey=ff133ca5";
  search = (e) => {
    if (e.key === "Enter") {
      this.setState({ loading: true });
      console.log(this.state);
      axios(this.apiurl + "&s=" + this.state.input).then(({ data }) => {
        let results = data.Search;

        // setState((prevState) => {
        //   return { ...prevState, results: results };
        // });

        this.setState((prevState) => ({
          ...prevState,
          results,
          loading: false,
        }));
      });
    }
  };

  handleInput = (e) => {
    let input = e.target.value;

    this.setState((prevState) => ({
      ...prevState,
      input,
      loading: false,
    }));
  };

  openPopup = (id) => {
    axios(this.apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      this.setState((prevState) => ({
        ...prevState,
        selected: result,
        loading: false,
      }));
    });
  };

  closePopup = () => {
    this.setState((prevState) => ({
      ...prevState,
      selected: {},
    }));
  };

  render() {
    const { input } = this.state;

    return (
      <>
        <div className="App">
          <Searchmf
            value={input}
            handleInput={this.handleInput}
            search={this.search}
          />

          {this.state.loading ? (
            <Spinner variant="primary" />
          ) : (
            <Results results={this.state.results} openPopup={this.openPopup} />
          )}

          {typeof this.state.selected.Title != "undefined" && (
            <Popup
              selected={this.state.selected}
              closePopup={this.closePopup}
            />
          )}
        </div>
      </>
    );
  }
}
