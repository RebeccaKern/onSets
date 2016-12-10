var socket = io.connect();
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
   
});

socket.on('evil', function (data){

    var t = document.getElementById("time");
    $(t).html(data);
});


