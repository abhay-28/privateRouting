import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const onsubmitLogin = () => {
    localStorage.setItem("token", (Math.random() * 1e32).toString(36));
    props.history.push("/Dashboard");
  };
  const onsubmitSignup = () => {
    props.history.push("/Register");
  };
  return (
    <div>
      <form action="/action_page.php" style={{ border: "1px solid #ccc" }}>
        <div className="container">
          <h1>Login</h1>
          <p>Please fill in this form to Login an account.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="psw" />
          <div className="clearfix">
            <button type="button" className="cancelbtn" onClick={onsubmitLogin}>
              Login
            </button>
            <button
              type="submit"
              className="signupbtn"
              onClick={onsubmitSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
