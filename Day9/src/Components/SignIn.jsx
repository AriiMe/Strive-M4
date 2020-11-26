/** @format */

import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer form-group">
        <label for="email" style={{ color: "grey" }}>
          What is your email address?
        </label>
        <input
          type="email"
          autoFocus
          required
          value={email}
          className="form-control"
          id="email"
          placeholder="ENGLISH DO YOU SPEAK IT MF?"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="errorMsg">{emailError}</p>
        <label for="password" style={{ color: "grey" }}>
          Create a password{" "}
        </label>
        <input
          type="password"
          className="form-control mb-3"
          required
          value={password}
          placeholder="Create a password."
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button
                className="btn btn-danger col-12 col-6 mb-4 signUpBtn"
                onClick={handleLogin}
              >
                SignIn
              </button>
              <p style={{ color: "grey" }}>
                Don't Have an account?
                <span
                  style={{ color: "red" }}
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <div className="form-group">
                <label for="email2" style={{ color: "grey" }}>
                  Confirm email address{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email2"
                  placeholder="Enter your email address again"
                  required
                />
              </div>
              <div className="form-group mb-4" style={{ color: "grey" }}>
                <label for="gibCash">GIVE ME YOUR CREDIT CARD NOW </label>
                
                <input
                  type="text"
                  className="form-control mb-2"
                  id="gibCash"
                  placeholder="giv cash big boy."
                  required
                />
              </div>
              
              <label
                className="form-group"
                for="bdate"
                style={{ color: "grey" }}
              >
                What's your date of birth?
              </label>
              <div className="form-row mb-4" id="bdate">
                <Col md={5}>
                  <label for="day">Month</label>
                  <select id="inputState" className="form-control" required>
                    <option className="text-muted">Month</option>
                    <option>Sexy </option>
                    <option>MMMM</option>
                    <option>Sex</option>
                    <option>Yest</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </Col>
                <Col md={3}>
                  <label for="day" style={{ color: "grey" }}>
                    Day
                  </label>
                  <input
                    type="number"
                    id="day"
                    className="form-control"
                    placeholder="TT"
                    required
                  />
                </Col>
                <Col md={2}>
                  <label for="year" style={{ color: "grey" }}>
                    year
                  </label>
                  <input
                    type="number"
                    id="year"
                    className="form-control"
                    placeholder="YYYY"
                    required
                  />
                </Col>
              </div>
              <label
                className="form-group"
                for="gender"
                style={{ color: "grey" }}
              >
                What's your sex?
              </label>
              <div
                className="form-group d-flex justify-content-between col-10"
                id="gender"
              >
                <div className="form-check" id="gender">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="Male"
                    value="option1"
                  />
                  <label
                    className="form-check-label"
                    for="Male"
                    style={{ color: "grey" }}
                  >
                    YES PLEASE
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="Divers"
                    value="option3"
                  />
                  <label
                    className="form-check-label"
                    for="Divers"
                    style={{ color: "grey" }}
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="Female"
                    value="option2"
                  />
                  <label className="form-check-label" for="Female">
                    {" "}
                    Female{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="Divers"
                    value="option3"
                  />
                  <label className="form-check-label" for="Divers">
                    {" "}
                    Attack Helicopter{" "}
                  </label>
                </div>
              </div>
            
              <label
                className="form-check-label checkbox font-weight-light mt-3 mb-3 d-flex justify-content-center"
                for="marketing"
                style={{ color: "grey" }}
              >
                <input type="checkbox" id="marketing" />
                <span className="checkmark"></span>
                Share my registration data with aris phishing site content
                providers for marketing purposes.
              </label>

              <label
                className="form-check-label checkbox font-weight-light mt-0 mb-5"
                for="terms"
              >
                <span className="checkmark byClick"></span>
                <p style={{ color: "grey" }}>
                  By clicking on Sign up, you agree to Terms and Conditions of
                  Use.
                  <a href="#" target="_blank" style={{ color: "red" }}>
                    Terms of Use
                  </a>
                  .
                </p>
                <p className="mt-0" style={{ color: "grey" }}>
                  To learn more about how Ari collects, uses, shares and sells
                  to china your personal data please read no dont read
                  <a href="#" target="_blank" style={{ color: "red" }}>
                    Privacy Policy
                  </a>
                  .
                </p>
              </label>

              <button
                className="btn btn-danger col-12 col-6 mb-4 signUpBtn"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <p style={{ color: "grey" }}>
                Have an account?
                <span
                  style={{ color: "red" }}
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Log in
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;

{
  /* <form id="form">
            <div className="form-group">
              <label for="email">What is your email address? </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="ENGLISH DO YOU SPEAK IT MF?"
                required
              />
            </div>
            <div className="form-group">
              <label for="email2">Confirm email address </label>
              <input
                type="email"
                className="form-control"
                id="email2"
                placeholder="Enter your email address again"
                required
              />
            </div>
            <div className="form-group">
              <label for="password">Create a password </label>
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Create a password."
                id="password"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label for="gibCash">GIVE ME YOUR CREDIT CARD NOW </label>
              <input
                type="text"
                className="form-control mb-2"
                id="gibCash"
                placeholder="giv cash big boy."
                required
              />
            </div>
            <label className="form-group" for="bdate">
              What's your date of birth?
            </label>
            <div className="form-row mb-4" id="bdate">
              <Col md={5}>
                <label for="day">Month</label>
                <select id="inputState" className="form-control" required>
                  <option className="text-muted">Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </Col>
              <Col md={3}>
                <label for="day">Day</label>
                <input
                  type="number"
                  id="day"
                  className="form-control"
                  placeholder="TT"
                  required
                />
              </Col>
              <Col md={2}>
                <label for="year">year</label>
                <input
                  type="number"
                  id="year"
                  className="form-control"
                  placeholder="YYYY"
                  required
                />
              </Col>
            </div>
            <label className="form-group" for="gender">
              What's your gender?
            </label>
            <div
              className="form-group d-flex justify-content-between col-10"
              id="gender"
            >
              <div className="form-check" id="gender">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="Male"
                  value="option1"
                />
                <label className="form-check-label" for="Male">
                  {" "}
                  Male{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="Female"
                  value="option2"
                />
                <label className="form-check-label" for="Female">
                  {" "}
                  Female{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="Divers"
                  value="option3"
                />
                <label className="form-check-label" for="Divers">
                  {" "}
                  Attack Helicopter{" "}
                </label>
              </div>
            </div>

            <label
              className="form-check-label checkbox font-weight-light mt-3 mb-3 d-flex justify-content-center"
              for="marketing"
            >
              <input type="checkbox" id="marketing" />
              <span className="checkmark"></span>
              Share my registration data with aris phishing site content
              providers for marketing purposes.
            </label>

            <label
              className="form-check-label checkbox font-weight-light mt-0 mb-5"
              for="terms"
            >
              <span className="checkmark byClick"></span>
              By clicking on Sign up, you agree to Terms and Conditions of Use.
              <a href="#" target="_blank" className="red">
                Terms of Use
              </a>
              .
              <p className="mt-0">
                To learn more about how Ari collects, uses, shares and sells to
                china your personal data please read no dont read
                <a href="#" target="_blank" className="red">
                  Privacy Policy
                </a>
                .
              </p>
            </label>

            <button
              type="submit"
              className="btn btn-danger col-12 col-6 mb-4 signUpBtn"
              id="signUp"
            >
              Sign Me Up Fam
            </button>
            <p className="text-center">
              You already have an account?
              <a href="#" className="red">
                Sign in
              </a>{" "}
              .
            </p>
          </form> */
}
