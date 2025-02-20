let font;
let points;
const chosen = "thorny";
let words = "The seed that fell among thorns stands for those who hear, but as they go on their way they are choked by life's worries, riches and pleasures, and they do not mature.";
// let pointArray;
let letters = [];

function preload() {
  font = loadFont("../Jacquard12-Regular.ttf");
}


function setup(){
    createCanvas(400, 400).parent("challenge");
    background(0);
    textAlign(CENTER);
    // pointArray = font.textToPoints(chosen, 20, 150, 135, {sampleFactor: 0.2,});
    letters = words.split("");
}

function draw() {
  background(220);

  let density = map(mouseX, 0, width, 0, 0.5);

  points = font.textToPoints(chosen, 40, 220, 100, {sampleFactor: density, simplifyThreshold: 0,});

  for (let i = 0; i < points.length; i++) {
    fill(0);
    text(letters[i % letters.length], points[i].x, points[i].y);
  }
}
