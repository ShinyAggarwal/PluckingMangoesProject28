
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,ground,stone,boyimage;
var mango1,mango2,mango3,mango4,mango5,mango6
var slingshot;

function preload()
{
	boyimage=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(1000,590);
	ground= new Ground(600,590,1200,10);
	stone = new Stone(230,400,30);
	mango1=new Mango(1000,150,30);
	mango2=new Mango(950,200,30);
	mango3=new Mango(1000,200,30);
	mango4=new Mango(950,250,30);
	mango5=new Mango(1000,250,30);
	mango6=new Mango(1000,350,30);

	slingshot=new Slingshot(stone.body,{x:160,y:395});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  stone.display();
  image(boyimage,200,300,100,400);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingshot.display();
  drawSprites();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:160,y:395})
		slingshot.attach(stone.body);
	}
}

function detectcollision(stoneobject,mangoobject){
	mangoposition=mangoobject.body.position;
	stoneposition=stoneobject.body.position;
	var distance=dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y);
	if(distance<=mangoobject.radius+stoneobject.radius){
		Matter.Body.setStatic(mangoobject.body,false);
	}
}
