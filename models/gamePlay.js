var game = {

    testing: function() {
       return "this is a test";
    },

    cubes: function(){
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

        //initialize cubes in resource array

        for(var i = 0;i<colorCubesArray1.length;i++){
            imgArray.push(colorCubesArray1[i]);
        }

        for(var i = 0;i<colorCubesArray2.length;i++){
            imgArray.push(colorCubesArray2[i]);
        }

        // for(var i = 0;i<numberCubesArray.length;i++){
        //     imgArray.push(numberCubesArray[i]);
        // }
        for(var i = 0;i<operationCubesArray.length;i++){
            imgArray.push(operationCubesArray[i]);
        }

        for(var i = 0;i<imgArray.length;i++){
            imgArray[i].id = "num" + i;
        }

        return imgArray;

    },

    cards: function(){

    var cardsArray = new Array();
    var dealCardsArray = new Array();
    var cardsUsed = new Array();

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

    function contains(num, cardsA){
        console.log("here");
        console.log(cardsA);
        for(var i = 0;i<cardsA.length;i++){
            console.log("inside");
            if (cardsA[i] == num){
                return true;
            }
        }
        return false;
    }

    while (dealCardsArray.length < 10) {
        randomInt = Math.floor(Math.random() * 16); // modeled after https://gist.github.com/kerimdzhanov/7529623
        if (!contains(randomInt, cardsUsed)){
            dealCardsArray.push(cardsArray[randomInt]);
            cardsUsed.push(randomInt);
        }
    }

    return dealCardsArray;
    }

}

module.exports = game;

