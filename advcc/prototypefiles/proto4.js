let font;
let word = "thorny"; 
let points;

function preload() {
    font = loadFont('../Jacquard12-Regular.ttf')
}

function setup() {
    createCanvas(400, 400)
    points = font.textToPoints(word, width/2-125, height/2, 100, {sampleFactor: 0.3})
    // console.log(pts) 
    stroke(255)
    strokeWeight(2)
    noFill();
}

function draw() {
    background(0)
    const distance = dist(mouseX, mouseY, width/2, height/2)
    const angle = atan2(mouseY-height/2, mouseX-width/2)

  

    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        push();
        translate(p.x, p.y);
        rotate(angle);
        line(-distance, -distance, +distance, +distance);
        pop();
    }
}