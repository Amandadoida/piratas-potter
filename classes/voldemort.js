class Voldemort {
    constructor(x, y, w, h, VoldemortPos){
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.VoldemortPosition = VoldemortPos;
        this.image = loadImage("./assets/boat.png");
        World.add(world,this.body);
    }

    mostrar(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.VoldemortPosition, this.w, this.h);
        pop();
    }
}