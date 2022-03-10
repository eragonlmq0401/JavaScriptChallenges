
document.getElementById('file').onchange = function(){
  var file = this.files[0];
  var reader = new FileReader();
  reader.onload = function(progressEvent){    
    var lines = this.result.split(/\r\n|\n/);
    for(var line = 0; line < lines.length-1; line++){
      console.log(line + " --> "+ lines[line]);
    }
  };
  reader.readAsText(file);
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


// a tree of height 4 with fan-out 2
var G = jsnx.balancedTree(2, 4);

// Compute the shortest path between node 2 and 7
var path = jsnx.bidirectionalShortestPath(G, 2, 7);
// [ 2, 0, 1, 3, 7 ]

// or asynchronously
jsnx.genBidirectionalShortestPath(G, 2, 7).then(function(path) {
  // path = [ 2, 0, 1, 3, 7 ]
});