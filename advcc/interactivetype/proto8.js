let font;
let points;
const chosen = "ANxIETY";
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
    background(0, 0, 0, 50); 

    for(let i = 0; i < textPoints.length; i++){
        textPoints[i].update();
        textPoints[i].display();
    }
}

class Color{
    constructor (r, g, b){

        this.pos = new p5.Vector(r, g); //position

        this.r = r;
        this.g = g;
        this.b = b;

        this.a = 10;
    }

    update(){
        // const distance = dist(this.x, this.y, mouseX, mouseY);
        // if(distance < 50){
        //     this.r += 2;
        //     this.g += 2;
        //     this.b += 2;
        //     this.a += 1;
        // }

        const distance = dist(this.pos.x, this.pos.y, mouseX, mouseY); //gather the info abt the dist and direction these are pushed
        // const distance = dist(this.pos, this.mousePos)

        let mousePos = createVector(mouseX, mouseY);

        let posCopy = createVector(this.pos.x, this.pos.y);

        let direction = posCopy.sub(mousePos.x, mousePos.y) //diff btw position stored and the position of the mouse == 

        direction.normalize(); //gives direction with magnitude of 1; divides each vector "coord"/property with the magnitude itself
        //great for 2d space
        
        //
        
        if(distance < 50){
            this.r += 2;
            this.g += 2;
            this.b += 2;
            this.a += 1;
            
            

        } else {
            this.r -= 0.3;
            this.g -= 0.3;
            this.b -= 0.3;
            this.a -= 0.2;

            // this.pos.sub(direction); //only if you want the points to follow the mouse
        }
    }

    display(){
        noStroke();
        // fill(this.r, this.g, this.b, this.a);
        fill(this.r, this.g, this.b, 255);

        // this.x += random(-2,2);
        // this.y += random(-2,2);
        // circle(this.x, this.y, random(1,2));

        this.pos.add(random(-2,2), random(-2,2));

        circle(this.pos.x, this.pos.y, random(1,2));
    }
}






