class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const number = new Node(value);
  }

  prepand(value) {
    const number = new Node(value);
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  at(index) {
    // return node at index
  }

  pop() {
    // removes node at end
  }

  contains(value) {
    // checks if value is present in this
  }

  find(value) {
    // returns node with this value
  }

  toString() {
    // prints this
    //  The format should be: ( value ) -> ( value ) -> ( value ) -> null
  }

  // Extras
  insertAt(value, index) {
    // insert node at a specified index
  }

  removeAt(index) {
    // removes node at a specified index
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export { LinkedList };
