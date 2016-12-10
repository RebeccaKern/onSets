function setTimer(){
    // modified from http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
  
    var time=60;
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer(){
      time=time-1;
      //console.log(time);
      if (time <= 0)
      {
         clearInterval(counter);
         //counter ended, do something here
         return;
      }

    // var socket = io.connect();
    //   socket.on('connect', function () {
    //     socket.emit('timing', function (data) {
    //       console.log(data); // data will be 'woot'
    //     });
    //   });
    // socket.emit('timing', time);
    // console.log(time);

    // socket.on('timing', function(message) {
    //$('#time').html(time);
    //console.log($('#time').html());
      var socket = io();
    socket.emit('evil', time);
    
    // })
   
  //Do code for showing the number of seconds here
    }
}


