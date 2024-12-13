// stuff on my desk... 
//based on a dear data project i worked on previously

//arrays 

let x=50 //size
let y=50
var timestamp = 0;
var index = 0;

var movement1X = [290, 360, 412, 267 ,140];
var movement1Y = [100, 170, 280, 484, 198];

var movement2X = [140, 330, 400, 179 ,183];
var movement2Y = [170, 127, 490, 358, 278];

var movement3X = [180, 424, 336, 171, 206];
var movement3Y = [220, 236, 362, 195, 274];

var movement4X = [165, 443, 364, 189, 148];
var movement4Y = [165, 343, 429, 348, 280];

var movement5X = [112, 463, 427, 136, 148];
var movement5Y = [260, 180, 444, 377, 280];

var movement6X = [170, 486, 338, 231, 158];
var movement6Y = [180, 376, 396, 443, 227];

var movement7X = [120, 367, 386, 83, 165];
var movement7Y = [120, 120, 420, 357, 155];


var day1X=[];
var day1X=[];

var day4X=[];
var day4Y=[];

var day7X=[];
var day7Y=[];

var day10X=[];
var day10Y=[];


let randomMvt;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomMvt = random(10, 60);
}

function draw() {
  background(237, 227, 218);
  console.log(mouseX,mouseY);
    
  //ellipse loop
       for(let i=0;i<500;i+=44){
       noFill()
       stroke(0)
       strokeWeight(1)
       ellipse(300,300,i,i)
         }

  //text
      fill(0)
      textSize(15);
      textAlign(CENTER, CENTER);
      text("day 1", width/3+25, 45); 
      text("day 4", 565, height/2);
      text("day 7", width/3 + 25, 560);
      text("day 10", 30, height/2);
      
  
      push();
      textAlign(RIGHT);
      textSize(20);
      text("key", width - 100, 25);
      textSize(15);
      text("larger = more space taken up", width-100, 45);
      text("greener color = less numerous", width-100, 59);
      pop();
  
      push();
      textAlign(RIGHT);
      textSize(20);
      text("items of note", width - 100, 125);
      textSize(15);
      text("technology", width-100, 145);
      text("art supplies", width-100, 159);
      text("makeup/skincare", width-100, 172);
      pop();
  
  //monitor (constant)
    noStroke();
    stroke(0, 94, 9);
    strokeWeight(0.5);
    fill(0, 94, 9, 98);
    ellipse(movement1X[index], movement1Y[index], 80, 80);
        if (millis() - timestamp > 1000) {
        index++;
        timestamp = millis();

        if (index > movement1X.length - 1){
            index = 0;
          }
        }
   
  
  //tech stuff
       
    stroke(36, 148, 0);
    strokeWeight(0.5);
    fill(36, 148, 0, 98);
   ellipse(movement2X[index], movement2Y[index], 70, 70);
  if (millis() - timestamp > 1000) {
        index++;
        timestamp = millis();
    
        if (index > movement2X.length - 1){
        index = 0;
        }
  }
  
  
  
  
    //sketchbooks/notebooks
    stroke(67, 168, 35);
    strokeWeight(0.5);
    fill(67, 168, 35, 98);
    ellipse(movement3X[index], movement3Y[index], 60, 60);
    if (millis() - timestamp > 1000) {
          index++;
          timestamp = millis();

          if (index > movement3X.length - 1){
          index = 0;
              }
              }
  
  //pens/art supplies
        stroke(206, 237, 83);
        strokeWeight(0.5);
        fill(206, 237, 83, 98);
       ellipse(movement4X[index], movement4Y[index], 50, 50);
      if (millis() - timestamp > 1000) {
            index++;
            timestamp = millis();

            if (index > movement4X.length - 1){
            index = 0;
                }
                }
  
   //makeup stuff
        stroke(178, 184, 4);
        strokeWeight(0.5);
        fill(178, 184, 4, 98);
       ellipse(movement5X[index], movement5Y[index], 40, 40);
      if (millis() - timestamp > 1000) {
            index++;
            timestamp = millis();

            if (index > movement5X.length - 1){
            index = 0;
                }
                }
      fill(245, 218, 69, 98);
      ellipse(movement5X[index]+20, movement5Y[index]+25, 20, 20);
      if (millis() - timestamp > 1000) {
            index++;
            timestamp = millis();

            if (index > movement5X.length - 1){
            index = 0;
                }
                }
  
  

   //accessories (hairties, rings, jewelry, etc)
        stroke(97, 161, 8);
        strokeWeight(0.5);    
        fill(97, 161, 8, 98);
       ellipse(movement6X[index] + randomMvt, movement6Y[index] + randomMvt, 30, 30);
      if (millis() - timestamp > 1000) {
            index++;
            timestamp = millis();

            if (index > movement6X.length - 1){
            index = 0;
                }
                }
  
  
   //misc. items
        stroke(252, 186, 3);
        strokeWeight(0.5);
        fill(252, 186, 3, 98);
       ellipse(movement7X[index], movement7Y[index], 20, 20);
      if (millis() - timestamp > 1000) {
            index++;
            timestamp = millis();

            if (index > movement7X.length - 1){
            index = 0;
                }
                }
  
       ellipse(movement7X[index] + randomMvt , movement7Y[index] + randomMvt, 55, 55);
      if (millis() - timestamp > 1000) {
            index++;
            timestamp = millis();

            if (index > Day7X.length - 1){
            index = 0;
                }
                }
}