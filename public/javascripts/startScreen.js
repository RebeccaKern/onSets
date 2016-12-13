window.onload = function() {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#mobileCheck").html("You are going mobile");
        alert("You are on a mobile device so you'll only be able to watch.");
        location.href='/play';
    }

    $("#loginForm").hide();
    $("#signupForm").hide();
    $('#signup').click(function() {
        $("#signup").hide();
        $("#login").hide();
        //document.getElementById('login').style.visibility = 'hidden';
        $("#signupForm").show();

    });
    $('#login').click(function() {
        $("#login").hide();
        $("#signup").hide();
        $("#loginForm").show();

        // $("#login").hide();

    });

    $('#loginSubmitButton').click(function() {
        var name = $("#usernameLogin").val();
        console.log(name);
        console.log(getScore(seeIfPlayerExists, name));
        localStorage.clear();
        localStorage.username = name;
    });  

    function seeIfPlayerExists(result, name){
        $("#loginForm").hide();
        if(typeof result === 'object'){
            $("#playerDisplay").html("Awesome you exist!");
            location.href='/play';
        }
        else{
            $("#playerDisplay").html(name + " does not exist. Click the sign up button instead.");
            console.log("That player doesn't exist yet");
            $("#login").show();
            $("#signup").show();
        }
        //nextCallback(pScore);
                //document.getElementById("yourScore").innerHTML = result[0].playerscore;
    }

    $('#signupSubmitButton').click(function() {
        var name = $("#usernameSignup").val();
        console.log(name);
        console.log(getScore(handleData, name));
    });  

function makePlayer(name, score){
    var u = "player/"+name+"/"+score;
    console.log("in make player function");
    $.ajax({
    url: u,
    type: 'PUT',
    success: function(result) {
      console.log("was successful in post function");
    }
    });
}

        function getScore(handleData, name){
        //$("#yourScore").append("yolo");
        console.log("in get score");
        var u = "player/"+name;
        pScore = "nothing";
        pName = name;
        console.log(u);
            $.ajax({
            url: u,
            //async: false,
            type: 'GET',
            success: function(result) {
                console.log(result);
                console.log(pName);
                handleData(result, pName);
            }
        });
        return pScore;

    }

    function handleData(result, name){
        console.log("we too have a result");
        console.log(result);
    if(typeof result === 'object'){
        pScore = result[0].playerscore;
        console.log("p" + pScore);
        $("#playerDisplay").html("This player already exists - try a different username");
    }
    else{
        console.log(name);
        makePlayer(name, 0);
        $("#playerDisplay").html(name + " has been created! Now you can login.");
        console.log("That player doesn't exist yet");
        $("#login").show();
         $("#signupForm").hide();
    }
        //nextCallback(pScore);
                //document.getElementById("yourScore").innerHTML = result[0].playerscore;
    }


    $('#submitButton').click(function() {
        var name = $("#username").val();
        console.log(name);
        console.log(getScore(handleData, name));
    });


    //console.log("p3" + pScore);

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