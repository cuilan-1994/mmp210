var img;

function preload() {
	img = loadImage("img/download.jpeg");
}

function setup() {
    createCanvas(940, 680);
}

function draw(){
	image(img, 0, 0);
}