import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./views/Welcome";
import Registry from "./views/Registry";
import Login from "./views/Login";
import Feed from "./views/Feed";
import Profile from "./views/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registry">Registry</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/registry" Route={Registry} />

            <Route path="/login" Route={Login} />

            <Route path="/feed" Route={Feed} />

            <Route path="/profile" Route={Profile} />

            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
