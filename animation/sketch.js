function setup() {
	createCanvas(640, 360);
	textSize(100);
	textFont('Comic Sans MS');
	textAlign(CENTER, CENTER);
	fill('plum');
}
function draw() {
	background(0);
	
	translate(width/2, height/2);
	var r = frameCount / 1000 * PI;
	shearX(r);

	text('so tried', 0, 0);
}