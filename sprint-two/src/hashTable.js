var HashTable = function() {
  this._limit = 8;
  //an array with a limit. the limit is 8
  this._storage = LimitedArray(this._limit); //[]
};

HashTable.prototype.insert = function(k, v) {
  //hash function takes in the given key and limit
  //converts index to 32-bit integer
  var index = getIndexBelowMaxForKey(k, this._limit);

  // create a bucket array to store the key/value
  // if the key index already exists, go with that bucket, otherwise, start another bucket array
  var bucket = this._storage.get(index) || [];
  // push the new key value to the bucket array
  bucket.push([k, v]);
  //set the object's storage with the index assigned to the bucket
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  //hash function that converts key into index number
  var index = getIndexBelowMaxForKey(k, this._limit);

  //find the index in the storage
  var bucket = this._storage.get(index);

  // if there is not bucket match return null
  if (!bucket) {
    return null;
  }

  // iterate through each tuple in the bucket
    //if tuple's key matches given key
      //return the tuple's value
    //otherwise return null;

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};


var hash = new HashTable();
hash.insert('Steven', 'Seagal');
console.log(hash.retrieve('Steven'));


/*
 * Complexity: What is the time complexity of the above functions?
 */
