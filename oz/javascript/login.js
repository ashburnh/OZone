// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCLd8VZgmcEG-pv4WMbeeZiWrKGa2ylXz8",
  authDomain: "ozone-protection-society.firebaseapp.com",
  databaseURL: "https://ozone-protection-society.firebaseio.com",
  projectId: "ozone-protection-society",
  storageBucket: "ozone-protection-society.appspot.com",
  messagingSenderId: "978118464454",
  appId: "1:978118464454:web:de4812c43e7b30175758c7",
  measurementId: "G-SSF2Q1W8F1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Checks if User is signed in or not
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      document.getElementById("loginFavicon").href="favicon.ico";
    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("loginFavicon").href = "../favicon.ico";
  }
});


function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}

function logout(){
  firebase.auth().signOut();
}
