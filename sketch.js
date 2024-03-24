//back ground star objects.
class star {
  constructor(x,y,z,myB) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.myB = myB;
  }
}
let stars = [];
let numStars = 150;

//textures
function preload() {
  img = loadImage('fake_earth.jfif');
  img2 = loadImage('planet2.jfif');
  img3 = loadImage('planet.jfif');
  img4 = loadImage('planet3.jfif');
}

function setup() {
  createCanvas(1100, 700, WEBGL);
  camera(0, 0,280, 0, 0, 0, 0, 1, 1);
  setStars();
  backDrop();
}

function draw() {
  background(0);
  
  //background star location correction
  push();
  translate(-150,-120);
  backDrop();
  pop();
 
  //7,207,213; 234,55,1; 255,249,209; 
  pointLight(255,249,209, sin(frameCount * 0.002)*300,-100,cos(frameCount * 0.002)*-100);
  
  rotateX(0.8);
  rotateY(1.1);
  rotateZ(1.1);
  
  //planet
  push();
    translate(0,0,0);
    rotateX(frameCount * 0.03);
    ambientLight(30,30,30);
    texture(img3);
    sphere(35);
  pop();

  //moon one
  push();
  rotateX(frameCount * 0.01);
  translate(0,90,120);
  ambientLight(40,30,0);
  translate(0,0,0);
  rotateX(frameCount * 0.023);
  texture(img2);
  sphere(4.5);
  pop();
  
  //moon two
  push();
  rotateX(frameCount * 0.01);
  translate(0,-100,80);
  ambientLight(30,20,20);
  translate(0,0,0)
  rotateX(frameCount * 0.017);
  texture(img3);
  sphere(4);
  pop();
  
  //moon three
  push();
  rotateX(frameCount * 0.01);
  translate(30,80,-80);
  ambientLight(60,60,60);
  texture(img);
  translate(0,0,0)
  rotateX(frameCount * 0.02);
  sphere(8);
  pop();
}

//used to set up background of stars.
function setStars() {
  for(let i = 0 ; i < numStars; i++){
        stars.push(new star(random(0,width),random(0,height),-100,random(0.8,1.1)));
  }
}

//used to draw background star array.
function backDrop() {
  stroke(255);
  for(let i = 0; i < numStars; ++i) {
    strokeWeight(stars[i].myB);
    point(stars[i].x,stars[i].y,stars[i].z);
  }
  noStroke();
}