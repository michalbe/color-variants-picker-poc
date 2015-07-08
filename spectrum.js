window.onload = (function(){
  var canvas = document.querySelector('canvas#spectrum');
  var ctx = canvas.getContext('2d');
  canvas.width = 50;

  var toSkip = 0;
  var pos = 0;
  var colorsNumber = colors.length;
  var colorSize = (canvas.height/colors.length);
  var rectSize = 50;
  var fingerIsHidingMeKurwaMargin = 50
  var draw = function(){
    canvas.height = document.documentElement.clientHeight;
    pos = 0;
    colorSize = (canvas.height/colors.length);

    colors.forEach(function(color){
      ctx.fillStyle = color;
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
    ctx.fillRect(0, touchPosition - (rectSize/2) - fingerIsHidingMeKurwaMargin, rectSize, rectSize);
  });

  canvas.addEventListener('touchend', function(){
    canvas.classList.add('hidden');
    draw();
  });

  draw();
  window.onresize = draw;
});
