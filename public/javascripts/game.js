$( function() {

    //initialize all arrays here
    resourcesArray = new Array();
    forbiddenArray = new Array();
    requiredArray = new Array();
    permittedArray = new Array();

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
        return JSON.parse(localStorage.player1 || "[]");
    }

});