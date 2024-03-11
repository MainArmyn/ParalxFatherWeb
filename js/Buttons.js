document.addEventListener('DOMContentLoaded', function() {
  var pointsA = [], pointsB = [], canvas = null, context = null, points = 8, viscosity = 20, mouseDist = 70, damping = 0.05, mouseX = 0, mouseY = 0, relMouseX = 0, relMouseY = 0, mouseLastX = 0, mouseLastY = 0, mouseDirectionX = 0, mouseDirectionY = 0, mouseSpeedX = 0, mouseSpeedY = 0;

  function addPoints(x, y) {
    pointsA.push(new Point(x, y, 1));
    pointsB.push(new Point(x, y, 2));
  }

  function Point(x, y, level) {
    this.x = this.ix = 50 + x;
    this.y = this.iy = 50 + y;
    this.vx = 0;
    this.vy = 0;
    this.cx1 = 0;
    this.cy1 = 0;
    this.cx2 = 0;
    this.cy2 = 0;
    this.level = level;
  }

  Point.prototype.move = function() {
    this.vx += (this.ix - this.x) / (viscosity * this.level);
    this.vy += (this.iy - this.y) / (viscosity * this.level);

    var dx = this.ix - relMouseX,
        dy = this.iy - relMouseY;
    var relDist = (1 - Math.sqrt((dx * dx) + (dy * dy)) / mouseDist);

    if ((mouseDirectionX > 0 && relMouseX > this.x) || (mouseDirectionX < 0 && relMouseX < this.x)) {
      if (relDist > 0 && relDist < 1) {
        this.vx = (mouseSpeedX / 4) * relDist;
      }
    }
    this.vx *= (1 - damping);
    this.x += this.vx;

    if ((mouseDirectionY > 0 && relMouseY > this.y) || (mouseDirectionY < 0 && relMouseY < this.y)) {
      if (relDist > 0 && relDist < 1) {
        this.vy = (mouseSpeedY / 4) * relDist;
      }
    }
    this.vy *= (1 - damping);
    this.y += this.vy;
  };

  function initButton() {
    var button = document.querySelector(".btn-liquid");
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    canvas = document.createElement("canvas");
    button.appendChild(canvas);
    context = canvas.getContext("2d");
    canvas.width = buttonWidth + 100;
    canvas.height = buttonHeight + 100;

    var x = buttonHeight / 2;
    for (var j = 1; j < points; j++) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
    }
    addPoints(buttonWidth - buttonHeight / 5, 0);
    addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
    for (var j = points - 1; j > 0; j--) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
    }
    addPoints(buttonHeight / 5, buttonHeight);

    addPoints(-buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonHeight / 5, 0);

    renderCanvas();
  }

  function renderCanvas() {
    requestAnimationFrame(renderCanvas);
  
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    for (var i = 0; i <= pointsA.length - 1; i++) {
      pointsA[i].move();
      pointsB[i].move();
    }

    // ...
  }

  initButton();
});
