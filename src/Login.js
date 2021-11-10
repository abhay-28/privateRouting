import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const onsubmit = () => {
    // history.push("/Dashboard");
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
          <input type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <div className="clearfix">
            <button type="submit" className="cancelbtn">
              <Link to="./Register">Sign Up</Link>
            </button>
            <button type="submit" className="signupbtn">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
