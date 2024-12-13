function setup() { 
  createCanvas(windowWidth, windowHeight,WEBGL);
  frameRate(30);
} 

function draw() { 
  background(0);
  orbitControl();
  rotation();
  torus1();
  torus2();
  
}

function rotation(){
  if (frameCount == 10){
    rotateX(frameCount * -0.01);
  } else{
      rotateY(frameCount * 0.01);
  }
 
}

function torus1(){
  for (let i=0; i < 100; i++){
    fill(mouseX -i*10, mouseY- i*15, i*10)  
    torus(15 * i,15);
    // torus-color(mouseX-i*10, mouseY-i*15, i * 10);
    // rotateY(frameCount * 0.01);
  }
}

function torus2(){
  for (let i=0; i < 100; i++){
    fill(mouseX -i*20, mouseY- i*10, i*10-100)  
    torus(15 * i,15);
     rotateX(frameCount * -0.01);
  }
}