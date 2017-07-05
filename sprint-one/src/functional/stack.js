//First In Last Out
var Stack = function() {
  var someInstance = {};

  var size = 0; //-1

  // Use an object with numeric keys to store values
  var storage = {}; //length = 0

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
  };

  someInstance.pop = function() {
    //if there is item left in storage
    //pop/remove the last item
    //decrement size
    if (size > 0) {
      size--;
    }


    //otherwise do nothing
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


/*
Object.keys(someInstance) // [].length
if (someInstance.length <= size) {
  size = 0;
}
*/

/*



*/

//push
//push
//pop

//pop
