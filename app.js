var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

//var cookieSession = require('cookie-session');
var express = require('express');
var app = express();

// app.use(cookieSession({
//   name: 'session',
//   keys: ['something'],
//   httpOnly: true,   

//   // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))

// var session = require('express-session');

// app.use(session({
//   secret: '05a9fa4cf4969ca800f09e91e978991a650a702b39b8e4aea368fe1a8e4dbdc27a3cb5896f571bcbb9764710021bd2ce6ccd166fcfaad03c829e438f0d65cc98',
//   cookie: { secure: true }
// }))

// Set the views directory
app.set('views', __dirname + '/views');

// Define the view (templating) engine
app.set('view engine', 'ejs');

// Define how to log events
app.use(morgan('tiny'));	

require('./routes/index.js').init(app);
require('./routes/gamePlayRoutes.js').init(app);

// Handle static files
app.use(express.static(__dirname + '/public'));
  
// Catch any routes not already handed with an error message
app.use(function(req, res) {
	var message = 'Error, did not understand path '+req.path;
	// Set the status to 404 not found, and render a message to the user.
  res.status(404).render('error', { 'message': message });
});

// Boilerplate for setting up socket.io alongside Express.
var httpServer = require('http').createServer(app);
var sio =require('socket.io')(httpServer);

// The server socket.io code is in the socketio directory.
require('./socketio/serverSocket.js').init(sio);
console.log("this is here app.js");

httpServer.listen(50000, function() {console.log('Listening on 50000');});
