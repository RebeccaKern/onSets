function rollCubes() {

    var u = "rollingCubes";
    $.ajax({
    url: u,
    type: 'GET',
    success: function(result) {
      if (result){
        // resourcesArray = result;
        var socket = io();
        socket.emit('rolledCubes', result);
      }
    }
    });

//     colorCubeSides1 = new Array();
//     colorCubeSides2 = new Array();
//     numberCubeSides = new Array();
//     operationCubeSides = new Array();

//     operationCubeSides[0] = {src:'images/And.png', id: '', class: ''};
//     operationCubeSides[1] = {src:'images/And.png', id: '', class: ''};
//     operationCubeSides[2] = {src:'images/Or.png', id: '', class: ''};
//     operationCubeSides[3] = {src:'images/Or.png', id: '', class: ''};
//     operationCubeSides[4] = {src:'images/Prime.png', id: '', class: ''};
//     operationCubeSides[5] = {src:'images/ButNot.png', id: '', class: ''};

//     numberCubeSides[0] = {src:'images/1.png', id: '', class: ''};
//     numberCubeSides[1] = {src:'images/2.png', id: '', class: ''};
//     numberCubeSides[2] = {src:'images/3.png', id: '', class: ''};
//     numberCubeSides[3] = {src:'images/4.png', id: '', class: ''};
//     numberCubeSides[4] = {src:'images/5.png', id: '', class: ''};
//     numberCubeSides[5] = {src:'images/6.png', id: '', class: ''};

//     colorCubeSides1[0] = {src:'images/B.png', id: '', class: ''};
//     colorCubeSides1[1] = {src:'images/R.png', id: '', class: ''};
//     colorCubeSides1[2] = {src:'images/G.png', id: '', class: ''};
//     colorCubeSides1[3] = {src:'images/Y.png', id: '', class: ''};
//     colorCubeSides1[4] = {src:'images/B.png', id: '', class: ''};
//     colorCubeSides1[5] = {src:'images/Y.png', id: '', class: ''};

//     colorCubeSides2[0] = {src:'images/B.png', id: '', class: ''};
//     colorCubeSides2[1] = {src:'images/R.png', id: '', class: ''};
//     colorCubeSides2[2] = {src:'images/G.png', id: '', class: ''};
//     colorCubeSides2[3] = {src:'images/Y.png', id: '', class: ''};
//     colorCubeSides2[4] = {src:'images/R.png', id: '', class: ''};
//     colorCubeSides2[5] = {src:'images/G.png', id: '', class: ''};

//     colorCubesArray1 = new Array();
//     colorCubesArray2 = new Array();
//     numberCubesArray = new Array();
//     operationCubesArray = new Array();

//     while (colorCubesArray1.length < 4) {
//         randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
//         colorCubesArray1.push(JSON.parse(JSON.stringify(colorCubeSides1[randomInt])));
//     }

//     while (colorCubesArray2.length < 4) {
//         randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
//         colorCubesArray2.push(JSON.parse(JSON.stringify(colorCubeSides2[randomInt])));
//     }

//     while (numberCubesArray.length < 3) {
//         randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
//         numberCubesArray.push(JSON.parse(JSON.stringify(numberCubeSides[randomInt])));
//     }

//     while (operationCubesArray.length < 4) {
//         randomInt = Math.floor(Math.random() * 6); // modeled after https://gist.github.com/kerimdzhanov/7529623
//         operationCubesArray.push(JSON.parse(JSON.stringify(operationCubeSides[randomInt])));
//     }

//     //initialize all arrays
//     var imgArray = new Array();
//     var forbiddenArray = new Array();
//     var requiredArray = new Array();
//     var permittedArray = new Array();

//     //initialize cubes in resource array

//     for(var i = 0;i<colorCubesArray1.length;i++){
//         imgArray.push(colorCubesArray1[i]);
//     }

//     for(var i = 0;i<colorCubesArray2.length;i++){
//         imgArray.push(colorCubesArray2[i]);
//     }

//     for(var i = 0;i<numberCubesArray.length;i++){
//         imgArray.push(numberCubesArray[i]);
//     }
//     for(var i = 0;i<operationCubesArray.length;i++){
//         imgArray.push(operationCubesArray[i]);
//     }

//     //then add them to the dom
//     var r = document.getElementById('resources');

//     for(var k = 0;k<imgArray.length;k++)
//     {
//         img = new Image();
//         img.src = imgArray[k].src;
//         img.className = "drag";
//         imgArray[k].id = "num"+k;
//         img.id = "num"+k;
//         //r.append(img);
//     }
 
//     socket.emit('rolledCubes', imgArray);

// //idea modified from http://stackoverflow.com/questions/4574978/jquery-ui-dropping-elements-only-in-special-areas
//  $( function() {
//     $( ".draggable" ).draggable();
//   } );

// $(function() {
//     var dragOptions = {
//         revert: "invalid",
//         scope: "items",
//         helper: "clone"
//     }
//     $('.drag').draggable(dragOptions);
//     $('.droppable').droppable({
//         scope: "items",
//         drop: function(e, ui) {

//             //drop the cube to a certain spot and disable dragging
//             var $drop = $(this);
//             var array = eval(this.id + 'Array');
//             $(ui.draggable).draggable({
//                 "disabled": true
//             });

//             //find the id and then index of the cube that moved
//             elements = document.getElementsByClassName('drag ui-draggable ui-draggable-handle ui-draggable-disabled');
//             removeId = elements[0].id;
//             for(var i = 0;i<imgArray.length;i++)
//             {
//                 if (imgArray[i].id === removeId){
//                     removeIndex = i;
//                 }
//             }

//             //use index to add cube to the appropriate array and remove from the old array
//             array.push(imgArray[removeIndex]);
//             imgArray.splice(removeIndex, 1);

//             //get cube object to pass
//             movedCube = array[array.length-1];
//             movedCube.class = this.id;

//             //use sockets to broadcast the cube that moved to all clients
//             var socket = io();
//             socket.emit('cubes', movedCube);     
//         }

//     });

//  });


}

    