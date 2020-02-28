// Requires Firebase Initialized
// Also requires this <script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-auth.js"></script>
// This is not being used right now

function nameChange(){
  var user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: document.getElementById("new_name").value,
  }).then(function() {
    // Update successful.
  }).catch(function(error) {
    // An error happened.
  });
}
