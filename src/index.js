import "./style.css";
import LinkedList from "./linkedList";

console.log("Hello, world");

// Using the Linked list

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
