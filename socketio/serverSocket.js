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
    });
    socket.on('winner', function(data){
        socket.emit('winner', data);
        socket.broadcast.emit('winner', data);
    });
    socket.on('rolledCubes', function(data){
        socket.emit('rolledCubes', data);
        socket.broadcast.emit('rolledCubes', data);
    });
    socket.on('updateTurn', function(data){
        socket.emit('updateTurn', data);
        socket.broadcast.emit('updateTurn', data);
    });
    socket.on('cardsDealt', function(data){
        console.log("made it server side of cardsDealt");
        console.log(data);
        socket.emit('cardsDealt', data);
        socket.broadcast.emit('cardsDealt', data);
        console.log("we are broadcasting live");
    });

    socket.on('disconnect', function () {
         --currentPlayers;
         socket.broadcast.emit('players', { number: currentPlayers});
     });
});

}
