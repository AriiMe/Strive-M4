/** @format */

import React from "react";

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
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>SignIn</button>
              <p>
                Don't Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Log in</span>
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
  /* <Login
  email={email}
  setEmail={setEmail}
  password={password}
  setPassword={setPassword}
  handleLogin={handleLogin}
  handleSignup={handleSignup}
  hasAccount={hasAccount}
  setHasAccount={setHasAccount}
  emailError={emailError}
  passwordError={passwordError}
></Login> */
}
