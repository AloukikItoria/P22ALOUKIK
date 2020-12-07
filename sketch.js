var ground;
var helicopter,helicopterImage;
var supply,supplyImage;

function preload(){

	helicopterImage = loadImage("helicopter.png")
    supplyImage = loadImage("package.png")


}

function setup(){
createCanvas(500,400);

ground = createSprite(200,380,700,10);
helicopter = createSprite(230,60,50,50);
helicopter.addImage("image1",helicopterImage)
helicopter.scale = (0.5)
supply = createSprite(220,350,50,50);
supply.addImage("image2",supplyImage)
supply.scale = (0.2)








}




function draw(){
background("black")
imageMode(CENTER)

drawSprites();



}