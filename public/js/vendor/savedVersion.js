            // console.log(elements);
            // console.log(elements[0].id.replace('num', ''));
            // console.log(array);
            // console.log(imgArray);
            // console.log(document.getElementById('resources'));

$( function() {
var imgArray = new Array();
var forbiddenArray = new Array();
var requiredArray = new Array();
var permittedArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/G.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/Prime.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/Y.png';

imgArray[3] = new Image();
imgArray[3].src = 'images/R.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/B.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/B.png';

    var r = document.getElementById('resources');

    for(var i = 0;i<imgArray.length;i++)
    {
        cube = imgArray[i];
        cube.className = "drag";
        cube.id = "id"+i;
        console.log(cube);
        r.append(cube);
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
            var $drop = $(this);
            var array = eval(this.id + 'Array');
            $(ui.draggable).draggable({
                "disabled": true
            });
            for(var i = 0;i<imgArray.length;i++)
            {
                if (imgArray[i].className == 'drag ui-draggable ui-draggable-handle ui-draggable-disabled'){
                    removeIndex = i;
                }
            }

            array.push(imgArray[removeIndex]);
            imgArray.splice(removeIndex, 1);
            var n = document.getElementById(this.id);

            var cubeArrays = {resources:JSON.stringify(imgArray), forbidden:JSON.stringify(forbiddenArray), required:JSON.stringify(requiredArray), permitted:JSON.stringify(permittedArray)};
            console.log(cubeArrays);
            var newA = {a:"apple", b:"banana"};
            
            var socket = io();
            //socket.emit('cubes', 'Hello World');
            
            console.log(imgArray);
            console.log("forbidden");
            console.log(forbiddenArray);
            console.log(requiredArray);
            console.log(permittedArray);

            $('.ui-draggable-disabled').remove();
            var passCube = {};
            console.log(document.getElementById('resources'));
            for(var i = 0;i<array.length;i++)
            {
                cube = array[i];
                console.log(cube);
                passCube = {newidDOM:this.id, source:cube.src, id:cube.id};
                n.append(cube);
            }
            socket.emit('cubes', passCube);
        }

    });
    $('#droppable2').droppable();
    $('#droppable3').droppable();

});
});