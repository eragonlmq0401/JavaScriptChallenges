let x,y;
let num =1;
function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  background(0)
}

function draw() {
  circle(x,y,10);
  x+=10;
}
