let sx, sy, sw, sh, dx, dy, dw, dh, r, g, b;

dy = 0;
r = 255;
g = 100;
b = 100;

function setup() {
  createCanvas(400, 600);
  
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  background(r,g,b);
  
}

function draw() {
  
  
  capture.loadPixels();
  sx = 0;
  sy = 0;
  sw = capture.width;
  sh = 5;
  dx = 0; 
  dw = width;
  dh = 1;
  
  blendMode(DARKEST);
  stroke(r, g, b);
  strokeWeight(1);
  line(0, dy, width, dy);
  blendMode(BLEND);
  copy(capture, sx, sy, sw, sh, dx, dy, dw, dh);
   
  
  dy = dy + 1;
  
  if (dy > height) {
    dy = 0;
    r = random(0, 255);
    g = random (0, 255);
    b = random(0, 255);
  }
}