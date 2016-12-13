exports.init = function(app) {
 app.get("/", index);
 app.get("/play", loadGame);
 app.get("/scores", scoresPage);
 app.post("/saveUser/:username", savingUser);
}

index = function(request, response) {
  response.render('startScreen.ejs');
}

scoresPage = function(request, response) {
  response.render('scores.ejs');
}

savingUser = function(request, response) {
}

loadGame = function(request, response){
    response.render('game.ejs');
}
