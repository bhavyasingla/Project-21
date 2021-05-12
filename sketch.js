var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);

  thickness=random(22,83)

  wall = createSprite( 1200,200,thickness,height/2  );
  bullet = createSprite(50, 200, 50, 5);
  
  speed=random(223,321) 
  weight=random(30,52)
  

  bullet.velocityX= speed;

}

function draw() {
 
  background(0);

   if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    
    bullet.velocityX = 0;
    var deformation = 0.5*width*speed*speed/22500;
    if(deformation>180){
      bullet.shapecolor = "red";
      wall.shapecolor = "white";
    }
    if(deformation<180 && deformation>100){
      bullet.shapecolor = "yellow";
      wall.shapecolor = "white";
    }
    if(deformation<100){
      bullet.shapecolor = "green";
      wall.shapecolor = "white";
    }

     if(hasCollided(bullet,wall)){
       bullet.velocityX = 0;
       var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
       
        if(damage>10){
          wall.shapeColor = color(255,0,0);
        }
      }





   }  
   
    
  drawSprites();
}
function hasCollided(wall,bullet){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x
  if (bulletRightEdge>=wallLeftEdge){

   return  true
  }
  else
    return false;
}

