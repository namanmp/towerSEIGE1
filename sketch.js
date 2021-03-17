const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground
function setup() {
    createCanvas(3000,800)


engine=Engine.create();
world = engine.World;

//ball = new Ball(0,0,50)

//spring = new projectile(ball.body,{X:200,Y:200})

ground = new Ground(1500,690,3000,20);
}

function draw() {
background(0)
Engine.update(engine)


debug:true;




//ball.display();
//spring.display();
ground.display();
}

