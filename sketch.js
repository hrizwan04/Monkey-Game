var bananaImage,obstacleImage,obstacleGroups,bananaGroup,backdrop,score,backImage,invisibleGround,Monkey,runningmonkey,foodGroup

function preload(){
  bananaImage=loadImage("banana.png")
  obstacleimage=loadImage("stone.png")
  backImage=loadImage("jungle.jpg")
  runningmonkey=loadAnimation("01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
}

function setup() {
  createCanvas(400, 400);
  backdrop=createSprite(400,200,10,10)
  backdrop.addImage(backImage)
  backdrop.velocityX=-5
  
  invisibleGround = createSprite(10,390,800,10);
  invisibleGround.visible = false;
  
  Monkey=createSprite(50,350,10,10)
  Monkey.addAnimation("running",runningmonkey)
  Monkey.scale=0.13
  
 score=0
  
  foodGroup=new Group();
  obstacleGroups=new Group()
  
}

function draw() {
  background(250);
  Monkey.collide(invisibleGround)
  
  if (keyDown("space")&&Monkey.y>=200){
    Monkey.velocityY=-12;
  }
  Monkey.velocityY = Monkey.velocityY + 0.8;
  
  
  if (backdrop.x < 0){
    backdrop.x = backdrop.width/2;
  }
  
  if (foodGroup.isTouching(Monkey)){
    score=score+2
    foodGroup.destroyEach
    switch(score){
    case 10: Monkey.scale=0.15
      break
   case 20: Monkey.scale=0.17
      break
    case 30: Monkey.scale=0.18
      break
    case 40: Monkey.scale=0.21
      break
      default: break 
      
  }
      
  }
    
  if(obstacleGroups.isTouching(Monkey)){
       Monkey.scale=0.2
    obstacleGroups.destroyEach()
     }
  

    food()
      obstacles()
  drawSprites()
      stroke("white")
      textSize(20)
      fill("white")
      text("Score: "+score,300,50)
      
}
  
function food(){
  if(frameCount%80==0){
  var fruit=createSprite(400,300,20,50)
    fruit.velocityX=-5
    fruit.y=Math.round(random(220,330))
    fruit.addImage(bananaImage)
    fruit.scale=0.05
    fruit.lifetime=200
    foodGroup.add(fruit)
  }
}
  function obstacles(){
  if (frameCount%200==0){
    var obstacle=createSprite(280,350,20,20);
    obstacle.velocityX=-6;
    obstacle.addImage(obstacleimage)
    obstacle.scale=0.15
    obstacle.lifetime=200
    obstacle.collide(invisibleGround)
    obstacleGroups.add(obstacle)

    
  }
}
  
  


