const word = "THORNY";
let font;
let letterPoints;
let fontSize;

function preload() {
  font = loadFont("../Jacquard12-Regular.ttf");
}

function setup() {
  colorMode(HSB);
  createCanvas(600, 400);
  background(0);

  letterPoints = font.textToPoints(word, width/2 -200, height/2, 90);
}

function draw() {
    
    for(let i =0; i< letterPoints.length; i++){
        const distance = dist(letterPoints[i].x, letterPoints[i].y, mouseX, mouseY);
        if(distance < 20){
            beginShape();
            for (pt of letterPoints) {
              wiggle(pt);
              vertex(pt.x, pt.y);
            }
            endShape();
        }
    }
        
}


function wiggle(pt) {
  // console.log(sin(pt.x));
  let tempo = Date.now() / 1000.0;

  stroke((pt.x + pt.y) % 360, 90, 80);
  const x = random(-1, 1);
  const y = random(-1, 1);
  line(pt.x, pt.y, pt.x + x, pt.y + y);
  pt.x += x;
  pt.y += y;
}