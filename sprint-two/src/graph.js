// Instantiate a new graph
var Graph = function() {
  //a list of nodes
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create a node object
  var newNode = {};
    //assign value to the given node
    newNode.value = node;
    //assign edges to an array
    newNode.edges = [];
  //add new node to nodes collection
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var prop in this.nodes) {
    if (prop = node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //1
  //access list edges inside the node to be deleted (fromNode) === node
  var nodeEdges = this.nodes[node].edges; //1 => edges []

  for (var i = 0; i < nodeEdges.length; i++) {
    this.removeEdge(node, nodeEdges[i]);
  }

  //for each edge in this list (toNode)
  // nodeEdges.forEach(function(edge) { //loop through 1's edges array [2, 3, 4]
  //   this.removeEdge(node, edge); //removeEdge(1, 2) //removeEdge(1, 3);
  //   //removeEdge(1, 4);
  // });
  //removeEdge(fromNode, toNode)
  //this.removeEdge(fromNode, toNode);

  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  //access the given fromNode's edges array
  var edges = this.nodes[fromNode].edges;
  //iterate through the edges array
  edges.forEach(function(edge) {
    //if current edge is the same as given toNode
      //return true;
    if (edge === toNode) {
      result = true;
    }
  });
  //return false;
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //access nodes collection
  //inside fromNode, access its edges array
  //push toNode
  this.nodes[fromNode].edges.push(toNode);

  //access nodes collection
  //inside toNode, access its edges array
  //push fromNode
  this.nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //fromNode = 1, toNode = 2

  //access the fromNode's edges array
  var indexToDelete = this.nodes[fromNode].edges.indexOf(toNode); //0
  //search for toNode and use splice to remove it from array
  this.nodes[fromNode].edges.splice(indexToDelete, 1);

  indexToDelete = this.nodes[toNode].edges.indexOf(fromNode);
  this.nodes[toNode].edges.splice(indexToDelete, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var prop in this.nodes) {
    cb(prop);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
