const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var slingShot;

var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16;

function setup() {
  var canvas =  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(400,500,400,10);

 
 block8=new Box(330,235,30,40);
 block9=new Box(360,235,30,40);
 block10=new Box(390,235,30,40);
 block11=new Box(420,235,30,40);
 block12=new Box(450,235,30,40);
 block13=new Box(360,195,30,40);
 block14=new Box(390,195,30,40);
 block15=new Box(420,195,30,40);
 block16=new Box(390,155,30,40);
 
 slingShot= new SlingShot(this.polygon,{x:100,y:200});

 polygon=Bodies.circle(50,200,20);
 World.add(world,polygon);

}



function mouseDragged(){
  Matter.Body.setPosition(this.polygon.Body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
   slingShot.fly();
}

function draw() {
  background(0);  

  Engine.update(engine);

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  ground.display();
  
}

