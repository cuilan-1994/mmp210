/* 
    p5 + arduino skecth
    11.12.2019
*/

var serial;
var portName = "/dev/tty.usbmodem14101";
var sensorValue;
var happyface;
var laugh;

function preload() {
    laugh = loadSound("laugh.mp3");
}

function setup() {
    createCanvas(640, 360);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('close', serialError);
    serial.on('error', portClose);
    
    serial.open(portName);
}

function serverConnected() {
    console.log('connected');
}

function portOpen() {
    console.log('port open');
}

function portClose() {
    console.log('port close');
}

function serialError() {
    console.log('error');
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;

}


function draw() {
    var c = map(sensorValue, 300, 1023, 0, 180);

   if (sensorValue < 400) {
       
    background("red");
     } else {
      
    
     background("#039dfc");
    }
    
    var y = map(sensorValue, 0, 1023, height, 10);
    var x = map(sensorValue, 0, 1023, height, 10);
    
    noStroke();
    fill("pink");
    fill("#fcba03");
    ellipse(300, 180, 350, 350);
    
    // eyes
    fill("black");
    strokeWeight(5);
    ellipse(250, 150, 70, 70);
    ellipse(350, 150, 70, 70);
  
    

    // pupils
    fill("lavender");
    ellipse(250, 150, 30, 30);
    ellipse(350, 150, 30, 30);

    // mouth
    stroke("black");
    noStroke();
    fill("red");

    if (sensorValue < 400) {
         arc(300, 250, 100, 100, 0, PI);
     } else {
        arc(300, 280, y+50, 90, PI, TWO_PI);
     }


}



function mousePressed() {
    if (mouseX > 0 && mouseX < width && 
        mouseY > 0 && mouseY < height) {
        laugh.play();
    }
}