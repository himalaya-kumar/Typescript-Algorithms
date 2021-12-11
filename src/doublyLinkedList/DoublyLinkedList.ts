import { Node } from "../linkedlist/LinkedList";
import { DoublyNodeList, INode } from "./DoublyNodeList";

export class DoublyLinkedList<T> {
    public head: INode<T>;
    public tail: INode<T>;
    protected length: number;

    constructor(data: T) {
        this.head = new DoublyNodeList(data);
        this.tail = this.head;
        this.length = 1;
    }

    public append(data: T): DoublyLinkedList<T> {
        const newNode = new DoublyNodeList(data);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    public prepend(data: T): DoublyLinkedList<T> {
        const newNode = new DoublyNodeList(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    public printList(): Array<T> {
        const array: T[] = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return array;
    }

    public insert(index: number, data: T) {
        if (index >= this.length) {
            return this.append(data);
        }
        const newNode = new DoublyNodeList(data);
        const prevNode = this.traverse(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return this.printList();
    }

    public remove(index: number) {
        const prevNode = this.traverse(index - 1);
        const currentNode = prevNode.next;
        prevNode.next = currentNode.next;
        this.length--;
        return this.printList();
    }

    private traverse(index: number): INode<T> {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}