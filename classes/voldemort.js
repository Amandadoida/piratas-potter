class Voldemort {
    constructor(x, y, w, h, VoldemortPos, voldemortAnimation){
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.VoldemortPosition = VoldemortPos;
        this.image = loadImage("./assets/boat.png");
        this.animation = voldemortAnimation;
        this.speed = 0.05;
        this.quebrada=false;
        World.add(world,this.body);
    }

    animar(){
        this.speed += 0.05;
    }

    remover(index){
        this.animation= varinhaquebradaanimation
        this.speed= 0.05;
        this.w= 300;
        this.h= 300;
        this.quebrada=true;
        setTimeout(() => {
            Matter.World.remove(world, ataquedovoldemort[index].body);
            delete ataquedovoldemort[index];
        }, 2000);
    }

    mostrar(){
        var pos = this.body.position;
        var angle = this.body.angle;
        var index = floor(this.speed % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.VoldemortPosition, this.w, this.h);
        pop();
    }
}