class Box {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body=Bodies.rectangle(this.x,this.y,20,100,options);
        this.width=20;
        this.height=100;
       // World.add(world,this.body);
    }
    display(){
        //var pos= this.position;
       // Push()
        translate(this.position.x, this.position.y); 
        rectMode(CENTER) 
        strokeWeight(3); 
        fill("red") 
        //Rect(this.position.x,this.position.y,width,height);
        //pop()

    }
}