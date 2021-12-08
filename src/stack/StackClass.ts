import { StackNode } from './StackNode';

export interface Stack<T> {
    size: number;
    top: StackNode<T>;
    bottom: StackNode<T>;
    push(value: T): number;
    pop():StackNode<T>;
    peek():StackNode<T>;
}

export class Stack<T> implements Stack<T> {

    constructor() {
        this.size = 0;
        this.top = null as any;
        this.bottom = null as any;
    }

    /**
     * Peek an element
     */
    peek = () => this.top;

    /**
     * Push and element in Stack
     * @param value 
     */
    public push(value:T) : number{
        const node = new StackNode(value);
        if (this.size === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const currentNode = this.top;
            this.top = node;
            this.top.next = currentNode;
        }
        this.size += 1;
        return this.size;
    }

    /**
     * Pop and Element
     * @returns StackNode<T>
     */
    public pop():StackNode<T> {
        if (this.size > 0) {
            const nodeToBeRemoved = this.top;
            this.top = nodeToBeRemoved.next;
            this.size -= 1;
            nodeToBeRemoved.next = null as any;
            return nodeToBeRemoved;
        }
        return null as any;
    }
}