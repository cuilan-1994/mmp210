var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnW = 100;
var prevBtnH = 50;

var Puppy;

function preload() {
    Puppy = loadImage("Puppy.jpg");
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("#E9967A");
 
    if (slideNumber == 0) {
        // content for slide number 0
        fill("#CD5C5C");
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Final Project Pitch", width/2, height/2);
        
        textSize(30);
        text("by Katherine", width/2, height/2 + 50);
        
    } else if (slideNumber == 1) {
        // content for slide number 1
        
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("FSR", width/2, 200);
        
        ellipse(200, 400, 100);
        rect(200, 375, 200, 50);
        fill(0);
        ellipse(200, 400, 80);
        
        textSize(20);
        text("The user hits the FSR to eject the cats from the litter box.", width/2, height - 100);
    
    } else if (slideNumber == 2) {
        
        // theme
        image(Puppy, 0, 0, width, height);
        text("Theme", width/2, height/2);
    }
    
    
    /* drawing buttons */
    
    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(255);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }
    
    
    // prev btn
    if (slideNumber > 0) {
       fill(255);
        noStroke();
        rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
        fill(0);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Previous", prevBtnX + 10, prevBtnY + 10);  
    }
   
    
}

function mousePressed() {
    
    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }
    
    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnW &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnH &&
       slideNumber > 0) {
        slideNumber--;    
    }
}