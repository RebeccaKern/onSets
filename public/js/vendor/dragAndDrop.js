$( function() {

    $('#reset').click(function() {
        setTimer();
    });

    drawCards();

    colorCubeSides1 = new Array();
    colorCubeSides2 = new Array();
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

    colorCubeSides1[0] = {src:'images/B.png', id: '', class: ''};
    colorCubeSides1[1] = {src:'images/R.png', id: '', class: ''};
    colorCubeSides1[2] = {src:'images/G.png', id: '', class: ''};
    colorCubeSides1[3] = {src:'images/Y.png', id: '', class: ''};
    colorCubeSides1[4] = {src:'images/B.png', id: '', class: ''};
    colorCubeSides1[5] = {src:'images/Y.png', id: '', class: ''};

    colorCubeSides2[0] = {src:'images/B.png', id: '', class: ''};
    colorCubeSides2[1] = {src:'images/R.png', id: '', class: ''};
    colorCubeSides2[2] = {src:'images/G.png', id: '', class: ''};
    colorCubeSides2[3] = {src:'images/Y.png', id: '', class: ''};
    colorCubeSides2[4] = {src:'images/R.png', id: '', class: ''};
    colorCubeSides2[5] = {src:'images/G.png', id: '', class: ''};


    colorCubesArray = new Array();
    numberCubesArray = new Array();
    operationCubesArray = new Array();

    while (colorCubesArray.length < 4) {
        randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
        colorCubesArray.push(colorCubeSides1[randomInt]);
    }

    while (colorCubesArray.length < 8) {
        randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
        colorCubesArray.push(colorCubeSides2[randomInt]);
    }

    while (numberCubesArray.length < 3) {
        randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
        numberCubesArray.push(numberCubeSides[randomInt]);
    }

    while (operationCubesArray.length < 4) {
        randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
        operationCubesArray.push(operationCubeSides[randomInt]);
    }

    //initialize all arrays
    var imgArray = new Array();
    var forbiddenArray = new Array();
    var requiredArray = new Array();
    var permittedArray = new Array();

    //initialize cubes in resource array
    // imgArray[0] = {src:'images/G.png', id: '', class: ''};
    // imgArray[1] = {src:'images/B.png', id: '', class: ''};
    // imgArray[2] = {src:'images/Y.png', id: '', class: ''};
    // imgArray[3] = {src:'images/Prime.png', id: '', class: ''};
    // imgArray[4] = {src:'images/G.png', id: '', class: ''};
    // imgArray[5] = {src:'images/R.png', id: '', class: ''};

    for(var i = 0;i<colorCubesArray.length;i++){
        imgArray.push(colorCubesArray[i]);
    }
    for(var i = 0;i<numberCubesArray.length;i++){
        imgArray.push(numberCubesArray[i]);
    }
    for(var i = 0;i<operationCubesArray.length;i++){
        imgArray.push(operationCubesArray[i]);
    }

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