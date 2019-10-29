import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import fire from "./configuration/firebase";

import Home from "./views/Home/Welcome";
import Registry from "./views/Registry/Registry";
import Login from "./views/Login";
import Feed from "./views/Feed";
import Profile from "./views/Profile";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     user: null
  //   };
  //   this.authListener = this.authListener.bind(this);
  // }

  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged(user => {
  //     console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       localStorage.setItem("user", user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       localStorage.removeItem("user");
  //     }
  //   });
  // }
  render() {
    return (
      // <div>{this.state.user ? : (<Home/>) : (<Login/>)} </div>
      <Router>
        <Switch>
          <Route path="/registry" component={Registry} />

          <Route path="/login" component={Login} />

          <Route path="/feed" component={Feed} />

          <Route path="/profile" component={Profile} />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
