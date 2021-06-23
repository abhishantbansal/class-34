const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = false

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  r1 = new rock(900,300,100,100)

  wag1 = new wagon(400,350,80,80)
  wag2 = new wagon(520,350,80,80)
  wag3 = new wagon(640,350,80,80)

  c1 = new SlingShot(wag1.body,wag2.body);
  c2 = new SlingShot(wag2.body,wag3.body)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  r1.show()
  //ground.show()
  wag1.show()     //separating axis theory
  wag2.show()
  wag3.show()
  c1.show()
  c2.show()
     
     var ab = Matter.SAT.collides(wag3.body, r1.body)
  if(ab.collided) {
    flag = true
   }
  if(flag){
    textSize(20)
    text("CRASH",300,100)
    crashSound.play()
  }
  }

  function keyPressed(){
    if(keyCode===RIGHT_ARROW){
      Matter.Body.applyForce(wag3.body,wag3.body.position,{x:0.3,y:0})
      trainSound.play();
    }
  }

  
