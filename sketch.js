function setup() {
    createCanvas(1920, 937);
    background(40);
    frameRate(4);
}

function draw() {
   fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
   noStroke();
   rect(Math.floor(Math.random() * 1920), Math.floor(Math.random() * 937), Math.floor(Math.random() * 600), Math.floor(Math.random() * 600));

}