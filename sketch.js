
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1350, 680);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperBall=new paper(100,380,80,80);
	
	dustbinImg= createSprite(1080,430,240,240);
	dustbinImg.image=loadImage("dustbingreen.png");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  paperBall.display();

  image(dustbinImg.image,dustbinImg.x,dustbinImg.y,dustbinImg.width,dustbinImg.height) ;

  keyPressed();

  function keyPressed(){
	if(keyDown("UP_ARROW")){

	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-50})
	}
}
if(keyDown("Down_ARROW")){

	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:+1,y:+10})
	}

}