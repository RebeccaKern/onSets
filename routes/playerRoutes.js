var players = require('../models/mongoPlayers.js');
var mongoModel = require("../models/mongoModel.js");
var express = require('express')

exports.init = function(app) {
  console.log("initializing player routes");
 //app.get("/player/", getAllplayers);
  //app.put('/:collection', doCreate);
 app.put('/:player/:playername/:playerscore', doCreate); 
 app.get('/player', doRetrieve); // CRUD Retrieve
 app.get('/player/:playername', doIndividualRetrieve); // CRUD Retrieve
 // app.get("/player/:playername", getplayer);
 //app.put("/player/:playername/:playerscore", putplayer);
 //app.post("/player/:playername/:playerscore", updateplayer);
 app.post('/:player/:playername/:playerscore', doUpdate);
 app.delete("/player/:playername", doDelete);
 // app.delete("/player/:playername", deleteplayer);
 }


doCreate = function(req, res){
  console.log("1. Starting doCreate in dbRoutes");
  console.log(req.params);
  if (Object.keys(req.params).length == 0) {
    console.log("but i got here");
    res.send(modelData);
    //res.render('message', {title: 'Mongo Demo', obj: "No create message body found"});
    return;
  }
  console.log("Am I here?");
  mongoModel.create ( req.params.player, 
                        req.params,
                          function(result) {
                            // result equal to true means create was successful
                          var success = (result ? "Create successful" : "Create unsuccessful");
                          //res.render('message', {title: 'Mongo Demo', obj: success});
                            console.log("2. Done with callback in dbRoutes create");
                          });
  console.log("3. Done with doCreate in dbRoutes");
}

doIndividualRetrieve = function(req, res){
  console.log("Starting doIRetrieve");
  console.log(req.params);
  mongoModel.retrieve(
    'player', 
    req.params,
        function(modelData) {
            console.log(modelData);
          if (modelData.length) {
            console.log("length is greater than 1");
            //response.render('scores.ejs', {'allPlayers': modelData});
            res.send(modelData);
        //res.render('results',{title: 'Mongo Demo', obj: modelData});
      } else {
        var message = "No documents with "+JSON.stringify(req.query)+ 
                      " in collection "+req.params.collection+" found.";
        console.log(message);
        res.send(message);
        //res.render('message', {title: 'Mongo Demo', obj: message});
      }
        });
}

doRetrieve = function(req, res){
  console.log("Starting doRetrieve");
  console.log(req.params);
  mongoModel.retrieve(
    'player', 
    req.params,
        function(modelData) {
            console.log(modelData);
          if (modelData.length) {
            console.log("length is greater than 1");
            //response.render('scores.ejs', {'allPlayers': modelData});
            res.send(modelData);
        //res.render('results',{title: 'Mongo Demo', obj: modelData});
      } else {
        var message = "No documents with "+JSON.stringify(req.query)+ 
                      " in collection "+req.params.collection+" found.";
        res.render('message', {title: 'Mongo Demo', obj: message});
      }
        });
}

doUpdate = function(req, res){
  console.log("Starting doUpdate");
  console.log(req.params);
  //console.log(req.body);
  // if there is no filter to select documents to update, select all documents
  var filter = {playername: req.params.playername};//req.params.find ? JSON.parse(req.params.find) : {};
  // if there no update operation defined, render an error page.
  console.log(filter);
  if (!req.params) {
    res.render('message', {title: 'Mongo Demo', obj: "No update operation defined"});
    return;
  }
  console.log("checkplus");
  var p = req.params.playerscore;
  var update = { '$set': { playerscore: p } };
  //var update = JSON.parse(req.params);
  // mongoModel.update(  req.params.player, filter, update,
  //                         function(status) {
  //                             res.render('message',{title: 'Mongo Demo', obj: status});
  //                         });
}

doDelete = function(req, res){
  console.log("Starting doDelete");
  console.log(req.params);
  var filter = {playername: req.params.playername};
  mongoModel.remove(
    'player', 
    filter,
        function(modelData) {
            console.log(modelData);
          if (modelData.length) {
            res.send(modelData);
        //res.render('results',{title: 'Mongo Demo', obj: modelData});
      } else {
         res.send(modelData);
        var message = "No documents with "+JSON.stringify(req.query)+ 
                      " in collection "+req.params.collection+" found.";
        //res.render('message', {title: 'Mongo Demo', obj: message});
      }
        });
}

// getplayer = function(request, response) {
//     response.send(players.retrieve(request.params.playername));
// }

// putplayer = function(request, response) {
//  response.send(players.add(request.params.playerscore, request.params.playername));
//  response.end("Adding the player "+request.params.playername);
// }

// updateplayer = function(request, response) {
//  players.update(request.params.playerscore, request.params.playername);
//  response.end("Updating the player "+request.params.playername +" with score as "+request.params.playerscore);
// }

// deleteplayer = function(request, response) {
//  players.delete(request.params.playername);
//  response.end("Deleting the player "+request.params.playername);
// }

