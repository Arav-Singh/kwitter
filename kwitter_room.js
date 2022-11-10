
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyC9-6AvG83VnWPw9Ch4HUuanHhJEjQcFvU",
    authDomain: "kwitter-9e7a4.firebaseapp.com",
    databaseURL: "https://kwitter-9e7a4-default-rtdb.firebaseio.com",
    projectId: "kwitter-9e7a4",
    storageBucket: "kwitter-9e7a4.appspot.com",
    messagingSenderId: "688596511088",
    appId: "1:688596511088:web:c5d2d3fc0f71dc4a8807b5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
       room_name = document.getElementById("room_name").value;
    
        firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
        });
    
        localStorage.setItem("room_name", room_name);
    
        window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      user_name = localStorage.getItem("user_name")
      console.log("Room name -" + Room_name);
      row = "<div class='room_name' id ="+ Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}


