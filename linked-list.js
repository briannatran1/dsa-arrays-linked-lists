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
      // this.tail = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
      // this.tail = newNode;
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

  unshift(val) {
    let newNode = new Node(val);

    if(this.head === null){
      this.head = newNode;
    } else {
      newNode.next = this.head
    }

    if (this.length === 0) this.tail = this.head;

    this.length++;
  }

  /** pop(): return & remove last item. */

  //

  pop() {
    if (this.head === null){
      throw new Error();
    }

    if (this.length === 1) {
      let nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      return nodeToRemove.val;
    }

    let cur = this.head;

    while (cur.next.next !== null) {
      cur = cur.next;
      this.tail = cur;
      console.log("!!!TAIL", this.tail);
    }

    // this.tail = cur;
    let nodeToRemove = cur.next;
    this.tail.next = null;
    this.length--;
    console.log("!!!", nodeToRemove, "Tail", this.tail, "Head", this.head);
    return nodeToRemove.val;
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

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
