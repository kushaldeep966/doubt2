
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject,obj;	
var world;



function setup() {
	createCanvas(700, 400);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(570,350);
    
	paperObject=new paper(200,200,50);
	groundObject=new ground(350,370,700,15);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 700,
	    height: 400,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 }


function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100});
    
  	}
}
