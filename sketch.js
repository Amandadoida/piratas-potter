const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var angles;
var chaopotter;
var hogwartspassado;
var castelomagico, castelomagicofoto;
var paviocurto;
var pomodeouro;
var harry=[];
var voldemort;
var ataquedovoldermort=[];

function preload() {
 hogwartspassado = loadImage("./assets/background.gif");
 castelomagicofoto = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  chaopotter_options = {
    isStatic: true
  }

  chaopotter = Bodies.rectangle(0, height-1, width*2, 1, chaopotter_options);
  World.add(world, chaopotter);

  castelomagico = Bodies.rectangle(160, 350, 160, 310, chaopotter_options);
  World.add(world, castelomagico);

  angleMode(DEGREES);
  angles=20;
  paviocurto=new Paviocurto(180,110,130,100,angles);

 
}

function draw() {
  background(189);
  image(hogwartspassado, 0, 0, 1200, 600);
 
  Engine.update(engine);
  
  rect(chaopotter.position.x, chaopotter.position.y, width*2, 1);

  push();
  imageMode(CENTER);
  image(castelomagicofoto, castelomagico.position.x, castelomagico.position.y, 160, 310);
  pop();
  paviocurto.mostrar();

  magiadomal();

  for(var hermione=0;hermione<harry.length;hermione++){
    bombar(harry[hermione,hermione])
  }
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    harry[harry.length-1].leviosa();
  }
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
   var pomodeouro = new PomodeOuro(paviocurto.x, paviocurto.y);
   harry.push(pomodeouro)

  }
}
function bombar (bola,i){
if(bola){
  bola.mostrar();
}

}
function magiadomal(){
  if(ataquedovoldermort.length>0){

    if(ataquedovoldemort[ataquedovoldemort.length-1]===undefined||ataquedovoldemort[ataquedovoldemort.length-1].body.position.x<width-300){
       var positions=[-40,-60,-70,-20];
       var position=random(positions);
     
       var voldemort = new Voldemort(width, height -100, 170, 170, position);
       ataquedovoldemort.push(voldemort);
    }

    for(var malfoy=0;malfoy<ataquedovoldemort.length;malfoy++){
      if(ataquedovoldemort[malfoy]){

        Matter.Body.setVelocity(voldemort[malfoy].body, {x: -0.9, y:0});

        voldemort[malfoy].mostrar();
      }
    }

  }else{
  var voldemort = new Voldemort(width, height-60, 170, 170, -60);
  ataquedovoldemort.push(voldemort); 
  }
}



//exemplos de Matrizes
//Matriz simples
var corvinal = [52, 13, 81, 46];
//console.log(corvinal[3]);

//Matriz com tipos de dados diferentes
var lufalufa = ["Amanda", 12, true];
//console.log(lufalufa[1]);

//Matriz de Matrizes
var varinha = [[1,2], [8,9], [15,16]];
//console.log(varinha[0][1]);