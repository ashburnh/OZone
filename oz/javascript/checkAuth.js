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



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("all_page").style.display = "block";
  } else {
    window.location.replace("http://localhost/oz/oz/login.html")
    document.getElementById("all_page").style.display = "none";
  }
});

function logout(){
  firebase.auth().signOut();
}
