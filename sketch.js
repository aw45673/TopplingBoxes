const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine, world,ground,box1,box2


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box (400,200,50,50);
  box2=new Box (425,100,50,70);
  ground=new Ground (400,390,800,20);
}

function draw() {
  background(0); 
  Engine.update(engine); 

  box1.display()
  box2.display()
  ground.display()
}