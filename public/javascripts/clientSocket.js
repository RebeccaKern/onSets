var socket = io.connect();
socket.on('updateTurn', function (data) {
    playerTurn = data;
    document.getElementById("playerTurnText").innerHTML = "Player " + playerTurn +"'s turn";
});
function test(){
    return 5;
}

function getPlayerScore(handleData, name){
    console.log("in get player score");
    var u = "player/"+name;
    pScore = "nothing";
    pName = name;
    console.log(u);
        $.ajax({
        url: u,
        type: 'GET',
        success: function(result) {
            console.log("should have gotten");
            console.log(result);
            console.log(pName);
            handleData(result, pName);
        }
    });
    }

function handleData(result, name){
    console.log("we too have a result");
    console.log(result);
    console.log(result[0].playerscore);
    updatePlayer(name, result[0].playerscore);
}


function updatePlayer(name, score){
    var newScore = parseInt(score) + 6;
    var u = "player/"+name+"/"+newScore;
    console.log("in update player function");
    $.ajax({
    url: u,
    type: 'POST',
    success: function(result) {
      console.log("was successful in post function");
    }
    });
      console.log(location.href);
    location.href='/scores';
    console.log(location.href);
    winningPlayer = data;
    console.log(winningPlayer);
}


socket.on('winner', function (data) {
    console.log("looking for winner");
    var name = "Becca";
    console.log("winner is " + data + "and you are " + playerNumber);
    //alert("You are " + playerNumber +" and the winner was " + data + (data === playerNumber));
    if (data === playerNumber){
        console.log("and the winning username is " + username);
        getPlayerScore(handleData, username);
    }
    location.href='/scores';
    

    //updatePlayer(name, 5);
    //console.log(getScore(name));
    //console.log(getScore("Matt"));
    // console.log($("#gotten").html());
    // console.log($("#socketTest").html());
    //var score = 1;//getScore(name);
    
    // var u = "player/"+name+"/"+score;
    // $.ajax({
    // url: u,
    // type: 'POST',
    // success: function(result) {
    //   console.log("was successful in post function");
    // }
    // });
    // console.log("in winner");
  
    //alert("player " + data + "wins!");
});

socket.on('cubes', function (data) {

    //update images to reflect cube movement
    var newLocation = document.getElementById(data.class);
    img = new Image();
    img.src = data.src;
    img.className = data.class;
    img.id = data.id;
    newLocation.append(img);

    //remove cube image from initial position
    document.getElementById(data.id).remove();
    console.log("moved a cube");
    updatePlayerTurn();
   
});

socket.on('players', function (data){

    var t = document.getElementById("numPlayers");
    console.log("when do i hit " + playerNumber);
    // detecting for mobile
    // http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        playerNumber = -1;
    }
    else if (playerNumber === null){
        console.log("mobileNum" + mobileNum);
        playerNumber = data.number;
    }
    //console.log(playerNumber);
    $(t).html("You are player " + playerNumber + "and there are " + data.o);
    //$('#playerNumber').html("Your name is " + loaditems());
    globalFunction();

    // function loaditems() {
    //     var pN = document.getElementById("numPlayers");
    //     if (pN.textContent == 1){
    //       return JSON.parse(localStorage.player1);
    //     }
    //     if (pN.textContent == 2){
    //       return JSON.parse(localStorage.player2);
    //     }
    // }
});


socket.on('evil', function (data){
    var t = document.getElementById("time");
    $(t).html(data);
});

socket.on('cardsDealt', function (data){
    $('#dealCards').hide();
    var c = document.getElementById('cards');

    for(var i = 0;i<data.length;i++)
    {
        img = new Image();
        img.src = data[i].src;
        img.className = "cardImg";
        c.append(img);
    }
});

socket.on('rolledCubes', function (data){
    $('#rollCubes').hide();

    var r = document.getElementById('resources');
    resourcesArray = data;
    for(var k = 0;k<data.length;k++)
    {
        img = new Image();
        img.src = data[k].src;
        img.className = "drag";
        //data[k].id = "num"+k;
        img.id = "num"+k;
        r.append(img);
    }  

    $(function() {
    var dragOptions = {
        revert: "invalid",
        scope: "items",
        helper: "clone"
    }
    $('.drag').draggable(dragOptions);
    $('.droppable').droppable({
        scope: "items",
        drop: function(e, ui) {
            console.log("playerTurn "+ playerTurn);
            console.log("playerNumber "+ playerNumber);
            if (playerTurn === playerNumber){
            //drop the cube to a certain spot and disable dragging
            var $drop = $(this);
            var array = eval(this.id + 'Array');
            //var array = this.id + 'Array';
            $(ui.draggable).draggable({
                "disabled": true
            });


            //find the id and then index of the cube that moved
            elements = document.getElementsByClassName('drag ui-draggable ui-draggable-handle ui-draggable-disabled');
            removeId = elements[0].id;
            for(var i = 0;i<resourcesArray.length;i++)
            {
                if (resourcesArray[i].id === removeId){
                    removeIndex = i;
                }
            }

            //use index to add cube to the appropriate array and remove from the old array
            array.push(resourcesArray[removeIndex]);
            resourcesArray.splice(removeIndex, 1);

            //get cube object to pass

            movedCube = array[array.length-1];
            newL = this.id;
            movedCube.class = newL;

            //use sockets to broadcast the cube that moved to all clients
            var socket = io();
            socket.emit('cubes', movedCube);  
            }  
            else{
                alert("It's not your turn");
            } 
        }

    });

 });
});


