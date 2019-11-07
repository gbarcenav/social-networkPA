// import React, { Component } from "react";
// import withFirebaseAuth from "react-with-firebase-auth";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "../configuration/firebase";

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// // firebase.analytics();

// class Login extends Component {
//   render() {
//     const { user, signOut, signInWithGoogle } = this.props;
//     return (
//       <div>
//         {user ? <p> Hello, {user.displayName}</p> : <p> Please, sign In </p>}

//         {user ? (
//           <button onClick={signOut}>Sign Out</button>
//         ) : (
//           <button onClick={signInWithGoogle}>Sign in with Google</button>
//         )}
//       </div>
//     );
//   }
// }

// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider()
// };

// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth
// })(Login);
