/* read reflection.txt file for more information */

//mug/text vars
let ratio;
let size;
let volumeT = ' ';
let mugV1, mugV2, mugV3, mugV4;
let mugH1, mugH2, mugH3, mugH4, mugR1, mugR2, mugR3, mugR4 = 0;
let cGrams = '';
let cStyle = ' ';
let cStyleT = ' ';
let offset = 7;
var script;
var sans;
let boxW = 0.1;
let mugF = 51;
let mugO = 51;

//clock/time vars
let instantctimer;
// let hours = hour();
// let mins = minute();
// let secs = second();

function preload() {
  script = loadFont('ReenieBeanie-Regular.ttf');
  sans = loadFont('AfacadFlux-VariableFont_slnt,wght.ttf');
  // interMed = loadFont('Inter-Medium.ttf');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  frameRate(60);
}

function draw() {
  background(239, 176, 125);
  noStroke();
  fill(0);
  coffeeType();
  vol();
  
  //mouse
  stroke(0);
  strokeWeight(1);
  stroke(68, 31,0);
  noFill();
  circle(mouseX, mouseY, 60);
  strokeWeight(3);
  stroke(68, 31,0);
  point(mouseX, mouseY);
  info();
  
  //overlaying text
  push();
    blendMode(OVERLAY);
    textSize(60);
    fill(0, 70);
    textFont(sans);
    textAlign(CENTER);
    text('thecoffeeclock', width/2, height/2 +200);
    textSize(30);
    textFont(script);
    text('how long it takes for me to make my coffees', width/2, height/2 +225);
  pop();
  
  // console.log(mouseX, mouseY);

}

function mousePressed() {
  stroke(0);
  strokeWeight(1);
  cGrams = round(size * ratio) + 'mgs of caffeine';
  mugV1 = 0.25 * size * 0.25;
  mugV2 = 0.4 * size * 0.25;
  mugV3 = 0.45 * size * 0.25;
  mugV4 = 0.2 * size * 0.25;
  mugR1 = random(mugV1 / 2 - 10, mugV1 / 2 + 10);
  mugH1 = random(mugV1 / 2 - 10, mugV1 / 2 + 10);
  mugR2 = random(mugV2 / 2 - 10, mugV2 / 2 + 10);
  mugH2 = random(mugV2 / 2 - 10, mugV2 / 2 + 10);
  mugR3 = random(mugV3 / 2 - 10, mugV3 / 2 + 10);
  mugH3 = random(mugV3 / 2 - 10, mugV3 / 2 + 10);
  mugR4 = random(mugV4 / 2 - 10, mugV4 / 2 + 10);
  mugH4 = random(mugV4 / 2 - 10, mugV4 / 2 + 10);
  cStyleT = cStyle;
  volumeT = size + 'ml '; //ml should turn into time
}

function mug(hd1, hd2, hd3, hd4, wd1, wd2, wd3, wd4) {
  //draw mug
  strokeWeight(9);
  strokeJoin(ROUND);
  stroke(112,53,5,95);
  
  beginShape();
  vertex(width / 2 - wd4, height / 2 - hd3 - hd4); //1st dot
  vertex(width / 2 - wd3, height / 2 - hd3); //point 2, connective line
  vertex(width / 2 - wd2, height / 2); //triangle, point3, connects to 1/2
  vertex(width / 2 - wd1, height / 2 + hd2); //quad, point 4, conn to 1/2/3
  vertex(width / 2 - wd4, height / 2 + hd1 + hd2); //adds another point, always anchored to the bottom
  vertex(width / 2 + wd4, height / 2 + hd1 + hd2); //other bottom point
  vertex(width / 2 + wd1, height / 2 + hd2); //mirrors point 4
  vertex(width / 2 + wd2, height / 2); //mirrors point 3
  vertex(width / 2 + wd3, height / 2 - hd3); //mirrors point 2
  vertex(width / 2 + wd4, height / 2 - hd3 - hd4); //mirrors point 1
  endShape(CLOSE);
  
  
  strokeWeight(4);
  noFill();
}

function info() {
  //Showing the cup and accompanying text
  mug(mugH1, mugH2, mugH3, mugH4, mugR1, mugR2, mugR3, mugR4);
  noStroke();
  fill(68, 31,0);
  textSize(14);
  textAlign(RIGHT);
  textFont(sans);
  text(cStyleT, width / 2 - 12, height - 30);
  textAlign(CENTER);
  
  textFont(sans);
  text('—', width / 2, height - 30);
  
  textFont(script);
  textAlign(LEFT);
  text(cGrams, width / 2 + 12, height - 30);

}

function vol() {
  size = 1000;
  fill(68, 31,0);
  let textwidth = textWidth(size + 'ml') / 2;
  textSize(16);
  textFont(script);
  textAlign(CENTER);
  text('16' + 'oz', mouseX - textwidth +20, mouseY + 20);

}

function coffeeType() {
  //type of coffee
  textFont(sans);

  if ((mouseX > 0) && (mouseX < 100) && (mouseY > 0) && (mouseY < height)) {
    //bg box
    push();
      stroke(112,53,5,90);
      strokeWeight(1);
      fill(170,101,45);
      rect(0, 0, 100, height);
    pop();
   push();
      blendMode(OVERLAY);
      fill(0, 50);
      rect(0,0, 100, second()*7.627118644067797);
    pop();
    fill(0);
    noStroke();
    cStyle = "Instant Coffee";
    let t = 'INSTANT COFFEE';
    let tw = textWidth(t) / 2;
    fill(68,31,0);
    text('INSTANT COFFEE', mouseX - tw, mouseY - 10);
    ratio = 1 / 17;

    
  } else if ((mouseX > 100) && (mouseX < 200) && (mouseY > 0) && (mouseY < height)) {
    //bg box
      push();
      stroke(112,53,5,90);
      strokeWeight(1);
      fill(255, 183, 123);
      rect(100, 0, 100, height);
    pop();
    
    push();
      blendMode(OVERLAY);
      fill(0, 50);
      rect(100,0, 100, second()*5);
    pop();
    
    fill(0);
    noStroke();
    cStyle = "Latte";
    let t = 'LATTE';
    let textwidth = textWidth(t) / 2;
    fill(68, 31,0);
    text('LATTE', mouseX - textwidth, mouseY - 10);
    ratio = 1 / 8;
   
    
  } else if ((mouseX > 200) && (mouseX < 300) && (mouseY > 0) && (mouseY < height)) {
    //bg box
     push();
      stroke(112,53,5,90);
      strokeWeight(1);
      fill(150, 72, 8);
      rect(200, 0, 100, height);
    pop();
    
    push();
      blendMode(OVERLAY);
      fill(0, 50);
      rect(200,0, 100, hour()*5.627118644067797);
    pop();
    
    fill(0);
    noStroke();
    cStyle = "Cold Brew";
    let t = 'COLD BREW';
    let tw = textWidth(t) / 2;
    fill(68, 31,0);
    text('COLD BREW', mouseX - tw, mouseY - 10);
    ratio = 1 / 4;
    
  } else if ((mouseX > 300) && (mouseX < 400) && (mouseY > 0) && (mouseY < height)) {
    //bg box
    push();
      stroke(112,53,5,90);
      strokeWeight(1);
      fill(173, 102, 43);
      rect(300, 0, 100, height);
    pop();
    
    push();
      blendMode(OVERLAY);
      fill(0, 50);
      rect(300,0, 100, second()*3.14);
    pop();
    
    fill(0);
    noStroke();
    cStyle = "Cortado";
    let t = 'CORTADO';
    let textwidth = textWidth(t) / 2;
    fill(68, 31,0);
    text('CORTADO', mouseX - textwidth, mouseY - 10);
    ratio = 1 / 5.5;
    
  } else if ((mouseX > 400) && (mouseX < 500) && (mouseY > 0) && (mouseY < height)) {
    //bg box
    push();
      stroke(112,53,5,90);
      strokeWeight(1);
      fill(209,137,78);
      rect(400, 0, 100, height);
    pop();
    
    push();
      blendMode(OVERLAY);
      fill(0, 50);
      rect(400,0, 100, second()*1.5);
    pop();
    
    fill(0);
    noStroke();
    cStyle = "Cappuccino";
    let t = 'CAPPUCCINO';
    let textwidth = textWidth(t) / 2;
    fill(68, 31,0);
    text('CAPPUCCINO', mouseX - textwidth, mouseY - 10);
    ratio = 1 / 6.8;

  } else if ((mouseX > 500) && (mouseX < 600) && (mouseY > 0) && (mouseY < height)) {
    //bg box
    push();
      stroke(112,53,5,90);
      strokeWeight(1);
      fill(137,82,37);
      rect(500, 0, 100, height);
    pop();
    
    push();
      blendMode(OVERLAY);
      fill(0, 50);
      rect(500,0, 100, second()*10);
    pop();
    
    fill(0);
    noStroke();
    cStyle = "Mocha";
    let t = 'MOCHA';
    let textwidth = textWidth(t) / 2;
    fill(68, 31,0);
    text('MOCHA', mouseX - textwidth, mouseY - 10);
    ratio = 1 / 6.5;

  }
}