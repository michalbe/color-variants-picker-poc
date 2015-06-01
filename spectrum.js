window.onload = (function(){
  var canvas = document.querySelector('canvas#spectrum');
  var ctx = canvas.getContext('2d');
  canvas.width = 50;

  var toSkip = 0;
  var pos = 0;
  var affectedColors = 4;
  var colorsNumber = colors.length;
  var colorSize = (canvas.height/colors.length);
  var activeColorSize = 100;

  var draw = function(activeColor){
    canvas.height = document.documentElement.clientHeight;
    pos = 0;
    colorSize = (canvas.height/colors.length);
    colors.forEach(function(color, index){
      ctx.fillStyle = color;
      if (Math.abs(index - activeColor) < affectedColors)
        console.log(Math.abs(index - activeColor))// < affectedColors);
        //tu dodac rysowanie
      ctx.fillRect(10, pos, 100, colorSize);
      pos += colorSize;
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
    draw();
    var touchPosition = e.touches[0].clientY;
    var inx = Math.round(touchPosition/colorSize)-1;

    //console.log(touchPosition, colorSize, touchPosition/colorSize, inx);
    //console.log(inx);
    ctx.fillStyle = colors[inx];
    ctx.fillRect(0, touchPosition - (activeColorSize/2), activeColorSize, activeColorSize);
  });

  canvas.addEventListener('touchend', function(){
    canvas.classList.add('hidden');
    draw();
  });

  draw(32);
  window.onresize = draw;
});
