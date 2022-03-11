const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var backgroundImg;
var ground;
var snow=[]
function preload(){
  backgroundImg=loadImage("snow2.jpg")
}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world;
ground=new Ground(400,380,800,15);


}

function draw() {
  background(backgroundImg); 
  Engine.update(engine)
  if(frameCount%70===0){
    snow.push(new Snow(random(50,400),0,50,50) )
  } 
  for(var i=0;i<snow.length;i=i+1){
    snow[i].display()
  }
  drawSprites();
}