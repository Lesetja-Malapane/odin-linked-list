class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.head = node;
    } else {
      let last = this.head;
      while (last.nextNode) {
        last = last.nextNode;
      }
      last.nextNode = node;
    }
    this.size++;
  }

  prepand(value) {
    const node = new Node(value);

    if (this.head == null) {
      this.head = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  at(index) {
    // return node at index
    let count = 0;

    let last = this.head;
    while (count <= index) {
      last = last.nextNode;
      count++;
    }
    return last;
  }

  pop() {
    // removes node at end
  }

  contains(value) {
    let last = this.head;
    while (last.nextNode) {
      if (last.value == value) {
        return true;
      }
      last = last.nextNode;
    }
    return false;
  }

  find(value) {
    // returns node with this value
    let index = 0;
    let last = this.head;
    while (last.nextNode) {
      if (last.value == value) {
        return index;
      }
      last = last.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    //  The format should be: ( value ) -> ( value ) -> ( value ) -> null

    let statement = ``;
    let last = this.head;
    // console.log(last.nextNode)
    while (last.nextNode) {
      statement += `( ${last.value} ) -> `;
      last = last.nextNode;
    }
    statement += "null";

    return statement;
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

export default LinkedList;
