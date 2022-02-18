class PomodeOuro {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.raio = 30;
        this.quadribol = [];
        this.body = Bodies.circle(x,y,this.raio,options);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world, this.body);
        this.isSink = false;
        this.speed = 0.05;
        this.animation = [this.image];
    }

    animar(){
        this.speed += 0.05;
    }

    remover(index){
        this.isSink = true;
        Matter.Body.setVelocity(this.body, {x: 0, y: 0});

        this.animation = pocaoAnimation;
        this.speed = 0.05;
        this.raio = 150;

        setTimeout(() => {
            Matter.World.remove(world, this.body);
            delete harry[index];
        }, 1000);
    }

    mostrar(){
        var angle = this.body.angle;
        var pos = this.body.position;
        var index = floor(this.speed % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, 0, this.raio, this.raio);
        pop();
        
        if(this.body.velocity.x > 0 && pos.x > 0){
            var position = [pos.x, pos.y];
            this.quadribol.push(position);
        }
        for(var rony = 0; rony < this.quadribol.length; rony++){
            image(this.image, this.quadribol[rony][0], this.quadribol[rony][1], 5, 5);
        }
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