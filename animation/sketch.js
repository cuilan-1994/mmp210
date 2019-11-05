
var dog1, dog2;

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

	if (mouseIsPressed) {
		if (mouseX > width/2) {
            fill("#9332a8");
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