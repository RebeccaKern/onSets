
$( function() {
var imgArray = new Array();
var forbiddenArray = new Array();

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

    console.log("here");
    var r = document.getElementById('resources');

    for(var i = 0;i<imgArray.length;i++)
    {
        cube = imgArray[i];
        cube.className = "drag";
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
            $(ui.draggable).draggable({
                "disabled": true
            }).appendTo($drop);
            // $(ui.draggable).draggable({
            //     forbiddenArray.push();
            // });
            console.log($drop);
        }

    });
    $('#droppable2').droppable();
    $('#droppable3').droppable();

    $(':button').click(function() {
        var $box = $('<div class="drag">Drag me</div>');
        $('#cont').append($box);
        $box.draggable(dragOptions);
    });
});
});