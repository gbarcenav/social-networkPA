import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
// import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return <h1 className={css(styles.whiteTitle)}>My Style</h1>;
  }
}

const styles = StyleSheet.create({
  whiteTitle: {
    color: "black",
    fontFamily: "'Cormorant', serif",
    textAlign: "center",
    fontSize: "35vw",
    lineHeight: "100px"
  }
});
export default Home;
