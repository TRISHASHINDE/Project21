

var thickness,wall;


var speed, weight,bullet; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,50)
thickness=random(22,83);

	bullet=createSprite(50, 200, 50,5);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color("230,230,230")
}


function draw() {
  background(0);

  if(hasCollided(bullet,wall)){

  
  
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thikness*thickness*thickness);
	if(damage>10){
	wall.shapeColor=color(255,0,0);	
	}
	if(damage<10){
	wall.shapeColor=color(255,0,0);
  }  
}
  drawSprites();
 
}

function hasCollided(bullet,wall){
	bulletRigthEdge=bullet.x+bullet.width
	wallLeftEdge=wall.x
	if(bulletRigthEdge>=wallLeftEdge){
		return true;
	}
	return false;
}
