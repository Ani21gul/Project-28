class Paper{
    constructor(x,y,r){
        var options = {
            restitution: 0.3,
            friction:0.5,
            density:1.2
        } 
        this.body = Bodies.circle(x,y,r, options);
        this.image = loadImage("paper.png");
        this.radius = r;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("white");
        image(this.image, this.body.position.x,this.body.position.y,0,0);
        ellipse(0,0, this.radius, this.radius );
        pop();
    }
}