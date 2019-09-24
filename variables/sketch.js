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
   var headColor =(230, 202, 181)
   var faceColor =(230, 202, 181)
    var earSize =30
    var earsSize=50 
    var eyebagSize= 12
    var eyeY =180
    var eyeX =160
   var x=100
   var y=100
	fill(hairColor);
	stroke(hairColor);
	ellipse(x+85, y+60, 150, 150);
	ellipse(x+110, y+50, 170, 170);
  quad(110, 250, 300, 250, 290, 170, 110, 170);


	//head
	ellipseMode(CENTER);
	strokeWeight(2);
	fill(headColor);
	ellipse(x+20, y+90, earSize, earsSize); //ears
	ellipse(x+180, y+90, earSize, earsSize); //ears

	stroke(0);
	fill(faceColor);
	ellipse(x+100, y+80, 160, 170); //face

	//detail & shadow
	noStroke();
	fill(250, 220, 197);
	ellipse(x+102, y+80, 155, 166); //face

	
    
    fill(252, 252, 252);
	stroke(0);
    ellipse(eyeX, eyeY, earsSize, 25); //eye
	ellipse(eyeX+80, eyeY, earsSize, 25); 
    
    
    fill(0);
	stroke(0);
    ellipse(eyeX, eyeY, 20); //eyes
	ellipse(240, eyeY, 20); 
    
	line(190, 190, 200, 200); //nose
	line(210, 220, 185, 220); //mouth

	noStroke(); //chin
	fill(134, 89, 45, 90);
	rect(185, 225, 20, 5, 10);

	noFill();
	stroke(134, 89, 45, 90);
	strokeWeight(3);
	arc(160,198, eyebagSize, 1, 0, PI); //eyebags
	arc(240, 198, eyebagSize, 1, 0, PI);

	
}