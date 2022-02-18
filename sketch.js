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
var ataquedovoldemort=[];
var voldemortAnimation = [];
var voldemortDados, voldemortSpritesheet;
var quebravarinhaanimation = [];
var quebravarinhadado, quebravarinhasprite;
var pocaoAnimation = [];
var pocaoDados, pocaoSprite;
var acertouofeitico = false
var sonserina;
var expelliarmus;
var avadakedavra;
var aguamenti;
var risonho=false;

function preload() {
 hogwartspassado = loadImage("./assets/background.gif");
 castelomagicofoto = loadImage("./assets/tower.png");
 voldemortDados = loadJSON("./assets/boat/boat.json");
 voldemortSpritesheet = loadImage("./assets/boat/boat.png");
 quebravarinhadado = loadJSON("./assets/boat/brokenboat.json");
 quebravarinhasprite = loadImage("./assets/boat/brokenboat.png");
 pocaoDados = loadJSON("./assets/waterSplash/waterSplash.json");
 pocaoSprite = loadImage("./assets/waterSplash/waterSplash.png");
 sonserina=loadSound("./assets/background_music.mp3");
 expelliarmus=loadSound("./assets/cannon_explosion.mp3");
avadakedavra=loadSound("./assets/pirate_laugh.mp3");
aguamenti=loadSound("./assets/cannon_water.mp3");
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

  var voldemortFrames = voldemortDados.frames;

  for(var i = 0; i < voldemortFrames.length; i++){
    var pos = voldemortFrames[i].position;
    var img = voldemortSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    voldemortAnimation.push(img);
  }

  var quebravarinhaFrames = quebravarinhadado.frames;

  for(var i = 0; i < quebravarinhaFrames.length; i++){
    var pos = quebravarinhaFrames[i].position;
    var img = quebravarinhasprite.get(pos.x, pos.y, pos.w, pos.h);
    quebravarinhaanimation.push(img);
  }

  var pocaoFrames = pocaoDados.frames;

  for(var i = 0; i < pocaoFrames.length; i++){
    var pos = pocaoFrames[i].position;
    var img = pocaoSprite.get(pos.x, pos.y, pos.w, pos.h);
    pocaoAnimation.push(img);
  }
}

function draw() {
  background(189);
  image(hogwartspassado, 0, 0, 1200, 600);
  if(!sonserina.isPlaying()){
    sonserina.play();
    sonserina.setVolume(0.1);
  }
 
  Engine.update(engine);
  
  rect(chaopotter.position.x, chaopotter.position.y, width*2, 1);

  push();
  imageMode(CENTER);
  image(castelomagicofoto, castelomagico.position.x, castelomagico.position.y, 160, 310);
  pop();
  paviocurto.mostrar();

  magiadomal();

  for(var hermione=0;hermione<harry.length;hermione++){
    bombar(harry[hermione],hermione);
    diabrets(hermione);
  }
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    harry[harry.length-1].leviosa();
    expelliarmus.play();
    expelliarmus.setVolume(0.1);
  }
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
   var pomodeouro = new PomodeOuro(paviocurto.x, paviocurto.y);
   harry.push(pomodeouro)

  }
}
function bombar (bola,index){
if(bola){
  bola.mostrar();
  bola.animar();
  if(bola.body.position.x >= width || bola.body.position.y >= height-50){
    bola.remover(index);
    if(bola.isSink===true){
    aguamenti.playMode('untilDone');
      aguamenti.play();
      aguamenti.setVolume(0.1);
    }
  } 
}

}
function magiadomal(){
  if(ataquedovoldemort.length>0){

    if(ataquedovoldemort[ataquedovoldemort.length-1]===undefined||ataquedovoldemort[ataquedovoldemort.length-1].body.position.x<width-300){
       var positions=[-40,-60,-70,-20];
       var position=random(positions);
     
       var voldemort = new Voldemort(width, height -100, 170, 170, position, voldemortAnimation);
       ataquedovoldemort.push(voldemort);
    }

    for(var malfoy=0;malfoy<ataquedovoldemort.length;malfoy++){
      if(ataquedovoldemort[malfoy]){

        Matter.Body.setVelocity(ataquedovoldemort[malfoy].body, {x: -0.9, y:0});

        ataquedovoldemort[malfoy].mostrar();
        ataquedovoldemort[malfoy].animar();
        var guerradefeiticos = Matter.SAT.collides(castelomagico, ataquedovoldemort[malfoy].body);
        if(guerradefeiticos.collided && !ataquedovoldemort[malfoy].quebrada){
          if(!risonho&&!avadakedavra.isPlaying()){
            avadakedavra.play();
            avadakedavra.setVolume(0.5);
            risonho=true;
          }
          acertouofeitico = true;
          acabouharry();
        }
      }
    }

  }else{
  var voldemort = new Voldemort(width, height-60, 170, 170, -60, voldemortAnimation);
  ataquedovoldemort.push(voldemort); 
  }
}

function diabrets(index){
  for (var i = 0; i < ataquedovoldemort.length; i++){
    if(harry[index] !== undefined && ataquedovoldemort[i] !== undefined){
      var vassoura = Matter.SAT.collides(harry[index].body, ataquedovoldemort[i].body);
      if(vassoura.collided){
        ataquedovoldemort[i].remover(i);

        Matter.World.remove(world, harry[index].body);
        delete harry[index];
      }
    }
  }
}

function acabouharry(){
  swal({
    title: "Acabou o Quadribol!",
    text: "Lufa-Lufa venceu!",
    imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
    imageSize: "150x150",
    confirmButtonText: "Jogar Novamente"
  },
  function(apertouoBotao){
    if(apertouoBotao){
      location.reload();
    }
  });
}

/*//exemplos de Matrizes
//Matriz simples
var corvinal = [52, 13, 81, 46];
//console.log(corvinal[3]);

//Matriz com tipos de dados diferentes
var lufalufa = ["Amanda", 12, true];
//console.log(lufalufa[1]);

//Matriz de Matrizes
var varinha = [[1,2], [8,9], [15,16]];
//console.log(varinha[0][1]);*/