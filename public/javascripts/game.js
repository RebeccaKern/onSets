$( function() {

    //initialize all arrays here
    resourcesArray = new Array();
    forbiddenArray = new Array();
    requiredArray = new Array();
    permittedArray = new Array();

    playerNumber = null;

    $('#reset').click(function() {
        setTimer();
    });

    // if (playerNumber === 1){
    //   $('#dealCards').hide();
    // }

    // if (playerNumber === 2){
    //   $('#rollCubes').hide();
    // }

    // console.log(playerNumber);

    $('#dealCards').click(function() {
      console.log("here");
      drawCards();
    });

    $('#rollCubes').click(function() {
        rollCubes();
        $('#rollCubes').hide();
    });

    $('#challengeNow').click(function(){
        challengeNow(playerNumber);
        console.log(playerNumber);
    })
    $('#challengeNever').click(function(){
        challengeNever(playerNumber);
    })

});

function updatePlayerTurn(){
    if (playerTurn === 1){
      playerTurn = 2;
    }
    else if (playerTurn === 2){
        playerTurn = 1;
    }
    socket.emit('updateTurn', playerTurn);
}

function globalFunction(){

    if (playerNumber === 1){
      $('#dealCards').hide();
    }

    if (playerNumber === 2){
      $('#rollCubes').hide();
    }

    console.log(playerNumber);

    playerTurn = 1;
    document.getElementById("playerTurnText").innerHTML = "Player " + playerTurn +"'s turn";

     

    //   $('#dealCards').click(function() {
    //     console.log("here");
    //     drawCards();
    //   });

    // $('#rollCubes').click(function() {
    //     console.log("rollingCubes");
    //     rollCubes();
    //     $('#rollCubes').hide();
    // });


}