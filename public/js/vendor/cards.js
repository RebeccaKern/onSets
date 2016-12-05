function drawCards(){

    var cardsArray = new Array();

    cardsArray[0] = {src:'images/cards/G.png', id: '', class: ''};
    cardsArray[1] = {src:'images/cards/BG.png', id: '', class: ''};
    cardsArray[2] = {src:'images/cards/RGY.png', id: '', class: ''};
    cardsArray[3] = {src:'images/cards/Blank.png', id: '', class: ''};
    cardsArray[4] = {src:'images/cards/Y.png', id: '', class: ''};

    //then add them to the dom
    var c = document.getElementById('cards');

    for(var i = 0;i<cardsArray.length;i++)
    {
        img = new Image();
        img.src = cardsArray[i].src;
        img.className = "cardImg";
        c.append(img);
    }
}