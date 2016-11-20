var c = document.getElementById("cards");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

<canvas id="myCanvas" width="500" height="500" style="border:1px solid #d3d3d3;">
    <script>
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.fillStyle = "#3370d4"; //blue
      ctx.beginPath();
      ctx.arc(95,50,40,0,2*Math.PI);
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = "#333333"; 
      ctx.beginPath();
      ctx.arc(95,25,40,0,2*Math.PI);
      ctx.stroke();
      ctx.fill();

    </script>
        </canvas>