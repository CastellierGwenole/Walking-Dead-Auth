
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



