window.onload = (function(){
  var canvas = document.querySelector('canvas#spectrum');
  var ctx = canvas.getContext('2d');
  canvas.width = 60;

  var toSkip = 0;
  var pos = 0;
  var affectedColors = 20;
  var colorsNumber = colors.length;
  var colorSize = (canvas.height/colors.length);
  var activeColorSize = 60;

  var draw = function(activeColor){
    canvas.height = document.documentElement.clientHeight;
    pos = 0;
    colors.forEach(function(color, index) {
      var posX = 30;
      var tempSize = (canvas.height/colors.length);
      ctx.fillStyle = color;
      // if (activeColor) {
      //   distanceFactor = Math.abs(index - activeColor);
      //   if (distanceFactor < affectedColors) {
      //     //console.log(index, colorSize * (activeColorSize/(distanceFactor+1)));
      //     //tempSize = colorSize * (activeColorSize/(distanceFactor+1));
      //
      //     posX = (distanceFactor+10) > posX ? posX : (distanceFactor+10);//posX - posX/(distanceFactor+1);
      //   }
      // }
      ctx.fillRect(posX, pos, 100, tempSize);
      pos += tempSize;
    });
  };

  canvas.addEventListener('touchstart', function(e){
    //console.log(e.touches[0].clientY);
    e.preventDefault();
    canvas.classList.remove('hidden');
    margin = 0;
    draw();
  });

  canvas.addEventListener('touchmove', function(e){
    var touchPosition = e.touches[0].clientY;
    var inx = Math.round(touchPosition/(canvas.height/colors.length))-1;
    draw(inx);
    //console.log(touchPosition, colorSize, touchPosition/colorSize, inx);
    //console.log(inx);
    ctx.fillStyle = colors[inx];
    ctx.fillRect(0, touchPosition - activeColorSize, activeColorSize, activeColorSize);
  });

  canvas.addEventListener('touchend', function(){
    canvas.classList.add('hidden');
    draw();
  });

  draw();
  window.onresize = draw;
});
