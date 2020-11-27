/** @format */
import React, { Component } from "react";
import Yeet from "./Yeet";

let ayeet = ["slipknot", "eminem", "fool", "prodigy"];

let yayeet = ["infectedmushroom", "hardbassschool", "djgopnik", "rammstein"];

let asuhhhhhhdude = ["carpenterbrut", "thegazette", "sum41", "noisia"];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRow: [],
      secondRow: [],
      thirdRow: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount = () => {
    let headers = new Headers({
      "x-rapidapi-key": "f6abc76e86msh0c55a0862923be9p160c62jsnbd2eafb35dfd",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    });

    let pl1 = [];
    let pl2 = [];
    let pl3 = [];

    while (pl1.length < 4) {
      let artist = ayeet[Math.floor(Math.random() * ayeet.length)];

      if (!pl1.includes(artist)) {
        pl1.push(artist);
      }
    }

    while (pl2.length < 4) {
      let artist = yayeet[Math.floor(Math.random() * yayeet.length)];

      if (!pl2.includes(artist)) {
        pl2.push(artist);
      }
    }

    while (pl3.length < 4) {
      let artist =
        asuhhhhhhdude[Math.floor(Math.random() * asuhhhhhhdude.length)];

      if (!pl3.includes(artist)) {
        pl3.push(artist);
      }
    }
    const firstRow = [];
    for (let i = 0; i < pl1.length; i++) {
      fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + pl1[i], {
        method: "GET",
        headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((artists) => {
          let songInfo = artists.data;
          firstRow.push(songInfo[0]);
          // console.log(songInfo)
          this.setState({ firstRow: firstRow, loading: false });
          // console.log('state ', this.state.firstRow)
          return firstRow;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const thirdRow = [];
    for (let i = 0; i < pl2.length; i++) {
      fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + pl2[i], {
        method: "GET",
        headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((artists) => {
          let songInfo = artists.data;
          thirdRow.push(songInfo[0]);
          this.setState({
            loading: false,
            thirdRow: thirdRow,
          });

          return thirdRow;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const secondRow = [];
    for (let i = 0; i < pl3.length; i++) {
      fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + pl3[i], {
        method: "GET",
        headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((artists) => {
          let songInfo = artists.data;
          secondRow.push(songInfo[0]);
          this.setState({ secondRow: secondRow, loading: false });

          return secondRow;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <>
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          <div className="row">
            <div className="col-10">
              <div id="ayeet">
                <h2>yesy</h2>
                <Yeet
                  loading={this.state.loading}
                  songs={this.state.firstRow}
                />

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="yayeet">
                <h2>test2</h2>
                <Yeet
                  loading={this.state.loading}
                  songs={this.state.thirdRow}
                />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="asuhhhhhhdude">
                <h2>test3</h2>
                <Yeet
                  loading={this.state.loading}
                  songs={this.state.secondRow}
                />

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;
