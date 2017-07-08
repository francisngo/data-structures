var HashTable = function() {
  this._limit = 8;
  // an array with a limit. the limit is 8
  this._storage = LimitedArray(this._limit); //[]
};

HashTable.prototype.insert = function(k, v) {
  // hash function takes in the given key and limit
  // converts index to 32-bit integer

  // create a bucket array to store the key/value
  // if the key index already exists, go with that bucket, otherwise, start another bucket array
  // push the new key value to the bucket array
  // set the object's storage with the index assigned to the bucket

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  // hash function that converts key into index number
  // find the index in the storage
  // if there is not bucket match return null
  // iterate through each tuple in the bucket
    //if tuple's key matches given key
      //return the tuple's value
    //otherwise return null;

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
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
