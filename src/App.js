import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Four_Zero_Foure from "./Four_Zero_Foure";
import "./App.css";
import Navbar from "./Navbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route component={Four_Zero_Foure} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
