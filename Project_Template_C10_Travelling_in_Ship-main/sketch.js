var ship,Shipimg;
var sea,Seaimg;

function preload(){

Seaimg=loadImage("sea.png");
Shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(600,200);


sea=createSprite(200,90,400,20);
  sea.addImage("SEA",Seaimg);
sea.velocityX=-2;
  sea.scale=0.4;

  ship=createSprite(100,100,10,10);
  ship.addAnimation("Ship",Shipimg);
  ship.scale=0.2;
}

function draw() {
  background("blue");
  if(sea.x<0){
sea.x=800
  }





  drawSprites();
}