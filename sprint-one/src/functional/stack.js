var Stack = function() {
  var someInstance = {};

  var size = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    var itemToBePopped = storage[size - 1];
    if (size > 0) {
      delete storage[size - 1];
      size--;

    }
    return itemToBePopped;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
