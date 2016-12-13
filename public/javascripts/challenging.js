function challengeNow(player){
    //alert("Player " + player + " challenged now.");
    win(1);
}

function challengeNever(player){
    win(2);
    socket.emit('winner', player);
    //alert("Player " + player + " challenged never.");
    
}

function win(player){
    console.log("in win");
    var socket = io();
    socket.emit('winner', player);
}