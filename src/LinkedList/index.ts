// Use of Linked list

import { LinkedList } from "./linkedList";

let linkedList = new LinkedList("first");

linkedList.add("second");
linkedList.add("fourth");
linkedList.add("third");
linkedList.add("eight");
linkedList.add("ten");

linkedList.addAt(3,"third");

//find element at location
console.log(linkedList.elementAt(-1));

//Head
linkedList.getHead();


