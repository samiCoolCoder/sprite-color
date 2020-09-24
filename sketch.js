var fixrect;
var movingrect;



function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(550, 200, 50, 50);

}

function draw() {
  background(0);
  movingrect.x=mouseX ; 
  movingrect.y=mouseY ;
  if (movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2 &&
    fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2 &&
     movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2&&
     fixrect.y-movingrect.y<fixrect.height/2+fixrect.height/2)
  {
    movingrect.shapeColor="white";
    fixrect.shapeColor="white";
  }
 
  else
  {
    movingrect.shapeColor="green";
    fixrect.shapeColor="green";
  }
  drawSprites();
}