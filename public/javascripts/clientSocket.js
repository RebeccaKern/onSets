var socket = io.connect();
socket.on('updateTurn', function (data) {
    playerTurn = data;
    document.getElementById("playerTurnText").innerHTML = "Player " + playerTurn +"'s turn";
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

    if (playerNumber === null){
        playerNumber = data.number;
    }
    $(t).html("You are player " + playerNumber);
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


