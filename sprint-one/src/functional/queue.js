var Queue = function() {
  var someInstance = {};

  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


//queue - First in First out Data Structure
//push - add element to object
//pop - remove first element from object
