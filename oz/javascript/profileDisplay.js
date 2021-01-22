function profileDisplay(person){

  const app = firebase.app();

  const userDB = firebase.database().ref("users/" + person);

  var realName = userDB.child('name');


  realName.once("value")
      .then(function(snapshot) {
        document.getElementById("roster_name").innerHTML = snapshot.val();
      });

}
