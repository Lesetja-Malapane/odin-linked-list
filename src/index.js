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

list.prepand("hello");

console.log(list.getSize());
console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
console.log(list.contains("jump"));
console.log(list.contains("cat"));

console.log(list.find("parrot"));

console.log(list.at(3));
