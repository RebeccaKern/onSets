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
