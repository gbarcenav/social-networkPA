import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import Back from "../../images/icons/previous-alt.svg";
// import Logo from "../../images/logo_mobile.png";
import { Link } from "react-router-dom";

class Registry extends Component {
  render() {
    return (
      <section className={css(styles.containerRegistry)}>
        <Link to="/">
          <button className={css(styles.buttonBack)}>
            <img className={css(styles.imgBack)} src={Back} alt="regresar" />
          </button>
        </Link>

        <form className={css(styles.formRegistry)}></form>
      </section>
    );
  }
}

const styles = StyleSheet.create({
  buttonBack: {
    backgroundColor: "transparent",
    border: "transparent"
  },
  imgBack: {
    width: "10vw",
    paddingTop: "3vw",
    paddingLeft: "3vw"
  },
  formRegistry: {
    width: "60vw",
    marginLeft: "auto",
    marginRight: "auto"
  }
});
export default Registry;
