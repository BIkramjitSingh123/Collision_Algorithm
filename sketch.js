var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3, gameobject4;

function setup() {
  createCanvas(800,400);
fixedRect = createSprite(500, 200, 80, 50);
movingRect = createSprite(100, 300, 50, 80);
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
// fixedRect.debug = true;
// movingRect.debug = true;

gameobject1 = createSprite(100,100, 50, 50);
gameobject1.shapeColor = "blue";
gameobject2 = createSprite(200,100, 50, 50);
gameobject2.shapeColor = "blue";
gameobject3 = createSprite(300,100, 50, 50);
gameobject3.shapeColor = "blue";
gameobject4 = createSprite(400,100, 50, 50);
gameobject4.shapeColor = "blue";

}
function draw() {
  background("red");
  console.log(movingRect.x - fixedRect.x);
movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

if (isTouching(movingRect, gameobject1)){
  gameobject1.shapeColor = "black";
  movingRect.shapeColor = "black";


}

else{
  gameobject1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}


  drawSprites();
}

