// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJdvKlJ-mMKEqhZbKASfOlUevVOn-xy0g",
    authDomain: "rps-multiplayer-5dcf0.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-5dcf0.firebaseio.com",
    projectId: "rps-multiplayer-5dcf0",
    storageBucket: "rps-multiplayer-5dcf0.appspot.com",
    messagingSenderId: "342928078458"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("#chat-button").on("click", function(event) {
      event.preventDefault();
      chat = $("#chat-input").val().trim();

      database.ref().push({
          chat: chat
      });

      $("#chat-input").val("");
  });

  database.ref().on("child_added", function(snapshot) {
      var sv = snapshot.val();

      console.log(sv.chat);

      $("#chat").append(sv.chat + "</br>");
  }, function(errorObject) {
      console.log("Errors: " + errorObject.code);
  });