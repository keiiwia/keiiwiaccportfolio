let font;
let points;
const chosen = "SCATTER";
let textPoints = [];

function preload() {
  font = loadFont("../Kablammo-Regular.ttf"); 
}

function setup() {
  createCanvas(400, 400);
  background(0);
  points = font.textToPoints(chosen, width/2 -100, height/2, 50, { sampleFactor: 0.6});

  for (let i = 0; i < points.length; i++){
    textPoints.push(new Color(points[i].x, points[i].y, points[i].y));
  }
}

function draw(){
    for(let i = 0; i < textPoints.length; i++){
        textPoints[i].update();
        textPoints[i].display();
    }
}

class Color{
    constructor (r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;

        this.a = 10;
    }

    update(){
        const distance = dist(this.r, this.g, mouseX, mouseY);
        if(distance < 50){
            this.r += 2;
            this.g += 2;
            this.b += 2;
            this.a += 1;
        }
    }

    display(){
        noStroke();
        fill(this.r, this.g, this.b, this.a);
        circle(this.r += random(-2,2), this.g += random(-2,2), random(1,2));
    }
}






