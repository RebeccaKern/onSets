function challengeNow(player){
    challengeObject = {playerNum: player, type:"now"}
    socket.emit("challenge", challengeObject);
    //win(1);
}

function challengeNever(player){
    challengeObject = {playerNum: player, type:"never"}
    socket.emit("challenge", challengeObject);
    //win(2);
    //socket.emit('winner', player);  
}

function win(player){
    var socket = io();
    socket.emit('winner', player);
}