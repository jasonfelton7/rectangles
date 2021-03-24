let rectX;
let rectY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(40);
    frameRate(4);
}

function draw() {
    
    rectX = random(width);
    rectY = random(height);
    
    fill(random(256), random(256), random(256));
    noStroke();
    rect(rectX, rectY, random(300), random(300));

}
