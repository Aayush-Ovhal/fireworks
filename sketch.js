var canvas;
var fireworks = [];
var gravity;
var camera;
var angle;

function setup(){
    canvas = createCanvas(750,360);

    colorMode(HSB);

    gravity = createVector(0,0.1);

    strokeWeight(3);
    stroke(255);

    background(0);

    angle = 0;

    //frameRate(640);
}

function draw(){
    colorMode(RGB);
    background(0,0,0,25);

    if(random(1) < 0.15){
      fireworks.push(new firework());
    }

    for(var i = fireworks.length-1; i >= 0 ; i--){
        fireworks[i].update();
        fireworks[i].display();
        if(fireworks[i].done()){
            fireworks.splice(i, 1);
        }
    }

    console.log(fireworks.length);

    angle += 0.1;

}