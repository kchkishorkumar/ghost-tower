var towerImg,ghostImg,doorImg,climberImg,spookySound;
var tower,ghost;
var gameState="play";
var inviG,doorG,climberG;

function preload(){
  towerImg=loadImage("tower.png")
  ghostImg=loadImage("ghost-standing.png")
  doorImg=loadImage("door.png")
  climberImg=loadImage("climber.png")
  spookySound=loadSound("spooky.wav")
}

function setup(){
 createCanvas(600,600) 
  spookySound.play()
  tower=createSprite(300,300,600,600)
  tower.addImage("t",towerImg)
  tower.velocityY=1
  
ghost=createSprite(300,300,50,80)
  ghost.addImage("g",ghostImg)
  ghost.scale=0.5
  doorG=new Group()
  climberG=new Group()
  inviG=new Group()
}

function draw(){
background("black")
  if(gameState==="play"){
    
  
if(keyDown("space")){
  ghost.velocityY=-3
}
ghost.velocityY=ghost.velocityY+0.5
  if(tower.y>400){
    tower.y=300
  }
if(keyDown("left")){
  ghost.velocityX=-3
}
 if(keyDown("right")){
  ghost.velocityX=+3
} 
  doors()
    if(climberG.isTouching(ghost)){
      ghost.velocityY=0
    }
    if(inviG.isTouching(ghost)||ghost.y>600){
      gameState="end"
    }
  }
  
drawSprites() 
  if(gameState==="end"){
    textSize(30)
    fill("red")
    text("GAMEOVER",300,300)
  }
}
function doors(){
 if(frameCount%200===0){
   var door=createSprite(200,50,20,20)
   door.addImage("d",doorImg)
   door.x=Math.round(random(120,400))
   door.velocityY=1
   door.lifetime=600
   ghost.depth=door.depth
   ghost.depth+=1
  var climber=createSprite(200,100,20,20)
   climber.addImage("c",climberImg)
   climber.x=door.x
   climber.velocityY=1
   climber.lifetime=600
  var invig=createSprite(200,120,100,5)
   
   invig.x=door.x
  invig.velocityY=1
  invig.lifetime=600 
   invig.debug=true
   doorG.add(door)
   climberG.add(climber)
   inviG.add(invig)
 } 
}