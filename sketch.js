var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1200,800);
  car = createSprite(200, 200, 30, 30);
  wall = createSprite(700,200,30,100);
  speed = random(55,90);
  weight = random(400,1500);
  car.shapeColor = "white";

  car.velocityX = speed;
}

function draw() {
  background(0);  
  
  deformation = (0.5*weight*speed*speed)/22500;
  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;
    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
  }
  
  drawSprites();
}