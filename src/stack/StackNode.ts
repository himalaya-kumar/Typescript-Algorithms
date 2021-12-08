export interface StackNode<T> { data: T, next: StackNode<T> }

export class StackNode<T> implements StackNode<T> {
    constructor(data:T) {
        this.data = data;
        this.next = null as any;
    }
}