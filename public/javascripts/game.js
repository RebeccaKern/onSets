$( function() {

    $('#reset').click(function() {
        setTimer();
    });

    drawCards();

    $('#rollCubes').click(function() {
        rollCubes();
        $('#rollCubes').hide();
    });
    

});