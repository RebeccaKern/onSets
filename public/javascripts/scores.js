$( function() {
    //console.log(winningPlayer);
    //document.getElementById("winner").innerHTML = winningPlayer;
    $("#winner").append("why not working");
    $.ajax({
        url: "player/",
        type: 'GET',
        success: function(result) {
          console.log(result);
          console.log(result[0]);
          console.log(result[0].playername);
          console.log("the result is gotten");
          if (result){
            $("#gotten").append(result[0].playername);
         } 
          else{
            $("#gotten").html("<h1>Nothing Present</h1>");
          }
        }
    });
    $("#gotten").append("yolo");
    $("winner").append("yolo2");

    // function winnerIs(playerNum){
    //     document.getElementById("winner").innerHTML = playerNum;
    // }
});
