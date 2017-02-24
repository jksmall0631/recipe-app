import firebase from 'firebase';
// import {Router} from 'react-router';

const config = {
  apiKey: "AIzaSyDOSs5dIcxjA9uGOiJMrrpVEFgNKPec754",
  authDomain: "recipe-app-5e72f.firebaseapp.com",
  databaseURL: "https://recipe-app-5e72f.firebaseio.com",
  storageBucket: "recipe-app-5e72f.appspot.com",
  messagingSenderId: "966099057311"
};

export default firebase.initializeApp(config);
export let currentUser;
const auth = firebase.auth();
// const transitionTo = Router.transitionTo;

//Try to route if there is no error message
export const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    console.log('Sign Up error', error);
    alert(error.message);
    // if(!error.message){
    //   Router.transitionTo('/');
    // }
    return false;
  });
};

export const signIn = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch((error) => {
    console.log('Sign In error', error);
    alert(error.message);
    return false;
  });
};

export const signOut = () => {
    firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
};