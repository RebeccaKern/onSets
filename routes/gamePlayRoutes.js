var game = require('../models/gamePlay.js');
var express = require('express')

exports.init = function(app) {
 console.log("got route");
 app.get("/dealCards", dealCards);
 app.get("/rollingCubes", getCubes);
}

getCubes = function(request, response){
    console.log("in get cubes route");
    r = game.cubes();
    console.log(r);
    response.send(r);
}

dealCards = function(request, response) {
  console.log("in deal cards route");
  r = game.cards();
  console.log(r);
  response.send(r);
}
