function sandwich (fruit){
console.log ("i want a"+ fruit )}
function setup() { 
 createCanvas(400, 400);
	background("lightblue");
	noStroke();
	//body
	stroke(255, 168, 213);
	strokeWeight(2);
  
	fill(255, 168, 213);
	rect(130, 250, 140, 300, 150); //clothes

	fill(230, 202, 181);
	quad(170, 190, 190, 290, 220, 290, 240, 130);//neck
  
	noStroke();
	fill(199, 178, 163); 
	quad(218, 270, 190, 290, 220, 290, 225, 240);//neck shadow


	//hair
   var hairColor =(48, 22, 7)
   var Color =(230, 202, 181)
    var earSize =30
    var earsSize=50 
    var eyebagSize= 12
    var eyeY =180
    var eyeX =160
   var x=width/2;
   var y=height/2;
	fill(hairColor);
	stroke(hairColor);
	ellipse(185, 160, 150, 150);
	ellipse(210, 150, 170, 170);
  quad(110, 250, 300, 250, 290, 170, 110, 170);


	//head
	ellipseMode(CENTER);
	strokeWeight(2);
	fill(230, 202, 181);
	ellipse(120, 190, earSize, earsSize); //ears
	ellipse(280, 190, earSize, earsSize); //ears





	stroke(219, 190, 169);
	fill(250, 220, 197);
	ellipse(x, y-10, 155, 166); //face

	
    
    fill(252, 252, 252);
	stroke(0);
    ellipse(eyeX, eyeY, earsSize, 25); //eye
	ellipse(eyeX+80, eyeY, earsSize, 25); 
    
    
    
	line(190, 190, 200, 200); //nose
	

	noStroke(); //chin
	fill(134, 89, 45, 90);
	rect(185, 225, 20, 5, 10);

	noFill();
	stroke(134, 89, 45, 90);
	strokeWeight(3);
	arc(160,198, eyebagSize, 1, 0, PI); //eyebags
	arc(240, 198, eyebagSize, 1, 0, PI);

	
}
function draw(){
    	var r = 0; // red;
	var g = map(mouseX, 0, width, 0, 255); // green
	var b = map(mouseY, 0, height, 0, 255); // blue
    
	fill(r, g, b);
	noStroke();
    ellipse(160, 180, 20); //eyes
	ellipse(240, 180, 20); 
    
    rectMode(CENTER);
	
	var x = width/2;
	var y = height/2;
	var s = 200; // size
	var o = 50; // offset

	
	fill(0);
	stroke(r, g, b);
	strokeWeight(9);

	var mouthSize = map(mouseX, 0, width, 5, 200); // move mouth with mouse x
	mouthSize = max(0, mouthSize); // prevents negative value error

	rect(x, y + 15, s/4, mouthSize, 10); // mouth
     
    
}
 