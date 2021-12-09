/**
 * 
 */
export interface INode<T> { data: T; next: INode<T>; }

/**
 * 
 */
export class Node<T> implements INode<T> {
    public data:T;
    public next:INode<T>;

    constructor(data:T){
        this.data = data;
        this.next = null as any;
    }
}

/**
 * 
 */
export class LinkedList<T> {

    public head: INode<T>;
    public tail: INode<T>;
    protected length:number;

    constructor(data:T){
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }

    public append(data:T) :LinkedList<T>{
        const newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    public prepend(data:T) :LinkedList<T> {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    public printList():Array<T> {
        const array:T[] = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return array;
    }

    public insert(index:number,data:T){
        if (index >= this.length) {
            this.append(data);
        }
        const newNode = new Node(data);
        const prevNode = this.traverse(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this.printList();
    }

    public remove(index:number){
        const prevNode = this.traverse(index -1);
        const currentNode = prevNode.next;
        prevNode.next = currentNode.next;
        this.length --;
        return this.printList();
    }

    private traverse(index: number) : INode<T> {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    }
}