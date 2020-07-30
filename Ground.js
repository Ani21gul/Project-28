class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.width = w;
        this.height = h;    
        this.body = Bodies.rectangle(x,y,w,h, options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0, this.width, this.height );
        pop();
    }
}