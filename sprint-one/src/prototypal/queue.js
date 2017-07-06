var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  return this.count++;
};

queueMethods.dequeue = function() {
  var itemToRemove = this.storage[0];
  if (this.count > 0) {
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[this.count - 1];
    this.count--;
  }
  return itemToRemove;
};

queueMethods.size = function() {
  return this.count;
};
