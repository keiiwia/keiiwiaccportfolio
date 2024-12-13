function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  setLineDash([6, 6]);
  
  function setLineDash(list) {
  drawingContext.setLineDash(list);
  }
  
}

function draw() {
  background(0);
  //console.log(mouseX,mouseY);
  noStroke();
  
  push();
  let gradient = drawingContext.createLinearGradient(
    350, 0, 100, 400);
    gradient.addColorStop(0, color(0,0,0));
    gradient.addColorStop(1, color(40,51,54, 90));
  
  drawingContext.fillStyle = gradient;
  
  rect(0, 0, width, height);
  pop();
  
  //chain/necklace
  push();
  noFill();
  strokeWeight(7);
  stroke(137, 138, 140);
  curve(100, 70, 0, 50, 105, 160, 160, 140);
  pop();
  
  push(); //right hand side (lighting)
  noFill();
  strokeWeight(7);
  stroke(161, 160, 156);
  curve(200, 170, 420, 20, 275, 160, 160, 140);
  pop();
  
  //big flower petals
 push();
    translate(width/2, height/2);
      //noFill();
    fill(137, 138, 140);
    ellipse (-50, -50, 100, 100);
  pop();
  
  
  push();
    translate(width/2, height/2);
    //noFill();
    rotate(80);
    fill(137, 138, 140);
    ellipse (-50, -40, 100, 100);
  pop();

  
  push();
    translate(width/2, height/2);
      //noFill();
    rotate(150);
    fill(137, 138, 140);
    ellipse (-50, -50, 100, 100);
  pop();
  
  push();
    translate(width/2, height/2);
      //noFill();
    rotate(220);
    fill(137, 138, 140);
    ellipse (-50, -50, 100, 100);
  pop();
  
  push();
    translate(width/2, height/2);
      //noFill();
    rotate(290);
    fill(137, 138, 140);
    ellipse (-50, -50, 100, 100);
  pop();
  
  
 //inner petals
 push();
    translate(width/2, height/2);
      //noFill();
    fill(193, 193, 195);
    ellipse (-50, -50, 70, 70);
  pop();
  
  
  push();
    translate(width/2, height/2);
    //noFill();
    rotate(80);
    fill(193, 193, 195);
    ellipse (-50, -40, 70, 70);
  pop();

  
  push();
    translate(width/2, height/2);
      //noFill();
    rotate(150);
    fill(193, 193, 195);
    ellipse (-50, -50, 70, 70);
  pop();
  
  push();
    translate(width/2, height/2);
      //noFill();
    rotate(220);
    fill(193, 193, 195);
    ellipse (-50, -50, 70, 70);
  pop();
  
  push();
    translate(width/2, height/2);
      //noFill();
    rotate(290);
    fill(193, 193, 195);
    ellipse (-50, -50, 70, 70);
  pop();
  
  //lighting
  push();
  blendMode(OVERLAY);
  fill(136,230,255, 80);
  ellipse(260, 130, 100, 100);
  noFill();
  pop(); 
  
  push();
  blendMode(OVERLAY);
  fill(136,230,255, 80);
  ellipse(300, 200, 100, 100);
  noFill();
  pop(); 

  push();
  blendMode(OVERLAY);
  fill(136,230,255, 80);
  rotate(-10);
  ellipse(150, 200, 10, 80);
  noFill();
  pop(); 
  
  push();
  blendMode(OVERLAY);
  fill(136,230,255, 80);
  rotate(-15);
  ellipse(150, 200, 20, 80);
  noFill();
  pop();

  push();
  blendMode(MULTIPLY);
  fill(65,65,113, 100);
  rotate(-20);
  translate(-100, 80);
  ellipse(150, 200, 160, 200);
  noFill();
  pop();
  

  
  //fx
  push();
    translate(200, 200);
    //translate(width/2, height/2);
    fill(295, 290, 230, 240);
    rotate(200);
    for (var i =0; i < 10; i++){
      translate(100, 10);
      rect(20 + (i) ,-20 + (i), 10,10);
      rotate(20 + i);
      rect(20 + (i * 2) ,-20 + (i * 3), 10,10);
     
  pop();
      
  
  // push();
  // blendMode(OVERLAY);
  // fill(253, 197, 23);
  // ellipse(160, 130, 10, 70);
  // noFill();
  // pop();   

   
//   //poly-pentagon?
//   push();
//   translate(width * 0.8, height * 0.5);
//   polygon(0, 0, 70, 7);
//   pop();
// }

// function polygon(x, y, radius, npoints) {
//   let angle = TWO_PI / npoints;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius;
//     let sy = y + sin(a) * radius;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
  
 }
}