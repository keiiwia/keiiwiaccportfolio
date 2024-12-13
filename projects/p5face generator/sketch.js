let x = 1;
let m = 1;
var changeDirection;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  changeDirection = false;
  // frameRate(50);

/*
function mouseClicked(){
  hue = random(255);
  sat = random(255);
  bri = random(255);
  
  
function mouseDragged(){
  fill(hue,sat,bri);
  rect(mouseX,mouseY,50,50);
}
*/ //scrapped
  
}

function draw() {
  //console.log(mouseX, mouseY);
  noStroke();
  frameRate(25);
  
  let bgColor= map(mouseX, 0, width, 0, 100);
  background(150 + bgColor, 10 + bgColor, 200 - bgColor);
  
  
  let w = mouseX/2 + 100;
  let h = mouseY/2 + 100;
  let wdiv = w/4;
  let hdiv = h/4;

  
  //rand eye + skin color
  let eyeColor = color(random(40, 150), random(60, 150), random(60,150));
  let skinColor = color(random(220, 255), random(110, 150), random(100, 160));
  let savedEyeColor = eyeColor; 
  let savedSkinColor = skinColor;
  
  //face
    fill(255, 179, 97);
    circle(width/2, height/2, w, h);
  
  // apples of cheeks
   push();
      translate (width/7, height/9);
      fill(savedSkinColor);
      circle(width/2 + x, height/2, wdiv, hdiv);
      if (x>width/10){
        changeDirection = true;
      } else if (x>=0){
        changeDirection = false;
      }
      
      if (x<=0 && changeDirection == true){
        x = x-1
      } else if (changeDirection == false){
        x = x+1
      }
  
  
    pop();
  
    push();
      translate (-width/7, height/9);
      fill(savedSkinColor);
      circle(width/2 + m, height/2, wdiv, hdiv);
      if (m < -width/10){
        changeDirection = true;
      } else if (m <=0){
        changeDirection = false;
      }
      
      if (m <=0 && changeDirection == true){
        m = m+1
      } else if (changeDirection == false){
        m = m-1
      }
  
    pop();
  
  
  //eyes
    //draw whites of eyes
      let leftX = 150;
      let leftY = 200;
      // calculate angle between left eye and mouse
      let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  
  
      let rightX = 250;
      let rightY = 200;
      // calculate angle between right eye and angle
      let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
  
    push();
      translate(leftX, leftY);
      fill(255);
      ellipse(0, 0, 50 + w/5, 50 + h/5);
    pop();
  
     push();
      translate(rightX, rightY);
      fill(255);
      ellipse(0, 0, 50 + w/5, 50 + h/5);
    pop();
  
    //draw pupils
      push();
        translate(leftX, leftY);
        rotate(leftAngle);
        if (mouseIsPressed){
          fill(savedEyeColor);
        } else {
          fill(0);
        }
        ellipse(12.5, 0, 25 + wdiv/3, 25 + hdiv/3);
      pop();
  
      push();
        translate(rightX, rightY);
        rotate(rightAngle);
        if (mouseIsPressed){
          fill(savedEyeColor);
        } else {
          fill(0);
        }
        ellipse(12.5, 0, 25+wdiv/3, 25+hdiv/3);
      pop();

}

