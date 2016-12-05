function drawCards(){

    var cardsArray = new Array();

    cardsArray[0] = {src:'images/cards/G.png', id: '', class: ''};

    //then add them to the dom
    var c = document.getElementById('cards');

    for(var i = 0;i<cardsArray.length;i++)
    {
        img = new Image();
        img.src = cardsArray[i].src;
        c.append(img);
    }
}