
verifCo()
function recupName() {
  let name = '';
  var nameRecup = document.getElementById("recup").value
  db.collection("personnages").add({
    name: nameRecup
  
    
  })
  
  db.collection("personnages").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       name = name + '<br> ' + doc.data().name;
        document.getElementById("listPerso").innerHTML = `<p>${name}</p>`;
        console.log(`${doc.data().name}`);
    });
  })
  }
  let init = '';
  db.collection("personnages").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      init = init + '<br> ' + doc.data().name;
        document.getElementById("listPerso").innerHTML = `<p>${init}</p>`;
        console.log(`${doc.data().init}`);
    });
  })
  
  
  function createCompte(){
    let address = document.getElementById("addressmailsignout").value
    let mdp = document.getElementById("mdpsignout").value
    
    firebase.auth().createUserWithEmailAndPassword(address, mdp).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  function connection(){
    
    let address = document.getElementById("addressmailsignin").value
    let mdp = document.getElementById("mdpsignin").value

    firebase.auth().signInWithEmailAndPassword(address, mdp).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  
  document.getElementById("modif").style.display="none";
function verifCo(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("register").style.display="none";
      document.getElementById("modif").style.display="block";
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      console.log("Connecté(e)  " + email);
    } else {
      document.getElementById("register").style.display="block";
      document.getElementById("modif").style.display="none";
      console.log("non connecté");
    }
  });
}


  function partir() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    verifCo()
  }
  