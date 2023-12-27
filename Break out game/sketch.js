var paddle;
var ball;
var blocks;
var gamestate=PLAY;
var PLAY=1;
var END=0;

function preload() {
  pinballImg = loadImage("Pinball.png")
}

function setup() {
  createCanvas(600, 600);

  pinball = createSprite(300,300)
  pinball.addImage(pinballImg)
  pinball.scale=0.05
  paddle = createSprite(300,590,150,10)

  edges = createEdgeSprites();


  score=0;
}

function draw() {
  //set background color
  background("black");
  paddle.x=World.mouseX


  if (gamestate==PLAY){
    fill("white")
    text("Score:"+score,500,50)


  }
  else if (gamestate==END){
  } 

  pinball.bounceOff(edges[3]);
  pinball.bounceOff(edges[0]);
  pinball.bounceOff(edges[1]);

  drawSprites();
}