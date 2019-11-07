import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import Back from "../../images/icons/previous-alt.svg";
import Google from "../../images/google-plus.svg";
import Facebook from "../../images/facebook-logo.svg";
// import Logo from "../../images/logo_mobile.png";
import { Link, Redirect } from "react-router-dom";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../configuration/firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Registry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      state: "",
      city: "",
      occupation: "",
      email: "",
      password: ""
    };
  }
  render() {
    const { user, signInWithGoogle } = this.props;
    return (
      <section className={css(styles.containerRegistry)}>
        <Link to="/">
          <button className={css(styles.buttonBack)}>
            <img className={css(styles.imgBack)} src={Back} alt="regresar" />
          </button>
        </Link>

        <h2 className={css(styles.titlePrincipal)}>Registro</h2>

        <div className={css(styles.containerForm)}>
          {user ? (
            <Redirect to="/registry" />
          ) : (
            <button onClick={signInWithGoogle}>
              <img
                className={css(styles.googleButton)}
                src={Google}
                alt="Inicio de sesión con Google"
              />
            </button>
          )}
          {/* {error ? <span> </span> : ''} */}

          <button>
            <img
              className={css(styles.facebookButton)}
              src={Facebook}
              alt="Inicio de sesión con Facebook"
            />
          </button>

          <hr className={css(styles.separationLine)}></hr>

          <form className={css(styles.formRegistry)}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className={css(styles.inputForm)}
            ></input>

            <br />

            <input
              type="text"
              name="age"
              placeholder="Edad"
              className={css(styles.inputForm)}
            ></input>

            <br />

            <input
              type="text"
              name="state"
              placeholder="Estado"
              className={css(styles.inputForm)}
            ></input>

            <br />

            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              className={css(styles.inputForm)}
            ></input>

            <br />

            <input
              type="text"
              name="occupation"
              placeholder="Ocupación"
              className={css(styles.inputForm)}
            ></input>

            <br />
            <input
              type="text"
              name="email"
              placeholder="e-mail"
              className={css(styles.inputForm)}
            ></input>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className={css(styles.inputForm)}
            ></input>
            <br />
            <input
              type="submit"
              value="Enviar"
              className={css(styles.buttonStyle)}
            />
          </form>
        </div>
      </section>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const styles = StyleSheet.create({
  containerForm: {
    backgroundColor: "#c1ddbf",
    width: "80vw",
    height: "70vh",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "25px",
    textAlign: "center",
    overflow: "scroll"
  },
  titlePrincipal: {
    color: "#247056",
    fontWeight: "800",
    textAlign: "center",
    fontSize: "5vh"
  },
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
    height: "20vh",
    marginLeft: "auto",
    marginRight: "auto"
  },
  labelForm: {
    fontSize: "3.5vw",
    color: "#1a1a1a",
    fontWeight: "600",
    fontFamily: "Helvetica",
    width: "50vw"
  },
  inputForm: {
    backgroundColor: "#f8b8c9",
    border: "transparent",
    borderRadius: "25px",
    height: "4vh",
    color: "#1a1a1a",
    fontWeight: "500",
    width: "inherit",
    textAlign: "center",
    margin: "0vh 0 2vh 0",
    fontSize: "3vh"
  },
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
    fontSize: "3vw",
    marginTop: "2vh"
  },
  googleButton: {
    width: "45px",
    marginTop: "7px",
    marginRight: "20px"
  },
  facebookButton: {
    width: "45px",
    marginTop: "7px"
  },
  separationLine: {
    backgroundColor: "#1a1a1a",
    border: "transparent",
    height: "3px",
    width: "90%",
    margin: "0 auto 7px auto",
    borderRadius: "50px"
  }
});
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Registry);
