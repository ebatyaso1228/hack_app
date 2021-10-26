{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js" defer></script> */}

let chat_html = document.getElementById("send")
let node_html = document.getElementById("node")

chat_html.onclick = function chat(){
    let comment =node_html.value;
    socket.emit('chat', node_html.value);
    console.log(comment);
    node_html.value = "";
}

// var io = require('socket.io').listen(server);
var io = socketio(server);
var socket = io();
var message = document.getElementById('message');
var chat_html = document.forms.myform;



socket.on('chat', function(msg){
    var li = document.createElement('li');
 
    li.textContent = msg;
    message.appendChild(li);
    console.log(msg)
});

