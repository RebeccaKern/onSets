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
            //$("#gotten").append(result[0].playername);
            for (var i = 0; i < result.length; i++) {
            // similar to http://www.w3schools.com/jsref/met_table_insertrow.asp
                var table = document.getElementById("playerScores");
                var row = table.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = result[i].playername;
                cell2.innerHTML = result[i].playerscore;
            }
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
