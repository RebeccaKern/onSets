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

    $('#dealCards').click(function() {
      console.log("here");
      drawCards();
    });

    $('#rollCubes').click(function() {
        rollCubes();
        $('#rollCubes').hide();
    });

    $('#playerNumber').html("Your name is " + loaditems());

    function loaditems() {
        console.log(playerNumber);
        var pN = document.getElementById("numPlayers");
        console.log("playerNumber");
        console.log(pN.textContent);
        console.log($("#numPlayers").html());
        if (pN.textContent === 1){
          return JSON.parse(localStorage.player1);
        }
        if (pN.textContent === 2){
          return JSON.parse(localStorage.player2);
        }
    }

});