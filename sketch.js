var dog,sadDog,happyDog;
var MILK, mhilk;
var btnX, btnY;
var make, food;
amtMilk = 0;
// This statement works like binary code, a 1 means yes and a 0 means false
var foodInSight = 0;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  MILK = loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  
  dog.scale=0.15;
  food = new Bell("Feed the Dog", 750, 125, 1);
  make = new Bell("Add Food", 840, 125, 2);
  
}
function makeMilk(amnt){
  var x = 100;
  var y = 100;
 for (var i = 0; i <= amnt; i +=1){
   if(i % 5 == 0){
     y += 50
     x = 100;
   }
    mhilk = createSprite(x, y, 50, 50)
    mhilk.addImage(MILK);
    mhilk.scale = 0.07;
    x += 30;

 }
}

function draw() {
  background(46,139,87);
  drawSprites();
  if(foodInSight == 0){
    dog.addImage(sadDog);
  }
  else{
    dog.addImage(happyDog);
    
  }
  makeMilk(amtMilk);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
