import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/Welcome";
import Registry from "./views/Registry/Registry";
import Login from "./views/Login";
import Feed from "./views/Feed";
import Profile from "./views/Profile";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: {}
  //   };
  //   this.authListener = this.authListener.bind(this);
  // }

  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged(user => {
  //     // console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       // localStorage.setItem("user", user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       // localStorage.removeItem("user");
  //     }
  //   });
  // }
  render() {
    return (
      <Switch>
        <Route path="/registry" component={Registry} />

        <Route path="/login" component={Login} />

        <Route path="/feed" component={Feed} />

        <Route path="/profile" component={Profile} />

        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
