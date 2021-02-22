 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{



}

function setup() {
	createCanvas(1300, 600);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	bh5=new bh(200,10,40)
     ground3=new Ground  (500,630,1700,20)

	Engine.run(engine);

	console.log(bh5)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  drawSprites();
 
  bh5.display();
  ground3.display();
}



