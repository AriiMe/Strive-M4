/** @format */

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import Logo from "./assets/Logo.png";

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-fixed-left fixed-left d-flex flex-column position-fixed">
          <a className="navbar-brand mt-3" href="homePage.html">
            <img src={Logo} width="140" height="42" />
          </a>
          <div className="collapse navbar-collapse mt-3" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link to="/" className="text-decoration-none">
                <div
                  className={
                    this.props.location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Home
                </div>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="searchPage.html">
                  <svg
                    width="1em"
                    className="mr-2"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-search"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                  </svg>
                  Search
                </a>
              </li>
              <Link to="/AlbumPage" className="text-decoration-none">
                <div
                  className={
                    this.props.location.pathname === "/AlbumPage"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Album Page
                </div>
              </Link>

              <span className="profile-nav mb-2 mr-5">
                <li className="nav-profile-item">
                  <button type="button" className="whiteButton">
                    <Link to="/SignUp" className="text-decoration-none">
                      <div
                        className={
                          this.props.location.pathname === "/SignUp"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        style={{ color: "black" }}
                      >
                        Sign up
                      </div>
                    </Link>
                  </button>
                </li>
              </span>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
