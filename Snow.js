class Snow{
    constructor(x,y){
        
    this.image= loadImage("snow.png");
    this.body = Bodies.circle(x,y,40,40,20);
    
    this.radius = 5;
    this.lifetime=200;
    World.add (world,this.body);
    }
    
    changePosition(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
        }
    }
    display(){
        push();
        
        var pos = this.body.position;
    
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop();
    }
}