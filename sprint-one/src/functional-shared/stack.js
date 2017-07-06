var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  var storage = {};

  var size = 0;

  // someInstance.push = push;
  // someInstance.pop = pop;
  // someInstance.size = size;
  extend(someInstance, Stack.stackMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

Stack.stackMethods = {};

//push
Stack.stackMethods.push = function(value) {
  //do something
  this.size++;
};

//pop
Stack.stackMethods.pop = function() {
  //pop item
};

//size
Stack.stackMethods.size = function() {
  //return size
  return 0;
};
