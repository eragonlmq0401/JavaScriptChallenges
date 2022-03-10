let timeStep = 0.1;
let time,y_global;
let time_array = [];
let pi = Math.PI;
let height = 100;
let timeSize = 100;
let waveY = [];
let Radi = 50;
let timeFrame = 1000; // pixel
let maxPoints = 500.0;
let numWaves = 5;

// color map
let rgb =[
  [255,0,0], // red
  [0,255,0], // green
  [0,0,255], // blue
  [255,255,0]// yellow
];
function generateRGB(n){
  for(let i =0; i<n;i++){
    rgb.push([Math. floor(Math. random() * 255),Math. floor(Math. random() * 255),Math. floor(Math. random() * 255)]);
  }
}
function initWave(){
  for(let i =0; i<numWaves;i++)
    {
      waveY[i] = [] ; // init 2D arrays
    }
}
function setup() {
  createCanvas(1900, 5000);
  time =0;
  y_global =0;
  initWave();
  generateRGB(2000);
}

function drawCircle(radius,time,x_center,y_center,a){
  //translate(200,200);

  let x = x_center + radius * cos(a*time);
  let y = y_center + radius * sin(a*time);
  
  circle(x_center,y_center,radius*2);
  stroke(255);
  fill(255);
  circle(x,y,2);
  line(x_center,y_center,x,y);
  
  return [x,y];
}

function getEvenSeries(n){
  arr = [];
  for (let i =1; i<=n;i++)
  {
    let n = 2*i;
    arr.push(n);
    
  }
  return arr;
}

function getOddSeries(n){
  arr = [];
  let p_i = 0;
  for (let i =1; i<=n;i++)
  {
    let n = p_i+i;
    arr.push(n);
    p_i = i;
    
  }
  return arr;
}

function stackCircles(n,time,mode,x_c,y_c,y_id){
  // n is number of circles in the odd/even series
  // mode: 0 -- even, 1-- odd
  if(mode ==0){
    a_s = getEvenSeries(n);
  }
  else if (mode == 1){
    a_s = getOddSeries(n);
  }
  

  new_center = [x_c,y_c];
  for (let i =0; i < a_s.length; i++){
    let a = a_s[i];
    let radius =Radi *2 * sin(a*time)/(-a*pi);
    stroke(rgb[i]);
    noFill();
    new_center = drawCircle(Radi/a,time,new_center[0],new_center[1],a);
    
  }
  waveY[y_id].push(new_center[1]);
  line(new_center[0],new_center[1],Radi*2+time_array.length,new_center[1])
  return (new_center);
}


function update_wave(id,){
  p_xy = (Radi*2,waveY[id][0])
  for (let i = 1; i < time_array.length; i++){
    xy = [Radi*2+ i,waveY[id][i]]
    line(p_xy[0],p_xy[1],xy[0],xy[1]);
    p_xy = xy;
  }

}

function draw() {
  background(0);

  translate(200,200);
  time+=timeStep;
  time_array.push(time);
  let y_center =0;
  for (let i = 0 ; i <numWaves; i++)
  {
    let N = 2*i+1;
    let display_text = 'N = ' + str(N)
    y_center = -100+3*i*Radi
    text(display_text,-100,y_center)
    stackCircles(N,time,1,1,y_center,i);
    update_wave(i)
    
  }
  
  text('Current Time: ' + str(time) + '\nNumber of Time Steps: '+ time_array.length +'/' + maxPoints,-100,-100 + 3*numWaves*Radi);


  

  
 
  frameRate(30)
  console.log(time_array.length,maxPoints)
  if (time_array.length >maxPoints)
  {  
    time =0;
    initWave();
    time_array =[]
  }
  
  
}


