function challengeNow(player){
    win(1);
}

function challengeNever(player){
    win(2);
    socket.emit('winner', player);
    
}

function win(player){
    var socket = io();
    socket.emit('winner', player);
}