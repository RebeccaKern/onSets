var socket = io.connect();
console.log("we are in the clientSide socket");
socket.on('cubes', function (data) {

    //update images to reflect cube movement
    var newLocation = document.getElementById(data.class);
    console.log(data);
    console.log(data.class);
    img = new Image();
    img.src = data.src;
    img.className = data.class;
    img.id = data.id;
    newLocation.append(img);

    //remove cube image from initial position
    document.getElementById(data.id).remove();
   
});

socket.on('evil', function (data){
    console.log("we are in the timing socket");
    var t = document.getElementById("time");
    $(t).html(data);
});

socket.on('cardsDealt', function (data){
    $('#dealCards').hide();
    console.log("we are on this side but maybe not working?");
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
    console.log("in rolled Cubes");

    var r = document.getElementById('resources');
    resourcesArray = data;
    console.log(resourcesArray);
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
            console.log(this);
            //drop the cube to a certain spot and disable dragging
            var $drop = $(this);
            console.log(this);
            console.log(permittedArray);
            var array = eval(this.id + 'Array');
            console.log(array);
            //var array = this.id + 'Array';
            $(ui.draggable).draggable({
                "disabled": true
            });


            //find the id and then index of the cube that moved
            elements = document.getElementsByClassName('drag ui-draggable ui-draggable-handle ui-draggable-disabled');
            removeId = elements[0].id;
            console.log(resourcesArray);
            // console.log(resourcesArray[0]);
            // console.log(resourcesArray[0].id);
            // console.log(removeId);
            for(var i = 0;i<resourcesArray.length;i++)
            {
                console.log(resourcesArray[i].id);
                if (resourcesArray[i].id === removeId){
                    removeIndex = i;
                }
            }

            //use index to add cube to the appropriate array and remove from the old array
            array.push(resourcesArray[removeIndex]);
            resourcesArray.splice(removeIndex, 1);

            //get cube object to pass
            console.log(this);
            console.log(this.id);
            console.log(this.id + 'Array');
            console.log(array);

            movedCube = array[array.length-1];
            console.log(movedCube);
            newL = this.id;
            movedCube.class = newL;
            console.log(this.id);
            console.log(movedCube.class);

            //use sockets to broadcast the cube that moved to all clients
            var socket = io();
            socket.emit('cubes', movedCube);     
        }

    });

 });
});


