function preload() {
	dog = loadImage("img/download.jpeg");
    cat = loadImage("img/cat copy.jpg");

}
function setup() {
    createCanvas(500, 500);
  
}
function draw() {
	background(220);
	rectMode(CENTER);
    
    if (mouseX > width/2) {
        image(dog, 0, 0, width/2, height);
        image(cat, width/2, 0, width/2, height);
    } else {
        image(cat, 0, 0, width/2, height);
        image(dog, width/2, 0, width/2, height);
    }

    translate(width/2, height/2);
	var r = frameCount / 1000 * PI;
	shearX(r);
    textSize(70);
	textFont('Comic Sans MS');
    textAlign(CENTER, CENTER);
	fill('plum');
	text('so tried', 0, 0);
}