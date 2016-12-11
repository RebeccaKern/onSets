$( function() {

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


});