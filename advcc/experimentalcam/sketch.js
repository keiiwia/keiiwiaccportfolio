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
  img = loadImage('../experimentalcam/assets/vhsbackground.jpg');
  supereight = loadImage('../experimentalcam/assets/supereightfilter.png');
  kodak = loadImage('../experimentalcam/assets/kodakoverlay.jpg');
  polaroid = loadImage('../experimentalcam/assets/polaroid.png');
  filmburn = loadImage('../experimentalcam/assets/filmburn.jpg');
  }

function setup() {
  createCanvas(600, 600);
  image(img, 0, 400, 600, 1000);
  pixelDensity(1);
  cam = createCapture(VIDEO);
  cam.size(600, 400);
  cam.hide();
  background(r, g, b);
  
}

function draw() {
  
  image(cam, 0, 0, 600, 400);
  cam.loadPixels();

  //1980s button
  eightiesbutton = createButton('1980');
  eightiesbutton.position(bx[0], 500);
  eightiesbutton.style ('background-color', '#E94E18');
  eightiesbutton.size(75,40);
  eightiesbutton.style ('color','#F2E9E4' );
  eightiesbutton.mousePressed(eighties);
  
  if(eightiesOn == true){
    push()
      tint(255, 120)
      image(supereight, 0, 0 ,600,400);
    pop()}

  //1990s button
  ninetiesbutton = createButton('1990');
  ninetiesbutton.position(bx[1], 500);
  ninetiesbutton.style ('background-color', '#E94E18');
  ninetiesbutton.size(75,40);
  ninetiesbutton.style ('color','#F2E9E4');
  ninetiesbutton.mousePressed(nineties);
 
 if(ninetiesOn == true){
    push()
    tint(255, 126);
   image(kodak, 0, 0 ,600,400);
 
    pop()}
  
  //2010s button
  tensbutton = createButton('2010');
  tensbutton.position(bx[2], 500);
  tensbutton.style ('background-color', '#E94E18');
  tensbutton.size(75,40);
  tensbutton.style ('color','#F2E9E4');
  tensbutton.mousePressed(tens);
  
   if(tensOn == true){
    push()
   image(polaroid, 0, 0 ,600,400);
    tint(255, 126);
     image(filmburn, 26,30,550,300);
    pop()}

  //fun button
  funbutton = createButton('press for sillies!')
  funbutton.position(bx[4], 500)
  funbutton.style ('background-color', '#E94E18');
  funbutton.size(75,40);
  funbutton.style ('color','#F2E9E4');
  funbutton.mousePressed(fun);

  image(cam, 0, 0, 600, 400);  // draw camera feed first

// then draw the fun scanline effect AFTER
  if (funOn && cam.width > 0 && cam.height > 0) {
    push();
    sx = 0;
    sy = 0;
    sw = cam.width;
    sh = 100;
    dx = 0;
    dw = width;
    dh = 100;

    blendMode(DARKEST);        // optional blending
    stroke(r, g, b);
    strokeWeight(1);
    line(0, dy, width, dy);
    blendMode(BLEND);

    let strip = cam.get(sx, sy, sw, sh);
    image(strip, dx, dy, dw, dh);  // draw ON TOP of cam feed

    dy += 1;

    if (dy > height) {
      dy = 0;
      r = random(255);
      g = random(255);
      b = random(255);
    }
    pop();
}


    push();
    fill(0, 150);         // translucent black box
    noStroke();
    rect(10, 10, 130, 30); // background box
    fill(255);
    textAlign(LEFT, CENTER);
    textSize(16);
    text('Mode: ' + currentMode, 15, 25);
    pop();
}


function eighties() {
  eightiesOn = !eightiesOn;
  if (eightiesOn) {
    ninetiesOn = false;
    tensOn = false;
    funOn = false;
    currentMode = '1980s';
  } else {
    currentMode = 'None';
  }
}

function nineties() {
  ninetiesOn = !ninetiesOn;
  if (ninetiesOn) {
    eightiesOn = false;
    tensOn = false;
    funOn = false;
    currentMode = '1990s';
  } else {
    currentMode = 'None';
  }
}

function tens() {
  tensOn = !tensOn;
  if (tensOn) {
    eightiesOn = false;
    ninetiesOn = false;
    funOn = false;
    currentMode = '2010s';
  } else {
    currentMode = 'None';
  }
}

function fun() {
  funOn = !funOn;
  if (funOn) {
    eightiesOn = false;
    ninetiesOn = false;
    tensOn = false;
    currentMode = ':p';
  } else {
    currentMode = 'None';
  }
}