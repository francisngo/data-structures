var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  //default is false (not found);
  var result = false;
  // create a recursion function to search tree
  var searchTree = function(tree) {
    //if the current tree.value equals target
    if (tree.value === target) {
      //assign result to true
      result = true;
    //otherwise if tree.value isn't the target
    } else {
      //and if the there are children
      if (tree.children.length) {
        //iterate through the children tree
        tree.children.forEach(function(childTree) {
          //call searchTree on each child tree.
          searchTree(childTree);
        });
      }
    }
  };
  //invoke searchTree function on the tree object
  searchTree(this);
  //return the result
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
