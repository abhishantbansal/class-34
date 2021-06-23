class wagon{
    constructor(x,y,width,height){
      //var options ={ isStatic: true}
      this.image = loadImage("images/coach.png")
      this.body =  Bodies.rectangle(x,y,width,height);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        imageMode(CENTER);
       image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  