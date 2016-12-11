$( function() {

    $('#reset').click(function() {
        setTimer();
    });

    $('#dealCards').click(function() {
      console.log("here");
      drawCards();
      $('#dealCards').hide();
    });

    $('#rollCubes').click(function() {
        rollCubes();
        $('#rollCubes').hide();
    });


});