var gardenImg;
var cat,mouse;
var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseimg3;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat2.png","images/cat4.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse2.png","images/mouse4.png");
}


function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(70,600);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale = 0.5;
}

function draw() {

    background(gardenImg);

    if(cat.x - mouse.x <(cat.with - mouse.width)/2){
        cat.velocityX = 0;
        cat.changeAnimation("lastImg",catImg3)
        cat.x = 300;
        cat.scale = 0.2;

        mouse.changeAnimation("mouselastImg",mouseImg3)
        mouse.scale = 0.15;
    }
  

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
   mouse.velocityX = -5;
   cat.changeAnimation("catRunning",catImg2);
   cat.frameDelay = 25;

   mouse.changeAnimation("mouseTeasing",mouseImg2);
   mouse.frameDelay = 25;
   }
}
