var serial;
var portName = "/dev/tty.usbmodem14101";
var sensorValue;
var happyface;


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
        console.log(sensorValue);

}


function draw() {
    var c = map(sensorValue, 0, 1023, 0, 180);

    
   
    // sky
    background(c, c, c + 85);
    
    var y = map(sensorValue, 0, 1023, height, 10);
    
    fill('pink');
    noStroke();
    ellipse(50, y, 60);
    fill("pink");
    fill("plum");
    ellipse(200, 180, 350, 350);
    
    // eyes
    fill("navy");
    strokeWeight(5);
    ellipse(150, 150, 70, 70);
    ellipse(250, 150, 70, 70);
    fill("lavender");
    arc(200, 250, 100, 100, 0, PI)
    
    // pupils
    fill("lavender");
    ellipse(150, 150, 30, 30);
    ellipse(250, 150, 30, 30);

    // mouth
    line(30, 20, 85, 20);
stroke(126);
    stroke("navy");
    noFill()
    strokeWeight(5);






}