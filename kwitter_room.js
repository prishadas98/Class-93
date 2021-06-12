
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB1drr1MCMDVnP5vE7i90QAj0V_UqVH6Tw",
      authDomain: "kwitter-eaf8f.firebaseapp.com",
      databaseURL: "https://kwitter-eaf8f-default-rtdb.firebaseio.com",
      projectId: "kwitter-eaf8f",
      storageBucket: "kwitter-eaf8f.appspot.com",
      messagingSenderId: "912984295617",
      appId: "1:912984295617:web:42e3fe5a641b03b2c86c40"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
