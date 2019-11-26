function sandwich (fruit){
console.log ("i want a"+ fruit )}
function setup() { 
 createCanvas(600, 400);
	background("lightblue");
	noStroke();
	fill("plum");
	ellipse(300, 200,  300); // face

	fill("yellow");
	ellipse(400, 170,100, 50); // right eye
	ellipse(200, 170, 100,50); // left eye

	fill("red");
	rect(270, 300, 50, 10, 30); // mouth	
    
    fill("green");
	ellipse(400, 170, 40); // right eye
    ellipse(200, 170, 40); // left eye
    
    fill("Green");
	ellipse(300, 220, 10, 20); // nose
}