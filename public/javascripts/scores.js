$( function() {
    $("#winner").append("why not working");
    $.ajax({
        url: "player/",
        type: 'GET',
        success: function(result) {
          if (result){
            for (var i = 0; i < result.length; i++) {
            // similar to http://www.w3schools.com/jsref/met_table_insertrow.asp
                var table = document.getElementById("playerScores");
                var row = table.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = result[i].playername;
                cell2.style.textAlign = 'center'
                cell2.innerHTML = result[i].playerscore;
            }
          } 
        }
    });

});
