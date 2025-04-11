'use strict';


let socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", param => {
  socket.send("Hello Server!");
});

socket.addEventListener("message", event => {
  console.log("Message from server ", event.data);
});

/* socket Not a pure module */
