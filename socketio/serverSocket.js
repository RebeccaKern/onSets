exports.init = function(io) {
    var currentPlayers = 0;
    var ordinal = 0;
	io.sockets.on('connection', function(socket){
     ++currentPlayers;
     ++ordinal;
     socket.emit('players', { number: currentPlayers, o: ordinal});
     socket.broadcast.emit('players', { number: currentPlayers, o: ordinal});
	socket.on('chat message', function(msg){
	   io.emit('chat message', msg);
	});
    socket.on('goal', function(data){
        socket.emit('goal', data);
        socket.broadcast.emit('goal', data);
    });
    socket.on('cubes', function(data){
        socket.emit('cubes', data);
        socket.broadcast.emit('cubes', data);
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
        socket.emit('cardsDealt', data);
        socket.broadcast.emit('cardsDealt', data);
    });

    socket.on('disconnect', function () {
         --currentPlayers;
         socket.broadcast.emit('players', { number: currentPlayers});
     });
});

}
