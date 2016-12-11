function rollCubes() {

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

    console.log(operationCubeSides[0] == operationCubeSides[0]);

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

    console.log("looking at ids");
    for(var i = 0;i<colorCubeSides1.length;i++){
        console.log(colorCubeSides1[i]);
    }
 

    colorCubeSides2[0] = {src:'images/B.png', id: '', class: ''};
    colorCubeSides2[1] = {src:'images/R.png', id: '', class: ''};
    colorCubeSides2[2] = {src:'images/G.png', id: '', class: ''};
    colorCubeSides2[3] = {src:'images/Y.png', id: '', class: ''};
    colorCubeSides2[4] = {src:'images/R.png', id: '', class: ''};
    colorCubeSides2[5] = {src:'images/G.png', id: '', class: ''};

    colorCubesArray1 = new Array();
    colorCubesArray2 = new Array();
    numberCubesArray = new Array();
    operationCubesArray = new Array();

    while (colorCubesArray1.length < 4) {
        randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
        colorCubesArray1.push(JSON.parse(JSON.stringify(colorCubeSides1[randomInt])));
    }

    console.log(colorCubesArray1);

    while (colorCubesArray2.length < 4) {
        randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
        colorCubesArray2.push(JSON.parse(JSON.stringify(colorCubeSides2[randomInt])));
    }

    while (numberCubesArray.length < 3) {
        randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
        numberCubesArray.push(JSON.parse(JSON.stringify(numberCubeSides[randomInt])));
    }

    while (operationCubesArray.length < 4) {
        randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
        operationCubesArray.push(JSON.parse(JSON.stringify(operationCubeSides[randomInt])));
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

    console.log(imgArray);

    for(var i = 0;i<colorCubesArray1.length;i++){
        imgArray.push(colorCubesArray1[i]);
    }

    console.log(imgArray);

    for(var i = 0;i<colorCubesArray2.length;i++){
        imgArray.push(colorCubesArray2[i]);
    }

    console.log(imgArray);

    for(var i = 0;i<numberCubesArray.length;i++){
        imgArray.push(numberCubesArray[i]);
    }
    for(var i = 0;i<operationCubesArray.length;i++){
        imgArray.push(operationCubesArray[i]);
    }

    //then add them to the dom
    var r = document.getElementById('resources');
    console.log(r);
    console.log(imgArray);

    for(var i = 0;i<imgArray.length;i++){
        console.log(imgArray[i]);
    }
 
    for(var k = 0;k<imgArray.length;k++)
    {
        console.log(imgArray[k]);
        img = new Image();
        img.src = imgArray[k].src;
        img.className = "drag";
        imgArray[k].id = "num"+k;
        img.id = "num"+k;

        //imgArray[k].id;

        r.append(img);
        // console.log(k);
        // console.log(img.id);
        // console.log(imgArray[k].id);
        // console.log(imgArray);
    }

    console.log(imgArray);
    for(var i = 0;i<imgArray.length;i++){
        console.log(imgArray[i]);
        console.log(imgArray[k])
    }    

//idea modified from http://stackoverflow.com/questions/4574978/jquery-ui-dropping-elements-only-in-special-areas
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

            console.log(elements);
            console.log(removeId);

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


}

    