var players = require('../models/mongoPlayers.js');
var mongoModel = require("../models/mongoModel.js");
var express = require('express')

exports.init = function(app) {
 app.put('/:player/:playername/:playerscore', doCreate); 
 app.get('/player', doRetrieve); // CRUD Retrieve
 app.get('/player/:playername', doIndividualRetrieve); // CRUD Retrieve
 app.post('/:player/:playername/:playerscore', doUpdate);
 app.delete("/player/:playername", doDelete);
 }


doCreate = function(req, res){
  if (Object.keys(req.params).length == 0) {
    res.send(modelData);
    return;
  }
  mongoModel.create ( req.params.player, 
                        req.params,
                          function(result) {
                            // result equal to true means create was successful
                          var success = (result ? "Create successful" : "Create unsuccessful");
                          });
}

doIndividualRetrieve = function(req, res){
  mongoModel.retrieve(
    'player', 
    req.params,
        function(modelData) {
          if (modelData.length) {
            res.send(modelData);
      } else {
        var message = "No documents with "+JSON.stringify(req.query)+ 
                      " in collection "+req.params.collection+" found.";
        res.send(message);
      }
        });
}

doRetrieve = function(req, res){
  mongoModel.retrieve(
    'player', 
    req.params,
        function(modelData) {
          if (modelData.length) {
            res.send(modelData);
      } else {
        var message = "No documents with "+JSON.stringify(req.query)+ 
                      " in collection "+req.params.collection+" found.";
        res.render('message', {title: 'Mongo Demo', obj: message});
      }
        });
}

doUpdate = function(req, res){
  // if there is no filter to select documents to update, select all documents
  var filter = {playername: req.params.playername};//req.params.find ? JSON.parse(req.params.find) : {};
  // if there no update operation defined, render an error page.
  if (!req.params) {
    res.send("success");
    return;
  }
  var p = req.params.playerscore;
  var update = { '$set': { playerscore: p } };
  mongoModel.update(  req.params.player, filter, update,
                          function(status) {
                              res.send("should be successful");
                          });
}

doDelete = function(req, res){
  var filter = {playername: req.params.playername};
  mongoModel.remove(
    'player', 
    filter,
        function(modelData) {
          if (modelData.length) {
            res.send(modelData);
      } else {
         res.send(modelData);
        var message = "No documents with "+JSON.stringify(req.query)+ 
                      " in collection "+req.params.collection+" found.";
      }
        });
}


