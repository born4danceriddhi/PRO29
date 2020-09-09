function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  block8=new Block(330,235,30,40);
}

function draw() {
  background(255,255,255);  
  
block8.display();





  drawSprites();
}