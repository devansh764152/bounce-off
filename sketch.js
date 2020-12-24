var fixedRect, movingRect;
var fix1,fix2,fix3,fix4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fix1 = createSprite(100, 100, 50, 80);
  fix1.shapeColor = "green";
  fix1.debug = true;
  fix2 = createSprite(200, 100, 50, 80);
  fix2.shapeColor = "green";
  fix2.debug = true;
  fix3 = createSprite(300, 100, 50, 80);
  fix3.shapeColor = "green";
  fix3.debug = true;
  fix4 = createSprite(400, 100, 50, 80);
  fix4.shapeColor = "green";
  fix4.debug = true;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fix1)){
    movingRect.shapeColor="red";
    fix1.shapeColor="red";
  }
  else{
movingRect.shapeColor="green";
fix1.shapeColor="green";
  }
  if(isTouching(movingRect,fix2)){
    movingRect.shapeColor="red";
    fix2.shapeColor="red";
  }
  else{
movingRect.shapeColor="green";
fix2.shapeColor="green";
  }
//bounceOff();
  drawSprites();
}

function bounceOff(){
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
movingRect.velocityX = movingRect.velocityX * (-1);
fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * (-1);
fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}