function sandwich (fruit){
console.log ("i want a"+ fruit )}
function setup() { 
 createCanvas(400, 400);
	background("lightblue");
	noStroke();
	//body
	
	stroke(255, 168, 213);
	strokeWeight(2);
    var neckSize = 290;
    
	fill(255, 168, 213);
	rect(130, 250, 140, 300, 150); //clothes

	fill(230, 202, 181);
	quad(170, 190, 190, neckSize, 220, neckSize, 240, 130);//neck
  
	noStroke();
	fill(199, 178, 163); 
	quad(218, 270, 190, neckSize, 220, neckSize, 225, 240);//neck shadow


	//hair
   var hairColor =(48, 22, 7)
	fill(hairColor);
	stroke(hairColor);
	ellipse(185, 160, 150, 150);
	ellipse(210, 150, 170, 170);
  quad(110, 250, 300, 250, 290, 170, 110, 170);


	//head
	ellipseMode(CENTER);
	strokeWeight(2);
	fill(230, 202, 181);
    var a =190
    var b =30
    var c =50 
	ellipse(120, a, b, c); //ears
	ellipse(280, a, b, c); //ears

	stroke(0);
	fill(230, 202, 181);
	ellipse(200, 180, 160, 170); //face

	//detail & shadow
	noStroke();
	fill(250, 220, 197);
	ellipse(202, 180, 155, 166); //face

	
    
    fill(252, 252, 252);
	stroke(0);
     var eyeSize =180
    var y=50
   
	ellipse(160, eyeSize, y, 25); 
	ellipse(240, eyeSize, y, 25); 
    
    
    fill(0);
	stroke(0);
    ellipse(160, eyeSize, 20); //eyes
	ellipse(240, eyeSize, 20); 
    
	line(190, 190, 200, 200); //nose
	line(210, 220, 185, 220); //mouth

	noStroke(); //chin
	fill(134, 89, 45, 90);
	rect(185, 225, 20, 5, 10);

	noFill();
	stroke(134, 89, 45, 90);
    var eyebagSize= 12
	strokeWeight(3);
	arc(160,198, eyebagSize, 1, 0, PI); //eyebags
	arc(240, 198, eyebagSize, 1, 0, PI);

	
}