var img;

function preload() {
	img = loadImage("img/download.jpeg");
}

function setup() {
    createCanvas(500, 500);
  
}

function draw(){ 
  image(img, 0, 0, width/2, height/2);
    image(img, width/2, 0, width/2, height/2);    
	
fill(0);
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Courier New");
    text("so tired",  width/2, height/8);

    }
    