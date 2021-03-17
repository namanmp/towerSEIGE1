class Ball{
   contsructor(x,y,radius){
       var options ={
           restitution:0.8,
            friction:1.0,
           density:1.0,
   
        }

     this.body=Bodies.circle(x,y,radius,options)
     this.radius = radius;
     World.add(world,this.body);
     this.image=loadImage("polygon.png")
  
  
    }

    display(){
      var pos = this.body.position;
      fill(176,219,83)
      imagemode(CENTRE)
    image(this.image,pos.x,pos.y,this.radius,this.radius);
    }

}