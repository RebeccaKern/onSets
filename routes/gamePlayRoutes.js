var game = require('../models/gamePlay.js');
var express = require('express')

exports.init = function(app) {
 app.get("/dealCards", dealCards);
 app.get("/rollingCubes", getCubes);
}

getCubes = function(request, response){
    r = game.cubes();
    response.send(r);
}

dealCards = function(request, response) {
  r = game.cards();
  response.send(r);
}
