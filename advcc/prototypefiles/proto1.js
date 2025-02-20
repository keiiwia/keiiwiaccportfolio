let font;
let pointArray;
let fadePoints = [];
const word = "crossfade"

function preload(){
    font = loadFont("../BadeenDisplay-Regular.ttf")
}



function setup(){
    createCanvas(600, 400).parent("challenge");
    rectMode(CENTER);
    pointArray = font.textToPoints(word, 20, 250, 100, { sampleFactor: 0.2 });
    const alphaval = random(0,255);
    for (let i = 0; i < pointArray.length; i++) {
        fadePoints.push(new fadePoint(pointArray[i].x, pointArray[i].y));

    }
}

function draw(){
    background(0);
    for (let i = 0; i < fadePoints.length; i++) {
        fadePoints[i].update();
        fadePoints[i].display();
    }
}

class fadePoint {
    constructor(xPos, yPos){
        this.x = xPos;
        this.y = yPos;
        this.size = 2;

        // this.a = random(0,255);
        this.a = 255;
        
    }

    update(){
        const distance = dist(this.x, this.y, mouseX, mouseY);
        if(distance < 50){ //if mouse is within 50 units:
            if(this.a > 0){
                this.a -= 6; //fade to black
            } 
            // else if (this.a == 0 || this.a < 0){
            //     this.a += 6;
            // }
        if (this.a < 0){ //an attempt to bring it back to white... but for some reason it doesnt work
            this.a += 6;
        }
        }
        
    }

    display(){ //styling
        fill(255, 255, 255, this.a);
        noStroke();
        rect(this.x, this.y, this.size);
    }
}