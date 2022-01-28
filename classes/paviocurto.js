class Paviocurto {
    constructor(x, y, w, h, angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.paviolongo= loadImage("./assets/cannonBase.png");
        this.motivoraiva=loadImage("./assets/canon.png");
    }
    mostrar(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
imageMode(CENTER);
image(this.motivoraiva,0,0,this.w,this.h);
    pop();
    image(this.paviolongo,70,20,200,200);
    noFill();        
    }
}
