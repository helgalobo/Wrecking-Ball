const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var chain;

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,height,1600,40);
    box1= new Box(350,350,50,50,"red");
    box2= new Box(450,350,50,50,"yellow");
    box3= new Box(550,350,50,50,"black");
    box4= new Box(350,300,50,50,"pink");
    box5= new Box(450,300,50,50,"green");
    box6= new Box(550,300,50,50,"darkblue");
    box7= new Box(350,250,50,50,"purple");
    box8= new Box(450,250,50,50,"magenta");
    box9= new Box(550,250,50,50,"grey");
    
    ball = new Ball(200,150);

    var options={
        pointA:{x:100,y:100},
        bodyB:ball.body,
        stiffness:0.2,
        length:2
        
    };
    console.log(options)
    chain=Constraint.create(options);
    World.add(world,chain);

}

function draw(){
    background("skyblue");
    Engine.update(engine);
    textSize(30);
    text("Wrecking Ball",250,100);
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   ball.display();
    strokeWeight(3);
   line(ball.body.position.x,ball.body.position.y,100,100);

}