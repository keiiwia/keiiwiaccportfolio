let font;
let pointArray;
let fadePoints = []; //hiarr?
const word = "crossfade"
// bool mouseMoved = false;
let sample = 0.0001;

function preload(){
    font = loadFont("../BadeenDisplay-Regular.ttf")
}



function setup(){
    let canvas = createCanvas(600, 400).parent("challenge");
    canvas.mouseMoved(incrementSample);
    rectMode(CENTER);
    pointArray = font.textToPoints(word, 20, 250, 100, { sampleFactor: sample });
    for (let i = 0; i < pointArray.length; i++) {
        fadePoints.push(new fadePoint(pointArray[i].x, pointArray[i].y));

    }
}

function draw(){
    background(0);
    // sample.mouseMoved()
    // pointArray = font.textToPoints(word, 20, 250, 100, { sampleFactor: sample });
    // for (let i = 0; i < pointArray.length; i++) {
    //     fadePoints.push(new fadePoint(pointArray[i].x, pointArray[i].y));

    // }

    for (let i = 0; i < fadePoints.length; i++) {
        fadePoints[i].update();
        fadePoints[i].display();
    }
}

function incrementSample(){
    sample += 0.0001;
}

// function mouseMoved(){
//     this.mousemoved = true;
//     sample += 0.0001;
// }

class fadePoint {
    constructor(xPos, yPos){
        this.x = xPos;
        this.y = yPos;
        this.size = 3;

        // this.a = random(0,255);
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.a = 255;

        this.mousemoved = false;
        
    }

    update(){
        const distance = dist(this.x, this.y, mouseX, mouseY);
        if(this.mousemoved = true){ //if mouseMoved funct bool's true:
            sample += 0.0001;
        }

        // pointArray = font.textToPoints(word, 20, 250, 100, { sampleFactor: sample });
    }

    display(){ //styling
        fill(this.r, this.g, this.b, this.a);
        noStroke();
        rect(this.x, this.y, this.size);
    }
}