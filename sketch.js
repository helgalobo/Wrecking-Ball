const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var rope1;
var boxes1=[];
var boxes2=[];
var boxes3=[];

function setup(){
    var canvas=createCanvas(3000,600);
    engine = Engine.create();
    world = engine.world;
    
    //ground
    ground = new Ground(0,height,1800,40);
   
    //building
    box2= new Box(500,525,50,50,"yellow");  
   
    box5= new Box(500,475,50,50,"green");
    
    box8= new Box(500,425,50,50,"magenta");
  
    for(var i=0;i<10;i++)
    boxes1[i]=new Box(600,height-50*i,50,50,rgb(i*100%150,0,0));
    for(var i=0;i<10;i++)
    boxes2[i]=new Box(680,height-50*i,50,50,rgb(0,i*100%250,0));
    for(var i=0;i<10;i++)
    boxes3[i]=new Box(760,height-50*i,50,50,rgb(0,0,i*100%250));
    ball = new Ball(380,350,80,80);

    //rope
    rope1=new Rope(ball.body,{x:400, y:100})
    

    

}

function draw(){
    background("skyblue");
    Engine.update(engine);
    textSize(30);
    strokeWeight(5);
    stroke("black");
    fill("red")
    text("The Wrecking Ball",200,100);
    ground.display();

     box2.display();   
     box5.display();  
     box8.display();
     rope1.display();
     ball.display();
 
    
  
    for(var i=0;i<10;i++)
    {   boxes1[i].display();
        boxes2[i].display();
        boxes3[i].display();}
    }




function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}