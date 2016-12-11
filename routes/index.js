exports.init = function(app) {
 app.get("/", index);
 app.get("/play", loadGame);
 app.post("/saveUser/:username", savingUser);
}

index = function(request, response) {
  console.log(request.session);
  response.render('startScreen.ejs');
}

savingUser = function(request, response) {
    console.log("saving user");
    //session.regenerate();
    console.log(request.params);
    console.log(request.params.username);
    request.session.name = 'Napoleon';
    request.session.user = request.params.username;
    console.log(request.session);
}

loadGame = function(request, response){
    response.render('game.ejs');
}
