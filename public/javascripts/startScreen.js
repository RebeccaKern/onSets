    // function getScore(handleData){
    //     //$("#yourScore").append("yolo");
    //     console.log("in get score");
    //     var u = "player/"+"Matt";
    //     pScore = "nothing";
    //     console.log(u);
    //         $.ajax({
    //         url: u,
    //         //async: false,
    //         type: 'GET',
    //         success: function(result) {
    //             handleData(result);
    //             // console.log("we too have a result");
    //             // console.log(result);
    //             // console.log(result[0].playerscore);
    //             // pScore = result[0].playerscore;
    //             // console.log("p" + pScore);
    //             // document.getElementById("yourScore").innerHTML = result[0].playerscore;
            
    //         }
    //     });
    //     return pScore;

    // }

    // function handleData(result){
    //     console.log("we too have a result");
    //     console.log(result);
    //     console.log(result[0].playerscore);
    //     pScore = result[0].playerscore;
    //     console.log("p" + pScore);
    //     //nextCallback(pScore);
    //             //document.getElementById("yourScore").innerHTML = result[0].playerscore;
    // }

    // console.log(getScore(handleData));
    //var i = 0;
    // while (pScore === "nothing"){
    //    i++;
    // }
    //console.log("p2" + pScore);

    //playerNumber = null;

window.onload = function() {


        function getScore(handleData){
        //$("#yourScore").append("yolo");
        console.log("in get score");
        var u = "player/"+"Ji";
        pScore = "nothing";
        console.log(u);
            $.ajax({
            url: u,
            //async: false,
            type: 'GET',
            success: function(result) {
                handleData(result);
                // console.log("we too have a result");
                // console.log(result);
                // console.log(result[0].playerscore);
                // pScore = result[0].playerscore;
                // console.log("p" + pScore);
                // document.getElementById("yourScore").innerHTML = result[0].playerscore;
             // } 
             // else {
             //    console.log("not handling request");
             //    $("#yourScore").append("This sucks");
             // } 
            }
        });
        return pScore;

    }

    function handleData(result){
        console.log("we too have a result");
        console.log(result);
    if(typeof result === 'object'){
        pScore = result[0].playerscore;
        console.log("p" + pScore);
    }
    else{
        console.log("That player doesn't exist yet");
    }
        //nextCallback(pScore);
                //document.getElementById("yourScore").innerHTML = result[0].playerscore;
    }
    
    console.log(getScore(handleData));


    console.log("p3" + pScore);

    console.log(document.getElementById("yourScore").innerHTML);
    var currentScore = document.getElementById("yourScore").innerHTML;
    console.log(currentScore);

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