$( function() {
//setTimer();
//$('#time').append("60");
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
            var array = eval(this.id + 'Array');
            // console.log(this.id + 'Array');
            // console.log(array);
            // console.log(eval(array));
            //console.log(window["forbiddenArray"])
            //console.log(window[this.id + 'Array']);
            console.log(ui.draggable);
            // $(ui.draggable).draggable({
            //     "disabled": true
            // }).appendTo($drop);
            $(ui.draggable).draggable({
                "disabled": true
            });
            for(var i = 0;i<imgArray.length;i++)
            {
                if (imgArray[i].className == 'drag ui-draggable ui-draggable-handle ui-draggable-disabled'){
                    removeIndex = i;
                }
            }
            console.log(removeIndex);
            console.log(imgArray);
            console.log(forbiddenArray);
            imgArray.splice(removeIndex, 1);
            var n = document.getElementById(this.id);
            // n.append(imgArray[removeIndex]);
            array.push(imgArray[removeIndex]);
            console.log(imgArray);
            console.log("forbidden");
            console.log(forbiddenArray);
            console.log(requiredArray);
            console.log(permittedArray);
            console.log(r);
            //r.remove
            console.log($("#resources"));
            // $("#resources").addClass("peaches");
            // console.log($("#resources:nth-child(2)").addClass("test"));
            // console.log($("#resources :nth-child("+removeIndex+")"));
            // $('#resources img:nth-child('+removeIndex+')').addClass("lalaloopsy");
            //document.getElementsByClassName('.ui-draggable-disabled').remove();

            // $('.ui-draggable-disabled').remove();//removeClass('drag ui-draggable ui-draggable-handle ui-draggable-disabled').addClass("needsMoved");
            $('.ui-draggable-disabled').remove();
            //console.log(newImg);
            console.log(document.getElementById('resources'));
            // for(var i = 0;i<array.length;i++)
            // {
            //     cube = array[i];
            //     console.log(cube);
            //     n.append(cube);
            // }
            //console.log(r);

            // var image_x = document.getElementsByClassName('drag ui-draggable ui-draggable-handle ui-draggable-disabled');
            // image_x.r.removeChild(image_x);
            // console.log(image_x);
            // for(var i = 0;i<imgArray.length;i++)
            // {
            //     cube = imgArray[i];
            //     cube.className = "drag";
            //     console.log(cube);
            //     r.append(cube);
            // }
            // console.log(imgArray[3]);
            // console.log(imgArray[3].className);
            // console.log(imgArray[3].className == 'drag ui-draggable ui-draggable-handle ui-draggable-disabled');
            // console.log($('imgArray.img.drag.ui-draggable.ui-draggable-handle.ui-draggable-disabled').index());
            // console.log(document.getElementsByClassName('drag ui-draggable ui-draggable-handle ui-draggable-disabled'));
            //console.log(ui.draggable.context);
            //console.log(imgArray.indexOf(img.drag.ui-draggable.ui-draggable-handle.ui-draggable-disabled));
            // $(ui.draggable).draggable({
            //     "disabled": true
            // });
            // $(ui.draggable).
            
            // $(ui.draggable).draggable({
            //     forbiddenArray.push();
            // });
            //console.log($drop);
        }

    });
    $('#droppable2').droppable();
    $('#droppable3').droppable();

    // $(':button').click(function() {
    //     var $box = $('<div class="drag">Drag me</div>');
    //     $('#cont').append($box);
    //     $box.draggable(dragOptions);
    // });
});
});