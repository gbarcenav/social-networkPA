import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/Welcome";
import Registry from "./views/Registry";
import Login from "./views/Login";
import Feed from "./views/Feed";
import Profile from "./views/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/registry" Route={Registry} />

          <Route path="/login" Route={Login} />

          <Route path="/feed" Route={Feed} />

          <Route path="/profile" Route={Profile} />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
