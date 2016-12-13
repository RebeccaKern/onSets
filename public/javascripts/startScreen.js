window.onload = function() {

    function getScore(){
        //$("#yourScore").append("yolo");
        console.log("in get score");
        var u = "player/"+"Matt";
        console.log(u);
            $.ajax({
            url: u,
            type: 'GET',
            success: function(result) {
              if (result){
                console.log(result);
                console.log(result[0].playerscore);
                document.getElementById("yourScore").innerHTML = result[0].playerscore;
             } 
             else {
                $("#yourScore").append("This sucks");
             } 
            }
        });
                console.log(document.getElementById("yourScore").innerHTML);
    }

    getScore();


    console.log("in startscreen.js");

    $(function() { 
        console.log("in this function");
        var i = loaditems();
        $("#nameDisplay").html(i);
        console.log("should be displaying name");
    });

    window.applicationCache.addEventListener("updateready",function(){
        window.applicationCache.swapCache();
        location.reload();
    });

    $("#submitButton").on("click", function(e){
        console.log("submitButton clicked");
        e.preventDefault();
        saveName();
    });

    function saveName() {
        var nameValue = document.getElementById("username").value;
        var divTest = document.getElementById("nameDisplay");
        $("#nameDisplay").html(nameValue);
        saveitems(nameValue);
        var u = "saveUser/" + nameValue;
        $.ajax({
            url: u,
            type: 'POST',
            success: function(result) {
              console.log(result);
              console.log("sent");
            }
        });
    }

    function saveitems(name) {
        //console.log(JSON.parse(localStorage.player1));
        console.log(localStorage.getItem("player1"));
        console.log(localStorage.getItem("player2"));
        console.log("before this");
        if (localStorage.getItem("player1") === null){
            localStorage.player1 = JSON.stringify(name);
        }
        else if (localStorage.getItem("player2") === null){
            localStorage.player2 = JSON.stringify(name);
        }
        else {
            if (localStorage.getItem("playersWaiting") === null){
                localStorage.playersWaiting = JSON.stringify([name]);
            }
            else {
                waiting = JSON.parse(localStorage.getItem("playersWaiting"));
                waiting.push(name);
                localStorage.playersWaiting = JSON.stringify(waiting);
            }
        }
    }

        // if (JSON.parse(localStorage.player1) == "[]"){
        //     localStorage.player1 = JSON.stringify(name);
        // }
        // if (JSON.parse(localStorage.player2) == "[]"){
        //     localStorage.player2 = JSON.stringify(name);
        // }
        // else{
        //     localStorage.playersWaiting = JSON.stringify(name);
        // }
        //localStorage.items = JSON.stringify(items);
    

    function loaditems() {
        return JSON.parse(localStorage.player1 || "[]");
    }

}