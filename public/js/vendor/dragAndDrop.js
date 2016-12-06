$( function() {

    $('#reset').click(function() {
        setTimer();
    });

    drawCards();

    colorCubeSides = new Array();
    numberCubeSides = new Array();
    operationCubeSides = new Array();

    operationCubeSides[0] = {src:'images/And.png', id: '', class: ''};
    operationCubeSides[1] = {src:'images/And.png', id: '', class: ''};
    operationCubeSides[2] = {src:'images/Or.png', id: '', class: ''};
    operationCubeSides[3] = {src:'images/Or.png', id: '', class: ''};
    operationCubeSides[4] = {src:'images/Prime.png', id: '', class: ''};
    operationCubeSides[5] = {src:'images/ButNot.png', id: '', class: ''};

    numberCubeSides[0] = {src:'images/1.png', id: '', class: ''};
    numberCubeSides[1] = {src:'images/2.png', id: '', class: ''};
    numberCubeSides[2] = {src:'images/3.png', id: '', class: ''};
    numberCubeSides[3] = {src:'images/4.png', id: '', class: ''};
    numberCubeSides[4] = {src:'images/5.png', id: '', class: ''};
    numberCubeSides[5] = {src:'images/6.png', id: '', class: ''};

    colorCubeSides[0] = {src:'images/B.png', id: '', class: ''};
    colorCubeSides[1] = {src:'images/R.png', id: '', class: ''};
    colorCubeSides[2] = {src:'images/G.png', id: '', class: ''};
    colorCubeSides[3] = {src:'images/Y.png', id: '', class: ''};
    colorCubeSides[4] = {src:'images/B.png', id: '', class: ''};
    colorCubeSides[5] = {src:'images/Y.png', id: '', class: ''};


    colorCubesArray = new Array();
    numberCubesArray = new Array();
    operationCubesArray = new Array();

    //initialize all arrays
    var imgArray = new Array();
    var forbiddenArray = new Array();
    var requiredArray = new Array();
    var permittedArray = new Array();

    //initialize cubes in resource array
    imgArray[0] = {src:'images/G.png', id: '', class: ''};
    imgArray[1] = {src:'images/B.png', id: '', class: ''};
    imgArray[2] = {src:'images/Y.png', id: '', class: ''};
    imgArray[3] = {src:'images/Prime.png', id: '', class: ''};
    imgArray[4] = {src:'images/G.png', id: '', class: ''};
    imgArray[5] = {src:'images/R.png', id: '', class: ''};

    //then add them to the dom
    var r = document.getElementById('resources');

    for(var i = 0;i<imgArray.length;i++)
    {
        img = new Image();
        img.src = imgArray[i].src;
        img.className = "drag";
        img.id = "num"+i
        imgArray[i].id = "num"+i
        r.append(img);
    }

 $( function() {
    $( ".draggable" ).draggable();
  } );

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

            //drop the cube to a certain spot and disable dragging
            var $drop = $(this);
            var array = eval(this.id + 'Array');
            $(ui.draggable).draggable({
                "disabled": true
            });

            //find the id and then index of the cube that moved
            elements = document.getElementsByClassName('drag ui-draggable ui-draggable-handle ui-draggable-disabled');
            removeId = elements[0].id;
            for(var i = 0;i<imgArray.length;i++)
            {
                if (imgArray[i].id === removeId){
                    removeIndex = i;
                }
            }

            //use index to add cube to the appropriate array and remove from the old array
            array.push(imgArray[removeIndex]);
            imgArray.splice(removeIndex, 1);

            //get cube object to pass
            movedCube = array[array.length-1];
            movedCube.class = this.id;

            //use sockets to broadcast the cube that moved to all clients
            var socket = io();
            socket.emit('cubes', movedCube);     
        }

    });

});

});