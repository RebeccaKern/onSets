exports.init = function(io) {
    console.log('in exports');
    var currentPlayers = 0;
	io.sockets.on('connection', function(socket){
     ++currentPlayers;
     socket.emit('players', { number: currentPlayers});
     socket.broadcast.emit('players', { number: currentPlayers});
	socket.on('chat message', function(msg){
	   io.emit('chat message', msg);
	});
    socket.on('cubes', function(data){
        socket.emit('cubes', data);
        socket.broadcast.emit('cubes', data);
        console.log(data);
    });
    socket.on('evil', function(data){
        socket.emit('evil', data);
        socket.broadcast.emit('evil', data);
        console.log(data);
    });
    socket.on('disconnect', function () {
         --currentPlayers;
         socket.broadcast.emit('players', { number: currentPlayers});
     });
  		// socket.on('evil', function(finalT){
    // 		io.emit('evil', finalT);
    // 	});
});
// 	var currentPlayers = 0; // keep track of the number of players
// 	var n = 0;
// 	var myElement = document.getElementById("time");
// 	console.log("once");
// 	console.log(myElement);
// // 	var countdown = 1000;  
// // setInterval(function() {  
// //   countdown--;
// //   io.sockets.emit('timer', { countdown: countdown });
// // }, 1000);
//   // When a new connection is initiated
// 	io.sockets.on('connection', function (socket) {
// 		++currentPlayers;
// 		++n;
// 		// Send ("emit") a 'players' event back to the socket that just connected.
// 		socket.emit('players', { number: currentPlayers, ordinal: n});
// 		/*
// 		 * Emit players events also to all (i.e. broadcast) other connected sockets.
// 		 * Broadcast is not emitted back to the current (i.e. "this") connection
//      */
// 		socket.broadcast.emit('players', { number: currentPlayers, ordinal: n});
// 		// socket.emit('timing', {number: time});
// 		// socket.broadcast.emit('timing', {number: time});
// 		// console.log("middle");
// 		// socket.emit('t', {s: myElement});
// 		// socket.broadcast.emit('t', {s: myElement});

// 		// socket.on('chat message', function(msg){
//   //   		io.emit('chat message', msg);
//   // 		});


// 	  // socket.on('reset', function (data) {
// 	  //   countdown = 1000;
// 	  //   io.sockets.emit('timer', { countdown: countdown });
// 	  // });
// 		/*
// 		 * Upon this connection disconnecting (sending a disconnect event)
// 		 * decrement the number of players and emit an event to all other
// 		 * sockets.  Notice it would be nonsensical to emit the event back to the
// 		 * disconnected socket.
// 		 */
// 		socket.on('disconnect', function () {
// 			--currentPlayers;
// 			socket.broadcast.emit('players', { number: currentPlayers});
// 		});
// 	});
}
