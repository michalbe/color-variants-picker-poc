window.onload = (function(){
  var canvas = document.querySelector('canvas#spectrum');
  var ctx = canvas.getContext('2d');
  canvas.width = 50;

  var toSkip = 0;
  var pos = 0;
  var colorsNumber = colors.length;

  var draw = function(){
    canvas.height = document.documentElement.clientHeight;
    pos = 0;
    var colorSize = (canvas.height/colors.length);

    colors.forEach(function(color){
      ctx.fillStyle = color;
      ctx.fillRect(0, pos, 100, colorSize);
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
  });

  canvas.addEventListener('touchend', function(){
    canvas.classList.add('hidden');
    draw();
  });

  draw();
  window.onresize = draw;
});
