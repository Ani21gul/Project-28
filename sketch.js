var paper , paperIMG, paperBody;
var leftSide, rightSide, bottomSide, dustbin;
var dustbinBody;
var ground;
var launcher;
var gameState = "OnSling";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	dustbin = loadImage("dustbingreen.png");
	paperIMG = loadImage("paper.png");	
}

function setup() {
	createCanvas(1350, 550);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,40);	

	leftSide = new Sides(1085,450,20,150);
	rightSide = new Sides(1215,450,20,150);
	bottomSide = new Sides(1150,530,150,20);
	
	dustbinBody = createSprite(1150, 459, 20, 150);
	dustbinBody.addImage(dustbin);
	dustbinBody.scale = 0.6

	launcher = new Launcher(paper.body, {x: 200, y: 100});


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(width/2, 545, width, 10);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red");
  text(mouseX,50,50);
  text(mouseY,50,70);

  paper.display();
  leftSide.display();
  rightSide.display();
  bottomSide.display();
  ground.display();
  
  
  drawSprites();
 
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    launcher.fly();
    gameState = "launched";
}



