var socket = io.connect();
socket.on('updateTurn', function (data) {
    playerTurn = data;
    document.getElementById("playerTurnText").innerHTML = "Player " + playerTurn +"'s turn";
});
socket.on('goal', function (data) {
    $('#goal').html("Goal: "+ data);
});
function getPlayerScore(handleData, name){
    var u = "player/"+name;
    pScore = "nothing";
    pName = name;
        $.ajax({
        url: u,
        type: 'GET',
        success: function(result) {
            handleData(result, pName);
        }
    });
    }

function handleData(result, name){
    updatePlayer(name, result[0].playerscore);
}


function updatePlayer(name, score){
    var newScore = parseInt(score) + 6;
    var u = "player/"+name+"/"+newScore;
    $.ajax({
    url: u,
    type: 'POST',
    success: function(result) {
    }
    });
    location.href='/scores';
    winningPlayer = data;
}


socket.on('winner', function (data) {
    alert("Player " + playerNumber + " " + username +" wins");
    if (data === playerNumber){
        getPlayerScore(handleData, username);
    }
    location.href='/scores';
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
    updatePlayerTurn();
   
});

socket.on('players', function (data){

    var t = document.getElementById("numPlayers");
    // detecting for mobile
    // http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        playerNumber = -1;
    }
    else if (playerNumber === null){
        playerNumber = data.number;
    }
    if (playerNumber === 1 || playerNumber === 2){

        $(t).html("Welcome " + username +  " you are player " + playerNumber);
    }
    else{
        $(t).html("Spectator Status");
    }
    globalFunction();
});


socket.on('evil', function (data){
    var t = document.getElementById("time");
    $(t).html(data);
});

socket.on('challenge', function (data){
    //confirm("what");
    if (((data.playerNum === 1) || (data.playerNum === 2)) && (data.playerNum !== playerNumber)){
        var answer = confirm("Player " + data.playerNum + " challenged " + data.type +". Do you agree or disagree?");
        if (answer){
            win(data.playerNum);
        }
        else{
            win(playerNumber);
        }
    }
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
            if (playerTurn === playerNumber){
            //drop the cube to a certain spot and disable dragging
            var $drop = $(this);
            var array = eval(this.id + 'Array');
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


