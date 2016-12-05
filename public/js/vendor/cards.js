function drawCards(){

    var cardsArray = new Array();

    cardsArray[0] = {src:'images/cards/G.png', id: '', class: ''};
    cardsArray[1] = {src:'images/cards/B.png', id: '', class: ''};
    cardsArray[2] = {src:'images/cards/R.png', id: '', class: ''};
    cardsArray[3] = {src:'images/cards/Y.png', id: '', class: ''};
    cardsArray[4] = {src:'images/cards/Blank.png', id: '', class: ''};
    cardsArray[5] = {src:'images/cards/BG.png', id: '', class: ''};
    cardsArray[6] = {src:'images/cards/BR.png', id: '', class: ''};
    cardsArray[7] = {src:'images/cards/BY.png', id: '', class: ''};
    cardsArray[8] = {src:'images/cards/RG.png', id: '', class: ''};
    cardsArray[9] = {src:'images/cards/RY.png', id: '', class: ''};
    cardsArray[10] = {src:'images/cards/GY.png', id: '', class: ''};
    cardsArray[11] = {src:'images/cards/BGY.png', id: '', class: ''};
    cardsArray[12] = {src:'images/cards/BRG.png', id: '', class: ''};
    cardsArray[13] = {src:'images/cards/BRY.png', id: '', class: ''};
    cardsArray[14] = {src:'images/cards/RGY.png', id: '', class: ''};
    cardsArray[15] = {src:'images/cards/BRGY.png', id: '', class: ''};

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