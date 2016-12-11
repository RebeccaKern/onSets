var game = require('../models/gamePlay.js');
var express = require('express')


//var dogs = require('./models/dogs.js');
//var express = require('express')

// exports.init = function(app) {
//  app.get("/dog/", getAllDogs);
//  app.get("/dog/:dogname", getDog);
//  app.put("/dog/:dogname/:dogbreed/:dogowner", putDog);
//  app.post("/dog/:dogname/:dogbreed/:dogowner", updateDog);
//  app.delete("/dog/:dogname", deleteDog);
//  }

exports.init = function(app) {
 console.log("got route");
 app.get("/dealCards", dealCards);
}

dealCards = function(request, response) {
  console.log("in deal cards route");
  r = game.cards();
  console.log(r);
  
  response.send(r);
  //game.testing();
  //console.log(request);
  //console.log(response);
  //response.render('startScreen.ejs');
}
