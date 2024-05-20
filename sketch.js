//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(7,3,252); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(227,11,205,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,100,20); // center of canvas, 20px dia
  stroke(252,3,207);
  fill(7,252,3,50);
  ellipse(mouseX,mouseY,29,80);
  stroke(209,128,23);
  fill(84,74,45,150);
  ellipse(random(width),random(height),30,70);
	stroke(227,11,205);
  fill(227,11,205,150);
  triangle(random(width),random(height),100,200);

  

}
