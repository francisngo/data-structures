var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //add item to storage object
  //set property of storage to item
  //set value of that property to item
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  //search storage for property that equals item
  //if the item is found, return true
  //otherwise return false
  var result = false;
  if (this._storage.hasOwnProperty(item)) {
    result = true;
  }
  return result;
};

setPrototype.remove = function(item) {
  //delete value at the [item] property
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
