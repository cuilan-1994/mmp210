
var dog1, dog2;

function preload() {
	dog1 = loadImage("img/download.jpeg");
    dog2 = loadImage("img/dog.jpg");

}
function setup() {
    createCanvas(500, 500);
  
}
function draw() {
	background(220);
	rectMode(CENTER);
    
    if (mouseX > width/2) {
        image(dog1, 0, 0, width/2, height);
        image(dog2, width/2, 0, width/2, height);
    } else {
        image(dog2, 0, 0, width/2, height);
        image(dog1, width/2, 0, width/2, height);
    }

	if (mouseIsPressed) {
		if (mouseX > width/2) {
            fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Courier New");
    text("MEME",  width/2, height/2);
			;
		} else {
			fill(0);
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Courier New");
    text("so tired",  width/2, height/8);
		}
	}	
}