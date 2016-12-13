window.onload = function() {

    // detecting for mobile
    // http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
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
        $("#signupForm").show();

    });
    $('#login').click(function() {
        $("#login").hide();
        $("#signup").hide();
        $("#loginForm").show();
    });

    $('#loginSubmitButton').click(function() {
        var name = $("#usernameLogin").val();
        getScore(seeIfPlayerExists, name);
    });  

     $('#signupSubmitButton').click(function() {
        var name = $("#usernameSignup").val();
        getScore(handleData, name);
    });  

}

    function seeIfPlayerExists(result, name){
        $("#loginForm").hide();
        if(typeof result === 'object'){
                localStorage.clear();
                window.playerIdName = name;
                localStorage.username = name;
            $("#playerDisplay").html("Awesome you exist!");
            location.href='/play';
        }
        else{
            $("#playerDisplay").html(name + " does not exist. Click the sign up button instead.");
            $("#login").show();
            $("#signup").show();
        }
    }

   

function makePlayer(name, score){
    var u = "player/"+name+"/"+score;
    $.ajax({
    url: u,
    type: 'PUT',
    success: function(result) {
    }
    });
}

        function getScore(handleData, name){
        var u = "player/"+name;
        pScore = "nothing";
        pName = name;
            $.ajax({
            url: u,
            //async: false,
            type: 'GET',
            success: function(result) {
                handleData(result, pName);
            }
        });
        return pScore;

    }

    function handleData(result, name){
    if(typeof result === 'object'){
        pScore = result[0].playerscore;
        $("#playerDisplay").html("This player already exists - try a different username");
    }
    else{
        makePlayer(name, 0);
        $("#playerDisplay").html(name + " has been created! Now you can login.");
        $("#login").show();
         $("#signupForm").hide();
    }
    }


    $('#submitButton').click(function() {
        var name = $("#username").val();
    });

    $(function() { 
        var i = loaditems();
        $("#nameDisplay").html(i);
    });

    window.applicationCache.addEventListener("updateready",function(){
        window.applicationCache.swapCache();
        location.reload();
    });

    $("#submitButton").on("click", function(e){
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



