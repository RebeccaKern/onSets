var socket = io.connect();
socket.on('players', function (data) {
  console.log(data);
  $("#numPlayers").text(data.number);
  $("#welcome").text("Welcome player " + data.ordinal);
    });


