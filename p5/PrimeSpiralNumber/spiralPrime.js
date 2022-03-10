const { prototype } = require("../../../../../.vscode/extensions/samplavigne.p5-vscode-1.2.8/p5types");


let x,y;
let px,py;
let num=1;

// initial conditons
let stepSize = 20;
let step =1;
let max_count = 1;
let cur_count = 0;
let x_dir = 1; 
let y_dir = -1;
let move_dir =0; // 0 for x , 1 for y 
let change_dir_count = 0;
let WinX = 800;
let WinY = 800;
let totalsteps = WinX/stepSize*WinY/stepSize +1;
function setup() {
  createCanvas(WinX, WinY);
  background(0);
  x = width/2;
  y = height/2;
  px = x;
  py = y;

}
function moveHorizontal(times){
  if (cur_count<times){
    x += x_dir*stepSize;
    cur_count+=1;
  }
  
}

function moveVertical(times){
  if (cur_count<times){
    y -= y_dir*stepSize;
    cur_count+=1;
  }
}
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

function draw() {
  //textSize(16);
  //textAlign(CENTER,CENTER);
  
  
  stroke(100);
  console.log(x,y,move_dir,cur_count,max_count,num);
  
  if (num != 1){
    if (move_dir == 0){
      moveHorizontal(max_count);
      if (cur_count == max_count){
        cur_count = 0;
        change_dir_count+=1;
        move_dir = 1;
        y_dir *=-1;
      }
    }
    else if (move_dir == 1){
      moveVertical(max_count);
      if (cur_count == max_count){
        cur_count = 0;
        change_dir_count+=1;
        move_dir = 0;
        x_dir *=-1;
      }
    }
      if (change_dir_count ==2){
      max_count+=1;
      change_dir_count=0;
    }
    if (isPrime(num,2)){
      console.log(num,'prime number');
      fill(0,0,255);
      circle(x,y,stepSize/2);
      
    }
    else{
      fill(255,0,0);
      circle(x,y,stepSize/4);
      
    }
  }
  else{
    fill(255,0,0);
    circle(x,y,stepSize/2);

    moveHorizontal(max_count);
  }
  line(px,py,x,y,0.25);
  px=x;
  py=y;
  frameRate(60)
  num++;
  

  if (num > totalsteps){
    noLoop();
  }

}
