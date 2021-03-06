username = localStorage.username;
$( function() {

    //initialize all arrays here
    resourcesArray = new Array();
    forbiddenArray = new Array();
    requiredArray = new Array();
    permittedArray = new Array();

    goal = Math.floor(Math.random() * 6)+1;
    var socket = io();
    socket.emit('goal', goal);

    $('#reset').click(function() {
        setTimer();
    });

    $('#dealCards').click(function() {
      drawCards();
    });

    $('#rollCubes').click(function() {
        rollCubes();
        $('#rollCubes').hide();
    });
    $('#reset').hide();
    $('#challengeNever').hide();
    $('#challengeNow').hide();

    $('#challengeNow').click(function(){
        challengeNow(playerNumber);
    });
    $('#challengeNever').click(function(){
        challengeNever(playerNumber);
    });

        playerTurn = 1;
        

});
        playerNumber = null;

        winningPlayer = null;
        mobileDevices = 0;





function updatePlayerTurn(){
    if (playerTurn === 1){
      playerTurn = 2;
    }
    else if (playerTurn === 2){
        playerTurn = 1;
    }
    if (playerTurn !== playerNumber){
        $('#challengeNever').hide();
        $('#challengeNow').hide();
        $('#reset').show();
    }
    else{
        $('#challengeNever').show();
        $('#challengeNow').show();
        $('#reset').hide();
    }
    socket.emit('updateTurn', playerTurn);
}

function globalFunction(){


    if (playerNumber !== 1){
      $('#dealCards').hide();
    }

    if (playerNumber !== 2){
      $('#rollCubes').hide();
    }

    if ((playerNumber !== 1) && (playerNumber !== 2)) {
      $('#challengeNever').hide();
      $('#challengeNow').hide();
      $('#reset').hide();
    }


}