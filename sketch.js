var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(400,650,200,20);
	box1.shapeColor="red";

	box2=createSprite(310,590,20,100);
	box2.shapeColor="red";

	box3=createSprite(490,590,20,100);
	box3.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	//World.add(world, packageBody);

	//box1=Bodies.rectangle(400,650,200,20.{isStatic:true});
	

	//Create a Ground
	box1 = Bodies.rectangle(300, 630, 500, 20 , {isStatic:true} );
	 World.add(world, box1);
	 
	 box2 = Bodies.rectangle(200, 600, 20, 500 , {isStatic:true} );
	 World.add(world, box2);
	 
	 box3 = Bodies.rectangle(485, 630, 20, 500, {isStatic:true} );
 	World.add(world, box3);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
    
  }
}



