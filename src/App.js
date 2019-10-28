import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
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
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>HOME</h1>;
}
function Registry() {
  return <h1>REGISTRO</h1>;
}
function Login() {
  return <h1>INICIO DE SESIÓN</h1>;
}
function Feed() {
  return <h1>FEED</h1>;
}
function Profile() {
  return <h1>PERFIL</h1>;
}
