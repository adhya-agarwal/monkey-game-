
var monkey , monkey_running
var banana ,bananaimage, rock, rockimage
var tree1,tree2,tree3,tree4,treegroup;
var score
var invisibleground;
var treegroup, bananagroup,rockgroup;
var rock;
var tree;
var score;
var banana;




function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  rockimage = loadImage("obstacle.png");
  tree1=loadImage("tree1-removebg-preview.png");
  tree2=loadImage("tree2-removebg-preview.png");
  tree3=loadImage("tree4-removebg-preview.png");
  tree4=loadImage("tree5-removebg-preview.png");
  
}



function setup(){

  createCanvas(600,220);
  
  monkey=createSprite(70,200,20,50);
  monkey.addAnimation("monkeyrunning",monkey_running);
  monkey.scale=0.1;
  
  treegroup=new Group();
  
  bananagroup=new Group();
  
  rockgroup=new Group();
  
  score=0;
  

  

  
}


function draw() {
  
  background("darkgreen");
  

  


invisibleground=createSprite(300,200,600,5);
invisibleground.visible=false;
//console.log(monkey.y);
  //making it jump
    if(keyDown("space")&& monkey.y>140){
      monkey.velocityY= -12
    }

  //adding gravity
  
  monkey.velocityY=monkey.velocityY+ 0.8;
  
   //collide
  monkey.collide(invisibleground);
 
 
 if(bananagroup.isTouching(monkey)){
   score=score+50;
 }
  
  if(rockgroup.isTouching(monkey)){
    score=score-100;
  }
   
 
 
  spawntrees();
  spawnrocks();
   spawnbananas();
  //tree.depth=rock.depth;
 // rock.depth=rock.depth+1;
  
  drawSprites();
 fill("white")
 // score = score + Math.round(frameCount/60);
  textSize(15)
  text("score:"+score,500,30)

}

function spawntrees(){
  if(frameCount%40===0){
  tree=createSprite(600,130,20,50);
  tree.velocityX=-6;
  
  
    var rand= Math.round(random(1,4));
    switch(rand){
      case 1:tree.addImage(tree1);
             break;
    case 2:tree.addImage(tree2);
             break;
      case 3:tree.addImage(tree3);
             break;
      case 4:tree.addImage(tree4);
             break;
             default:break;
    }
    tree.scale=2;
  tree.depth=monkey.depth-2;
    tree.lifetime=300;
    
    treegroup.add(tree);
    
    
  }
}

function spawnrocks() {
  if(frameCount % 100 === 0) {
     rock = createSprite(600,190,10,40);
    rock.velocityX = -6;
    rock.addImage(rockimage);
    
    
    rock.scale = 0.1;
    rock.lifetime = 300;
    //tree.depth=rock.depth;
    //rock.depth=rock.depth+1;
    rock.depth+=1
    console.log(rock.depth)
    console.log(tree.depth)
    
    rockgroup.add(rock)
  }
}

function spawnbananas() {

  if (frameCount % 80 === 0) {
     banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaimage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    bananagroup.add(banana);
    
  }
}





