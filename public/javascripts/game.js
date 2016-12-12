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

});

function globalFunction(){
  // $('#reset').click(function() {
  //       setTimer();
  //   });

    if (playerNumber === 1){
      $('#dealCards').hide();
    }

    if (playerNumber === 2){
      $('#rollCubes').hide();
    }

    console.log(playerNumber);

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