class SlingShot{
    constructor(b1,b2){
        var op = {
            bodyA:b1,
            bodyB:b2
        }
     this.chain = Matter.Constraint.create(op);
     Matter.World.add(myWorld,this.chain);
    }
   
   show(){
      // image(this.sling1,200,20);
        
     
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
           
                strokeWeight(3);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}