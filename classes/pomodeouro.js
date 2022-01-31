class PomodeOuro {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.raio = 30;
        this.body = Bodies.circle(x,y,this.raio,options);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world, this.body);
    }

    mostrar(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.raio, this.raio);
        pop()
    }
    leviosa(){
        var grifinoria=paviocurto.angle-28;
        grifinoria=grifinoria*(3.14/180);
     var sonserina=p5.Vector.fromAngle(grifinoria);
     sonserina.mult(0.5);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:sonserina.x*(180/3.14),y:sonserina.y*(180/3.14)});
    }
}