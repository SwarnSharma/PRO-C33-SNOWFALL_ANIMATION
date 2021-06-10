const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var snow=[];
var maxSnow=200;
var santa,santaGif;
var Sound;

function preload(){
  bg=loadImage("bg.jpg");
  santaGif=loadImage("Santa claus.gif");
  Sound=loadSound("Music.mp3");
  }

function setup() {
  createCanvas(1360,600);
  
  engine=Engine.create();
  world= engine.world;

  if(maxSnow==200){
  Sound.play(true);
  }

  if(frameCount % 10 === 0){
  for(var i=0; i<maxSnow; i++){
  snow.push(new Snow(random(-10,1400), random(0,50)));
  }
}

  santa=createSprite(-200,540);
  santa.addImage(santaGif);
  santa.velocityX=2;
}

function draw() {
  background(bg);  
  Engine.update(engine);


  for(var i = 0;i < maxSnow; i++){
    snow[i].display();
    snow[i].changePosition();
    }    

    if(santa.x>1480){
      santa.x=-200;
    }
  
  drawSprites();

}