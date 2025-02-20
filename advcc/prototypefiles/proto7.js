let font;
const chosen = "scatter";
let textPoints = [];
function preload() {
  font = loadFont("../Kablammo-Regular.ttf"); 
}

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  pointArray = font.textToPoints(chosen, height/2-125, width/2, 60, {sampleFactor: 0.5,});
  
  for(let i = 0; i < pointArray.length; i++) {
    textPoints.push(new Thorns(pointArray[i].x, pointArray[i].y));
  }
  
//   console.log(textPoints);
}

function draw() {
  background(0);
  fill(255);
  for (let i = 0; i < textPoints.length; i++) {
    textPoints[i].update();  
    textPoints[i].display();
  }
}

class Thorns {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos; 
    //keep starting position 
    this.ogx = xPos;
    this.ogy = yPos; 

    //need to store random value of sizes
    this.sizex = 1;
    this.sizey = 1;
  }
  
  update() {
    let distFromMouse = dist(mouseX, mouseY, this.x, this.y); 
    if(distFromMouse < 15){
      this.x = random(mouseX - 30, mouseX + 30);
      this.y = random(mouseY - 30, mouseY + 30);
      this.sizex = random(1,2);
      this.sizey = random(1,2);
    } 
    // else{
    //     this.sizex = 1;
    //     this.sizey = 1;
    // }
  }

  display() {
    rect(this.x, this.y, this.sizex, this.sizey); 
    // for (let pt of textPoints) {
    //     wiggle(pt);
    //     vertex(pt.x, pt.y);
    //   }
}
  
  reset() { //reset = set current x/y vals to the og
    this.x = this.ogx;
    this.y = this.ogy;
  }
}

function mousePressed() {
    for (let i = 0; i < textPoints.length; i++) {  
      textPoints[i].reset();
  }
}

// function wiggle(pt) {
//     // console.log(sin(pt.x));
//     let tempo = Date.now() / 1000.0;
  
//     stroke((pt.x + pt.y) % 360, 90, 80);
//     const x = random(-2, 2);
//     const y = random(-2, 2);
//     line(pt.x, pt.y, pt.x + x, pt.y + y);
//     pt.x += x;
//     pt.y += y;
//   }


