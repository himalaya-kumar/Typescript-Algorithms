import { QueueNode } from "./QueueNode";

export interface Queue<T> {
    size:number;
    first:QueueNode<T>;
    last:QueueNode<T>;
    peek():QueueNode<T>;
    enqueue(value:T):QueueNode<T>;
    dequeue():QueueNode<T>;
    isEmpty():boolean;
}

export class Queue<T> implements Queue<T>{

    constructor(){
        this.first = null as any;
        this.last = null as any;
        this.size = 0;
    }

    public peek():QueueNode<T> {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.first;
    }

    isEmpty = () => this.size === 0;

    public enqueue(data:T){
        const node = new QueueNode(data);
        if (this.isEmpty()) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size+=1;
        return this.first;
    }

    public dequeue():QueueNode<T> {
        if (this.size > 1) {
            const nodeToBeRemoved = this.first;
            this.first = this.first.next;
            this.size--;
            nodeToBeRemoved.next = null as any;
            return nodeToBeRemoved;
        }
        return null as any;
    }
}