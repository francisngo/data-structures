//Queue LinkedList
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    //if list is empty
    if (list.head === null) {
      //assign head to newNode
      list.head = newNode;
    }
    //if node exists
    if (list.tail) {
      //assign the last tail node to newNode
      list.tail.next = newNode;
    }
    //assign newNode to the tail
    list.tail = newNode;
  };

  list.removeHead = function() {
    //assign the former head to a variable
    var formerHead = list.head.value;
    //assign head to former head's next value (which is the next node)
    list.head = list.head.next;
    //return the former head
    return formerHead;
  };

  list.contains = function(target) {
    var node = list.head;
    //if list.head === null (if list is empty);
    if (!list.head) {
      return false;
    }
    //if the node value matches target
    if (node.value === target) {
      return true;
    }
    // while node.next is not null (not end of list);
    while (node.next !== null) {
      // if node.next.value === target
      if (node.next.value === target) {
        return true;
      }
      // keep moving node to next node
      node = node.next;
    }
    //return false if not found
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//list
// {
//   head : null,
//   tail : null
// }

// //linkedList.addToTail({value : 4, next : null});
// {
//   head : { value: 4, next: null },
//   { value: 5, next: null },
//   tail : { value: 4, next: null }
// }

// //linkedList.addToTail({value : 2, next : null});
// {
//   head ==> { value: 1, next:  } },
//   1 : { value: 1, next: 2 },
//   2 : { value: 2, next: null },
//   tail ==> { value: 2, next: null }
// }
