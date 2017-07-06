var Queue = function() {
  var someInstance = {};

  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var itemToDequeue = storage[0];
    if (count > 0) {
      delete storage[0];
      for (var key in storage) {
        storage[key - 1] = storage[key];
      }
      delete storage[count - 1];
      count--;
    }
    return itemToDequeue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
