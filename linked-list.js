/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if(this.head === null){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  // current head will be newNode we make
  // next will be head before
  // if head is null,
  // head and tail need to be set for newNode

  // if there is a head and a tail,
  // only head will matter to us

  // 1 [2,3] -> [1,2,3]

  unshift(val) {
    let newNode = new Node(val);

    if(this.head === null){
      this.head = newNode;
    } else {
      newNode.next = this.head
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  // [1,2,3] -> [1,2] 3

  pop() {
    if (this.length === 0) throw new Error();
    let curNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return curNode.val;
    }

    let prev;
    while (curNode.next !== null) {
      prev = curNode;
      curNode = curNode.next;
    }
    this.tail = prev;

    prev.next = null;
    this.length--;
    return curNode.val;
  }

  /** shift(): return & remove first item. */

  // [1,2,3] --> 1 [2, 3]

  shift() {
    if(this.length === 0){
      throw new Error();
    }

    let removedNode = this.head;

    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next;
    }

    this.length--;
    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */

  // [1, 2, 3] --> getAt(1) = 2

  getAt(idx) {
    if(idx >= this.length || idx < 0){
      throw new Error();
    }

    let curr = this.head;

    for(let i = 0; i < idx; i++){
      curr = curr.next;
    }

    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0){
      throw new Error();
    }

    let curr = this.head;

    for(let i = 0; i < idx; i++){
      curr = curr.next;
    }

    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
