var socket = io.connect();
socket.on('cubes', function (data) {

    //update images to reflect cube movement
    var newLocation = document.getElementById(data.class);
    img = new Image();
    img.src = data.src;
    img.className = data.class;
    img.id = data.id;
    newLocation.append(img);

    //remove cube image from initial position
    document.getElementById(data.id).remove();
   
});
socket.on('evil', function (data){
    console.log('evil is happening');

    var t = document.getElementById("time");
    $(t).html(data);
});

// // var socket = io.connect();
// // socket.on('players', function (data) {
// //     console.log("this one works");
// //   console.log(data);
// //   $("#numPlayers").text(data.number);
// //   $("#welcome").text("Welcome player " + data.ordinal);
// //     });
// // socket.on('t', function (data) {
// //     console.log("inside");
// //     console.log(data);
// //     $("#time").text("we are here" + data.s);
// // });
// // socket.on('timer', function (data) {  
// //     $('#counter').html(data.countdown);
// // });
// // $('#reset').click(function() {
// //     socket.emit('reset');
// // });

// // var socket = io.connect();



// // socket.on('timer', function (data) {  
// //     $('#counter').html(data.countdown);
// // });

// // $('#reset').click(function() {
// //     socket.emit('reset');
// // });

// // var socket = io();
// //       // $('form').submit(function(){
// //         socket.emit('takeoff', $('#counter').val());
// //         //$('#counter').val('');
// //         //return false;
// //       // });
// //       socket.on('takeoff', function(msg){
// //         $('#result').append($('<li>').text(msg));
// //       });

// var socket = io();
//       $('form').submit(function(){
//         socket.emit('chat message', $('#m').val());
//         $('#m').val('');
//         return false;
//       });
//       socket.on('chat message', function(msg){
//         $('#result').append($('<li>').text(msg));
//       });
// var socket = io();
//       $('form').submit(function(){
//         socket.emit('chat message', $('#m').val());
//         $('#m').val('');
//         return false;
//       });
//       socket.on('chat message', function(msg){
//         $('#messages').append($('<li>').text(msg));
//       });
//       var abc = document.getElementById("messages").textContent;//$('#messages').val();
//         console.log(abc);
//       socket.on('players', function (data) {
//           $("#numPlayers").text(data.number);
//           $("#welcome").text("Welcome player " + data.ordinal);
//     });
