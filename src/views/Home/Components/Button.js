import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Button extends Component {
  render() {
    return (
      <button type="button" className={css(styles.buttonStyle)}>
        {this.props.buttonText}
      </button>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#f35d2e",
    borderRadius: "25px",
    marginLeft: "10px",
    marginRight: "10px",
    width: "35vw",
    height: "7vh",
    border: "transparent",
    color: "#f2f2f2",
    fontWeight: "800",
    fontSize: "3vw"
  }
});
export default Button;
