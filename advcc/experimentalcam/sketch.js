let sx, sy, sw, sh, dx, dy, dw, dh, r, g, b;

dy = 0;
r = 255;
g = 100;
b = 100;
let img;
let cam;
let frame;
let eightiesOn = false;
let ninetiesOn = false;
let tensOn = false;
let funOn = false;
var bx = [25, 150, 275, 350, 400, 520, 625]
let currentMode = 'None';
let eightiesbutton, ninetiesbutton, tensbutton, funbutton;

//preload all assets (camera/filters)
function preload() {
  img = loadImage('assets/vhsbackground.jpg');
  supereight = loadImage('assets/supereightfilter.png');
  kodak = loadImage('assets/kodakoverlay.jpg');
  polaroid = loadImage('assets/polaroid.png');
  filmburn = loadImage('assets/filmburn.jpg');
  }

function setup() {
  createCanvas(400, 600);
  
  pixelDensity(1);
  cam = createCapture(VIDEO);
  cam.size(600, 400);
  cam.hide();
  background(r, g, b);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '9');
  canvas.style('pointer-events', 'auto'); // or 'none' if needed
  background(0); // confirm canvas is drawing
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