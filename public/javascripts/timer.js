function setTimer(){
    // modified from http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
  
    var time=60;
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer(){
      time=time-1;
      if (time <= 0)
      {
         clearInterval(counter);
         return;
      }
      var socket = io();
      socket.emit('countdown', time);
      socket.on('cubes', function (data){
        console.log("does htis work");
        clearInterval(counter);
      });
    
    }
}


