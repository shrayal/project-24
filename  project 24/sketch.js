const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var paper;
 var d1,d2,d3;
 var ground;
 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	d1=createSprite(500,600,200,20)
	d1.shapeColor=("red")
	d2=createSprite(400,560,20,100)
	d2.shapeColor=("red")
	d3=createSprite(600,560,20,100)
	d3.shapeColor=("red")
   
	paper=new Paper(200,600,50)
	ground=new Ground(400,600,700,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display()
  ground.display()

  drawSprites();
 
}
function keyPressed(){
 if(keyCode===UP_ARROW){
	 Matter.Body.apllyForce(paper.Body,paper.Body.position,{x:84,y:-84})
 }
}