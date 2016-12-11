var socket = io.connect();
console.log("we are in the clientSide socket");
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
    console.log("we are in the timing socket");
    var t = document.getElementById("time");
    $(t).html(data);
});

socket.on('cardsDealt', function (data){
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
    var r = document.getElementById('resources');
    for(var k = 0;k<data.length;k++)
    {
        img = new Image();
        img.src = data[k].src;
        img.className = "drag";
        data[k].id = "num"+k;
        img.id = "num"+k;
        r.append(img);
    }  
});


