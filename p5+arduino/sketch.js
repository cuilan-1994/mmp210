var serial;
var portName = "/dev/tty.usbmodem143201";
var sensorValue;
function preload() {
    Happyface = loadImage("happyface.jpg");
    Sadface = loadImage("sademoji.jpg");
    sensor = loadImage("sensor.jpg");
}

function setup() {
	createCanvas(640, 360);

	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open(portName);
}
    
function serverConnected() {
	console.log('connected to server.');
}

function portOpen() {
	console.log('the serial port opened.')
}

function portClose() {
	console.log('The serial port closed.');
}
    
function serialError() {
    console.log("error");
}
function serialEvent() {
	var currentString = serial.readLine(); // read the incoming string
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
}
function draw() {
  



	background(245, 150, 66);


	var y = map(sensorValue, 0, 1023, height, 0);
	fill('red');
	noStroke();
	
    
  image(img, y, 0, width/2, height/2);
   

    var y = map(sensorValue, 10, 1023, height, 0);
	fill('red');
	noStroke();
	ellipse(width/2, y+150, 50)
    
     var y = map(sensorValue, 10, 1023, height, 0);
	fill('red');
	noStroke();
	ellipse(width/2+150, y+150, 50)
    
    var y = map(sensorValue, 0, 1023, height, 0);
	fill('red');
	noStroke();
	ellipse(width/2+150, y+50, 50);
    var y = map(sensorValue, 10, 1023, height, 0);
	fill('red');
	noStroke();
	ellipse(width/2-150, y+150, 50)
    
    var y = map(sensorValue, 0, 1023, height, 0);
	fill('red');
	noStroke();
	ellipse(width/2-150, y+50, 50);
	
	
}