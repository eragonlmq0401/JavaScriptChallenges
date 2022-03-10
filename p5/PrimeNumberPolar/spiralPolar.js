let x,y;
let mag,theta;
let num;
let ratio = 5;
let prime_color,norm_color;
function isPrime(num,i){
  if (num ==2 )
    return true;
  if (num == 0 || num ==1)
    return false;
  if (num==i) return true;
  if (num%i == 0) return false;
  i++;
  return isPrime(num,i)

}
function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height/2;
  num = 1;
  prime_color = Math.floor(Math. random()) * 255;
  norm_color = Math.floor(Math. random()) * 255;
  background(0);
  

}
function getXY(){
  mag= num;
  theta = num;
  x = mag* cos(theta)/ratio+width/2;
  y = mag* sin(theta)/ratio+height/2;
}
function draw() {
  textSize(12);
  fill(225);
  getXY();
  if (isPrime(num,2))
  {
    
    fill(255,0,0);
    circle(x,y,5);
  }
  else{
    fill(0,255,0);
    circle(x,y,5);

  }
  console.log(num);
  console.log(prime_color);
  num++;
  max_rad = sqrt(width*width+height*height);
  if (num>ratio*max_rad/2){ // reset
    num = 0;
    x = width/2;
    y = height/2;
    prime_color = Math.floor(Math. random()) * 255;
    norm_color = Math.floor(Math. random()) * 255;
    background(0);
  }
}
