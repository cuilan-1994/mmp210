var img;

function preload() {
	img = loadImage("download.jpeg");
}

function setup() {
    createCanvas(640, 480);
}

function draw(){
	image(img, 0, 0);
}