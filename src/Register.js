import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Register = (props) => {
  const onsubmit = () => {
    // localStorage.setItem();
    props.history.push("/login");
  };
  return (
    <div>
      <form style={{ border: "1px solid #ccc" }}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="psw" />
          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
          />
          <label>
            <input
              type="checkbox"
              defaultChecked="checked"
              name="remember"
              style={{ marginBottom: "15px" }}
            />
            Remember me
          </label>
          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms &amp; Privacy
            </a>
            .
          </p>
          <div className="clearfix">
            <button type="submit" className="signupbtn">
              <Link to="./Login">Login</Link>
            </button>
            <button type="submit" className="cancelbtn" onClick={onsubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
