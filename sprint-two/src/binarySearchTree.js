var BinarySearchTree = function(value) {
  var someInstance = Object.create(bstMethods);

  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;

  return someInstance;
};

var bstMethods = {};

//accept a value
bstMethods.insert = function(value) {
  //create a new node holding the given value
  var newNode = BinarySearchTree(value);

  //if the new node's given value < this.value
  if (value < this.value) {
    //if this.left === null
    if (this.left === null) {
      //assign the given value to the this.left
      this.left = newNode;
    //otherwise,
    } else {
      //this.left.insert(value)
      this.left.insert(value);
    }
  }

  //if the new node's given value > this.value
  if (value > this.value) {
    //if this.right === null
    if (this.right === null) {
      //assign the given value to the this.right
      this.right = newNode;
    //otherwise,
    } else {
      //this.right.insert(value)
      this.right.insert(value);
    }
  }
};

//accept a value => returns a boolean
bstMethods.contains = function(value) {
  var result = false;

  // if given value === this.value
    // assign result = true

  // if given value < this.value
    //access the left node of 8
    //(recursion) if left node of 8 has a value of 3
      //assign result = true

  // if given value > this.value
    // access the right node of this.value
    //(recursion) if right node of this.value === value
      //assign result = true

  if (value === this.value) {
    result = true;
  }

  if (value < this.value) {
    if (this.left !== null) {
      if (this.left.contains(value)) {
        result = true;
      }
    }
  }

  if (value > this.value) {
    if (this.right !== null) {
      if (this.right.contains(value)) {
        result = true;
      }
    }
  }

  return result;
};

//accept a callback => executes cb on every/all value in tree
bstMethods.depthFirstLog = function(cb) {
  //execute callback on this.value
  //if this.left is not null
    //recursion - execute callback on this.left
  //if this.right is not null
    //recursion - execute callback on this.right

  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
