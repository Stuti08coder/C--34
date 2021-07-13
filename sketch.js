const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1

var slingshot;



var score = 0;



function setup(){
    var canvas = createCanvas(2000,900);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2800,30);

box1 = new Box(1000,870,100,100)
box2 = new Box(1000,670,100,100)
box3 = new Box(1000,870,100,100)
box4 = new Box(1000,870,100,100)
box5 = new Box(1000,870,100,100)
box6 = new Box(1000,870,100,100)
box7 = new Box(1000,870,100,100)
box8 = new Box(1000,870,100,100)
box9= new Box(1000,870,100,100)
box10 = new Box(1000,870,100,100)
box11 = new Box(1000,870,100,100)

box22 = new Box(1200,870,100,100)
box12 = new Box(1200,670,100,100)
box13 = new Box(1200,870,100,100)
box14 = new Box(1200,870,100,100)
box15 = new Box(1200,870,100,100)
box16 = new Box(1200,870,100,100)
box17 = new Box(1200,870,100,100)
box18 = new Box(1200,870,100,100)
box19= new Box(1200,870,100,100)
box20 = new Box(1200,870,100,100)
box21 = new Box(1200,870,100,100)




ball = new Ball(200,200,100)

   slingshot = new SlingShot(ball.body,{x:700, y:100});
}

function draw(){
  
        background("cyan");
    
        // noStroke();
        // textSize(35)
        // fill("white")
        // text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();


   box12.display();
   box13.display();
   box22.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
ground.display();
ball.display();
   slingshot.display();    
}
