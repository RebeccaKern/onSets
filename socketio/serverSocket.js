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
    socket.on('disconnect', function () {
         --currentPlayers;
         socket.broadcast.emit('players', { number: currentPlayers});
     });
});

}
