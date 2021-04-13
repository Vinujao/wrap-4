var firebaseConfig = {
      apiKey: "AIzaSyBa0n3L8EIvirU-5GfNRfaZ2emf6nSzJf0",
      authDomain: "astern-slowspeed.firebaseapp.com",
      databaseURL: "https://astern-slowspeed-default-rtdb.firebaseio.com",
      projectId: "astern-slowspeed",
      storageBucket: "astern-slowspeed.appspot.com",
      messagingSenderId: "1059005037572",
      appId: "1:1059005037572:web:69788ee03ce354ec310951"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("user_name")
       document.getElementById("Welcome").innerHTML="Welcome "+username
function addroom() {
      roomname=document.getElementById("textinput").value 
      firebase.database().ref("/").child(roomname).update({
          status:"Roomname created"
      })
      document.getElementById("textinput").value=""
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      roomtag=`<div class="room_name" id=${Room_names} onclick="gotoroom(this.id)">${Room_names}</div><hr>`
      document.getElementById("output").innerHTML+=roomtag
           //End code
      });});}
getData();
function gotoroom(room){
  localStorage.setItem("Roomname",room)
  window.location="kwitter_page.html"
}
function logout(){
     localStorage.removeItem("Roomname")
     localStorage.removeItem("user_name")
     window.location= "index.html"
}
