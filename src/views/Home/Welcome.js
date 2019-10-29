import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import Logo from "../../images/logo_mobile.png";
import Button from "./Components/Button";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <section className={css(styles.containerWelcome)}>
        <figure>
          <img className={css(styles.imgLogo)} src={Logo} alt="Logo" />
        </figure>

        <article className={css(styles.containerTextWelcome)}>
          <p className={css(styles.textWelcome)}>
            Renueva tu guardarropa sin gastar tu dinero. Cuida el planeta y tu
            bolsillo.
          </p>
          <p className={css(styles.textExclamation)}>¡INSPÍRATE!</p>
        </article>

        <Link to="/registry">
          <Button buttonText="Registrarme" />
        </Link>
        <Link to="/login">
          <Button buttonText="Iniciar sesión" />
        </Link>
      </section>
    );
  }
}

const styles = StyleSheet.create({
  containerWelcome: {
    textAlign: "center",
    paddingTop: "20vh"
  },
  imgLogo: {
    width: "70vw"
  },
  containerTextWelcome: {
    width: "65vw",
    fontWeight: "600",
    color: "#f2f2f2",
    marginLeft: "auto",
    marginRight: "auto"
  },
  textExclamation: {
    fontSize: "5vw",
    fontWeight: "900"
  },
  textWelcome: {
    fontSize: "3.5vw"
  }
});
export default Home;
